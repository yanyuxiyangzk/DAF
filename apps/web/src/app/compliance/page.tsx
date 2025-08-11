import dynamic from 'next/dynamic'
const WalletConnectButton = dynamic(() => import('@/components/WalletConnectButton').then(m => m.WalletConnectButton), { ssr: false })
const KycStatusChip = dynamic(() => import('@/components/KycStatusChip').then(m => m.KycStatusChip), { ssr: false })

export default function CompliancePage() {
  return (
    <main className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Compliance</h1>
        <WalletConnectButton />
      </header>
      <section className="rounded-lg border border-white/10 p-4 flex items-center justify-between">
        <div>
          <h2 className="font-medium">KYC Status</h2>
          <p className="opacity-70 text-sm">Connect wallet to view your tier and limits.</p>
        </div>
        <KycStatusChip />
      </section>
    </main>
  )
}