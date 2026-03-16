import { Terminal, Clock, Cloud, Lock, Zap, ArrowRight, Activity, CheckCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { InstallTabs } from '../components/InstallTabs'

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 selection:bg-brand/20 selection:text-brand-light relative overflow-x-hidden">
      {/* Global Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand opacity-20 blur-[100px] animate-blob"></div>
        <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-500 opacity-10 blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <Header />

      <main className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32">
          
          <div className="container mx-auto max-w-7xl text-center relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-brand-light animate-fade-in hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              v1.0.0 Now Available
            </div>
            
            <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:leading-tight animate-slide-up drop-shadow-2xl">
              Track your work without <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-brand-light via-white to-brand bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">leaving your terminal</span>
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Tracli is the zero-friction time tracking tool designed for developers who live in the CLI. 
              Log tasks, manage projects, and sync with your team effortlessly.
            </p>

            <div className="mx-auto mt-12 max-w-3xl flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <InstallTabs />
               
               <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand" /> No account required
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand" /> Open Source
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand" /> Works offline
                    </span>
                </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-dark-bg py-24 border-t border-white/5 relative overflow-hidden">
          {/* Subtle glow for features */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[128px] pointer-events-none"></div>

          <div className="container mx-auto max-w-7xl px-6 relative z-10">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built for the <span className="text-brand text-glow">Command Line</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Everything you need to manage your time, right where you code.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Terminal First</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Native CLI experience with intuitive commands and keyboard shortcuts. No context switching required.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Zero Friction</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Log your work in seconds. Smart prompts and autocomplete help you stay focused on what matters.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                   <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Seamless Sync</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Work offline and sync when you're back online. Your data is always safe and accessible.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                   <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Private & Secure</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Your data belongs to you. End-to-end encryption ensures your logs remain private.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                   <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Weekly Reports</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Generate beautiful ASCII reports directly in your terminal to see where your time went.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative z-10">
                   <div className="inline-flex p-3 rounded-lg bg-brand/10 text-brand mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Smart Timers</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Start and stop timers with a single command. Automatic idle detection prevents ghost hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start / How it Works */}
        <section id="installation" className="py-24 bg-dark-bg border-t border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                            Workflow that <span className="text-brand text-glow">adapts to you</span>
                        </h2>
                        <div className="space-y-8">
                             <div className="flex gap-4 group">
                                <div className="flex-none w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 group-hover:bg-brand/10 group-hover:text-brand transition-colors flex items-center justify-center font-bold border border-white/5 group-hover:border-brand/20">1</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-light transition-colors">Track</h3>
                                    <p className="text-slate-400">Simply type <code className="bg-slate-800/50 px-2 py-1 rounded text-brand-light text-sm border border-white/5">tracli track</code> and follow the interactive prompts to log your current task.</p>
                                </div>
                             </div>
                             <div className="flex gap-4 group">
                                <div className="flex-none w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 group-hover:bg-brand/10 group-hover:text-brand transition-colors flex items-center justify-center font-bold border border-white/5 group-hover:border-brand/20">2</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-light transition-colors">Review</h3>
                                    <p className="text-slate-400">Use <code className="bg-slate-800/50 px-2 py-1 rounded text-brand-light text-sm border border-white/5">tracli status</code> to get a quick overview of your week or day.</p>
                                </div>
                             </div>
                             <div className="flex gap-4 group">
                                <div className="flex-none w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-400 group-hover:bg-brand/10 group-hover:text-brand transition-colors flex items-center justify-center font-bold border border-white/5 group-hover:border-brand/20">3</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-light transition-colors">Sync</h3>
                                    <p className="text-slate-400">Run <code className="bg-slate-800/50 px-2 py-1 rounded text-brand-light text-sm border border-white/5">tracli sync</code> to push your logs to the cloud or export them.</p>
                                </div>
                             </div>
                        </div>
                        <div className="mt-10">
                            <a href="#" className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors hover:translate-x-1 duration-300">
                                Read the full documentation <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Visual representation of the CLI interface */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-brand/5 border border-white/10 bg-[#0c0c0c] font-mono text-sm transform transition-transform hover:scale-[1.01] duration-500 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none opacity-50"></div>
                        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/5 relative z-10">
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                             </div>
                             <div className="text-slate-500 text-xs">user@dev:~/projects</div>
                             <div className="w-10"></div>
                        </div>
                        <div className="p-6 space-y-4 min-h-[300px] relative z-10">
                            <div>
                                <div className="flex gap-2 text-slate-400">
                                    <span className="text-brand">$</span>
                                    <span>tracli track</span>
                                </div>
                                <div className="mt-2 text-slate-300">
                                    <span className="text-brand-light">?</span> What are you working on? <span className="text-slate-500">(Use arrow keys)</span>
                                </div>
                                <div className="ml-4 mt-2 space-y-1">
                                    <div className="text-brand-light flex items-center gap-2 font-bold">
                                        <span className="text-brand">❯</span> Feature Implementation
                                    </div>
                                    <div className="text-slate-500 ml-4 opacity-50">Bug Fixing</div>
                                    <div className="text-slate-500 ml-4 opacity-50">Code Review</div>
                                    <div className="text-slate-500 ml-4 opacity-50">Meeting</div>
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-white/5 mt-4">
                                <div className="flex gap-2 text-slate-400">
                                    <span className="text-brand">$</span>
                                    <span>tracli status</span>
                                </div>
                                <div className="mt-2 text-slate-300 font-mono text-xs whitespace-pre opacity-90">
{`┌──────────────┬──────────┬──────────┐
│ Project      │ Task     │ Duration │
├──────────────┼──────────┼──────────┤
│ tracli-ui    │ UI Revamp│ 2h 15m   │
│ api-server   │ Fix Auth │ 0h 45m   │
└──────────────┴──────────┴──────────┘
Total: 3h 00m`}
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
