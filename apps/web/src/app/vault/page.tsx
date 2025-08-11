import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })

export default function VaultPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Vault</h1>
        <WalletConnectButton />
      </header>
      <section className="rounded-lg border border-white/10 p-4">
        <h2 className="font-medium mb-2">Positions</h2>
        <p className="opacity-70 text-sm">Your collateral, debt, LTV, and health factor will appear here.</p>
      </section>
    </main>
  )
}