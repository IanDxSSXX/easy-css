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

const nameHolder: Record<string, string> = {}

function injectStyle(style: string) {
  if (typeof document === "undefined") return
  if (!head) head = document.head || document.getElementsByTagName("head")[0]
  if (!head) return
  const styleEl = document.createElement("style")
  styleEl.innerHTML = style
  styleEl.dataset.tag = "🎨easy-css"
  document.head.appendChild(styleEl)
}

function css(strings: TemplateStringsArray, ...values: any[]) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "")
  }, "")
}

function minify(str: string) {
  return str.replace(/\n/g, "").replace(/\s*([:;,{}])\s*/g, "$1").trim()
}

css.collect = (cssString: string, name?: string) => {
  cssString = minify(cssString)
  const cssArr = [...new Set(cssString.split(";"))].filter(Boolean).sort()
  // serve as pseudo hash value
  cssString = cssArr.join(";") + (cssArr.length !== 0 ? ";" : "")
  if (hashHolder[cssString]) return hashHolder[cssString]
  if (!name) name = hashHolder[cssString] ?? `easy-css-${rand.randStr()}`
  else if (name.endsWith("$")) name = hashHolder[cssString] ?? `${name.slice(0, -1)}-${rand.randStr()}`
  else if (Object.keys(nameHolder).includes(name)) {
    // resolve named variable conflict
    const names = Object.keys(nameHolder).filter(n => n.startsWith(name!))
    let id = 0
    while (names.includes(`${name}${id === 0 ? "" : `-${id}`}`)) {
      id++
    }
    name = `${name}${id === 0 ? "" : `-${id}`}`
  }
  hashHolder[cssString] = name
  nameHolder[name] = cssString
  injectStyle(`.${name}{${cssString}}`)
  return name
}

export default css
