import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ArrowRight, ExternalLink, Rocket, Shield, Wallet, CheckCircle2, Flame, TrendingUp } from "lucide-react";

const BUY_SPLIT = [
  { name: "Liquidity (other TON tokens)", value: 3 },
  { name: "Holder Rewards", value: 2 },
];

const SELL_SPLIT = [
  { name: "Liquidity + Buyback/Burn + Treasury", value: 5 },
  { name: "Holder Rewards", value: 2 },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-slate-100">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-sky-500/20 grid place-items-center text-sky-400 font-black">TF</div>
            <div>
              <p className="text-lg font-semibold tracking-tight">TONFI</p>
              <p className="text-xs text-slate-400">Liquidity & Passive Income on TON</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <a href="#tokenomics" className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">Tokenomics</a>
            <a href="#how" className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">How it works</a>
            <a href="#roadmap" className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300">Roadmap</a>
            <a href="#cta" className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 transition inline-flex items-center gap-2">
              Buy on DeDust <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden text-slate-100">
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)] pointer-events-none">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full blur-3xl bg-sky-500/20"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-slate-200 text-xs">Built on TON</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mt-4">
              Liquidity Engine & Treasury <span className="text-sky-400">for TON</span>
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              TONFI channels trade taxes into ecosystem liquidity, a diversified treasury, buyback & burn, and direct rewards—creating sustainable passive income for holders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" id="cta">
              <a href="https://app.dedust.io/" target="_blank" className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 inline-flex items-center gap-2">
                Buy on DeDust <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15">Open Whitepaper</a>
              <a href="#" className="px-5 py-3 rounded-xl hover:bg-white/5">Join Telegram</a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              <p><span className="font-semibold text-slate-300">Token Address:</span> <span className="font-mono">EQC...your_jetton_address_here</span></p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="text-base font-semibold mb-2">Buy Tax — 5%</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie dataKey="value" data={BUY_SPLIT} outerRadius={90} label />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="text-base font-semibold mb-2">Sell Tax — 7%</p>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie dataKey="value" data={SELL_SPLIT} outerRadius={90} label />
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="col-span-2 rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="text-base font-semibold mb-3">Key Utilities</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/5 p-2"><TrendingUp className="h-5 w-5" /></div>
                  <div><p className="font-medium text-slate-200">Liquidity Support</p><p>Allocations deepen liquidity across TON tokens, earning fees.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/5 p-2"><Shield className="h-5 w-5" /></div>
                  <div><p className="font-medium text-slate-200">Treasury Reserve</p><p>Selective buys of promising TON assets held as TONFI Treasure.</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/5 p-2"><Flame className="h-5 w-5" /></div>
                  <div><p className="font-medium text-slate-200">Buyback & Burn</p><p>Deflationary pressure through scheduled repurchases and burns.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-4 text-slate-100">
        {[
          { icon: <Wallet className="h-5 w-5"/>, title: "Passive Income", desc: "2% of every buy and sell is distributed to holders." },
          { icon: <Rocket className="h-5 w-5"/>, title: "Ecosystem Impact", desc: "Supports TON projects with sustained liquidity provisioning." },
          { icon: <CheckCircle2 className="h-5 w-5"/>, title: "Simple & Transparent", desc: "Clear tokenomics with on-chain reporting and dashboards." },
        ].map((v, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="rounded-xl bg-white/5 p-2">{v.icon}</div>
              <p className="text-base font-semibold">{v.title}</p>
            </div>
            <p className="text-sm text-slate-300">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* How it works + Roadmap */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-12 text-slate-100">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">How TONFI Works</h2>
            <p className="mt-3 text-slate-300">
              Trade taxes route into three engines: liquidity support for other TON tokens (earning LP fees), the Treasury Reserve (diversified exposure), and periodic buyback & burn. A fixed share returns directly to holders as rewards.
            </p>
            <ul className="mt-5 space-y-2 text-slate-300 text-sm">
              <li>• <span className="font-medium">Buy 5%</span> → 3% Liquidity • 2% Holder Rewards</li>
              <li>• <span className="font-medium">Sell 7%</span> → 5% Liquidity + Buyback/Burn + Treasury • 2% Holder Rewards</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15">View DEX Pair</a>
              <a href="#" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15">Dashboard (soon)</a>
            </div>
          </div>
          <div id="roadmap" className="rounded-2xl bg-white/5 border border-white/10 p-4 text-sm text-slate-300 space-y-4">
            <p className="text-base font-semibold text-slate-100 mb-2">Roadmap</p>
            <div>
              <p className="font-medium text-slate-200">Phase 1 — Launch</p>
              <p>Token deploy, DEX listing, initial LP, community channels.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Phase 2 — Treasury</p>
              <p>Begin selective acquisitions of TON assets; publish treasury dashboard.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Phase 3 — Integrations</p>
              <p>Partner LP programs, analytics, and governance design.</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">Phase 4 — Scaling</p>
              <p>Automation of buyback & burn; expand ecosystem utilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-300">
          <div>
            <p className="text-slate-200 font-semibold">TONFI</p>
            <p className="mt-2">© {new Date().getFullYear()} TONFI. All rights reserved.</p>
          </div>
          <div>
            <p className="text-slate-200 font-semibold">Links</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Telegram</a></li>
              <li><a href="#" className="hover:underline">Twitter/X</a></li>
              <li><a href="#" className="hover:underline">DeDust Pair</a></li>
              <li><a href="#" className="hover:underline">Docs</a></li>
            </ul>
          </div>
          <div>
            <p className="text-slate-200 font-semibold">Disclaimer</p>
            <p className="mt-2">This site is for informational purposes only and does not constitute financial advice. Cryptocurrency involves risk.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
