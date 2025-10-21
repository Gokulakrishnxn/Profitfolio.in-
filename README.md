# Profitfolio

A modern portfolio tracking website built with Next.js and shadcn/ui. Monitor your investments, analyze performance, and make informed decisions with our comprehensive portfolio management platform.

## Features

- 📊 **Real-time Analytics** - Get instant insights into your portfolio performance
- 💰 **Profit Tracking** - Monitor gains and losses with detailed calculations
- 📈 **Smart Insights** - AI-powered recommendations to optimize your portfolio
- 🎨 **Modern UI** - Beautiful, responsive design with shadcn/ui components
- 📱 **Mobile Friendly** - Fully responsive design that works on all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   └── dashboard.tsx      # Dashboard component
└── lib/
    └── utils.ts           # Utility functions
```

## Pages

- **Home** (`/`) - Landing page with features and call-to-action
- **Dashboard** (`/dashboard`) - Portfolio tracking dashboard with analytics

## Components

- **Dashboard** - Interactive portfolio dashboard with:
  - Portfolio summary cards
  - Asset allocation visualization
  - Holdings table with performance metrics
  - Quick action buttons

## Development

The project uses:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for consistent UI components
- **Next.js App Router** for modern routing

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js applications.

## License

MIT License
