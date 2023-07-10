
Atomic CSS and utility-first frameworks are rapidly rising in popularity as a simple yet powerful approach to styling components.

Atomic CSS involves defining styles for short "atom" classes that target a single style declaration, such as `.text-red-500()` for red text or `.truncate()` for truncating text. You compose elements by stacking these classes  allowing extremely modular and reusable styles.

Atomic CSS offers many benefits over traditional CSS:

* Scalability: Easily build complex designs through composition of atomic styles.
* Simple: Class names map directly to CSS declarations for an intuitive API.
* Flexibility: Only include the exact styles your project needs.

Many developers are now adopting atomic-first frameworks that implement this concept at scale like tailwindcss.


Therefore, Easy CSS provides a very convenient way to use atomic and utility classes by using JavaScript syntax for better autocompletion and using JSDoc for better hints. Additionally, through the use of plugins, it becomes very easy to customize utility classes.

# Atomic
The library `@iandx/easy-css-atomic` contains all CSS stylesheets and their corresponding values can be obtained through function calls. The first parameter of the function call is the value.

```jsx
import { marginTop } from "@iandx/easy-css-atomic"

function MyComp() {
  return <div className={marginTop("20px")} />
}
```
And you can display the specific CSS description of this style by hovering over it:
![atomic](./imgs/atomic0.png)


# Utility
The library `@iandx/easy-css-utility` contains all utility classes from [tailwindcss](https://tailwindcss.com/).

```jsx
import { textRed100 } from "@iandx/easy-css-utility"

function MyComp() {
  return <div className={textRed100()} />
}
```
And you can also hover over it to see its class definition:
![atomic](./imgs/atomic1.png)

# Multiple classes
You can integrate easy-css with classname strings utilities like [clsx](https://github.com/lukeed/clsx)
```jsx
import { marginTop, paddingRight } from "@iandx/easy-css-atomic"
import { textRed100, fontSemibold, text4xl } from "@iandx/easy-css-utility"
import clsx from "clsx"

function MyComp() {
  return (
    <div className={clsx(
      marginTop("20px"),
      paddingRight("20px"),
      fontSemibold(),
      textRed100(),
      text4xl()
    )}>
      hello
    </div>
  )
}
```
Will result in styles:
```html
<style data-tag="🎨easy-css" data-key="text-red100">.text-red100{color:rgb(254 226 226);}</style>
<style data-tag="🎨easy-css" data-key="margin-top-20px">.margin-top-20px{margin-top:20px;}</style>
<style data-tag="🎨easy-css" data-key="padding-right-20px">.padding-right-20px{padding-right:20px;}</style>
<style data-tag="🎨easy-css" data-key="font-semibold">.font-semibold{font-weight:600;}</style>
<style data-tag="🎨easy-css" data-key="text4xl">.text4xl{font-size:2.25rem;line-height:2.5rem;}</style>
```

# Pre-parsing
You can parse these atomic classes into pure strings of classnames by setting this at config(babel or vite):

```js
import atomic from "@iandx/easy-css-atomic"
import utility from "@iandx/easy-css-utility"

export default defineConfig({
  plugins: [easyCss({
    utilities: [{
      easyFuncMap: atomic
    }, {
      easyFuncMap: utility
    }]
  })],
})
```
Then at build time, the code above will be parsed into:
```js
function MyComp() {
  return (
    <div className={clsx(
      "margin-top-20px", 
      "padding-right-20px", 
      "font-semibold", 
      "text-red100", 
      "text4xl"
    )}>
      hello
    </div>
  )
}
```
This will save a lot of runtime!

## Safe name
Use safe name to resolve potential pre-parsing naming conflicts:

```js
import atomic from "@iandx/easy-css-atomic"
import utility from "@iandx/easy-css-utility"

export default defineConfig({
  plugins: [easyCss({
    utilities: [{
      easyFuncMap: atomic,
      safeName: "A"
    }, {
      easyFuncMap: utility,
      safeName: "U"
    }]
  })],
})
```
Then in build time, this:
```js
const myClassNames = clsx(
    A.marginTop("20px"),
    paddingRight("20px"),
    U.fontSemibold(),
    textRed100(),
    text4xl()
)
```
will be parsed into:
```js
const myClassNames = clsx(
    "margin-top-20px",
    paddingRight("20px"),  // won't be pre-parsed
    "font-semibold",
    textRed100(),  // won't be pre-parsed
    text4xl()  // won't be pre-parsed
)
```
# Custom utilities with pre-parsing
You can easily build your own class utility package and utilize easy-css's build time pre-parsing abilities.

1. Build your utility package
```js
// ~> ./myUtility
import { css } from "@iandx/easy-css"

export const largeRed = () => css`
    color: red;
    font-size: large
`

export const flexWrapper = direction => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
`
```
2. Pre-parsing
In confiv
```js
import * as myUtility from "./myUtility"

export default defineConfig({
  plugins: [easyCss({
    utilities: [{
      easyFuncMap: myUtility
    }]
  })],
})
```
3. Happily coding
```js
import { flexWrapper, largeRed } from "./myUtility"

const myClassNames = clsx(
    flexWrapper("row"),
    largeRed()
)
```
be pre-parsed to
```js
import { flexWrapper, largeRed } from "./myUtility"

const myClassNames = clsx(
    "flex-wrapper-row",
    "large-red"
)
```
