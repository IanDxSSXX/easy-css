// @ts-ignore
import syntaxTypescript from "@babel/plugin-syntax-typescript"
// @ts-ignore
import syntaxDoExpressions from "@babel/plugin-syntax-do-expressions"
// @ts-ignore
import syntaxJsx from "@babel/plugin-syntax-jsx"
// @ts-ignore
import syntaxDecorators from "@babel/plugin-syntax-decorators"
// @ts-ignore
import easyCss from "babel-plugin-easy-css"

export default function() {
  return {
    plugins: [
      [syntaxTypescript.default ?? syntaxTypescript, { isTSX: true }],
      syntaxDoExpressions.default ?? syntaxDoExpressions,
      syntaxJsx.default ?? syntaxJsx,
      [syntaxDecorators.default ?? syntaxDecorators, { legacy: true }],
      easyCss
    ]
  }
}
