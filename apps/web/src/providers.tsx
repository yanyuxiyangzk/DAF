"use client"

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { wagmiConfig } from '@/lib/wagmi'
import { ReactNode, useRef } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const queryClientRef = useRef<QueryClient | null>(null)
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}