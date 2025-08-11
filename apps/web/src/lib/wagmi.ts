import { createConfig, http } from 'wagmi'
import { mainnet, base, arbitrum, optimism } from 'viem/chains'
import { injected } from 'wagmi/connectors'
import { walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || ''

export const wagmiConfig = createConfig({
  chains: [base, mainnet, arbitrum, optimism],
  connectors: [
    injected(),
    walletConnect({ projectId })
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
})