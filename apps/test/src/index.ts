
import { css, easyStore } from "@iandx/easy-css"
import * as AA from "@iandx/easy-css-atomic"
import { ok } from "./sub"
const tttt = css`
        color:${"red"};
      `
console.log("ok")

ok()
// import * as BB from "@iandx/easy-css-utility"
// import { css as hhCss } from "@emotion/css"

// console.time("0")
// for (let i = 0; i < 100; i++) {
//     const whasfat = css`
// div {
//     margin: 20px;
//     width: 100px;
//     height: 100px;
//     background: #f00;
//     -webkit-animation-name: spin;
//     -webkit-animation-duration: 4000ms;
//     -webkit-animation-iteration-count: infinite;
//     -webkit-animation-timing-function: linear;
//     -moz-animation-name: spin;
//     -moz-animation-duration: 4000ms;
//     -moz-animation-iteration-count: infinite;
//     -moz-animation-timing-function: linear;
//     -ms-animation-name: spin;
//     -ms-animation-duration: 4000ms;
//     -ms-animation-iteration-count: infinite;
//     -ms-animation-timing-function: linear;

//     animation-name: spin;
//     animation-duration: 4000ms;
//     animation-iteration-count: infinite;
//     animation-timing-function: linear;
// }
// @keyframes spin {
//     from {
//         transform:rotate(0deg);
//     }
//     to {
//         transform:rotate(360deg);
//     }
// }
// `
// }

// const a = "90px"
// const tt = AA.margin("20px")
// const hh = AA.margin("50px")
// BB.alignSuper()
// AA.margin(a)

// console.timeEnd("0")
// console.time("0")
// for (let i = 0; i < 1000; i++) {
//     hhCss`
// div {
//     margin: 20px;
//     width: 100px;
//     height: 100px;
//     background: #f00;
//     -webkit-animation-name: spin;
//     -webkit-animation-duration: 4000ms;
//     -webkit-animation-iteration-count: infinite;
//     -webkit-animation-timing-function: linear;
//     -moz-animation-name: spin;
//     -moz-animation-duration: 4000ms;
//     -moz-animation-iteration-count: infinite;
//     -moz-animation-timing-function: linear;
//     -ms-animation-name: spin;
//     -ms-animation-duration: 4000ms;
//     -ms-animation-iteration-count: infinite;
//     -ms-animation-timing-function: linear;

//     animation-name: spin;
//     animation-duration: 4000ms;
//     animation-iteration-count: infinite;
//     animation-timing-function: linear;
// }
// @keyframes spin {
//     from {
//         transform:rotate(0deg);
//     }
//     to {
//         transform:rotate(360deg);
//     }
// }
// `
// }
// console.timeEnd("0")

const t = AA.margin("20xx")
const world = css`
      color: green;
    `
const object = {
  world: css`
        color: white;
      `
}
const jj = css`
> * + *{
  margin-left: 5px;

}
`
document.getElementById("app")!.innerHTML = `
<div class="" viewBox="0 0 24 24">
<div  viewBox="0 0 24 24">
  <!-- ... -->
</div></div>
<div class="${jj}">
<div>a</div>
<div>b</div>
<div>c</div>
</div>
    `
AA.margin("300px")
