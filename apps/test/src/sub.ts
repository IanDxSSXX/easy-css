import { css, easyStore } from "@iandx/easy-css"
import * as AA from "@iandx/easy-css-atomic"

console.log("2")
AA.padding("100px")
const jj = 1
export function ok() { }

const a = css`fuck: true;`

const tt = {
  a: css`nofuck: true;`
}

console.log(css`shit: right;`)
const tttt = css`
        color:blue;
      `
console.log(easyStore.conflictNameStore.tttt)
