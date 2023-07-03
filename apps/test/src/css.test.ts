import { describe, it, assert } from "vitest"
import { css } from "@iandx/easy-css"

describe("Basic css name generation", () => {
  it("Variable", () => {
    const ok = css`
      color: red;
    `
    assert.equal(ok, "ok")
  })

  it("Object property", () => {
    const obj = {
      so: css`
        color: blue;
      `
    }
    assert.equal(obj.so, "so")
  })

  it("Class member", () => {
    class MyCls {
      static hi = css`
        color: green;
      `
    }
    assert.equal(MyCls.hi, "hi")
  })
})

describe("Name restore or conflict", () => {
  it("Restore name", () => {
    const hello = css`
      color: yellow;
    `
    const whatNameShouldItBe = css`
      color: yellow;
    `
    assert.equal(whatNameShouldItBe, "hello")
  })

  it("Duplicated name", () => {
    const world = css`
      color: black;
    `
    const object = {
      world: css`
        color: white;
      `
    }
    assert.equal(object.world, "world1")
  })
})

describe("Arbitrary css name generation", () => {
  const simpleWrapper = (value: any) => value

  it("Random name", () => {
    const iDontKnowTheName = simpleWrapper(css`
        color: pink;
    `)
    assert.isTrue(iDontKnowTheName.startsWith("easy-css"))
  })

  it("Different random name", () => {
    const random1 = simpleWrapper(css`
        color: cyan;
    `)
    const random2 = simpleWrapper(css`
      color: gray;
   `)
    assert.notEqual(random1, random2)
  })

  it("Restore name", () => {
    const obj = {
      itShouldRestoreSo: simpleWrapper(css`
        color: blue;
      `)
    }
    assert.equal(obj.itShouldRestoreSo, "so")
  })
})
