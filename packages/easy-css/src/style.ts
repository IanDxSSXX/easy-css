import { type StyleType } from "./types"
import { css } from "./css"
export function style(styles: StyleType) {
  return style.collect(styles)
}

function parseStyle(styles: StyleType) {
  let styleStr = ""
  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === "object") {
      styleStr += `${key}{${parseStyle(value as any)}}`
      continue
    }
    styleStr += `${key}:${value};`
    continue
  }

  return styleStr
}

style.collect = (style: StyleType, name?: string, filePath?: string) => {
  const styleStr = parseStyle(style)
  console.log(styleStr)
  return css.collect(styleStr, name, filePath)
}
