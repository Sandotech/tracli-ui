# TraCli UI

Professional landing page and documentation site for the TraCli CLI package.

## Overview

TraCli UI is a modern, responsive web application built to showcase the features of the TraCli command-line interface. It provides an interactive installation guide, feature highlights, and a glimpse into the terminal-first workflow.

## Features

- **Interactive Installer**: Tabbed interface to easily copy installation commands for npm, pnpm, yarn, and bun.
- **Modern UI/UX**: Built with Tailwind CSS, featuring smooth animations, glassmorphism effects, and a dark mode aesthetic.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Component-Based Architecture**: Modular components for maintainability and scalability.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router v7

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, FeatureCard, etc.)
├── pages/          # Page views (InstallPage)
├── store/          # Global state management
├── assets/         # Static assets
└── main.tsx        # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## License

MIT © [Sandotech](https://github.com/sandotech)
