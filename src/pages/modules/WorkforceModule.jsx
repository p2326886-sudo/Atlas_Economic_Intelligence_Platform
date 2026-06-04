import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download, BookOpen } from 'lucide-react'
import { PageHero, SectionHeader, ScoreBar, Badge } from '../../components/UI/index'
import {
  workforcePublication, workforceCompositeScore, workforceIndexScores,
  workforceExecutiveSummary, workforceMaturitySpectrum, workforceChallenges,
  workforceAdaptationModels, workforcePolicyRecommendations, workforceMethodology
} from '../../data/workforce'

const dimensionBarData = workforceIndexScores.map(d => ({ name: d.dimension.split(' ')[0], score: d.score }))

export default function WorkforceModule() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="AI Workforce Transition Index · 2024"
        title={workforcePublication.title}
        subtitle={workforcePublication.subtitle}
        color="#00A86B"
        meta={[
          { value: '4', label: 'Diagnostic Dimensions' },
          { value: workforceCompositeScore, label: 'Composite Score /100' },
          { value: '5', label: 'Maturity Stages' },
          { value: workforcePublication.author, label: '— Author' },
        ]}
      />

      {/* KPI Strip */}
      <div className="bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workforceIndexScores.map((d) => (
            <div key={d.dimension} className="atlas-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">{d.dimension}</p>
              <p className="text-4xl font-bold text-atlas-dark">{d.score}</p>
              <p className="text-xs text-atlas-slate mt-1">{d.weight} weight</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">

        {/* Executive Summary */}
        <section>
          <SectionHeader eyebrow="Executive Summary" title="AI readiness is a multi-dimensional organisational characteristic." className="mb-8" />
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {workforceExecutiveSummary.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-atlas-slate leading-8">{p}</p>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-green mb-4">Key Findings</p>
              {workforceExecutiveSummary.findings.map((f, i) => (
                <div key={i} className="atlas-card p-4 accent-bar-green">
                  <p className="text-sm text-atlas-dark leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dimension Scores */}
        <section>
          <SectionHeader eyebrow="Readiness Index" title="Four-dimension diagnostic framework" className="mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {workforceIndexScores.map((d) => (
              <div key={d.dimension} className="atlas-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-atlas-dark">{d.dimension}</h3>
                  <span className="text-3xl font-bold text-atlas-dark">{d.score}</span>
                </div>
                <div className="mb-4">
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${d.score}%`, backgroundColor: d.color }} />
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">Sub-Indicators: {d.subIndicators}</p>
                <p className="text-sm text-atlas-slate leading-relaxed mb-3">{d.explanation}</p>
                <div className="bg-atlas-light rounded-lg p-3 border border-atlas-border">
                  <p className="text-xs text-atlas-dark leading-relaxed italic">"{d.diagnostic}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="atlas-card p-6 mt-6">
            <h3 className="font-semibold text-atlas-dark mb-6">Dimension Score Comparison</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={dimensionBarData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} domain={[0, 100]} />
                <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="score" fill="#00A86B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Maturity Spectrum */}
        <section>
          <SectionHeader eyebrow="Framework" title="Organisational AI maturity spectrum" className="mb-8" />
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-8 right-8 h-0.5 bg-atlas-border z-0" />
            <div className="grid lg:grid-cols-5 gap-5 relative z-10">
              {workforceMaturitySpectrum.map((stage, i) => (
                <div key={stage.stage} className="atlas-card p-5">
                  <div className="w-10 h-10 rounded-full bg-atlas-green flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-atlas-dark text-center mb-3">{stage.stage}</h3>
                  <p className="text-xs text-atlas-slate leading-relaxed mb-3">{stage.description}</p>
                  <div className="border-t border-atlas-border pt-3">
                    <p className="text-xs font-semibold text-red-500 mb-1">Barrier: {stage.barrier}</p>
                    <p className="text-xs font-semibold text-atlas-green">Signal: {stage.signal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workforce Challenges */}
        <section>
          <SectionHeader eyebrow="Workforce Challenges" title="Five structural challenges to AI adoption" className="mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workforceChallenges.map((c, i) => (
              <div key={c.title} className="atlas-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-atlas-green">0{i + 1}</span>
                  <h3 className="font-semibold text-atlas-dark">{c.title}</h3>
                </div>
                <p className="text-sm text-atlas-slate leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptation Models */}
        <section>
          <SectionHeader eyebrow="Adaptation Models" title="Three pathways for workforce transformation" className="mb-8" />
          <div className="grid lg:grid-cols-3 gap-6">
            {workforceAdaptationModels.map((m) => (
              <div key={m.model} className="atlas-card p-6 border-t-4" style={{ borderTopColor: '#00A86B' }}>
                <h3 className="font-semibold text-atlas-dark mb-3">{m.model}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed mb-4">{m.summary}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-atlas-green mb-1">Best Applied:</p>
                  <p className="text-xs text-atlas-slate">{m.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Recommendations */}
        <section>
          <SectionHeader eyebrow="Policy Recommendations" title="Six pathways to accelerate enterprise AI adoption" className="mb-8" />
          <div className="atlas-card overflow-hidden">
            <table className="atlas-table">
              <thead><tr><th>Recommendation</th><th>Stakeholder</th><th>Timeframe</th><th>Priority</th></tr></thead>
              <tbody>
                {workforcePolicyRecommendations.map((rec) => (
                  <tr key={rec.recommendation}>
                    <td className="font-medium text-atlas-dark">{rec.recommendation}</td>
                    <td className="text-atlas-slate">{rec.stakeholder}</td>
                    <td className="text-atlas-slate">{rec.timeframe}</td>
                    <td><Badge variant={rec.priority === 'High' ? 'green' : 'amber'}>{rec.priority}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <SectionHeader eyebrow="Methodology" title="Research nature and limitations" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-4">Research Nature</h3>
              <p className="text-sm text-atlas-slate leading-relaxed">{workforceMethodology.nature}</p>
            </div>
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-4">Stated Limitations</h3>
              <ul className="space-y-2">
                {workforceMethodology.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-atlas-slate mt-2 flex-shrink-0"></span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="rounded-xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #00A86B, #0A7A4E)' }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">Download Report</p>
              <h2 className="text-2xl font-bold mb-3">AI Readiness & Workforce Transition Index</h2>
              <p className="text-white/70">Full analytical framework, maturity spectrum, dimension diagnostics, and policy recommendations.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/downloads" className="btn-primary bg-white text-atlas-green hover:bg-slate-100 flex items-center gap-2">
                <Download size={16} /> Download Center
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
