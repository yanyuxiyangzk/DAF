import Link from 'next/link'
import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })

export default function Page() {
  return (
    <main className="space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">USDx Dashboard</h1>
        <WalletConnectButton />
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/mint">
          <div className="text-lg font-medium">Mint / Redeem</div>
          <div className="text-sm opacity-70">Deposit collateral and mint USDx, or repay and redeem.</div>
        </Link>
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/swap">
          <div className="text-lg font-medium">Stable Swap</div>
          <div className="text-sm opacity-70">Low-slippage swaps between stablecoins.</div>
        </Link>
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/auctions">
          <div className="text-lg font-medium">Auctions</div>
          <div className="text-sm opacity-70">Participate in liquidation and surplus auctions.</div>
        </Link>
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/vault">
          <div className="text-lg font-medium">Vault</div>
          <div className="text-sm opacity-70">View positions, health, and fees.</div>
        </Link>
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/compliance">
          <div className="text-lg font-medium">Compliance</div>
          <div className="text-sm opacity-70">KYC status and limits.</div>
        </Link>
        <Link className="rounded-lg border border-white/10 p-4 hover:bg-white/5" href="/reports">
          <div className="text-lg font-medium">Reports</div>
          <div className="text-sm opacity-70">PoR, reserves composition, NAV history.</div>
        </Link>
      </section>
    </main>
  )
}