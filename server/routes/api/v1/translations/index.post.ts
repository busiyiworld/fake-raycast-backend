import { TranslateWithAI } from "~/services/translations"

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const res = await TranslateWithAI(body)
  return res
})
