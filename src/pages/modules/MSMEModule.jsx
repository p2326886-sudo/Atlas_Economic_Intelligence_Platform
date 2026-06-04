import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download, ArrowRight, BookOpen } from 'lucide-react'
import { PageHero, SectionHeader, ScoreBar, Badge } from '../../components/UI/index'
import {
  msmeOverview, msmeStats, msmeFindings, msmeSectorData, msmeStressRows,
  msmeReadinessBars, msmeKeyInsights, msmeRecommendations, msmeMethodology,
  msmeStructuralChallenges
} from '../../data/msme'

export default function MSMEModule() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="MSME Intelligence Index · 2026"
        title={msmeOverview.title}
        subtitle={msmeOverview.description}
        color="#1D6AE5"
        meta={[
          { value: '50', label: 'MSMEs Surveyed' },
          { value: '10', label: 'Sectors Covered' },
          { value: '10', label: 'States' },
          { value: msmeOverview.compositeScore, label: 'Composite Score' },
        ]}
      />

      {/* KPI Strip */}
      <div className="bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {msmeStats.map((s) => (
            <div key={s.label} className="atlas-card p-5">
              <p className="metric-label">{s.label}</p>
              <p className="metric-value">{s.value}<span className="text-lg text-atlas-slate ml-0.5">{s.unit}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">

        {/* Executive Summary */}
        <section>
          <SectionHeader eyebrow="Executive Summary" title="A sharper view of enterprise fragility and the next frontier of productive digitisation." className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            <p className="text-xl leading-9 text-atlas-slate">
              The 2026 Index frames MSME resilience as an interaction between liquidity stress, market volatility, digital operating depth, and emerging AI capability. The evidence points to a two-speed economy: digitally mature firms are compounding advantages, while firms with thin working capital and low data maturity face widening productivity gaps.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Financial stress remains the primary constraint on transformation.', 'Digital adoption is broadening, but operational integration is shallow.', 'AI readiness is strongest where data discipline already exists.', 'Policy needs localised risk intelligence, not only national schemes.'].map((item) => (
                <div key={item} className="atlas-card p-5 accent-bar-blue">
                  <p className="text-sm leading-6 text-atlas-dark">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section>
          <SectionHeader eyebrow="Key Findings" title="Four signals defining the MSME competitiveness agenda." className="mb-8" />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {msmeFindings.map((f) => (
              <div key={f.label} className="atlas-card p-6">
                <p className="text-5xl font-bold text-atlas-dark mb-4">{f.value}</p>
                <h3 className="font-semibold text-atlas-dark mb-3">{f.label}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stress Analysis + Digital Readiness */}
        <section>
          <SectionHeader eyebrow="Dashboard Area" title="Stress analysis & digital readiness indicators" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Stress bars */}
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-6">MSME Stress Indicators</h3>
              <div className="space-y-5">
                {msmeStressRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-atlas-dark">{row.label}</span>
                      <Badge variant={row.band === 'High' ? 'red' : row.band === 'Moderate' ? 'amber' : 'slate'}>{row.band}</Badge>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-atlas-blue to-atlas-green"
                        style={{ width: `${row.value}%` }} />
                    </div>
                    <p className="text-xs text-atlas-slate mt-1">{row.value}/100</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Readiness bars */}
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-6">Digital Readiness Pillars</h3>
              <div className="space-y-5">
                {msmeReadinessBars.map((item) => (
                  <ScoreBar key={item.label} label={item.label} value={item.value} color={item.color} />
                ))}
              </div>
              <div className="mt-6 p-4 bg-atlas-light rounded-xl border border-atlas-border">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-atlas-slate mb-2">Interpretation</p>
                <p className="text-sm text-atlas-dark leading-relaxed">Digital readiness is broad but shallow: payment adoption is stronger than cloud accounting, cybersecurity, data interoperability, and workflow integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sector Comparison Bar Chart */}
        <section>
          <SectionHeader eyebrow="Charts Area" title="Sector comparison: Stress, Digital & AI scores" className="mb-8" />
          <div className="atlas-card p-6">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={msmeSectorData} barSize={18} barGap={3}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="sector" tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} domain={[0, 100]} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="stress" name="Avg Stress" fill="#F59E0B" radius={[3, 3, 0, 0]} />
                <Bar dataKey="digital" name="Digital" fill="#1D6AE5" radius={[3, 3, 0, 0]} />
                <Bar dataKey="ai" name="AI Readiness" fill="#00A86B" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Research Insights */}
        <section>
          <SectionHeader eyebrow="Research Insights" title="Why the digital gap is a resilience gap" className="mb-8" />
          <div className="grid lg:grid-cols-3 gap-6">
            {msmeStructuralChallenges.map((c) => (
              <div key={c.title} className="atlas-card p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-atlas-blue font-bold text-sm mb-4">{c.code}</div>
                <h3 className="text-lg font-semibold text-atlas-dark mb-3">{c.title}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {msmeKeyInsights.map((i) => (
              <div key={i.label} className="atlas-card p-5 text-center">
                <p className="text-4xl font-bold text-atlas-dark mb-2">{i.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate">{i.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Recommendations */}
        <section>
          <SectionHeader eyebrow="Policy Recommendations" title="From scheme delivery to intelligence-led MSME resilience." className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-5">
            {msmeRecommendations.map((r, i) => (
              <div key={r.title} className="atlas-card p-6 flex gap-5">
                <span className="text-3xl font-bold text-atlas-blue flex-shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-atlas-dark mb-2">{r.title}</h3>
                  <p className="text-sm text-atlas-slate leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <SectionHeader eyebrow="Methodology Reference" title="A minimal scoring architecture for comparing stress, digital capability, and AI preparedness." className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {msmeMethodology.map((item, i) => (
              <div key={item} className="atlas-card p-5">
                <p className="text-sm font-bold text-atlas-blue mb-3">0{i + 1}</p>
                <p className="text-sm text-atlas-dark leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download */}
        <section className="atlas-card-navy rounded-xl p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">Download Report</p>
              <h2 className="text-2xl font-bold text-white mb-3">India MSME Stress & Digital Readiness Index 2026</h2>
              <p className="text-white/70 leading-relaxed">Includes methodology, state rankings, sector profiles, risk bands, AI readiness benchmarks, and policy implementation notes.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link to="/downloads" className="btn-primary bg-white text-atlas-navy hover:bg-slate-100 flex items-center gap-2">
                <Download size={16} /> Access Download Center
              </Link>
              <Link to="/publications#msme-2026" className="btn-outline border-white/30 text-white hover:border-white hover:bg-white/10 flex items-center gap-2">
                <BookOpen size={16} /> View Publication
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
