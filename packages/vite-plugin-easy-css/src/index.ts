// @ts-ignore
import { transform } from "@babel/core"
import easyCss from "babel-preset-easy-css"

interface EasyCssOption {
  /**
   * @required
   * will add style in the start of this file
   */
  utilities?: Array<{
    easyFuncMap: Record<string, ((...args: any) => string)>
    safeName?: string
  }>
  /**
   * @default [".js", ".ts", ".jsx", ".tsx"]
   */
  appendix?: string[]
}

export default function(options: EasyCssOption) {
  const { appendix = [".js", ".ts", ".jsx", ".tsx"] } = options
  return {
    name: "EasyCss",
    enforce: "pre",
    transform(code: string, id: string) {
      for (const append of appendix) {
        if (id.endsWith(append)) {
          return transform(code, {
            presets: [[easyCss, options]],
            sourceMaps: true,
            filename: id
          })
        }
      }
    }
  } as any
}
