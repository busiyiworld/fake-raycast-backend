//https://nitro.unjs.io/config

import { NitroConfig } from "nitropack"

const config: NitroConfig = {
  srcDir: "server",
  preset: "vercel-edge",
  vercel: {
    // Exclude Hong Kong
    regions: [
      "arn1",
      "bom1",
      "cdg1",
      "cle1",
      "cpt1",
      "dub1",
      "fra1",
      "gru1",
      "hnd1",
      "iad1",
      "icn1",
      "kix1",
      "lhr1",
      "pdx1",
      "sfo1",
      "sin1",
      "syd1"
    ]
  },
  storage: {}
}

if (process.env.KV_NAME) {
  config.storage[process.env.KV_NAME] = { driver: "vercelKV" }
}

// 如果没有填写 RAYCAST_EMAIL，则直接转发
if (!process.env.RAYCAST_EMAIL) {
  config.routeRules = {
    "/**": {
      proxy: "https://backend.raycast.com/**"
    }
  }
}

export default config
