import { config } from "~/config"
import { models } from "~/models"

export default defineEventHandler(() => {
  let default_models = config.defaultRaycastModel
  if (typeof default_models === "string") {
    default_models = {
      chat: default_models,
      quick_ai: default_models,
      commands: default_models,
      api: default_models,
      emoji_search: default_models
    }
  }
  return {
    default_models,
    models
  }
})
