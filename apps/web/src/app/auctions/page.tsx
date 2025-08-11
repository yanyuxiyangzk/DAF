import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })
const AuctionCard = dynamic(() => import('@/components/AuctionCard').then(m => m.AuctionCard), { ssr: false })

export default function AuctionsPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Auctions</h1>
        <WalletConnectButton />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
    </main>
  )
}