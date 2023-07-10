import { defineConfig } from "vite"
import easyCss from "vite-plugin-easy-css"
import atomic from "@iandx/easy-css-atomic"
import utility from "@iandx/easy-css-utility"

export default defineConfig({
  server: {
    port: 26660
  },
  sourceMap: true,
  plugins: [easyCss({
    utilities: [{
      easyFuncMap: atomic
    }, {
      easyFuncMap: utility
    }]
  })]
})
