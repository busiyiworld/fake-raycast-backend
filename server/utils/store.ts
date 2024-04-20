import process from "node:process"
import { destr } from "destr"

export function transformToString(obj: any) {
  if (typeof obj === "object") return JSON.stringify(obj)
  return obj
}

export function transformToObj<T>(str: string) {
  return destr<T>(str)
}
export function setStore(key: keyof typeof process.env, value: any) {
  process.env[key] = transformToString(value)
}

export function getStore<T>(key: keyof typeof process.env) {
  return transformToObj(process.env[key] || "") as T
}

export function removeStore(key: keyof typeof process.env) {
  process.env[key] = ""
}
