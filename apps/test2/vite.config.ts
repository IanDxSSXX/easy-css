import { defineConfig } from "vite"
import easyCss from "vite-plugin-easy-css"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  server: {
    port: 26660
  },
  sourceMap: true,
  plugins: [easyCss(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "component",
      fileName: "index"
    }
  }
})
