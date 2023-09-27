import { type EasyStore } from "./types"

let head: any

export const easyStore: EasyStore = {
  styleList: [],
  nameHashStore: {},
  styleHashStore: {}
}

export function clearStore() {
  easyStore.nameHashStore = {}
  easyStore.styleHashStore = {}
  easyStore.styleList = []
}

export function preParseEasyStore(newEasyStore: EasyStore, path?: string) {
  easyStore.styleList = [...easyStore.styleList, ...newEasyStore.styleList]
  easyStore.nameHashStore = { ...easyStore.nameHashStore, ...newEasyStore.nameHashStore }
  easyStore.styleHashStore = { ...easyStore.styleHashStore, ...newEasyStore.styleHashStore }
  if (typeof document !== "undefined" && easyStore.styleList.length > 0) {
    injectStyleToDOM(newEasyStore.styleList.join(""), "✨pre-parsed", path)
  }
}

export function geneEasyStyle() {
  return `<style data-tag="🎨easy-css">${easyStore.styleList.join("")}</style>`
}

export function injectStyle(style: string, key: string, filePath?: string) {
  easyStore.styleList.push(style)
  injectStyleToDOM(style, key, filePath)
}

export function injectStyleToDOM(style: string, key: string, filePath?: string) {
  if (typeof document === "undefined") return
  if (!head) head = document.head || document.getElementsByTagName("head")[0]
  if (!head) return
  const styleEl = document.createElement("style")
  styleEl.innerHTML = style
  styleEl.dataset.tag = "🎨easy-css"
  styleEl.dataset.key = key
  if (filePath) styleEl.dataset.path = filePath
  document.head.appendChild(styleEl)
}
