import * as t from "@babel/types"
import { css, easyStore } from "@iandx/easy-css"
import { minimatch } from "minimatch"

type EasyStore = typeof easyStore

function abandonEasyStore(oldEasyStore: EasyStore) {
  easyStore.styleList = easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s))
  easyStore.conflictNameStore = Object.fromEntries(
    Object.entries(easyStore.conflictNameStore).filter(([key]) => (
      !Object.keys(oldEasyStore.conflictNameStore).includes(key))
    )
  )
  easyStore.nameHashStore = Object.fromEntries(
    Object.entries(easyStore.nameHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.nameHashStore).includes(key))
    )
  )
  easyStore.styleHashStore = Object.fromEntries(
    Object.entries(easyStore.styleHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.styleHashStore).includes(key))
    )
  )
}

function diffEasyStore(oldEasyStore: EasyStore): EasyStore {
  return {
    styleList: easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s)),
    conflictNameStore: Object.fromEntries(
      Object.entries(easyStore.conflictNameStore).filter(([key]) => (
        oldEasyStore.conflictNameStore[key] === undefined
      ))
    ),
    nameHashStore: Object.fromEntries(
      Object.entries(easyStore.nameHashStore).filter(([key]) => (
        oldEasyStore.nameHashStore[key] === undefined
      ))
    ),
    styleHashStore: Object.fromEntries(
      Object.entries(easyStore.styleHashStore).filter(([key]) => (
        oldEasyStore.styleHashStore[key] === undefined
      ))
    )
  }
}

function getRelativePath(targetFile: string) {
  const currentFolder = process.cwd()
  const currentFolderArr = currentFolder.split("/")
  const targetFileArr = targetFile.split("/")
  let i = 0
  while (currentFolderArr[i] === targetFileArr[i]) {
    i++
  }
  let relativePath = ""
  for (let j = i; j < currentFolderArr.length - 1; j++) {
    relativePath += "../"
  }
  for (let j = i; j < targetFileArr.length; j++) {
    relativePath += targetFileArr[j] + "/"
  }
  relativePath = relativePath.slice(0, -1)

  return relativePath
}

function trimUnderline(str: string) {
  return str.replace(/^_+|_+$/g, "")
}

function objectExpressionNodeToObject(node: t.ObjectExpression) {
  const object: Record<string, string | number | boolean | object> = {}
  for (const property of node.properties) {
    if (!t.isObjectProperty(property)) return
    const { key: keyNode, value: valueNode } = property
    let key: string | undefined
    if (t.isIdentifier(keyNode)) {
      key = keyNode.name
    } else if (t.isStringLiteral(keyNode)) {
      key = keyNode.value
    } else {
      return
    }
    let value: string | number | boolean | object | undefined
    if (t.isStringLiteral(valueNode)) {
      value = valueNode.value
    } else if (t.isTemplateLiteral(valueNode) && valueNode.quasis.length === 1) {
      value = valueNode.quasis[0].value.raw
    } else if (t.isNumericLiteral(valueNode)) {
      value = valueNode.value
    } else if (t.isBooleanLiteral(valueNode)) {
      value = valueNode.value
    } else if (t.isObjectExpression(valueNode)) {
      value = objectExpressionNodeToObject(valueNode)
      if (!value) return
    } else {
      return
    }
    object[key] = value
  }

  return object
}

function toHyphenatedCase(str: string) {
  return trimUnderline(str)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-$/, "")
    .replace(/--+/, "-")
    .toLowerCase()
}

