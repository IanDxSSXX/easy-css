import { easyStore } from "@iandx/easy-css"

export type EasyStore = typeof easyStore

export function abandonEasyStore(oldEasyStore: EasyStore) {
  easyStore.styleList = easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s))
  easyStore.conflictNameStore = Object.fromEntries(
    Object.entries(easyStore.conflictNameStore).filter(([key]) => (
      !Object.keys(oldEasyStore.conflictNameStore).includes(key))
    )
  )
  easyStore.nameHashStore = Object.fromEntries(
    Object.entries(easyStore.nameHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.nameHashStore).includes(key))
    )
  )
  easyStore.styleHashStore = Object.fromEntries(
    Object.entries(easyStore.styleHashStore).filter(([key]) => (
      !Object.keys(oldEasyStore.styleHashStore).includes(key))
    )
  )
}

export function diffEasyStore(oldEasyStore: EasyStore): EasyStore {
  return {
    styleList: easyStore.styleList.filter(s => !oldEasyStore.styleList.includes(s)),
    conflictNameStore: Object.fromEntries(
      Object.entries(easyStore.conflictNameStore).filter(([key]) => (
        oldEasyStore.conflictNameStore[key] === undefined
      ))
    ),
    nameHashStore: Object.fromEntries(
      Object.entries(easyStore.nameHashStore).filter(([key]) => (
        oldEasyStore.nameHashStore[key] === undefined
      ))
    ),
    styleHashStore: Object.fromEntries(
      Object.entries(easyStore.styleHashStore).filter(([key]) => (
        oldEasyStore.styleHashStore[key] === undefined
      ))
    )
  }
}
