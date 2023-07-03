import { cssObjFunc } from "./cssObject"
import { cssStrFunc } from "./cssStr"
import { type StyleType } from "./types"
export { easyStore, geneEasyStyle, preParseEasyStore } from "./store"

export function css(strings: StyleType | TemplateStringsArray, ...values: any[]) {
  if (Array.isArray(strings)) {
    return cssStrFunc(strings as any, ...values)
  }
  return cssObjFunc(strings as any)
}

css.collect = (cssStringOrObj: string | StyleType, name?: string, filePath?: string) => {
  if (typeof cssStringOrObj === "string") {
    return cssStrFunc.collect(cssStringOrObj, name, filePath)
  }
  return cssObjFunc.collect(cssStringOrObj, name, filePath)
}