export interface EasyCssOption {
  /**
   * Files that will be included
   * @default ** /*.{js,jsx,ts,tsx}
   */
  files?: string | string[]
  /**
   * Files that will be excludes
   * @default ** /{dist,node_modules,lib}/*.{js,ts}
   */
  excludeFiles?: string | string[]
  /**
   * # Pre-parse utilities
   * ---
   * ## e.g.0
   * in config
   * ```js
   * const utilities = [{
   *  easyFuncMap: {
   *    margin: value => css`margin: ${value}px`
   *  }
   * }]
   * ```
   * in code
   * ```js
   * const hi = margin(20)
   * // will be pre-parsed as
   * const hi = "margin-20"
   *```
   * ---
   * ## e.g.1
   * using safeName in config
   * ```js
   * const utilities = [{
   *  easyFuncMap: {
   *    margin: value => css`margin: ${value}px`
   *  },
   *  safeName: "Style"
   * }]
   * ```
   * in code
   * ```js
   * const hi = margin(20)
   * // won't be pre-parsed because of the safe name
   * const hello = Style.margin(20)
   * // will be pre-parsed
   * const hello = "margin-20"
   * ```
   * ---
   * # Off-the-shelf pre-parsing
   * We offer two off-the-shelf packages:
   * * \@iandx/easy-css-atomic
   *   * contains all style like margin, display, ...
   * * \@iandx/easy-css-utility
   *   * provide some handy utilities like textRed500, absolute, ...
   *
   * in config
   * ```js
   * import atomic from "@iandx/easy-css-atomic"
   * import atomic from "@iandx/easy-css-utility"
   * const utilities = [{
   *  easyFuncMap: atomic,
   *  safeName: "anyNameYouWantOrNone"
   * }, {
   *  easyFuncMap: utility
   * }]
   * ```
   */
  utilities?: Array<{
    easyFuncMap: Record<string, ((...args: any) => string)>
    safeName?: string
  }>
  /**
   * Import module name
   * @default @iandx/easy-css
   */
  easyCssAlias?: string
}

