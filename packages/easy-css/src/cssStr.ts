import { easyStore, injectStyle } from "./store"
import { parseSub } from "./subParser"
import { type EasyStyleWithSub, type EasyStyle } from "./types"
import { generateUUIDFromString, minify, rand } from "./utils"

export function cssStrFunc(strings: TemplateStringsArray, ...values: any[]) {
  const cssString = strings.reduce((result, string, i) => {
    return result + string + (values[i] || "")
  }, "")
  return cssStrFunc.collect(cssString)
}

cssStrFunc.collect = (cssString: string, name?: string, filePath?: string) => {
  const easyStyle = parseToEasyStyle(cssString)
  const cssId = generateUUIDFromString(easyStyle.cssStr)
  const contentSame = judge(easyStyle, cssId)
  const mainName = handleMainStyle(cssId, easyStyle.cssStr, name, contentSame, filePath)
  handleSubStyles(mainName, easyStyle.subs, filePath)

  return mainName
}

function getCssStringAndSubTemps(cssString: string) {
  cssString = minify(cssString)
  let subsTemp: Array<{ name: string, content: string }> = []
  if (!cssString.includes("{")) {
    const cssArr = [...new Set(cssString.split(";"))].filter(Boolean).sort()
    cssString = cssArr.join(";") + (cssArr.length !== 0 ? ";" : "")
  } else {
    const subParsed = parseSub(cssString)
    cssString = subParsed.output
    subsTemp = subParsed.subs
  }

  return { cssString, subsTemp }
}

function parseSubTemps(subsTemp: Array<{ name: string, content: string }>): EasyStyleWithSub[] {
  const subs: EasyStyleWithSub[] = []
  for (const { name, content } of subsTemp) {
    if (name.includes("&")) {
      const { cssString: newCssStr, subsTemp } = getCssStringAndSubTemps(content)
      subs.push({
        styleStr: mainName => `${name.replace("&", `.${mainName}`)}{${newCssStr}}`,
        subs: parseSubTemps(subsTemp)
      })
      continue
    }
    if (name.startsWith("@media")) {
      const { cssString: newCssStr, subsTemp } = getCssStringAndSubTemps(content)
      subs.push({
        styleStr: mainName => `${name}{.${mainName}{${newCssStr}}}`,
        subs: parseSubTemps(subsTemp)
      })
      continue
    }
    if (name.toLowerCase().includes("keyframes")) {
      subs.push({
        styleStr: `${name}{${content}}`,
        subs: []
      })
      continue
    }
    const { cssString: newCssStr, subsTemp } = getCssStringAndSubTemps(content)
    subs.push({
      styleStr: mainName => `.${mainName} ${name}{${newCssStr}}`,
      subs: parseSubTemps(subsTemp)
    })
  }
  return subs
}

function parseToEasyStyle(cssString: string): EasyStyle {
  const { cssString: newCssStr, subsTemp } = getCssStringAndSubTemps(cssString)
  const subs = parseSubTemps(subsTemp)
  return { cssStr: newCssStr, subs }
}

function judge(easyStyle: EasyStyle, cssId: string) {
  const mainTheSame = easyStore.nameHashStore[cssId] !== undefined
  const subsTheSame = judgeSubs(easyStyle.subs)
  return mainTheSame && subsTheSame
}

function judgeSubs(easyStylesWithSub: EasyStyleWithSub[]) {
  for (const { styleStr, subs } of easyStylesWithSub) {
    const mustBeUnique = typeof styleStr !== "string"
    if (mustBeUnique) return false
    const alreadyHaveThisStyle = easyStore.styleHashStore[generateUUIDFromString(styleStr)]
    if (!alreadyHaveThisStyle) return false
    if (!judgeSubs(subs)) false
  }
  return true
}

function handleMainStyle(cssId: string, cssString: string, name: string | undefined, contentSame: boolean, filePath?: string) {
  if (contentSame) return easyStore.nameHashStore[cssId]
  if (name === undefined) name = easyStore.nameHashStore[cssId] ?? `easy-css-${rand.randStr()}`
  else if (name.endsWith("$")) name = easyStore.nameHashStore[cssId] ?? `${name.slice(0, -1)}-${rand.randStr()}`
  else if (easyStore.conflictNameStore[name] !== undefined) {
    easyStore.conflictNameStore[name]++
    name = `${name}${easyStore.conflictNameStore[name] - 1}`
  } else {
    easyStore.conflictNameStore[name] = 1
  }
  easyStore.nameHashStore[cssId] = name

  injectStyle(`.${name}{${cssString}}`, name, filePath)
  return name
}

function handleSubStyles(mainName: string, subStyles: EasyStyleWithSub[], filePath?: string) {
  for (const { styleStr, subs } of subStyles) {
    const styleString = typeof styleStr === "string" ? styleStr : styleStr(mainName)
    const hash = generateUUIDFromString(styleString)
    if (easyStore.styleHashStore[hash]) return
    easyStore.styleHashStore[hash] = true
    injectStyle(styleString, mainName, filePath)
    handleSubStyles(mainName, subs)
  }
}
