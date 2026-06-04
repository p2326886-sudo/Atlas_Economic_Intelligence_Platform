import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download } from 'lucide-react'
import { PageHero, SectionHeader } from '../../components/UI/index'
import {
  supplyChainOverview, supplyChainScorecards, supplyChainDimensions,
  supplyChainSectorRisks, supplyChainRiskMatrix
} from '../../data/supplychain'

function riskBgClass(level) {
  const l = level?.toLowerCase()
  if (l?.includes('critical') || l?.includes('vulnerable')) return 'bg-red-50 text-red-700'
  if (l?.includes('elevated') || l?.includes('constrained')) return 'bg-amber-50 text-amber-700'
  if (l?.includes('improving')) return 'bg-blue-50 text-atlas-blue'
  return 'bg-green-50 text-atlas-green'
}

function valueBg(v) {
  if (v >= 7.2) return 'bg-green-100 text-green-800'
  if (v >= 5.2) return 'bg-amber-50 text-amber-700'
  return 'bg-red-50 text-red-700'
}

const rankingBarData = supplyChainScorecards.map(e => ({ economy: e.economy, score: e.score }))

export default function SupplyChainModule() {
  const avg = (supplyChainScorecards.reduce((s, e) => s + e.score, 0) / supplyChainScorecards.length).toFixed(1)
  const criticalCount = supplyChainSectorRisks.filter(r => r.risk === 'Critical').length

  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Sovereign Supply Chain Index · 2025"
        title={supplyChainOverview.title}
        subtitle={supplyChainOverview.subtitle}
        color="#F59E0B"
        meta={[
          { value: supplyChainOverview.economies, label: 'Economies Assessed' },
          { value: supplyChainOverview.industries, label: 'Critical Industries' },
          { value: supplyChainOverview.dimensions, label: 'SSCRI Dimensions' },
          { value: avg, label: 'RIS Mean Score /10' },
        ]}
      />

      {/* KPI Strip */}
      <div className="bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Economies Assessed', value: '9', note: 'Principal industrial economies' },
            { label: 'Critical Sectors', value: criticalCount.toString(), note: 'Sector risk rating: Critical' },
            { label: 'Mean RIS Score', value: avg, note: 'Out of 10 ordinal scale' },
            { label: 'Top Ranked Economy', value: 'USA · 7.4', note: 'Digital Readiness leader' },
          ].map((s) => (
            <div key={s.label} className="atlas-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">{s.label}</p>
              <p className="text-3xl font-bold text-atlas-dark">{s.value}</p>
              <p className="text-xs text-atlas-slate mt-1">{s.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">

        {/* Executive Summary */}
        <section>
          <SectionHeader eyebrow="Executive Summary" title="Geopolitical industrial resilience: nine economies, ten dimensions" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            <p className="text-lg text-atlas-slate leading-8">
              The Sovereign Supply Chain & Industrial Resilience Index provides a geopolitical-industrial analytical framework scoring nine major economies across ten resilience dimensions. The framework reveals structural vulnerabilities — semiconductor chokepoints, energy dependencies, and critical mineral concentrations — that directly constrain national industrial capacity and trade stability.
            </p>
            <div className="space-y-4">
              {['Advanced semiconductor fabrication is concentrated to a degree unprecedented in modern industrial history.', 'Energy stability is the underpriced vulnerability in European manufacturing resilience.', 'India\'s workforce and trade diversification advantages are partially offset by infrastructure execution risk.', 'Taiwan\'s foundry strength is not an economy-wide resilience condition — it is a single-node exposure.'].map((item) => (
                <div key={item} className="atlas-card p-4 accent-bar-amber">
                  <p className="text-sm text-atlas-dark leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Composite Ranking Bar Chart */}
        <section>
          <SectionHeader eyebrow="Composite Resilience Ranking" title="Nine economies ranked by SSCRI composite score" className="mb-8" />
          <div className="atlas-card p-6">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={rankingBarData} layout="vertical" barSize={20}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis type="number" domain={[0, 10]} tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis dataKey="economy" type="category" tick={{ fontSize: 12, fill: '#64748B' }} width={90} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="score" name="RIS Score" fill="#F59E0B" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Scorecard Table */}
        <section>
          <SectionHeader eyebrow="Economy Scorecards" title="Resilience profiles across nine economies" className="mb-8" />
          <div className="atlas-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="atlas-table">
                <thead>
                  <tr>
                    <th>Economy</th>
                    <th>RIS Score</th>
                    <th>Strongest Dimension</th>
                    <th>Key Vulnerability</th>
                    <th>Trajectory</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyChainScorecards.map((row) => (
                    <tr key={row.economy}>
                      <td className="font-semibold text-atlas-dark">{row.economy}</td>
                      <td><span className="text-2xl font-bold text-atlas-dark">{row.scoreLabel || row.score.toFixed(1)}</span><span className="text-sm text-atlas-slate ml-0.5">/10</span></td>
                      <td className="text-atlas-slate">{row.strongest}</td>
                      <td className="text-atlas-slate">{row.vulnerability}</td>
                      <td><span className={`badge ${riskBgClass(row.trajectory)}`}>{row.trajectory}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dimension Heatmap */}
        <section>
          <SectionHeader eyebrow="Dashboard Area" title="SSCRI dimension heatmap — 1–10 ordinal scores" className="mb-8" />
          <div className="atlas-card p-4 overflow-x-auto">
            <div style={{ minWidth: 900 }}>
              <div className="grid gap-px" style={{ gridTemplateColumns: `160px repeat(${supplyChainDimensions.length}, 1fr)` }}>
                {/* Header */}
                <div className="py-2 px-3 text-xs font-bold text-atlas-slate bg-atlas-light rounded-tl-lg"></div>
                {supplyChainDimensions.map((d) => (
                  <div key={d} className="py-2 px-1 text-[10px] font-semibold text-atlas-slate bg-atlas-light text-center leading-tight">{d}</div>
                ))}
                {/* Rows */}
                {supplyChainScorecards.map((row) => (
                  <React.Fragment key={row.economy}>
                    <div className="py-3 px-3 text-sm font-semibold text-atlas-dark bg-white border-b border-atlas-border flex items-center">{row.economy}</div>
                    {row.values.map((v, idx) => (
                      <div key={idx} className={`py-3 text-center text-xs font-bold border-b border-atlas-border ${valueBg(v)}`}>
                        {v.toFixed(1)}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <p className="text-xs text-atlas-slate mt-3 pl-2">Green ≥ 7.2 (Strong) · Amber 5.2–7.1 (Mid) · Red &lt; 5.2 (Weak)</p>
          </div>
        </section>

        {/* Sector Risks */}
        <section>
          <SectionHeader eyebrow="Sector Risk Concentration" title="Eight critical sector vulnerability profiles" className="mb-8" />
          <div className="atlas-card overflow-hidden">
            <table className="atlas-table">
              <thead><tr><th>Sector</th><th>Chokepoint</th><th>Dependency</th><th>Risk Level</th><th>Time Horizon</th></tr></thead>
              <tbody>
                {supplyChainSectorRisks.map((r) => (
                  <tr key={r.sector}>
                    <td className="font-semibold text-atlas-dark">{r.sector}</td>
                    <td className="text-atlas-slate">{r.chokepoint}</td>
                    <td className="text-atlas-slate">{r.dependency}</td>
                    <td><span className={`badge ${riskBgClass(r.risk)}`}>{r.risk}</span></td>
                    <td className="text-atlas-slate">{r.horizon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Risk Matrix */}
        <section>
          <SectionHeader eyebrow="Strategic Risk Matrix" title="Ten-scenario geopolitical risk priority matrix" className="mb-8" />
          <div className="atlas-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="atlas-table">
                <thead>
                  <tr>
                    <th>Risk Event</th>
                    <th>Probability</th>
                    <th>Impact</th>
                    <th>Key Economies</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyChainRiskMatrix.map((r) => (
                    <tr key={r.risk}>
                      <td className="font-medium text-atlas-dark">{r.risk}</td>
                      <td><span className={`badge ${riskBgClass(r.probability)}`}>{r.probability}</span></td>
                      <td className="text-atlas-slate">{r.impact}</td>
                      <td className="text-atlas-slate text-xs">{r.economies}</td>
                      <td><span className={`badge ${riskBgClass(r.priority)}`}>{r.priority}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="rounded-xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #D97706, #92400E)' }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">Download Report</p>
              <h2 className="text-2xl font-bold mb-3">Sovereign Supply Chain & Industrial Resilience Index 2025</h2>
              <p className="text-white/70">Full scorecard tables, sector risk profiles, geopolitical risk matrix, and methodology documentation.</p>
            </div>
            <Link to="/downloads" className="btn-primary bg-white text-amber-700 hover:bg-slate-100 flex items-center gap-2 flex-shrink-0">
              <Download size={16} /> Download Center
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
