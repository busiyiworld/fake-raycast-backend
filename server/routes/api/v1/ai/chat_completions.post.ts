import { OpenAIChatCompletion } from "~/services/completions"
export default defineEventHandler(async event => {
  try {
    return await OpenAIChatCompletion(event)
  } catch (err) {
    console.error(err)
  }
})
