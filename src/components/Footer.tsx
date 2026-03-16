import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-bg py-12 relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-light to-brand text-xs font-bold text-white">
              T
            </div>
            <span className="text-sm font-semibold text-slate-300">TraCli</span>
            <span className="text-xs text-slate-500">by Sandotech</span>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms</a>
            <a href="#" className="hover:text-brand transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/sandotech" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-slate-500 hover:text-brand transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Sandotech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
