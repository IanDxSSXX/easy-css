# Easy CSS
[EN](../../README.md) | ZH

[![@iandx/easy-css](https://badgen.net/npm/v/@iandx/easy-css?label=@iandx/easy-css)](https://www.npmjs.com/package/@iandx/easy-css)
[![babel-plugin-easy-css](https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/babel-plugin-easy-css?label=babel-plugin-easy-css)
[![vite-plugin-easy-css](https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)](https://www.npmjs.com/package/https://badgen.net/npm/v/vite-plugin-easy-css?label=vite-plugin-easy-css)
[![@iandx/easy-css-atomic](https://badgen.net/npm/v/@iandx/easy-css-atomic?label=@iandx/easy-css-atomic)](https://www.npmjs.com/package/@iandx/easy-css-atomic)
[![@iandx/easy-css-utility](https://badgen.net/npm/v/@iandx/easy-css-utility?label=@iandx/easy-css-utility)](https://www.npmjs.com/package/@iandx/easy-css-utility)

零运行时的原子类CSS-in-JS库。

我们提供：
* 🎨 编写CSS-in-JS最简单的方法。
* ⚡️ 静态样式的零运行时
* ✨ 动态改变样式
* ⚛️ 基于原子类和实用工具的CSS类

# 动机
其他CSS-in-JS或原子CSS框架很棒，但它们可能存在以下问题：

1. Emotion JS等CSS-in-JS库可能导致运行时压力较高，而Linaria仅允许编写静态参数，无法添加动态参数。
2. 在开发组件库时，最好使用固定的CSS类名，以便外部修改，而不是随机生成的字符串。
3. 要同时使用原子类和CSS-in-JS样式，我需要导入两个库吗？
4. 尽管原子库提供了全面的样式集合，但可能缺少某些特定的原子类。如何解决这个问题？
5. 如何轻松地将我经常使用的实用工具添加到原子库？

Easy CSS通过以下方式解决了这些问题：

1. Easy CSS将静态和动态功能相结合，识别可以在构建时静态推断的类，并在运行时添加类型。
2. 我们通过识别变量名来定义className，允许您声明的变量名是全局的或范围内的。
3. Easy CSS提供了基于静态CSS-in-JS库的预解析原子库，便于在Easy CSS中使用原子CSS。
4. Easy CSS中的原子CSS以函数调用形式存在，因此您可以定义所需的任何参数，例如`margin("10px")`。
5. Easy CSS支持自定义实用工具组件库的插件。还提供两个原生库：Atomic - 所有原生样式作为原子类，Utility - 由Tailwind支持的所有实用类。

# 安装
## 主要包
```shell
npm install @iandx/easy-css
```

## vite插件
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
## babel预设
```shell
npm install -D babel-preset-easy-css
```
```json
{
  "presets": ["easy-css"]
}
```

# 使用
## 预览
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
生成的CSS:
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
## [详细说明](./USAGE.md)

# 原子类和工具class
## 预览
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
生成的CSS:
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
## [详细说明](./docs/ATOMIC.md)


# SSR
如果你在SSR或者除浏览器之外的任何环境中使用它，你可以用以下方法获取生成的样式HTML字符串：
```ts
import { geneEasyStyle } from "@iandx/easy-css"

renderToString(YourApp)  // contains easy-css code

console.log(geneEasyStyle())
// ~> <style data-tag="🎨easy-css">.my-style{color:red;}</style>
```

# 灵感
非常感谢[tailwindcss](https://tailwindcss.com/) 和 [emotion](https://emotion.sh/docs/introduction) 提供的灵感。