export default function(api: any, options: EasyCssOption = {}) {
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

          const id = Math.random().toString(32).slice(2, 8)
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
        if (!this.easyCss) return
        const node = path.node as t.TaggedTemplateExpression
        if (!t.isIdentifier(node.tag) || node.tag.name !== "css") return
        let parentPath = path.parentPath
        let parentNode = parentPath.node
        let params: t.Identifier[] | undefined
        if (t.isArrowFunctionExpression(parentNode)) {
          params = parentNode.params as any
          parentPath = parentPath.parentPath
          parentNode = parentPath.node
        }
        const getEasyName = (name?: string) => {
          name = name ? toHyphenatedCase(name) : undefined
          if (!params && node.quasi.quasis.length === 1) {
            // --eg const a = css`color: red;`
            const cssString = node.quasi.quasis[0].value.raw
            const oldEasyStore = getOldEasyStore()
            const styleName = css.collect(cssString, name)
            renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
            return { parsed: true, node: t.stringLiteral(styleName) }
          }
          if (!name) {
            // --eg console.log(css`color: blue;`)
            return { parsed: false, node: t.identifier("undefined") }
          }
          if (!params || params.length === 0) {
            // --eg const b = () => css`color: blue;`
            // --or const c = css`color${ok}
            return { parsed: false, node: t.stringLiteral(name) }
          }
          // --eg const d = css`color${ok}
          return {
            parsed: false,
            node: t.templateLiteral(
              [
                t.templateElement({ raw: `${name.endsWith("$") ? name.slice(0, -1) : name}-` }),
                ...params.slice(0, -1).map(_ => t.templateElement({ raw: "-" })),
                t.templateElement({ raw: name.endsWith("$") ? "$" : "" })
              ],
              params
            )
          }
        }
        const pathNode = isDev ? t.stringLiteral(getRelativePath(state.filename)) : t.identifier("undefined")
        if (t.isVariableDeclarator(parentNode)) {
          if (!t.isIdentifier(parentNode.id)) return
          const easy = getEasyName(parentNode.id.name)
          path.replaceWith(
            easy.parsed
              ? easy.node
              : t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ),
                [node.quasi, easy.node, pathNode]
              )
          )
          path.skip()
          return
        }
        if (t.isClassProperty(parentNode)) {
          if (!t.isIdentifier(parentNode.key)) return
          const easy = getEasyName(parentNode.key.name)
          path.replaceWith(
            easy.parsed
              ? easy.node
              : t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ),
                [node.quasi, easy.node, pathNode]
              )
          )
          path.skip()
          return
        }
        if (t.isObjectProperty(parentNode)) {
          if (t.isPrivateName(parentNode.key)) return
          const easy = getEasyName(
            t.isIdentifier(parentNode.key)
              ? parentNode.key.name
              : (parentNode.key as any).value
          )

          path.replaceWith(
            easy.parsed
              ? easy.node
              : t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ),
                [
                  node.quasi,
                  parentNode.computed
                    ? parentNode.key
                    : easy.node,
                  pathNode
                ]
              )
          )
          path.skip()
          return
        }
        const easy = getEasyName()
        path.replaceWith(
          easy.parsed
            ? easy.node
            : t.callExpression(
              t.memberExpression(
                t.identifier("css"),
                t.identifier("collect")
              ), [node.quasi, easy.node, pathNode]
            )
        )
        path.skip()
      },
      CallExpression(path: any, state: any) {
        if (!this.enter) return
        const node = path.node as t.CallExpression
        if (this.easyCss) {
          // style
          if (!(t.isIdentifier(node.callee) && node.callee.name === "css")) return
          let parentPath = path.parentPath
          let parentNode = parentPath.node
          let params: t.Identifier[] | undefined
          if (t.isArrowFunctionExpression(parentNode)) {
            params = parentNode.params as any
            parentPath = parentPath.parentPath
            parentNode = parentPath.node
          }
          const getEasyName = (name?: string) => {
            name = name ? toHyphenatedCase(name) : undefined
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
              // --or const c = css`color${ok}
              return { parsed: false, node: t.stringLiteral(name) }
            }
            // --eg const d = css`color${ok}
            return {
              parsed: false,
              node: t.templateLiteral(
                [
                  t.templateElement({ raw: `${name.endsWith("$") ? name.slice(0, -1) : name}-` }),
                  ...params.slice(0, -1).map(_ => t.templateElement({ raw: "-" })),
                  t.templateElement({ raw: name.endsWith("$") ? "$" : "" })
                ],
                params
              )
            }
          }
          const pathNode = isDev ? t.stringLiteral(getRelativePath(state.filename)) : t.identifier("undefined")
          if (t.isVariableDeclarator(parentNode)) {
            if (!t.isIdentifier(parentNode.id)) return
            const easy = getEasyName(parentNode.id.name)
            path.replaceWith(
              easy.parsed
                ? easy.node
                : t.callExpression(
                  t.memberExpression(
                    t.identifier("css"),
                    t.identifier("collect")
                  ),
                  [node.arguments[0], easy.node, pathNode]
                )
            )
            path.skip()
            return
          }
          if (t.isClassProperty(parentNode)) {
            if (!t.isIdentifier(parentNode.key)) return
            const easy = getEasyName(parentNode.key.name)
            path.replaceWith(
              easy.parsed
                ? easy.node
                : t.callExpression(
                  t.memberExpression(
                    t.identifier("css"),
                    t.identifier("collect")
                  ),
                  [node.arguments[0], easy.node, pathNode]
                )
            )
            path.skip()
            return
          }
          if (t.isObjectProperty(parentNode)) {
            if (t.isPrivateName(parentNode.key)) return
            const easy = getEasyName(
              t.isIdentifier(parentNode.key)
                ? parentNode.key.name
                : (parentNode.key as any).value
            )

            path.replaceWith(
              easy.parsed
                ? easy.node
                : t.callExpression(
                  t.memberExpression(
                    t.identifier("css"),
                    t.identifier("collect")
                  ),
                  [
                    node.arguments[0],
                    parentNode.computed
                      ? parentNode.key
                      : easy.node,
                    pathNode
                  ]
                )
            )
            path.skip()
            return
          }
          const easy = getEasyName()
          path.replaceWith(
            easy.parsed
              ? easy.node
              : t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ), [node.arguments[0], easy.node, pathNode]
              )
          )
          path.skip()
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
