import { defineConfig } from "vite"
import easyCss from "vite-plugin-easy-css"

export default defineConfig({
  server: {
    port: 26660
  },
  sourceMap: true,
  plugins: [easyCss()]
})
