// @ts-ignore
import { transform } from "@babel/core"
import easyCss from "babel-preset-easy-css"

function transformEasyCss(code: string, id: string) {
  return transform(code, {
    presets: [easyCss],
    sourceMaps: true,
    filename: id
  })
}

interface EasyCssPluginOption {
  /**
   * @default [".js", ".ts", ".jsx", ".tsx"]
   */
  appendix?: string[]
}

export default function(options?: EasyCssPluginOption) {
  const appendix = options?.appendix ?? [".js", ".ts", ".jsx", ".tsx"]

  return {
    name: "EasyCss",
    enforce: "pre",
    transform(code: string, id: string) {
      for (const append of appendix) {
        if (id.endsWith(append)) {
          return transformEasyCss(code, id)
        }
      }
    }
  } as any
}
