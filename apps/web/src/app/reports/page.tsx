import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })

export default function ReportsPage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Reports</h1>
        <WalletConnectButton />
      </header>
      <section className="rounded-lg border border-white/10 p-4">
        <h2 className="font-medium mb-2">Proof of Reserves & Composition</h2>
        <p className="opacity-70 text-sm">Latest PoR and reserve breakdown charts will appear here.</p>
      </section>
    </main>
  )
}