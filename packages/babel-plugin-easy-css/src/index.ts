import * as t from "@babel/types"

function toHyphenatedCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

export default function() {
  return {
    pre() {
      this.easyCss = false
    },
    visitor: {
      ImportDeclaration(path: any) {
        const node = path.node as t.ImportDeclaration
        const firstSpecifier = node.specifiers[0]?.local
        if (!t.isIdentifier(firstSpecifier) || firstSpecifier.name !== "css") return
        if (node.source.value !== "@iandx/easy-css") return
        this.easyCss = true
      },
      TaggedTemplateExpression(path: any) {
        if (!this.easyCss) return
        const node = path.node as t.TaggedTemplateExpression
        if (!t.isIdentifier(node.tag) || node.tag.name !== "css") return
        const parentPath = path.parentPath
        const parentNode = parentPath.node
        if (t.isVariableDeclarator(parentNode)) {
          if (!t.isIdentifier(parentNode.id) || !t.isTaggedTemplateExpression(parentNode.init)) return
          parentPath.replaceWith(
            t.variableDeclarator(
              parentNode.id,
              t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ),
                [
                  parentNode.init,
                  t.stringLiteral(toHyphenatedCase(parentNode.id.name))
                ]
              )
            )
          )
          parentPath.skip()
          return
        }
        if (t.isObjectProperty(parentNode)) {
          if ((!t.isIdentifier(parentNode.key) && !t.isStringLiteral(parentNode.key)) || !t.isTaggedTemplateExpression(parentNode.value)) return
          const name = toHyphenatedCase(t.isIdentifier(parentNode.key) ? parentNode.key.name : parentNode.key.value)
          parentPath.replaceWith(
            t.objectProperty(
              parentNode.key,
              t.callExpression(
                t.memberExpression(
                  t.identifier("css"),
                  t.identifier("collect")
                ),
                [
                  parentNode.value,
                  t.stringLiteral(name)
                ]
              )
            )
          )
          parentPath.skip()
          return
        }
        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier("css"),
              t.identifier("collect")
            ),
            [
              node
            ]
          )
        )
        path.skip()
      }
    },
    post() {
      this.easyCss = false
    }
  }
}
