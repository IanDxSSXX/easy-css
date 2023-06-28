import { type Properties } from "csstype"
export interface EasyStyle {
  cssStr: string
  subs: EasyStyleWithSub[]
}

export interface EasyStyleWithSub {
  styleStr: ((mainName: string) => string) | string
  subs: EasyStyleWithSub[]
}

export interface EasyStore {
  styleList: string[]
  conflictNameStore: Record<string, number>
  nameHashStore: Record<string, string>
  styleHashStore: Record<string, boolean>
}

export type StyleType = {
  [key in string]: key extends keyof Properties ? Properties[key] : Properties
} & Properties
