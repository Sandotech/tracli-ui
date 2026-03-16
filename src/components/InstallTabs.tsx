import { useState, useMemo } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { useInstallerStore, type PackageManager } from '../store/useInstallerStore'

const PACKAGE_NAME = '@sandotech/tracli-cli'
const PACKAGE_MANAGERS: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun']

const INSTALL_COMMAND: Record<PackageManager, string> = {
  npm: `npm install -g ${PACKAGE_NAME}`,
  pnpm: `pnpm add -g ${PACKAGE_NAME}`,
  yarn: `yarn global add ${PACKAGE_NAME}`,
  bun: `bun add -g ${PACKAGE_NAME}`,
}

export function InstallTabs() {
  const packageManager = useInstallerStore((s) => s.packageManager)
  const setPackageManager = useInstallerStore((s) => s.setPackageManager)
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle')

  const snippet = useMemo(() => {
    return `${INSTALL_COMMAND[packageManager]}\ntracli --help`
  }, [packageManager])

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopyState('copied')
      setTimeout(() => setCopyState('idle'), 2000)
    } catch {
      // Fallback or error handling
    }
  }

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-brand/10 backdrop-blur-md">
      <div className="flex border-b border-white/10 bg-white/5 px-4 pt-3 items-center justify-between">
        <div className="flex gap-2 pb-3 items-center">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex gap-1" role="tablist">
          {PACKAGE_MANAGERS.map((pm) => {
            // @ts-ignore
            const selected = pm === packageManager
            return (
              <button
                key={pm}
                // @ts-ignore
                onClick={() => setPackageManager(pm)}
                role="tab"
                aria-selected={selected}
                className={`relative px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  selected
                    ? 'text-brand-light bg-brand/10 rounded-t-lg'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-t-lg'
                }`}
              >
                {pm}
                {selected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative group bg-[#0c0c0c]">
        <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
          <div className="flex select-none text-slate-600 mb-4 items-center gap-2 border-b border-white/5 pb-2">
             <Terminal className="w-4 h-4" /> <span className="text-xs uppercase tracking-wider font-semibold">Terminal</span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-3 group/line">
                <span className="select-none text-brand font-bold">$</span>
                <span className="text-slate-100">{INSTALL_COMMAND[packageManager]}</span>
            </div>
            <div className="flex gap-3 group/line">
                <span className="select-none text-brand font-bold">$</span>
                <span className="text-slate-100">tracli --help</span>
            </div>
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          className="absolute right-4 top-16 rounded-lg bg-white/10 p-2 text-slate-400 opacity-0 transition-all hover:bg-brand hover:text-white group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand/50"
          aria-label="Copy to clipboard"
        >
          {copyState === 'copied' ? (
            <Check className="h-4 w-4 text-white" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}
