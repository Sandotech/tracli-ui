# TraCli UI

Minimal landing page (MVP) to install the TraCli CLI package.

## Stack

- React + Vite
- React Router
- Tailwind CSS
- Zustand

## Commands

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Notes

- The install page lives in `src/pages/InstallPage.tsx`.
- The installer selection state is managed with Zustand in `src/store/useInstallerStore.ts`.
