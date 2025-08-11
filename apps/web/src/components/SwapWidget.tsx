"use client"

import { useState } from 'react'

const tokens = ['USDx', 'USDC', 'DAI']

export function SwapWidget() {
  const [fromToken, setFromToken] = useState('USDx')
  const [toToken, setToToken] = useState('USDC')
  const [amount, setAmount] = useState('')

  return (
    <section className="max-w-md rounded-lg border border-white/10 p-4 space-y-3">
      <div className="text-sm opacity-70">Swap between stablecoins (demo)</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm opacity-70">From</label>
          <select value={fromToken} onChange={(e) => setFromToken(e.target.value)} className="w-full mt-1 bg-transparent border border-white/10 rounded-md p-2">
            {tokens.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm opacity-70">To</label>
          <select value={toToken} onChange={(e) => setToToken(e.target.value)} className="w-full mt-1 bg-transparent border border-white/10 rounded-md p-2">
            {tokens.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm opacity-70">Amount</label>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" className="w-full mt-1 bg-transparent border border-white/10 rounded-md p-2" />
      </div>
      <button className="w-full rounded-md bg-brand hover:brightness-110 text-white py-2">Preview & Swap</button>
    </section>
  )
}