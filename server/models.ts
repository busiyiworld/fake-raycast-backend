import type { RaycastModel } from "~/types"

export const models = [
  {
    id: "openai-gpt-3.5-turbo",
    description: "GPT-3.5 Turbo models are capable and cost-effective.\n",
    model: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    speed: 4,
    intelligence: 3,
    context: 16,

    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    capabilities: {},
    abilities: {},
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    availability: "public",
    status: null
  },
  {
    id: "openai-gpt-4-turbo",
    description:
      "With 128k context, fresher knowledge and the broadest set of capabilities, GPT-4 Turbo is more powerful than GPT-4 and offered at a lower price.\n",
    model: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    speed: 3,
    intelligence: 5,
    context: 128,

    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    capabilities: {},
    abilities: {},
    availability: "public",
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    status: null
  },
  {
    id: "openai-gpt-4o",
    description:
      "GPT-4o is our most advanced multimodal model that’s faster and cheaper than GPT-4 Turbo with stronger vision capabilities. \n",
    model: "gpt-4o",
    name: "GPT-4o",
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    speed: 4,
    intelligence: 5,
    context: 128,
    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    capabilities: {},
    abilities: {},
    availability: "public",
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    status: null
  },
  {
    id: "openai-gpt-4o-mini",
    description: "More than 60% cheaper than GPT-3.5 Turbo. \n",
    model: "gpt-4o-mini",
    name: "GPT-4o mini",
    features: ["chat", "quick_ai", "commands", "api", "emoji_search"],
    speed: 4,
    intelligence: 4,
    context: 128,
    provider: "openai",
    provider_name: "OpenAI",
    provider_brand: "openai",
    requires_better_ai: false,
    capabilities: {},
    abilities: {},
    availability: "public",
    suggestions: ["chat", "quick_ai", "commands"],
    in_better_ai_subscription: false,
    status: null
  }
] as const satisfies RaycastModel[]

export type RaycastModelID = (typeof models)[number]["id"]
export type OpenAIModel = (typeof models)[number]["model"]
