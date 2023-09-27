import syntaxTypescript from "./plugin-syntax-typescript"
// @ts-ignore
import syntaxDoExpressions from "@babel/plugin-syntax-do-expressions"
// @ts-ignore
import syntaxDecorators from "@babel/plugin-syntax-decorators"
// @ts-ignore
import syntaxJSX from "@babel/plugin-syntax-jsx"
import easyCss from "./plugin"
import { type EasyCssOption } from "./types"

export type { EasyCssOption }

export default function(api: any, options: EasyCssOption = {}) {
  return {
    plugins: [
      [syntaxTypescript, { isTSX: true }],
      syntaxJSX.default ?? syntaxJSX,
      syntaxDoExpressions.default ?? syntaxDoExpressions,
      [syntaxDecorators.default ?? syntaxDecorators, { legacy: true }],
      [easyCss, options]
    ]
  }
}
