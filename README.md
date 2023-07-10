# Easy CSS
EN | [ZH](./docs/zh/README.md)

[![@iandx/easy-css](https://badgen.net/npm/v/@iandx/easy-css?label=@iandx/easy-css)](https://www.npmjs.com/package/@iandx/easy-css)
[![babel-plugin-easy-css](https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)
[![vite-plugin-easy-css](https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)
[![@iandx/easy-css-atomic](https://badgen.net/npm/v/@iandx/easy-css-atomic?label=@iandx/easy-css-atomic)](https://www.npmjs.com/package/@iandx/easy-css-atomic)
[![@iandx/easy-css-utility](https://badgen.net/npm/v/@iandx/easy-css-utility?label=@iandx/easy-css-utility)](https://www.npmjs.com/package/@iandx/easy-css-utility)

Zero-runtime-with-atomic-class css in js library.

Here we provide:
* 🎨 The easiest way to write css in js.
* ⚡️ Zero runtime for static styles
* ✨ Dynamic for changing styles
* ⚛️ Atomic and utility based css classes


# Motivation
Other CSS-in-JS or atomic CSS frameworks are great, but they may have the following issues:

1. Emotion JS and similar CSS-in-JS libraries can cause high runtime pressure, while Linaria only allows writing static parameters and cannot add dynamic ones.
2. When developing a component library, it is preferable to have a fixed CSS class name that can be exposed for external modification rather than a randomly generated string of characters.
3. To utilize both atomic classes and CSS-in-JS styles, do I need to import two libraries?
4. Although atomic libraries provide a comprehensive set of styles, some specific atomic classes may be missing. How can this be addressed?
5. How can I easily add my frequently used utilities to an atomic library?

Easy CSS resolves these issues by:

1. Easy CSS combines static and dynamic capabilities to identify classes that can be inferred statically and parse them at build time. Additionally, it provides powerful dynamic capabilities to add types at runtime.
2. We define a className by recognizing variable names, allowing your declared variable names to be either global or scoped.
3. Easy CSS provides a pre-parsed atomic library based on static CSS-in-JS libraries, making it easy to use atomic CSS in Easy CSS.
4. Atomic CSS in Easy CSS is in the form of a function call, so you can define any parameters you need, such as `margin("10px")`.
5.  Easy CSS supports plug-ins for custom utility component libraries. It also provides two native libraries: Atomic - all native styles as atomic classes, and Utility - all utility classes supported by Tailwind.

# Installation
## main package
```shell
npm install @iandx/easy-css
```

## vite plugin
```shell
npm install -D vite-plugin-easy-css
```
```js
// ~> vite.config.js
import easyCss from "vite-plugin-easy-css"

export default defineConfig({
  plugins: [easyCss()]
})
```
## babel preset
```shell
npm install -D babel-preset-easy-css
```
```json
{
  "presets": ["easy-css"]
}
```

# Usage
## Preview
```ts
import { css } from "@iandx/easy-css"

const myCss = css`
  color: red;
  font-size: 16px;
`;

const myStyle = css({
  color: "blue",
  fontSize: "26px"
})
```
Generated CSS:
```css
.my-css {
  color: red;
  font-size: 16px;
}
.my-style {
  color: blue;
  font-size: 26px;
}
```
## [Detailed](./docs/USAGE.md)

# Atomic and Utility css classes
## Preview
```ts
import { margin, display } from "@iandx/easy-css-atomic"
import { border4, textRed500 } from "@iandx/easy-css-utility"

// atomic
margin("20px")
display("flex")
// utility
border4()
textRed500()
```
Generated CSS:
```css
.margin-20px {
  margin: 20px;
}
.display-flex {
  display: flex;
}
.border4 {
  border-width: 4px;
}
.text-red500 {
  color: rgb(239 68 68);
}
```
## [Detailed](./docs/ATOMIC.md)


# SSR
If you're using it in SSR or any environment other than a browser, you can get a generated style html string with:
```ts
import { geneEasyStyle } from "@iandx/easy-css"

renderToString(YourApp)  // contains easy-css code

console.log(geneEasyStyle())
// ~> <style data-tag="🎨easy-css">.my-style{color:red;}</style>
```

# Inspiration
Great thanks to [tailwindcss](https://tailwindcss.com/) and [emotion](https://emotion.sh/docs/introduction) for inspiration.