import { parseSub } from "./subParser"
import { type EasyStyleWithSub, type EasyStyle, type EasyStore } from "./types"
import { rand, generateUUIDFromString } from "./utils"

let head: any

export const easyStore: EasyStore = {
  styleList: [],
  conflictNameStore: {},
  nameHashStore: {},
  styleHashStore: {}
}

export const state = {
  dev: false
}

export function clearStore() {
  easyStore.nameHashStore = {}
  easyStore.styleHashStore = {}
  easyStore.conflictNameStore = {}
  easyStore.styleList = []
}

export function inheritEasyStore(newEasyStore: EasyStore) {
  easyStore.styleList = [...easyStore.styleList, ...newEasyStore.styleList]
  easyStore.conflictNameStore = { ...easyStore.conflictNameStore, ...newEasyStore.conflictNameStore }
  easyStore.nameHashStore = { ...easyStore.nameHashStore, ...newEasyStore.nameHashStore }
  easyStore.styleHashStore = { ...easyStore.styleHashStore, ...newEasyStore.styleHashStore }
}

export function abandonEasyStore(oldEasyStore: EasyStore) {
  easyStore.styleList = easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s))
  easyStore.conflictNameStore = Object.fromEntries(
    Object.entries(easyStore.conflictNameStore).filter(([key]) => (
      !Object.keys(oldEasyStore.conflictNameStore).includes(key))
    )
  )
  easyStore.nameHashStore = Object.fromEntries(
    Object.entries(easyStore.nameHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.nameHashStore).includes(key))
    )
  )
  easyStore.styleHashStore = Object.fromEntries(
    Object.entries(easyStore.styleHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.styleHashStore).includes(key))
    )
  )
}

export function diffEasyStore(oldEasyStore: EasyStore): EasyStore {
  return {
    styleList: easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s)),
    conflictNameStore: Object.fromEntries(
      Object.entries(easyStore.conflictNameStore).filter(([key]) => (
        oldEasyStore.conflictNameStore[key] === undefined
      ))
    ),
    nameHashStore: Object.fromEntries(
      Object.entries(easyStore.nameHashStore).filter(([key]) => (
        oldEasyStore.nameHashStore[key] === undefined
      ))
    ),
    styleHashStore: Object.fromEntries(
      Object.entries(easyStore.styleHashStore).filter(([key]) => (
        oldEasyStore.styleHashStore[key] === undefined
      ))
    )
  }
}

export function geneEasyStyle() {
  return `<style data-tag="🎨easy-css">${easyStore.styleList.join("")}</style>`
}

function injectStyle(style: string, key: string, filePath?: string) {
  easyStore.styleList.push(style)
  injectStyleToDOM(style, key, filePath)
}

export function injectListStyle() {
  if (easyStore.styleList.length > 0) injectStyleToDOM(easyStore.styleList.join(""), "✨pre-parsed")
}

function injectStyleToDOM(style: string, key: string, filePath?: string) {
  if (typeof document === "undefined") return
  if (!head) head = document.head || document.getElementsByTagName("head")[0]
  if (!head) return
  const styleEl = document.createElement("style")
  styleEl.innerHTML = style
  styleEl.dataset.tag = "🎨easy-css"
  styleEl.dataset.key = key
  if (filePath) styleEl.dataset.path = filePath
  document.head.appendChild(styleEl)
}

function minify(str: string) {
  return str.replace(/\n/g, "").replace(/\/\*(\n|.)+?\*\//g, "").replace(/\s*([:;,{}])\s*/g, "$1").trim()
}

export function css(strings: TemplateStringsArray, ...values: any[]) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "")
  }, "")
}

function getFilePath() {
  const stackTrace = new Error().stack
  const callerLine = stackTrace?.split("\n")[3]
  const callerPathAndLine = callerLine?.trim().match(/\(?([^)]+)\)?/)?.[1]
  const filePath = callerPathAndLine?.split(" ")[1]?.replace(/^https?:\/\//, "").split("/").slice(1).join("/").split("?")[0]

  return filePath
}

css.collect = (cssString: string, name?: string) => {
  const filePath = state.dev ? getFilePath() : undefined
  const easyStyle = parseToEasyStyle(cssString)
  const same = judge(name, easyStyle)
  const mainName = handleMainStyle(easyStyle.cssStr, name, same, filePath)
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

function judge(name: string | undefined, easyStyle: EasyStyle) {
  if (!name) return false
  const mainTheSame = easyStore.conflictNameStore[name] !== undefined
  const subsTheSame = judgeSubs(easyStyle.subs)
  return mainTheSame && subsTheSame
}

function judgeSubs(easyStylesWithSub: EasyStyleWithSub[]) {
  for (const { styleStr, subs } of easyStylesWithSub) {
    const mustBeUnique = typeof styleStr !== "string"
    if (mustBeUnique) return false
    const alreadyHaveThisStyle = easyStore.styleHashStore[generateUUIDFromString(styleStr)]
    if (!alreadyHaveThisStyle) return false
    if (judgeSubs(subs)) false
  }
  return true
}

function handleMainStyle(cssString: string, name: string | undefined, same: boolean, filePath?: string) {
  const cssId = generateUUIDFromString(cssString)
  if (same) return easyStore.nameHashStore[cssId]
  if (name === undefined) name = easyStore.nameHashStore[cssString] ?? `easy-css-${rand.randStr()}`
  else if (name.endsWith("$")) name = easyStore.nameHashStore[cssString] ?? `${name.slice(0, -1)}-${rand.randStr()}`
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
