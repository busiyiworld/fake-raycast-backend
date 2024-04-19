import { OpenAIModel, RaycastModelID } from "~/models"

export interface Config {
  defaultRaycastModel:
    | {
        chat: RaycastModelID
        quick_ai: RaycastModelID
        commands: RaycastModelID
        emoji_search: RaycastModelID
        api: RaycastModelID
      }
    | RaycastModelID
  apiKey: string
  baseURL?: string
  /** default */
  temperature: number
  translate: {
    temperature?: number
    model: OpenAIModel
  }
}
