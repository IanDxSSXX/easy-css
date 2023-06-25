interface EasyStyle {
  cssStr: string
  subs: EasyStyleWithSub[]
}

interface EasyStyleWithSub {
  styleStr: ((mainName: string) => string) | string
  subs: EasyStyleWithSub[]
}

const rand = {
  a: 1103515245,
  c: 12345,
  m: Math.pow(2, 32),
  seed: 123456789,
  rand() {
    rand.seed = (rand.a * rand.seed + rand.c) % rand.m
    return rand.seed / rand.m
  },
  randStr() {
    return rand.rand().toString(32).slice(2, 8)
  }
}

let head: any

const hashHolder: Record<string, string> = {}

const easyStore: Record<string, string> = {}
const allStyles: string[] = []
const conflictNameStore: Record<string, number> = {}

export function geneEasyStyle() {
  return `<style data-tag="🎨easy-css">${allStyles.join("")}</style>`
}

function injectStyle(style: string, key?: string) {
  if (typeof document === "undefined") return
  if (!head) head = document.head || document.getElementsByTagName("head")[0]
  if (!head) return
  const styleEl = document.createElement("style")
  styleEl.innerHTML = style
  styleEl.dataset.tag = "🎨easy-css"
  if (key) styleEl.dataset.key = key
  document.head.appendChild(styleEl)
  allStyles.push(style)
}

function minify(str: string) {
  return str.replace(/\n/g, "").replace(/\/\*(\n|.)+?\*\//g, "").replace(/\s*([:;,{}])\s*/g, "$1").trim()
}

function css(strings: TemplateStringsArray, ...values: any[]) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "")
  }, "")
}

css.collect = (cssString: string, name?: string, sub?: boolean, injectContent?: (content: string) => string, disableSub?: boolean) => {
  const easyStyle = parseToEasyStyle(cssString)
  const same = judge(name, easyStyle)
  const mainName = handleMainStyle(easyStyle.cssStr, name, same)
  handleSubStyles(mainName, easyStyle.subs)

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
  const mainTheSame = !!easyStore[name]
  const subsTheSame = judgeSubs(easyStyle.subs)
  return mainTheSame && subsTheSame
}

function judgeSubs(easyStylesWithSub: EasyStyleWithSub[]) {
  for (const { styleStr, subs } of easyStylesWithSub) {
    const mustBeUnique = typeof styleStr !== "string"
    if (mustBeUnique) return false
    const alreadyHaveThisStyle = allStyles.includes(styleStr)
    if (!alreadyHaveThisStyle) return false
    if (judgeSubs(subs)) false
  }
  return true
}

function handleMainStyle(cssString: string, name: string | undefined, same: boolean) {
  if (same) return hashHolder[cssString]
  if (!name) name = hashHolder[cssString] ?? `easy-css-${rand.randStr()}`
  else if (name.endsWith("$")) name = hashHolder[cssString] ?? `${name.slice(0, -1)}-${rand.randStr()}`
  else if (conflictNameStore[name]) {
    name = `${name}${conflictNameStore[name]}`
    conflictNameStore[name]++
  } else {
    conflictNameStore[name] = 0
  }

  hashHolder[cssString] = name
  easyStore[name] = cssString
  injectStyle(`.${name}{${cssString}}`, name)
  return name
}

function handleSubStyles(mainName: string, subStyles: EasyStyleWithSub[]) {
  for (const { styleStr, subs } of subStyles) {
    const styleString = typeof styleStr === "string" ? styleStr : styleStr(mainName)
    if (allStyles.includes(styleString)) return
    injectStyle(styleString, mainName)
    handleSubStyles(mainName, subs)
  }
}

function parseSub(str: string) {
  let output = ""
  const subs: Array<{ name: string, content: string }> = []

  let idx = 0
  let nameBuffer = ""
  while (idx < str.length) {
    const c = str[idx]
    if (c === ";") {
      output += nameBuffer + ";"
      nameBuffer = ""
    } else if (c === "{") {
      let depth = 1
      let subContent = ""
      idx++
      while (idx < str.length) {
        const c = str[idx]
        if (c === "{") depth++
        else if (c === "}") depth--
        if (depth === 0) break
        subContent += c
        idx++
      }
      subs.push({ name: nameBuffer, content: subContent })
      nameBuffer = ""
    } else {
      nameBuffer += c
    }
    idx++
  }

  return { output, subs }
}

export default css
