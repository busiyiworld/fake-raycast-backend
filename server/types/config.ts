import { OpenAIModel, RaycastModelID } from "~/models"

export interface DefaultModels {
  chat: RaycastModelID
  quick_ai: RaycastModelID
  commands: RaycastModelID
  api: RaycastModelID
  emoji_search: RaycastModelID
}

export interface Config {
  defaultRaycastModel: DefaultModels | RaycastModelID
  apiKey: string
  baseURL?: string
  /** default */
  temperature: number
  translate: {
    temperature?: number
    model: OpenAIModel
  }
}
