import process from 'node:process'
import { transformToObj, transformToString } from './others.util'

export function setStore(key: keyof typeof process.env, value: any) {
  process.env[key] = transformToString(value)
}

export function getStore<T>(key: keyof typeof process.env) {
  return transformToObj(process.env[key] || '') as T
}

export function removeStore(key: keyof typeof process.env) {
  process.env[key] = ''
}
