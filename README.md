# USDx Frontend Monorepo (Web + Subgraph + Docs)

This repository contains:
- apps/web: Next.js frontend skeleton for an RWA-enabled stablecoin app (mint/redeem, swap, auctions, compliance, reports)
- subgraph: Example The Graph subgraph (schema + manifest + mappings stubs)
- docs: Product and interaction diagrams (Mermaid source)

## Quickstart

Prerequisites:
- Node.js >= 18.18
- npm >= 9

Install dependencies:

```bash
npm install --silent
```

Run the web app in development:

```bash
npm run dev
```

Build the web app:

```bash
npm run build
```

Subgraph (example):

```bash
npm run graph:codegen
npm run graph:build
```

## Structure

```
.
├─ apps/
│  └─ web/               # Next.js (App Router) + Wagmi + Tailwind
├─ subgraph/             # The Graph example schema/manifest/mapping
└─ docs/                 # Mermaid .mmd product and interaction diagrams
```

## Environment

Copy and fill `.env` for the web app:

```
cp apps/web/.env.example apps/web/.env.local
```

Required variables:
- NEXT_PUBLIC_CHAIN_ID (e.g., 8453 for Base)
- NEXT_PUBLIC_WC_PROJECT_ID (WalletConnect project ID)

## Notes
- The subgraph is a functional example scaffold; replace addresses/ABIs and events with your deployed contracts.
- Mermaid diagrams can be rendered with `@mermaid-js/mermaid-cli` or VSCode’s Mermaid extension.
