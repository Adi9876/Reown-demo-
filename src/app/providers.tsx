'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { createAppKit } from '@reown/appkit/react'
import { wagmiAdapter, projectId, networks } from '../appkitConfig'

const queryClient = new QueryClient();

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'Your App',
    description: 'Reown Pay Integration',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    icons: [],
  },
  features: { analytics: true }
})

export default function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

// NEXT_PUBLIC_REOWN_PROJECT_ID=929ec61408cebf3d7a5fc1df68838f38