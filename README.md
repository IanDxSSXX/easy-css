# Easy CSS
[![@iandx/easy-css](https://badgen.net/npm/v/@iandx/easy-css?label=@iandx/easy-css)](https://www.npmjs.com/package/@iandx/easy-css)
[![babel-plugin-easy-css](https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)
[![babel-preset-easy-css](https://badgen.net/npm/v/babel-preset-easy-css?label=babel-preset-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-preset-easy-css?label=babel-preset-easy-css)
[![vite-plugin-easy-css](https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)


🪽 The easiest way to write css in js.

Other css in js tools are just great, but what if I just want to add a simple style to the html head? With easy-css, you can write simple css styles using template literals and have them automatically generate class names `based on the variable name`. This makes it easy to add styles to your HTML without having to worry about `naming conflicts` or `generating random class names`. Plus, easy-css is lightweight and has no dependencies, making it a great choice for projects of all sizes.

# Install
## main package
```shell
npm install @iandx/easy-css
```

## vite plugin
```shell
npm install -D vite-plugin-easy-css
```
```ts
import easyCss from "vite-plugin-easy-css"

export default defineConfig({
  plugins: [easyCss()]
})
```
## babel preset/plugin
```shell
npm install -D babel-plugin-easy-css
```
```shell
npm install -D babel-preset-easy-css
```

# Usage
## Named css as variable
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  color: red;
  font-size: 16px;
`;

console.log(myStyle); // ~> "my-style"

document.body.innerHTML = `
  <div class="${myStyle}">Hello, world!</div>
`
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{color: red;font-size: 16px;}
</style>
```
## Named css as object
```ts
import css from "@iandx/easy-css"

const myColorfulStyle = {
  yellow: css`
    background-color: yellow;
  `,
  red: css`
    background-color: red;
  `,
  blue: css`
    background-color: blue;
  `
}
console.log(myColorfulStyle)
// ~> { yellow: "yellow", red: "red", blue: "blue" } 

document.body.innerHTML = `
  <div class="${myColorfulStyle.yellow}">Hello, world!</div>
  <div class="${myColorfulStyle.red}">Hello, world!</div>
  <div class="${myColorfulStyle.blue}">Hello, world!</div>
`
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .yellow{background-color:yellow;}
</style>
<style data-tag="🎨easy-css">
    .red{background-color:red;}
</style>
<style data-tag="🎨easy-css">
    .blue{background-color:blue;}
</style>
```

## Named css as class member
```ts
import css from "@iandx/easy-css"

class MyClass {
  myClassStyle = css`
    width: 100px;
  `

  constructor() {
    console.log(this.myClassStyle) // ~> "my-class-style"
    document.body.innerHTML = `
        <div class="${this.myClassStyle}">Hello, world!</div>
    `
  }
}
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-class-style{width: 100px;}
</style>
```
## Named Arbitrary css
Your can declare a named css classname with random string in the end with any variable that ends with a "$"

```ts
import css from "@iandx/easy-css"

const myStyle$ = css`
  color: red;
  font-size: 16px;
`;

console.log(myStyle); // ~> "my-style-b1i9aj"

document.body.innerHTML = `
  <div class="${myStyle}">Hello, world!</div>
`
```

## Arbitrary css
If you call easy-css in a situation other than the three mentioned above, the class name will be a random string(because you do not provide a name that can be used as a className). 
```ts
import css from "@iandx/easy-css"

console.log(css`
  cursor: pointer;
`) // ~> "easy-css-aje31h"
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .easy-css-aje31h{cursor: pointer;}
</style>
```
But don't you worry that if it is called multiple times with the same CSS code, it will generate redundant CSS. Easy-css will automatically cache the same css code(no matter the order) and reuse the style.
```ts
import css from "@iandx/easy-css"

console.log(css`
  cursor: pointer;
  display: flex;
`) // ~> "easy-css-48a2og"

console.log(css`
  display: flex;
  cursor: pointer;
`) // ~> "easy-css-48a2og"
// even though the order is different, they are still the same
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .easy-css-48a2og{display: flex;cursor: pointer;}
</style>
```
Additionally, if your arbitrary css has the same style with a existing named css, easy-css will automatically make your arbitrary css's name become specific.
```ts
import css from "@iandx/easy-css"

const myNamedStyle = css`
  padding: 20px;
  margin: auto;
`) // ~> "my-named-style"

console.log(css`
  margin: auto;
  padding: 20px;
`) // ~> "my-named-style"
// even though the order is different and it is arbitrary
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-named-style{margin: auto;padding: 20px;}
</style>
```
