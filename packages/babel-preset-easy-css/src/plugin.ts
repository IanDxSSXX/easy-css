import * as t from "@babel/types"
import { css, easyStore } from "@iandx/easy-css"
import { minimatch } from "minimatch"
import { type EasyStore, diffEasyStore, abandonEasyStore } from "./easyStoreHelper"
import { getRelativePath, toHyphenatedCase } from "./utils"
import { type EasyCssOption } from "./types"
import { isStyleX, objectExpressionNodeToObject, replaceCss } from "./babelHelper"

export default function(api: any, options: EasyCssOption = {}) {
  const id = Math.random().toString(32).slice(2, 8)

  const {
    utilities,
    easyCssAlias = "@iandx/easy-css",
    files: preFiles = "**/*.{js,jsx,ts,tsx}",
    excludeFiles: preExcludeFiles = "**/{dist,node_modules,lib}/*.{js,ts}"
  } = options
  const files = Array.isArray(preFiles) ? preFiles : [preFiles]
  const excludeFiles = Array.isArray(preExcludeFiles) ? preExcludeFiles : [preExcludeFiles]
  const safeNames = utilities?.map(u => u.safeName).filter(Boolean) ?? []
  const isDev = process.env.NODE_ENV !== "production"

  const renewCurrEasyStore = (currentEasyStore: EasyStore, oldEasyStore: EasyStore) => {
    const diffStore = diffEasyStore(oldEasyStore)
    const { styleList, conflictNameStore, nameHashStore, styleHashStore } = diffStore
    currentEasyStore.styleList.push(...styleList)
    currentEasyStore.conflictNameStore = { ...currentEasyStore.conflictNameStore, ...conflictNameStore }
    currentEasyStore.nameHashStore = { ...currentEasyStore.nameHashStore, ...nameHashStore }
    currentEasyStore.styleHashStore = { ...currentEasyStore.styleHashStore, ...styleHashStore }
  }

  const getOldEasyStore: () => EasyStore = () => ({
    styleList: [...easyStore.styleList],
    conflictNameStore: { ...easyStore.conflictNameStore },
    nameHashStore: { ...easyStore.nameHashStore },
    styleHashStore: { ...easyStore.styleHashStore }
  })

  const hmrStore: Record<string, EasyStore> = {}

  return {
    visitor: {
      Program: {
        enter(path: any, state: any) {
          for (const allowedPath of files) {
            if (minimatch(state.filename, allowedPath)) {
              this.enter = true
              break
            }
          }
          for (const notAllowedPath of excludeFiles) {
            if (minimatch(state.filename, notAllowedPath)) {
              this.enter = false
              break
            }
          }
          if (!this.enter) return
          if (hmrStore[state.filename]) {
            abandonEasyStore(hmrStore[state.filename])
          }
          hmrStore[state.filename] = {
            styleList: [],
            conflictNameStore: {},
            nameHashStore: {},
            styleHashStore: {}
          }

          const importNode = t.importDeclaration(
            [
              t.importSpecifier(t.identifier(`toHyphenatedCase_${id}`), t.identifier("toHyphenatedCase"))
            ],
            t.stringLiteral(easyCssAlias)
          )
          path.node.body.unshift(importNode)
        },
        exit(path: any, state: any) {
          if (!this.enter) return
          // won't have any runtime and build time conflict because imports in es6 is hoisted
          // and all the pre-parsed code will be executed first!
          const currentEasyStore = hmrStore[state.filename]
          if (currentEasyStore.styleList.length === 0 &&
            Object.keys(currentEasyStore.conflictNameStore).length === 0 &&
            Object.keys(currentEasyStore.nameHashStore).length === 0 &&
            Object.keys(currentEasyStore.styleHashStore).length === 0
          ) return

          const injectBodyNode = t.blockStatement([
            t.expressionStatement(
              t.callExpression(t.identifier(`preParseEasyStore_${id}`), [
                t.objectExpression([
                  t.objectProperty(t.identifier("styleList"), t.arrayExpression(
                    currentEasyStore.styleList.map((str: string) => t.stringLiteral(str))
                  )),
                  t.objectProperty(t.identifier("conflictNameStore"), t.objectExpression(
                    Object.entries(currentEasyStore.conflictNameStore).map(([key, value]: any) => t.objectProperty(
                      t.stringLiteral(key),
                      t.numericLiteral(value)
                    ))
                  )),
                  t.objectProperty(t.identifier("nameHashStore"), t.objectExpression(
                    Object.entries(currentEasyStore.nameHashStore).map(([key, value]: any) => t.objectProperty(
                      t.stringLiteral(key),
                      t.stringLiteral(value)
                    ))
                  )),
                  t.objectProperty(t.identifier("styleHashStore"), t.objectExpression(
                    Object.entries(currentEasyStore.styleHashStore).map(([key, value]: any) => t.objectProperty(
                      t.stringLiteral(key),
                      t.booleanLiteral(value)
                    ))
                  ))
                ]),
                isDev ? t.stringLiteral(getRelativePath(state.filename)) : t.identifier("undefined")
              ])
            )
          ])
          const injectNode = t.expressionStatement(
            t.callExpression(
              t.arrowFunctionExpression([], injectBodyNode),
              []
            )
          )
          const importNode = t.importDeclaration(
            [
              t.importSpecifier(t.identifier(`preParseEasyStore_${id}`), t.identifier("preParseEasyStore"))
            ],
            t.stringLiteral(easyCssAlias)
          )
          path.node.body.unshift(injectNode)
          path.node.body.unshift(importNode)
        }
      },
      ImportDeclaration(path: any) {
        if (!this.enter) return
        const node = path.node as t.ImportDeclaration
        const allImports = node.specifiers
          .filter(n => t.isImportSpecifier(n) && t.isIdentifier(n.imported))
          .map((n: any) => n.imported.name)
        if (!allImports.includes("css")) return
        if (node.source.value !== easyCssAlias) return
        this.easyCss = true
      },
      TaggedTemplateExpression(path: any, state: any) {
        if (!this.enter) return
        const node = path.node as t.TaggedTemplateExpression
        const isNodeStyleX = isStyleX(node.tag)
        if (!isNodeStyleX && !this.easyCss) return
        // ---- styled.xxx
        if (!isNodeStyleX && (!t.isIdentifier(node.tag) || node.tag.name !== "css")) return
        let parentPath = path.parentPath
        let parentNode = parentPath.node
        let params: t.Identifier[] | undefined
        if (t.isArrowFunctionExpression(parentNode)) {
          params = parentNode.params as any
          parentPath = parentPath.parentPath
          parentNode = parentPath.node
        }

        const getEasyName = (name?: string) => {
          name = name && !isNodeStyleX ? toHyphenatedCase(name) : undefined
          if (!params && node.quasi.quasis.length === 1) {
            const cssString = node.quasi.quasis[0].value.raw
            const oldEasyStore = getOldEasyStore()
            const styleName = css.collect(cssString, name)
            renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
            return { parsed: true, node: t.stringLiteral(styleName) }
          }
          if (!name) {
            return { parsed: false, node: t.identifier("undefined") }
          }
          if (!params || params.length === 0) {
            return { parsed: false, node: t.stringLiteral(name) }
          }
          return {
            parsed: false,
            node: t.templateLiteral(
              [
                t.templateElement({ raw: `${name.endsWith("$") ? name.slice(0, -1) : name}-` }),
                ...params.slice(0, -1).map(_ => t.templateElement({ raw: "-" })),
                t.templateElement({ raw: name.endsWith("$") ? "$" : "" })
              ],
              params.map(n => t.callExpression(
                t.identifier(`toHyphenatedCase_${id}`),
                [n]
              ))
            )
          }
        }
        if (isNodeStyleX) {
          replaceCss(path, node.quasi, node.tag, parentNode, state.filename, isDev, getEasyName, true)
          return
        }

        replaceCss(path, node.quasi, t.memberExpression(
          t.identifier("css"),
          t.identifier("collect")
        ), parentNode, state.filename, isDev, getEasyName)
      },
      CallExpression(path: any, state: any) {
        if (!this.enter) return
        const node = path.node as t.CallExpression
        const isNodeStyleX = isStyleX(node.callee)
        if (
          (this.easyCss && t.isIdentifier(node.callee) && node.callee.name === "css") ||
          isNodeStyleX
        ) {
          let parentPath = path.parentPath
          let parentNode = parentPath.node
          let params: t.Identifier[] | undefined
          if (t.isArrowFunctionExpression(parentNode)) {
            params = parentNode.params as any
            parentPath = parentPath.parentPath
            parentNode = parentPath.node
          }

          const getEasyName = (name?: string) => {
            name = name && !isNodeStyleX ? toHyphenatedCase(name) : undefined
            let allConstant = t.isObjectExpression(node.arguments[0])
            if (allConstant) {
              path.scope.traverse(node.arguments[0], {
                ObjectProperty(path: any) {
                  if (path.node.computed) {
                    allConstant = false
                    return
                  }
                  const value = path.node.value
                  if (!(
                    t.isStringLiteral(value) ||
                    (t.isTemplateLiteral(value) && value.quasis.length === 1) ||
                    t.isNumericLiteral(value) ||
                    t.isBooleanLiteral(value) ||
                    t.isObjectExpression(value)
                  )) {
                    allConstant = false
                  }
                }
              })
            }
            if (!params && allConstant) {
              // --eg const a = css`color: red;`
              const styleObj = objectExpressionNodeToObject(node.arguments[0] as any)
              const oldEasyStore = getOldEasyStore()
              const styleName = css.collect(styleObj as any, name)
              renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
              return { parsed: true, node: t.stringLiteral(styleName) }
            }
            if (!name) {
              // --eg console.log(css`color: blue;`)
              return { parsed: false, node: t.identifier("undefined") }
            }
            if (!params || params.length === 0) {
              // --eg const b = () => css`color: blue;`
              // --or const c = css`color${ok}`
              return { parsed: false, node: t.stringLiteral(name) }
            }
            // --eg const d = ok => css`color${ok}`
            return {
              parsed: false,
              node: t.templateLiteral(
                [
                  t.templateElement({ raw: `${name.endsWith("$") ? name.slice(0, -1) : name}-` }),
                  ...params.slice(0, -1).map(_ => t.templateElement({ raw: "-" })),
                  t.templateElement({ raw: name.endsWith("$") ? "$" : "" })
                ],
                params.map(n => t.callExpression(
                  t.identifier(`toHyphenatedCase_${id}`),
                  [n]
                ))
              )
            }
          }
          if (isNodeStyleX) {
            replaceCss(path, node.arguments[0], node.callee, parentNode, state.filename, isDev, getEasyName, true)
            return
          }
          replaceCss(path, node.arguments[0], t.memberExpression(
            t.identifier("css"),
            t.identifier("collect")
          ), parentNode, state.filename, isDev, getEasyName)
          return
        }

        // ---- utilities
        if (!utilities) return
        if (safeNames.length === 0 && t.isMemberExpression(node.callee)) return
        if (safeNames.length !== 0 && !(
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.object) &&
          safeNames.includes(node.callee.object.name)
        )) return
        const args: Array<string | boolean | number> = []
        for (const argument of node.arguments) {
          if (t.isStringLiteral(argument)) {
            // margin("20px")
            args.push(argument.value)
            continue
          }
          if (t.isTemplateLiteral(argument) && argument.quasis.length === 1) {
            // margin(`20px`)
            args.push(argument.quasis[0].value.raw)
            continue
          }
          if (t.isNumericLiteral(argument)) {
            // margin(20)
            args.push(argument.value)
            continue
          }
          if (t.isBooleanLiteral(argument)) {
            args.push(argument.value)
            continue
          }
          return
        }
        const utilityName = safeNames.length === 0 ? (node.callee as any).name : (node.callee as any).property.name
        for (const { easyFuncMap, safeName } of utilities) {
          if (safeName && (node.callee as any).object.name !== safeName) continue
          const utilFunc = easyFuncMap[utilityName]
          if (!utilFunc) continue
          const oldEasyStore = getOldEasyStore()
          const styleName = utilFunc(...args)
          renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
          path.replaceWith(t.stringLiteral(styleName))
          path.skip()
          return
        }
      }
    }
  }
}
