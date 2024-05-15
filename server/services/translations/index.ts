import type { TranslateFrom, TranslateTo } from "~/types"
import { generateTranslationsPrompts } from "./prompts"
import OpenAI from "openai"
import type { AIGenerateContent } from "~/types/internal/ai-generate-content"
import { config } from "~/config"

export async function OpenaiGenerateContent(
  prompt: {
    role: string
    content: string
  }[],
  model: string
): Promise<AIGenerateContent> {
  const openai = new OpenAI({
    baseURL: config?.baseURL,
    apiKey: config.apiKey
  })

  const message = []
  for (const m of prompt) {
    message.push({
      role: m.role,
      content: m.content
    })
  }

  const result = await openai.chat.completions
    .create({
      stream: false,
      messages: message as any,
      temperature: config.translate?.temperature || config.temperature,
      stop: null,
      n: 1,
      model
    })
    .catch(err => {
      throw new Error(`[AI] OpenAI Chat Completions Failed: ${err}`)
    })

  if (result instanceof Error)
    throw new Error(`[AI] OpenAI Chat Completions Failed: ${result}`)

  const text = result.choices[0].message.content!
  const split = text.split("\n")
  const detectedSourceLanguage = split[0]
  const translatedText = split.slice(1).join("\n")

  return {
    content: translatedText,
    detectedSourceLanguage
  }
}

export async function TranslateWithAI(
  body: TranslateFrom
): Promise<TranslateTo> {
  const prompts = generateTranslationsPrompts(body.target, body.q)
  const model = config.translate.model
  const { content, detectedSourceLanguage } = await OpenaiGenerateContent(
    prompts,
    model
  )

  const res = {
    data: {
      translations: [
        {
          translatedText: content
        }
      ]
    }
  } as TranslateTo

  if (detectedSourceLanguage)
    res.data.translations[0].detectedSourceLanguage = detectedSourceLanguage

  return res
}
