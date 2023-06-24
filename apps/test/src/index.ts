
import css, { geneEasyStyle } from "@iandx/easy-css"

const fuck____ = (ok) => css`
   color: ${ok};
`
let jj = {
  ok: (fine, shit) => css`
  color: ${fine}${shit};
`
}
console.log(jj.ok("blue", "b"))
fuck____("red", "blue")
console.log(geneEasyStyle())
class JJ {
  hh = css`hh`
  constructor() {
    console.log(this.hh)
  }
}
new JJ()
// console.time("0")
// for (let i = 0; i < 1000; i++) {
//   css`
//         color: red${i};
//         background-color: blue;
//     `
// }
// console.timeEnd("0")

