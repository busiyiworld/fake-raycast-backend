import OpenAI from "openai"
import type { RaycastCompletions } from "~/types"
import { type H3Event, EventHandlerRequest } from "h3"
import { config } from "~/config"

export async function OpenAIChatCompletion(
  event: H3Event<EventHandlerRequest>
) {
  const openai_message = []
  const body: RaycastCompletions = await readBody(event)
  const messages = body.messages
  let temperature = config.temperature
  for (const message of messages) {
    if ("system_instructions" in message.content) {
      openai_message.push({
        role: "system",
        content: message.content.system_instructions
      })
    }

    if ("command_instructions" in message.content) {
      openai_message.push({
        role: "system",
        content: message.content.command_instructions
      })
    }

    if ("additional_system_instructions" in body) {
      openai_message.push({
        role: "system",
        content: body.additional_system_instructions
      })
    }

    if ("text" in message.content) {
      openai_message.push({
        role: message.author,
        content: message.content.text
      })
    }

    if ("temperature" in message.content)
      temperature = message.content.temperature
  }

  const openai = new OpenAI({
    baseURL: config.baseURL,
    apiKey: config.apiKey
  })

  const rawStream = openai.beta.chat.completions.stream({
    stream: true,
    model: body.model,
    temperature,
    stop: null,
    n: 1,
    messages: openai_message
  })

  if (rawStream instanceof Error)
    throw new Error(`[AI] OpenAI Chat Completions Failed: ${rawStream}`)

  const eventStream = createEventStream(event)
  rawStream.on("content", content => {
    if (content) {
      eventStream.push(
        JSON.stringify({
          text: content
        })
      )
    }
  })
  rawStream.on("end", () => {
    eventStream.push(
      JSON.stringify({
        text: "",
        finish_reason: "stop"
      })
    )
    eventStream.close()
  })
  return eventStream.send()
}
