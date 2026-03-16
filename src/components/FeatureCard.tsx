import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-brand/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-brand/5">
      <div className="mb-4 inline-flex rounded-lg bg-slate-800/50 p-3 text-brand group-hover:bg-brand/10 group-hover:text-brand-light transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-brand-light transition-colors">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">{description}</p>
    </div>
  )
}
