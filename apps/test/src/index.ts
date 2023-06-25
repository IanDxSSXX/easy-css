
import css from "@iandx/easy-css"
import { margin } from "@iandx/easy-css-atomic"
import { css as hhCss } from "@emotion/css"

console.time("0")
// for (let i = 0; i < 1000; i++) {
const jj = css`
div {
    margin: 20px;
    width: 100px;
    height: 100px;
    background: #f00;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 4000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 4000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 4000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`
// }
console.timeEnd("0")
console.time("0")
for (let i = 0; i < 1000; i++) {
    hhCss`
div {
    margin: 2${i}px;
    width: 100px;
    height: 100px;
    background: #f00;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 4000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 4000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 4000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`
}
console.timeEnd("0")


document.getElementById("app")!.innerHTML = `
<div class="${jj}" viewBox="0 0 24 24">
<div  viewBox="0 0 24 24">
  <!-- ... -->
</div></div>
`
