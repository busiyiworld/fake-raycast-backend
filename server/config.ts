import { Config } from "./types"

export const config: Config = {
  defaultRaycastModel: "openai-gpt-3.5-turbo",
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
  temperature: 0.5,
  translate: {
    model: "gpt-3.5-turbo"
  }
}
