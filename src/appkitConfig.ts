// src/appkitConfig.ts
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, type AppKitNetwork, sepolia, baseSepolia } from '@reown/appkit/networks'

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [baseSepolia]

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

