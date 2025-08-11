import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })

export default function MintPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Mint / Redeem</h1>
        <WalletConnectButton />
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-lg border border-white/10 p-4">
          <h2 className="font-medium mb-2">Deposit & Mint USDx</h2>
          <p className="opacity-70 text-sm">Select collateral, enter amount, preview LTV and fees, then mint.</p>
        </section>
        <section className="rounded-lg border border-white/10 p-4">
          <h2 className="font-medium mb-2">Repay & Redeem</h2>
          <p className="opacity-70 text-sm">Repay USDx debt and redeem collateral or stablecoins via PSM.</p>
        </section>
      </div>
    </main>
  )
}