# Easy CSS
[![@iandx/easy-css](https://badgen.net/npm/v/@iandx/easy-css?label=@iandx/easy-css)](https://www.npmjs.com/package/@iandx/easy-css)
[![babel-plugin-easy-css](https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)
[![babel-preset-easy-css](https://badgen.net/npm/v/babel-preset-easy-css?label=babel-preset-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-preset-easy-css?label=babel-preset-easy-css)
[![vite-plugin-easy-css](https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)


🎨 The easiest way to write css in js.

Easy css is best for
1. developers writing component libraries or abstract components
2. developers building quick and simple websites with easy-css-atomic and easy-css-utility

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
    .my-style{color:red;font-size:16px;}
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
    .my-class-style{width:100px;}
</style>
```

## Named css with parameters
Works only with an arrow function
```ts
import css from "@iandx/easy-css"

const myStyle = (myParam1, param2) => css`
  color: ${myParam1};
  font-size: ${param2}px;
`;

console.log(myStyle("red", "16")); // ~> "my-style-red-16"

document.body.innerHTML = `
  <div class="${myStyle}">Hello, world!</div>
`
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style-red-16{color:red;font-size:16px;}
</style>
```
## Named arbitrary css
Your can declare a named css classname with random string in the end with any variable that ends with a "$"

```ts
import css from "@iandx/easy-css"

const myStyle$ = css`
  color: red;
  font-size: 16px;
`;

console.log(myStyle$); // ~> "my-style-b1i9aj"

document.body.innerHTML = `
  <div class="${myStyle$}">Hello, world!</div>
`
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style-b1i9aj{color:red;font-size:16px;}
</style>
```

## Arbitrary css
If you call easy-css in a situation other than those mentioned above, the class name will be a random string(because you do not provide any name that can be used as a className). 
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
## Underline trimming
To avoid variable declaration conflict, you can add underline as prefix or appendix, and easy-css will auto trim for you
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  padding: 20px;
  margin: auto;
`) // ~> "my-style"

const myStyle_ = (color) => css`
  padding: ${color};
`) // ~> `my-style-${color}`
```


# Advanced
## Nested Selectors
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  color: red;
  font-size: 16px;
  a {
    cursor: pointer;
  }
`;
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{color:red;font-size:16px;}
    .my-style a{cursor:pointer;}
</style>
```
And
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  color: red;
  font-size: 16px;
  .sub-style {
    cursor: pointer;
  }
`;
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{color:red;font-size:16px;}
    .my-style .sub-style{cursor:pointer;}
</style>
```
And you can use `&` as a parent selector
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  color: red;
  font-size: 16px;
  div & {
    cursor: pointer;
  }
`;
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{color:red;font-size:16px;}
    div .my-style{cursor:pointer;}
</style>
```
And
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  color: red;
  font-size: 16px;
  :hover {
    color: red;
  }
`;
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{color:red;font-size:16px;}
    .my-style :hover{color:red;}
</style>
```
## Media Queries
```ts
import css from "@iandx/easy-css"

const myStyle = css`
  font-size: 30px;
  @media (min-width: 420px) {
    font-size: 50px;
  }
`;
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .my-style{font-size: 30px;}
    @media(min-width:420px){.my-style{font-size: 50px;}}
</style>
```

# Atomic and Utility css classes
Atomic CSS and utility-first frameworks are rapidly rising in popularity as a simple yet powerful approach to styling components.

Atomic CSS involves defining styles for short "atom" classes that target a single style declaration, such as .text-red-500 for red text or .truncate for truncating text. You compose elements by stacking these classes , allowing extremely modular and reusable styles.

Atomic CSS offers many benefits over traditional CSS:

• Scalability: Easily build complex designs through composition of atomic styles.
• Simple: Class names map directly to CSS declarations for an intuitive API.
• Flexibility: Only include the exact styles your project needs.

Many developers are now adopting atomic-first frameworks that implement this concept at scale like tailwindcss.

Here, we represent a css in js atomic css solution. You can write plain styles like this:
```ts
import { margin, display } from "@iandx/easy-css-atomic"
const el = document.getElementById("app")
el.className = [color("rgb(254 202 202)"), display("flex")].join(" ")
```
Result in head:
```html
<style data-tag="🎨easy-css">
    .color-rgb-254-202-202{color: rgb(254 202 202);}
    .display-flex{display: flex;}
</style>
```
Or even better in an ui rendering library or a framework like React:
```jsx
import { color, display } from "@iandx/easy-css-atomic"

const MyComp = () => (
  <div className={[color("rgb(254 202 202)"), display("flex")]}>
    🎨 Easy css
  </div>
)

```
Or better with `@iandx/easy-css-utility`
```jsx
import { textRed200, flex } from "@iandx/easy-css-utility"

const MyComp = () => (
  <div className={[textRed200(), display()]}>
    🎨 Easy css
  </div>
)

```
See all available utilities in [utility types](./packages/easy-css-utility/src/utility.type.ts)

And don't worry about the runtime speed and the library size because it's fast and we've got tree shaking!
# No document object
If you're using it in SSR or any environment other than the browser, you can get a generated style html string with:
```ts
import { geneEasyStyle } from "@iandx/easy-css"

console.log(geneEasyStyle())
// ~> <style data-tag="🎨easy-css">.my-style{color:red;}</style>
```