import { create } from 'zustand'

export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun'

type InstallerState = {
  packageManager: PackageManager
  setPackageManager: (packageManager: PackageManager) => void
}

export const useInstallerStore = create<InstallerState>((set) => ({
  packageManager: 'npm',
  setPackageManager: (packageManager) => set({ packageManager }),
}))
