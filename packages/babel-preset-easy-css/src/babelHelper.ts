
import * as t from "@babel/types"
import { getRelativePath } from "./utils"

export function objectExpressionNodeToObject(node: t.ObjectExpression) {
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

export function isStyleX(node: t.Node) {
  return (
    t.isMemberExpression(node) &&
    t.isIdentifier(node.object) &&
    node.object.name === "styled"
  ) || (
    t.isCallExpression(node) &&
    t.isIdentifier(node.callee) &&
    node.callee.name === "styled"
  )
}

export function replaceCss(path: any, node0: t.Node, callee: any, parentNode: any, fileName: string, isDev: boolean, getEasyName: any, isNodeStyleX = false) {
  const pathNode = isDev ? t.stringLiteral(getRelativePath(fileName)) : t.identifier("undefined")

  const getReplaceNode = (easy: any, node1: any) => {
    const noneParsedNodes = [node0, node1, pathNode]
    return (
      isNodeStyleX
        ? t.callExpression(
          callee,
          easy.parsed
            ? [easy.node]
            : noneParsedNodes
        )
        : easy.parsed
          ? easy.node
          : t.callExpression(
            callee,
            noneParsedNodes
          )
    )
  }

  if (t.isVariableDeclarator(parentNode)) {
    if (!t.isIdentifier(parentNode.id)) return
    const easy = getEasyName(parentNode.id.name)
    path.replaceWith(getReplaceNode(easy, easy.node))
    path.skip()
    return
  }
  if (t.isClassProperty(parentNode)) {
    if (!t.isIdentifier(parentNode.key)) return
    const easy = getEasyName(parentNode.key.name)
    path.replaceWith(getReplaceNode(easy, easy.node))
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
    const node1 = parentNode.computed
      ? parentNode.key
      : easy.node
    path.replaceWith(getReplaceNode(easy, node1))
    path.skip()
    return
  }
  const easy = getEasyName()
  path.replaceWith(getReplaceNode(easy, easy.node))
  path.skip()
}
