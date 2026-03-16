import { Github, FileText, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-light to-brand text-white font-bold shadow-lg shadow-brand/20 animate-pulse">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-white">TraCli</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-brand transition-colors">Features</a>
          <a href="#installation" className="text-sm font-medium text-slate-300 hover:text-brand transition-colors">Installation</a>
          <a href="https://github.com/sandotech/tracli-cli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-brand transition-colors">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-brand transition-colors">
            <FileText className="h-4 w-4" />
            Docs
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-brand"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark-bg px-6 py-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-brand" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#installation" className="text-sm font-medium text-slate-300 hover:text-brand" onClick={() => setIsMenuOpen(false)}>Installation</a>
            <a href="https://github.com/sandotech/tracli-cli" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-brand">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-brand">
              <FileText className="h-4 w-4" />
              Docs
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
