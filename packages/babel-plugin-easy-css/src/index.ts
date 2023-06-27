import * as t from "@babel/types"
import { css, easyStore } from "@iandx/easy-css"

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

function toHyphenatedCase(str: string) {
  return trimUnderline(str)
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-$/, "")
    .replace(/--+/, "-")
    .toLowerCase()
}

interface EasyCssOption {
  utilities?: Array<{
    easyFuncMap: Record<string, ((...args: any) => string)>
    safeName?: string
  }>
  easyCssAlias?: string
}

export default function(api: any, { utilities, easyCssAlias = "@iandx/easy-css" }: EasyCssOption) {
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
        const node = path.node as t.ImportDeclaration
        const allImports = node.specifiers
          .filter(n => t.isImportSpecifier(n) && t.isIdentifier(n.imported))
          .map((n: any) => n.imported.name)
        if (!allImports.includes("css")) return
        if (node.source.value !== easyCssAlias) return
        this.easyCss = true
      },
      TaggedTemplateExpression(path: any, state: any) {
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
        const getEasyName = (name: string) => {
          name = toHyphenatedCase(name)
          // ---- only pre-parse for non-function and static string
          if (!params && node.quasi.quasis.length === 1) {
            const cssString = node.quasi.quasis[0].value.raw
            const oldEasyStore = getOldEasyStore()
            const styleName = css.collect(cssString, name)
            renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
            return { parsed: true, node: t.stringLiteral(styleName) }
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
        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier("css"),
              t.identifier("collect")
            ), [node.quasi, t.identifier("undefined"), pathNode]
          )
        )
        path.skip()
      },
      CallExpression(path: any, state: any) {
        if (!utilities) return
        const node = path.node
        if (safeNames.length === 0 && t.isMemberExpression(node.callee)) return
        if (safeNames.length !== 0 && !(
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.object) &&
          safeNames.includes(node.callee.object.name)
        )) return
        for (const argument of node.arguments) {
          if (!t.isStringLiteral(argument)) return
        }
        const utilityName = safeNames.length === 0 ? node.callee.name : node.callee.property.name
        const args = node.arguments.map((arg: t.StringLiteral) => arg.value)
        for (const { easyFuncMap, safeName } of utilities) {
          if (safeName && node.callee.object.name !== safeName) continue
          const utility = easyFuncMap[utilityName]
          if (!utility) continue
          const oldEasyStore = getOldEasyStore()
          const styleName = utility(...args)
          renewCurrEasyStore(hmrStore[state.filename], oldEasyStore)
          path.replaceWith(t.stringLiteral(styleName))
          path.skip()
          return
        }
      }
    }
  }
}
