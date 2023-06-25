import * as t from "@babel/types"

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
        let parentPath = path.parentPath
        let parentNode = parentPath.node
        const params: t.Identifier[] = []
        if (t.isArrowFunctionExpression(parentNode)) {
          params.push(...parentNode.params as any)
          parentPath = parentPath.parentPath
          parentNode = parentPath.node
        }
        const getEasyName = (name: string) => (
          params.length === 0
            ? t.stringLiteral(name)
            : t.templateLiteral(
              [
                t.templateElement({ raw: `${name.endsWith("$") ? name.slice(0, -1) : name}-` }),
                ...params.slice(0, -1).map(_ => t.templateElement({ raw: "-" })),
                t.templateElement({ raw: name.endsWith("$") ? "$" : "" })
              ],
              params
            )
        )
        if (t.isVariableDeclarator(parentNode)) {
          if (!t.isIdentifier(parentNode.id)) return
          const name = toHyphenatedCase(parentNode.id.name)
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                t.identifier("css"),
                t.identifier("collect")
              ),
              [node.quasi, getEasyName(name)]
            )
          )
          path.skip()
          return
        }
        if (t.isClassProperty(parentNode)) {
          if (!t.isIdentifier(parentNode.key)) return
          const name = toHyphenatedCase(parentNode.key.name)
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                t.identifier("css"),
                t.identifier("collect")
              ),
              [node.quasi, getEasyName(name)]
            )
          )
          path.skip()
          return
        }
        if (t.isObjectProperty(parentNode)) {
          if (t.isPrivateName(parentNode.key)) return
          const name = toHyphenatedCase(
            t.isIdentifier(parentNode.key)
              ? parentNode.key.name
              : (parentNode.key as any).value
          )

          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                t.identifier("css"),
                t.identifier("collect")
              ),
              [
                node.quasi,
                parentNode.computed
                  ? parentNode.key
                  : getEasyName(name)
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
            ), [node.quasi]
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
