import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: 'USDx App',
  description: 'RWA-enabled stablecoin app with mint/redeem, swap, and auctions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="container py-6">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}