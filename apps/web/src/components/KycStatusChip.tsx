"use client"

import { useAccount } from 'wagmi'

export function KycStatusChip() {
  const { isConnected } = useAccount()
  const status = isConnected ? 'Tier: Pro (example)' : 'Not connected'
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm">
      <span className={`h-2.5 w-2.5 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-500'}`} />
      {status}
    </span>
  )
}