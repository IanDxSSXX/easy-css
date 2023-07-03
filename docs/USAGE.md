
# Usage
The syntax of Easy-css is almost identical to that of other CSS in JS frameworks. Therefore, let us quickly review them before we dive into one of the highlights of Easy-css - global and scoped CSS classes.

* [Syntax](#syntax)
* [Global and scoped names](#global-and-scoped-names)
* [Name conflicts handling](#name-conflicts-handling)
* [Static pre-parsing](#static-pre-parsing)

# Syntax
```js
import { css } from "@iandx/easy-css"

const style = css`
  color: red;
`
```
Generated CSS:
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
Generated CSS:
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
Generated CSS:
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
Generated CSS:
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
# Global and scoped names
## Global named css from a variable
```js
const myStyle = css`
  color: red;
`
```
Generated CSS:
```css
.my-style {
  color: red;
}
```
## Global named css from an object
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
Generated CSS:
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
## Global named css from a class member
```js
class MyClass {
  myClassStyle = css`
    width: 100px;
  `
}
new MyClass()
```
Generated CSS:
```css
.my-class-style {
  width:100px;
}
```

## Global named css with parameters
Works only with an arrow function
```js
const myStyle = (myParam1, param2) => css`
  color: ${myParam1};
  font-size: ${param2}px;
`

myStyle("red", "16")
myStyle("blue", "20")
```
Generated CSS:
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
## Scoped named css
Declare a named css with a random string at the end with any variable that ends with a "$" as scoped named css.
```js
const myStyle$ = css`
  color: red;
  font-size: 16px;
`
```
Generated CSS:
```css
.my-style-b1i9aj {
  color: red;
  font-size: 16px;
}
```

## Scoped css
If called easy-css in a situation other than those mentioned above, the class name will be a random string(because there's not any name that can be used as a className). 
```js
css`
  cursor: pointer;
`
```
Generated CSS:
```css
.easy-css-aje31h {
  cursor: pointer;
}
```

# Name conflicts handling
Global CSS names may lead to naming conflicts. In Easy-css, we reuse the name for CSS with identical content. Let's illustrate this issue through a few examples.

## When two CSS rules have the same content, the rest ones will inherit the name of the first declaration in Easy-css.
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
Generated CSS:
```css
.my-style {
  display: flex;
  cursor: pointer;
}
```
## Even if the order of the properties is different, they'll still have the same names.
```js
const myStyle = css`
  cursor: pointer;
  display: flex;
` // ~> "myStyle"

css`
  display: flex;
  cursor: pointer;
` // ~> "myStyle"
```
Generated CSS:
```css
.my-style {
  display: flex;
  cursor: pointer;
}
```
## Underline trimming
To avoid variable declaration conflict, you can add underline as prefix or appendix, and easy-css will automatically trim them.
```js
const myStyle = css`
  padding: 20px;
  margin: auto;
`) // ~> "my-style"

const myStyle_ = (color) => css`
  padding: ${color};
`) // ~> `my-style-${color}`
```
# Object styles
css也默认支持object style

# Static pre-parsing
为了避免runtime的性能损耗，easy-css默认支持在build time识别静态的css类型