# React 19 + Tailwind v4 + shadcn/ui Template

A minimal, production-ready template with the latest technologies.

## Tech Stack

- **React** 19.2 - Latest React with concurrent features
- **Vite** 7.2 - Fast build tool with HMR
- **Tailwind CSS** 4.1 - Utility-first CSS with OKLch colors
- **shadcn/ui** - Ready for component installation
- **TypeScript** 5.9 - Type-safe development
- **ESLint** 9 - Modern flat config linting

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Type check
yarn type-check

# Build for production
yarn build

# Preview production build
yarn preview
```

## Adding shadcn/ui Components

This template is pre-configured for shadcn/ui. Add components as needed:

```bash
# Add a single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card dialog dropdown-menu

# Add all components
npx shadcn@latest add --all
```

## Adding Routing

Install react-router-dom for client-side routing:

```bash
yarn add react-router-dom
```

Then update `src/App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components (add via CLI)
├── lib/
│   └── utils.ts     # Utility functions (cn helper)
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles & Tailwind config
```

## Features

- **Path Aliases**: Use `@/` to import from `src/`
- **Dark Mode**: Toggle with `.dark` class on html/body
- **CSS Variables**: Full theme customization via CSS variables
- **OKLch Colors**: Modern perceptually uniform color space
- **Production Build**: Optimized chunks for React vendor code

## Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Type check and build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint |
| `yarn type-check` | Run TypeScript type checking |
