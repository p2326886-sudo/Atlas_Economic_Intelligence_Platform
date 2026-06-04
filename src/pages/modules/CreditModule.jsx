import React from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts'
import { Download } from 'lucide-react'
import { PageHero, SectionHeader, Badge } from '../../components/UI/index'
import {
  creditOverview, creditKeyFindings, creditStressIndicators, creditSectorFrictionData,
  creditStateReadinessData, creditWorkingCapitalTimeline, creditDigitalLendingData,
  creditPolicyRecommendations, creditMethodology
} from '../../data/credit'

function stressBadge(level) {
  const l = level?.toLowerCase()
  if (l === 'critical') return 'risk-critical'
  if (l === 'high') return 'badge-red'
  if (l === 'medium') return 'badge-amber'
  return 'badge-green'
}

export default function CreditModule() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="SME Credit Observatory · 2024"
        title={creditOverview.title}
        subtitle={creditOverview.subtitle}
        color="#E53E3E"
        meta={[
          { value: creditOverview.creditFrictionIndex + '/100', label: 'Credit Friction Index' },
          { value: creditOverview.formalCreditAccess + '%', label: 'Formal Credit Access' },
          { value: creditOverview.digitalLendingShare + '%', label: 'Digital Lending FY24' },
          { value: creditOverview.creditGap, label: 'MSME Credit Gap' },
        ]}
      />

      {/* KPI Strip */}
      <div className="bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {creditStressIndicators.map((s) => (
            <div key={s.id} className="atlas-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">{s.label}</p>
              <p className="text-3xl font-bold text-atlas-dark">{s.value}<span className="text-sm text-atlas-slate ml-0.5">{s.unit}</span></p>
              <p className={`text-xs font-semibold mt-1 ${s.trend === 'improving' ? 'text-atlas-green' : s.trend === 'declining' ? 'text-red-500' : 'text-atlas-slate'}`}>
                {s.trend === 'improving' ? '↑ Improving' : s.trend === 'declining' ? '↓ Declining' : '→ Stable'} ({s.delta > 0 ? '+' : ''}{s.delta})
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">

        {/* Key Findings */}
        <section>
          <SectionHeader eyebrow="Key Findings" title="Six structural realities of India's MSME credit landscape" className="mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {creditKeyFindings.map((f) => (
              <div key={f.id} className="atlas-card p-6">
                <p className="text-5xl font-bold text-atlas-dark mb-4">{f.stat}</p>
                <h3 className="font-semibold text-atlas-dark mb-3">{f.title}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section>
          <SectionHeader eyebrow="Dashboard Area" title="Working-capital cycles & digital lending trends" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Working Capital Timeline */}
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-2">Working-Capital Cycle Timeline (FY20–FY24)</h3>
              <p className="text-xs text-atlas-slate mb-5">Cash Conversion Cycle (days) vs Liquidity Score</p>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={creditWorkingCapitalTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="quarter" tick={{ fontSize: 10, fill: '#94A3B8' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="cashConversionCycle" name="CCC (days)" stroke="#E53E3E" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="liquidityScore" name="Liquidity Score" stroke="#00A86B" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Digital Lending */}
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-2">Digital Lending Adoption (FY19–FY24)</h3>
              <p className="text-xs text-atlas-slate mb-5">Share of credit channels by institution type (%)</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={creditDigitalLendingData} barSize={18}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#64748B' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} domain={[0, 100]} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="bankShare" name="Bank" fill="#0A2540" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="nbfcShare" name="NBFC" fill="#1D6AE5" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="digitalShare" name="Digital/Fintech" fill="#00A86B" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Sector Friction */}
        <section>
          <SectionHeader eyebrow="Credit Friction Analysis" title="Sector-wise financing stress and credit access" className="mb-8" />
          <div className="atlas-card overflow-hidden">
            <table className="atlas-table">
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Credit Access</th>
                  <th>WC Cycle (days)</th>
                  <th>Friction Score</th>
                  <th>Informal Dep. %</th>
                  <th>Stress Level</th>
                </tr>
              </thead>
              <tbody>
                {creditSectorFrictionData.map((row) => (
                  <tr key={row.sector}>
                    <td className="font-semibold text-atlas-dark">{row.sector}</td>
                    <td className="text-atlas-slate">{row.creditAccess}</td>
                    <td className="text-atlas-slate">{row.wcCycleMin}–{row.wcCycleMax}d</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-400 rounded-full" style={{ width: `${row.score}%` }} />
                        </div>
                        <span className="text-sm font-semibold text-atlas-dark">{row.score}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: `${row.informalDependence}%` }} />
                        </div>
                        <span className="text-sm text-atlas-slate">{row.informalDependence}%</span>
                      </div>
                    </td>
                    <td><span className={`badge ${stressBadge(row.overallStress)}`}>{row.overallStress}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* State Readiness */}
        <section>
          <SectionHeader eyebrow="Geographic Intelligence" title="State-wise credit readiness index (10 states)" className="mb-8" />
          <div className="atlas-card p-6">
            <div className="space-y-4">
              {creditStateReadinessData.map((s, i) => (
                <div key={s.state} className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-atlas-slate w-5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-medium text-atlas-dark w-36 flex-shrink-0">{s.state}</span>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-400 to-atlas-green"
                      style={{ width: `${(s.score / 10) * 100}%` }} />
                  </div>
                  <span className="text-sm font-bold text-atlas-dark w-8">{s.score}</span>
                  <span className="text-xs text-atlas-slate w-20">{s.formalCredit}% formal</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Recommendations */}
        <section>
          <SectionHeader eyebrow="Policy Recommendations" title="Five pathways to close the MSME credit gap" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-6">
            {creditPolicyRecommendations.map((r, i) => (
              <div key={r.id} className="atlas-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-red-500">0{i + 1}</span>
                  <Badge variant={r.impact === 'High' ? 'red' : r.impact === 'Medium-High' ? 'amber' : 'slate'}>{r.impact} Impact</Badge>
                  <Badge variant="slate">{r.timeline}</Badge>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">{r.category}</p>
                <h3 className="font-semibold text-atlas-dark mb-3">{r.title}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed mb-4">{r.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {r.stakeholders.map((s) => (
                    <span key={s} className="badge-navy">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <SectionHeader eyebrow="Methodology" title="Data sources and analytical frameworks" className="mb-8" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-4">Research Approach</h3>
              <p className="text-sm text-atlas-slate leading-relaxed">{creditMethodology.approach}</p>
            </div>
            <div className="atlas-card p-6">
              <h3 className="font-semibold text-atlas-dark mb-4">Primary Data Sources</h3>
              <ul className="space-y-2">
                {creditMethodology.dataSources.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="rounded-xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #C53030, #7B1515)' }}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">Download Report</p>
              <h2 className="text-2xl font-bold mb-3">India SME Credit Intelligence Observatory 2024</h2>
              <p className="text-white/70">Full sector friction analysis, state readiness index, digital lending trends, and policy implementation roadmap.</p>
            </div>
            <Link to="/downloads" className="btn-primary bg-white text-red-700 hover:bg-slate-100 flex items-center gap-2 flex-shrink-0">
              <Download size={16} /> Download Center
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
