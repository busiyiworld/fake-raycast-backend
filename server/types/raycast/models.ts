export interface RaycastModel {
  id: string
  description: string
  model: string
  name: string
  features: string[]
  speed: number
  intelligence: number
  provider: string
  provider_name: string
  provider_brand: string
  requires_better_ai: boolean
  context: number
  capabilities: {
    [key: string]: string
  }
  suggestions: string[]
  in_better_ai_subscription: boolean
  status?: any
  availability?: "public" | "deprecated"
  abilities?: {
    [key: string]: {
      toggleable: boolean
    }
  }
}
