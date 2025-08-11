"use client"

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { walletConnect } from 'wagmi/connectors'

export function WalletConnectButton() {
  const { isConnected, address } = useAccount()
  const { connect, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  const wc = walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '' })
  const inj = injected()

  if (isConnected) {
    return (
      <button
        className="px-3 py-1.5 rounded-md bg-brand hover:brightness-110 text-white text-sm"
        onClick={() => disconnect()}
      >
        {address?.slice(0, 6)}...{address?.slice(-4)} Disconnect
      </button>
    )
  }

  return (
    <div className="flex gap-2">
      <button
        disabled={isPending}
        className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-sm"
        onClick={() => connect({ connector: inj })}
      >
        Injected
      </button>
      <button
        disabled={isPending}
        className="px-3 py-1.5 rounded-md bg-brand hover:brightness-110 text-white text-sm"
        onClick={() => connect({ connector: wc })}
      >
        WalletConnect
      </button>
    </div>
  )
}