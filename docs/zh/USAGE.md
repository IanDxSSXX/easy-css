
[EN](../USAGE.md) | ZH

# 使用
Easy-css 的语法几乎与其他 CSS in JS 框架相同。因此，在我们深入 Easy-css 的一大亮点——全局和作用域 CSS 类之前，让我们快速回顾一下它们。

* [语法](#语法)
* [全局和作用域名称](#全局和作用域名称)
* [命名冲突](#命名冲突)
* [静态预解析](#静态预解析)
* [对象插值](#对象插值)
* [Styled component](#styled-component)

# 语法
```js
import { css } from "@iandx/easy-css"

const style = css`
  color: red;
`
```
生成的CSS:
```css
.style {
  color: red;
}
```
## Nesting, pseudo-elements and pseudo-selectors
```js
const style = css`
  color: red;
  :hover {
    color: blue;
  }
  .my-nesting-style {
    font-weight: bold;
  } 
  div & {
    font-size: 20px;
  }
`
```
生成的CSS:
```css
.style {
  color: red;
}
.style:hover {
  color: blue;
}
.style .my-nesting-style {
  font-weight: bold;
}
div .style {
  font-size: 20px;
}
```
## Media query
```js
const style = css`
  color: red;
  @media (min-height: 300px) {
    color: blue;
  }
`
```
生成的CSS:
```css
.style {
  color: red;
}
@media (min-width: 300px) {
  .style {
    color: blue;
  }
}
```
## Keyframe
```js
const style = css`
  color: red;
  animation: spin 2s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
```
生成的CSS:
```css
.style {
  color: red;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
# 全局和作用域名称
## 从变量中创建全局命名 CSS
```js
const myStyle = css`
  color: red;
`
```
生成的CSS:
```css
.my-style {
  color: red;
}
```
## 从对象中创建全局命名 CSS
```js
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
```
生成的CSS:
```css
.yellow {
  background-color:yellow;
}
.red {
  background-color:red;
}
.blue {
  background-color:blue;
}
```
## 从类成员中创建全局命名 CSS
```js
class MyClass {
  myClassStyle = css`
    width: 100px;
  `
}
new MyClass()
```
生成的CSS:
```css
.my-class-style {
  width:100px;
}
```

## 带有参数的全局命名 CSS
这只适用于箭头函数。
```js
const myStyle = (myParam1, param2) => css`
  color: ${myParam1};
  font-size: ${param2}px;
`

myStyle("red", "16")
myStyle("blue", "20")
```
生成的CSS:
```css
.my-style-red-16 {
  color: red;
  font-size: 16px;
}
.my-style-blue-20 {
  color: blue;
  font-size: 120px;
}
```
## 作用域命名 CSS
如果以任何以 "$" 结尾的变量声明带有随机字符串的命名 CSS，则它将被视为作用域命名 CSS。
```js
const myStyle$ = css`
  color: red;
  font-size: 16px;
`
```
生成的CSS:
```css
.my-style-b1i9aj {
  color: red;
  font-size: 16px;
}
```

## 作用域CSS
如果在上述情况之外的情况下调用 easy-css，则类名将是一个随机字符串（因为没有任何名称可以用作类名）。
```js
css`
  cursor: pointer;
`
```
生成的CSS:
```css
.easy-css-aje31h {
  cursor: pointer;
}
```

# 命名冲突
全局 CSS 名称可能会导致命名冲突。在 Easy-css 中，我们会为内容相同的 CSS 重用名称。让我们通过一些例子来说明这个问题。


## 当两个 CSS 规则具有相同的内容时，在 Easy-css 中，其余的规则将继承第一个声明的名称。
```js
const myStyle = css`
  display: flex;
  cursor: pointer;
` // ~> "myStyle"

css`
  display: flex;
  cursor: pointer;
` // ~> "myStyle"
```
生成的CSS:
```css
.my-style {
  display: flex;
  cursor: pointer;
}
```
## 下划线去除
为避免变量声明冲突，你可以在前缀或后缀中添加下划线，并且 easy-css 将自动删除它们。

```js
const myStyle = css`
  padding: 20px;
  margin: auto;
`) // ~> "my-style"

const myStyle_ = (color) => css`
  padding: ${color};
`) // ~> `my-style-${color}`
```
# 对象插值
对象样式也可以进行插值，它们会被转换为 CSS 字符串，然后添加到样式表中。它与标签模板样式具有相同的命名策略。

```js
const style = css({
  color: red,
  marginRight: "50px"
})
```
生成的CSS:
```css
.style {
  color: red;
  margin-right: 50px;
}
```
# 静态预解析
Easy css 的目的是让你以最简单的方式使用 CSS in JS，而无需关注它是构建时还是运行时。它会自动在构建时将可以静态分析的 CSS 添加到样式表中，同时允许动态添加样式。这样可以最大化性能，同时提供动态添加样式的灵活性。

以下是使用 easy css 在构建时和运行时添加样式的一些示例：
## Build time
```js
// ~> src/index.ts
const style = css`
  color: red;
`
// in build time it will be parsed to
const style = "style"
```
然后在运行时将样式附加到 HTML：
```html
<style data-tag="🎨easy-css" data-key="✨pre-parsed" data-path="src/index.ts">
  .style {
    color: red;
  }
</style>
```
## Runtime
```js
// ~> src/index.ts
const color = "blue"
const style = css`
  color: ${color};
`
// in build time it will be parsed to
const style = css.collect(`
  color: ${color};
`, "style", "src/index.ts") // get style path in dev mode
```
然后在运行时将样式附加到 HTML：
```html
<style data-tag="🎨easy-css" data-key="style" data-path="src/index.ts">
  .style {
    color: blue;
  }
</style>
```

# Styled component
在 easy css 中，我们不会提供现成的 styled components，因为市面上有太多不同的框架。然而，easy css 提供了 `styled.xxx` 或 `styled(xxx)` 的预解析机制，使编写自己的 styled components 非常容易。

Here are some rules:
```js
const style = styled.div`
  color: red;
`
// in build time it will be parsed to
const style = styled.div("style")
```
```js
const style = styled.div`
  color: ${color};
`
// in build time it will be parsed to
const style = styled.div(`
  color: ${color};
`, "style", "dev/path")
```
```js
const style = styled.div({
  color: "red"
})
// in build time it will be parsed to
const style = styled.div("style")
```
```js
const style = styled.div({
  color
})
// in build time it will be parsed to
const style = styled.div({ 
  color 
}, "style", "dev/path")
```
值得注意的是，所有使用 `styled.xxx` 或 `styled(xxx)` 的样式默认都是作用域样式（也就是说，有一个随机字符串作为其后缀！）。

例如，让我们编写一个简单的 React styled-component：
```jsx
import { type StyleType, css } from "@iandx/easy-css"

function styled<T>(Tag) {
  return(cssStringOrName, name?, path?) => {
    if (name) {
      // meaning it's not pre-parsed in build time, so you should manually collect it
      css.collect(cssStringOrName, name, path)
    }
    return props => (
      <Tag {...props} className={name ?? cssStringOrName}/>
    )
  }
}
```
然后你可以像这样使用它：
```ts
const Div = styled("div")`
  color: red;
`
const MyCompWithClass = styled(MyComp)`
  font-size: 20px;
`
```
🌟 如果你已经使用 easy CSS 构建了一个 styled-components 的库，欢迎将其添加到 packages/styled-components 目录并提交 Pull Request。

