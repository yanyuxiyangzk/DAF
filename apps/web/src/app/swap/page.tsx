import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })
const SwapWidget = dynamic(() => import('@/components/SwapWidget').then(m => m.SwapWidget), { ssr: false })

export default function SwapPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Stable Swap</h1>
        <WalletConnectButton />
      </header>
      <SwapWidget />
    </main>
  )
}