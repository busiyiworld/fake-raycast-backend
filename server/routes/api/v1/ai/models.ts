import { config } from "~/config"
import { type RaycastModelID, models } from "~/models"
import { DefaultModels } from "~/types"

const fallbackModle: RaycastModelID = "openai-gpt-3.5-turbo"

export default defineEventHandler(() => {
  let default_models: DefaultModels = {
    chat: fallbackModle,
    quick_ai: fallbackModle,
    commands: fallbackModle,
    api: fallbackModle,
    emoji_search: fallbackModle
  }

  if (config.defaultRaycastModel) {
    if (typeof config.defaultRaycastModel === "string") {
      default_models = {
        chat: config.defaultRaycastModel,
        quick_ai: config.defaultRaycastModel,
        commands: config.defaultRaycastModel,
        api: config.defaultRaycastModel,
        emoji_search: config.defaultRaycastModel
      }
    } else {
      Object.assign(default_models, config.defaultRaycastModel)
    }
  }
  return {
    default_models,
    models
  }
})
