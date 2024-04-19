import { OpenAIChatCompletion } from "~/services/completions"
import { RaycastCompletions } from "~/types/raycast/completions"
export default defineEventHandler(async event => {
  const body: RaycastCompletions = await readBody(event)
  try {
    return await OpenAIChatCompletion(event, body)
  } catch (err) {
    console.error(err)
  }
})
