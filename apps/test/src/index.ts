
import css from "@iandx/easy-css"

for (let i = 0; i < 10000; i++) {
  i++
}
console.time("0")
for (let i = 0; i < 1000; i++) {
  css`
        color: red${i};
        background-color: blue;
    `
}
console.timeEnd("0")