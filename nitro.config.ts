//https://nitro.unjs.io/config

import { NitroConfig } from "nitropack"

const config: NitroConfig = {
  srcDir: "server",
  preset: "vercel-edge",
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
