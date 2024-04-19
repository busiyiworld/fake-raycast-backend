import { Config } from "./types/config"

export const config: Config = {
  defaultRaycastModel: "openai-gpt-3.5-turbo",
  apiKey: process.env.APIKey,
  temperature: 0.5,
  translate: {
    model: "gpt-3.5-turbo"
  }
}
