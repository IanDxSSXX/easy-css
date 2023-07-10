import { describe, it, assert } from "vitest"
import { css, type StyleType } from "@iandx/easy-css"

const styled = {
  div: (cssStringOrName: StyleType | TemplateStringsArray, name?: string, path?: string) => {
    if (name) {
      css.collect(cssStringOrName as any, name, path)
    }
    return name ?? cssStringOrName
  }
}

describe("Basic style", () => {
  it("Variable", () => {
    const ok = styled.div`
      color: red;
    `
    assert.equal(ok, "ok")
  })
})
