import { useMemo, useState } from 'react'
import { useInstallerStore, type PackageManager } from '../store/useInstallerStore'

const PACKAGE_NAME = '@sandotech/tracli-cli'
const PACKAGE_MANAGERS: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun']

const INSTALL_COMMAND: Record<PackageManager, string> = {
  npm: `npm install -g ${PACKAGE_NAME}`,
  pnpm: `pnpm add -g ${PACKAGE_NAME}`,
  yarn: `yarn global add ${PACKAGE_NAME}`,
  bun: `bun add -g ${PACKAGE_NAME}`,
}

export default function InstallPage() {
  const packageManager = useInstallerStore((s) => s.packageManager)
  const setPackageManager = useInstallerStore((s) => s.setPackageManager)
  const [copyState, setCopyState] = useState<'Copy' | 'Copied'>('Copy')

  const snippet = useMemo(() => {
    return `${INSTALL_COMMAND[packageManager]}\ntracli --help`
  }, [packageManager])

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(snippet)
      setCopyState('Copied')
      window.setTimeout(() => setCopyState('Copy'), 1500)
    } catch {
      setCopyState('Copy')
    }
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
        <header className="flex items-center justify-between py-8">
          <div className="text-sm font-semibold tracking-wide text-slate-200">
            TraCli
          </div>
          <div className="text-xs text-slate-400">Requires Node 18+</div>
        </header>

        <main className="flex flex-1 flex-col justify-center py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
            Install tracli-cli
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-300">
            The zero-friction work logger for terminal-first developers.
          </p>

          <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-200">Install</p>
                <p className="mt-1 text-xs text-slate-400">
                  Package: {PACKAGE_NAME}
                </p>
              </div>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Package manager"
              >
                {PACKAGE_MANAGERS.map((pm) => {
                  const selected = pm === packageManager
                  return (
                    <button
                      key={pm}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={
                        selected
                          ? 'rounded-full bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-950'
                          : 'rounded-full bg-slate-950/40 px-3 py-1 text-sm font-medium text-slate-200 hover:bg-slate-800'
                      }
                      onClick={() => setPackageManager(pm)}
                    >
                      {pm}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <pre className="m-0 flex-1 overflow-x-auto text-sm leading-6 text-slate-100">
                <code className="font-mono">{snippet}</code>
              </pre>

              <button
                type="button"
                onClick={copyToClipboard}
                className="shrink-0 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {copyState}
              </button>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-sm font-semibold text-slate-200">Quick start</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-mono text-slate-100">tracli track</span>
                <span className="text-slate-500"> — </span>
                guided prompt to log work
              </li>
              <li>
                <span className="font-mono text-slate-100">tracli status</span>
                <span className="text-slate-500"> — </span>
                weekly summary as an ASCII table
              </li>
              <li>
                <span className="font-mono text-slate-100">tracli sync</span>
                <span className="text-slate-500"> — </span>
                push unsynced local logs to the API
              </li>
            </ul>
          </section>
        </main>

        <footer className="py-8 text-xs text-slate-500">
          2026 &copy; Sandotech. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
