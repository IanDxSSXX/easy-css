
import css, { geneEasyStyle } from "@iandx/easy-css"

const fuck = (ok) => css`
   color: ${ok};
`
let jj = {
  ok: (fine, shit) => css`
  color: ${fine}${shit};
`
}
jj.ok("blue", "b")
fuck("red", "blue")
console.log(geneEasyStyle())
// console.time("0")
// for (let i = 0; i < 1000; i++) {
//   css`
//         color: red${i};
//         background-color: blue;
//     `
// }
// console.timeEnd("0")

