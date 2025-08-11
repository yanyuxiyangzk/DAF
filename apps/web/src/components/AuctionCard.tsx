export function AuctionCard() {
  return (
    <div className="rounded-lg border border-white/10 p-4 space-y-2">
      <div className="text-sm opacity-70">Dutch Auction (demo)</div>
      <div className="font-medium">Pay: USDC, Receive: USDx</div>
      <div className="text-sm">Amount: 10,000 USDC</div>
      <div className="text-sm">Current Price: 0.998 USDx/USDC</div>
      <button className="w-full rounded-md bg-white/10 hover:bg-white/20 py-2 text-sm">Bid</button>
    </div>
  )
}