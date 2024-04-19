import type { RaycastModel } from "~/types/raycast/models"

export const models = [
  {
    id: "openai-gpt-3.5-turbo",
    description: "GPT-3.5 Turbo models are capable and cost-effective.\n",
    model: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    speed: 4,
    intelligence: 3,
    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    context: 16,
    capabilities: {},
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    status: null
  },
  {
    id: "openai-gpt-4-turbo",
    description:
      "With 128k context, fresher knowledge and the broadest set of capabilities, GPT-4 Turbo is more powerful than GPT-4 and offered at a lower price.\n",
    model: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    speed: 2,
    intelligence: 5,
    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    context: 128,
    capabilities: {},
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    status: null
  }
] as const satisfies RaycastModel[]

export type RaycastModelID = (typeof models)[number]["id"]
export type OpenAIModel = (typeof models)[number]["model"]
