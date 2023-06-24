import css from "@iandx/easy-css"
import { myColorfulStyle } from "test2"
const el = document.getElementById("app")!

el.className = [css`
    background-color: red    ;
    width: 200px;
    height: 200px;
`, css`
    color: blue;
`, css`
color: blue;
`].join(" ")

// const myColorfulStyle = {
//   yellow: css`
//       background-color: yellow;
//     `,
//   red: css`
//       background-color: red;
//     `,
//   blue: css`
//       background-color: blue;
//     `,
//   blue$: css`
//     background-color: jj;
//   `
// }
console.log(myColorfulStyle)