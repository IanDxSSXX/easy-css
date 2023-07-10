import { type StyleType } from "./types"
import { cssStrFunc } from "./cssStr"

export function cssObjFunc(styles: StyleType) {
  return cssObjFunc.collect(styles)
}

function camelToHyphen(str: string) {
  return str.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())
}

function parseStyle(styles: StyleType) {
  let styleStr = ""
  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === "object") {
      styleStr += `${key}{${parseStyle(value as any)}}`
      continue
    }
    styleStr += `${camelToHyphen(key)}:${value};`
    continue
  }

  return styleStr
}

cssObjFunc.collect = (style: StyleType, name?: string, filePath?: string) => {
  const styleStr = parseStyle(style)
  return cssStrFunc.collect(styleStr, name, filePath)
}
