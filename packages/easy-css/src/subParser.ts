export function parseSub(str: string) {
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
