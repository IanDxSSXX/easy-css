import { defineConfig } from "vite"
import easyCss from "vite-plugin-easy-css"
import { resolve } from "path"
import dts from "vite-plugin-dts"
import { dependencies } from "./package.json"

export default defineConfig({
  server: {
    port: 26660
  },
  sourceMap: true,
  plugins: [easyCss({ entryFile: "src/index.ts" }), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "easy-css-atomic",
      fileName: "index"
    },
    rollupOptions: {
      external: [...Object.keys(dependencies)]
    }
  }
})
