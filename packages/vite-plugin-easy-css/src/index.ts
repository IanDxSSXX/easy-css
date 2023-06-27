// @ts-ignore
import { transform } from "@babel/core"
import easyCss, { type EasyCssOption } from "babel-preset-easy-css"

export default function(options: EasyCssOption = {}) {
  return {
    name: "EasyCss",
    enforce: "pre",
    transform(code: string, id: string) {
      return transform(code, {
        presets: [[easyCss, options]],
        sourceMaps: true,
        filename: id
      })
    }
  } as any
}
