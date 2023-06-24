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
let styleEl: HTMLStyleElement

const hashHolder: Record<string, string> = {}

const namedHolder: Record<string, string> = {}

function injectStyle(styles: string[]) {
  if (typeof document === "undefined") return
  if (!head) head = document.head || document.getElementsByTagName("head")[0]
  if (!styleEl) {
    styleEl = document.createElement("style")
    let id = 0
    while (document.getElementById(`🎨easy-css${id === 0 ? "" : `-${id}`}`)) {
      id++
    }
    styleEl.id = `🎨easy-css${id === 0 ? "" : `-${id}`}`
    head.appendChild(styleEl)
    // make sure the same package using easy-css has the same seed and different packages have different
    rand.seed += id
  }
  styleEl.replaceChildren(...styles.map(style => document.createTextNode(style)))
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
  if (!name) name = hashHolder[cssString] ?? `easy-css-${rand.randStr()}`
  else if (name.endsWith("$")) name = hashHolder[cssString] ?? `${name.slice(0, -1)}-${rand.randStr()}`
  hashHolder[cssString] = name
  namedHolder[name] = cssString
  injectStyle(Object.entries(namedHolder).map(([key, value]) => `.${key}{${value}}`))
  return name
}

export default css
