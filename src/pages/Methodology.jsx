import React, { useState } from 'react'
import { PageHero, SectionHeader, Badge } from '../components/UI/index'
import { workforceMethodology, workforceIndexScores } from '../data/workforce'
import { msmeMethodology } from '../data/msme'
import { creditMethodology } from '../data/credit'
import { ChevronDown, ChevronRight } from 'lucide-react'

const scoringFrameworks = [
  {
    module: 'MSME Intelligence Index',
    color: '#1D6AE5',
    approach: 'Survey simulation framework combining five operational indicator categories: MSME stress scoring, sector analysis, digital readiness scoring, and AI adoption metrics.',
    dimensions: msmeMethodology,
    compositeScore: '58.7 / 100',
    scoreBand: 'Transitional readiness',
  },
  {
    module: 'AI Workforce Transition Index',
    color: '#00A86B',
    approach: 'Four-dimension composite framework with equal 25% weighting across Strategic Intent, Digital Operations, Data Readiness, and Workforce Adaptability.',
    dimensions: workforceIndexScores.map(d => `${d.dimension} (${d.weight}): ${d.subIndicators}`),
    compositeScore: '60 / 100',
    scoreBand: 'Developing readiness',
  },
  {
    module: 'Sovereign Supply Chain Index',
    color: '#F59E0B',
    approach: 'Ten-dimension ordinal scoring (1–10 scale) applied to nine economies across geopolitical-industrial resilience dimensions.',
    dimensions: ['Manufacturing Depth', 'Strategic Dependency', 'Logistics Capacity', 'Energy Stability', 'Semiconductor Exposure', 'Workforce Quality', 'Digital Readiness', 'Trade Diversification', 'Supply Chain Redundancy', 'Critical Resources Access'],
    compositeScore: '6.1 / 10',
    scoreBand: 'Mean Resilience Index Score',
  },
  {
    module: 'SME Credit Observatory',
    color: '#E53E3E',
    approach: 'Credit Friction Index (CFI) composite combining documentation requirements, collateral margins, processing timelines, and credit rejection frequencies. Supplemented by geographic readiness assessment and working-capital volatility decomposition.',
    dimensions: creditMethodology.frameworks?.map(f => `${f.name}: ${f.description}`) || [
      'Credit Friction Assessment Framework', 'Working-Capital Volatility Decomposition', 'Geographic Readiness Assessment Index'
    ],
    compositeScore: '68.5 / 100',
    scoreBand: 'High friction environment',
  },
]

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-atlas-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-atlas-light text-left transition-colors"
      >
        <span className="font-semibold text-atlas-dark">{title}</span>
        {open ? <ChevronDown size={18} className="text-atlas-slate" /> : <ChevronRight size={18} className="text-atlas-slate" />}
      </button>
      {open && <div className="px-6 pb-6 pt-2 bg-white">{children}</div>}
    </div>
  )
}

export default function Methodology() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Methodology Center"
        title="Research Frameworks & Scoring Methodologies"
        subtitle="Transparent documentation of all analytical frameworks, scoring systems, indicator definitions, research processes, and stated limitations across all four Atlas modules."
        color="#0A2540"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">

        {/* Scoring Framework */}
        <section>
          <SectionHeader eyebrow="Scoring Framework" title="Composite index construction across four modules" className="mb-10" />
          <div className="grid md:grid-cols-2 gap-6">
            {scoringFrameworks.map((fw) => (
              <div key={fw.module} className="atlas-card p-6 border-l-4" style={{ borderLeftColor: fw.color }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-atlas-dark">{fw.module}</h3>
                  <div className="text-right">
                    <p className="text-xl font-bold text-atlas-dark">{fw.compositeScore}</p>
                    <p className="text-xs text-atlas-slate">{fw.scoreBand}</p>
                  </div>
                </div>
                <p className="text-sm text-atlas-slate leading-relaxed mb-4">{fw.approach}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">Framework Dimensions</p>
                  <ul className="space-y-1">
                    {fw.dimensions.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-atlas-dark">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: fw.color }}></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Indicator Framework */}
        <section>
          <SectionHeader eyebrow="Indicator Framework" title="Key indicators across all modules" className="mb-10" />
          <div className="atlas-card overflow-hidden">
            <table className="atlas-table">
              <thead>
                <tr>
                  <th>Indicator</th>
                  <th>Module</th>
                  <th>Score / Value</th>
                  <th>Scale</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { indicator: 'MSME Composite Stress Index', module: 'MSME', value: '58.7', scale: '/100', status: 'Transitional', color: '#1D6AE5' },
                  { indicator: 'Digital Readiness Score', module: 'MSME', value: '61', scale: '/100', status: 'Developing', color: '#1D6AE5' },
                  { indicator: 'AI Readiness Score', module: 'MSME', value: '43', scale: '/100', status: 'Early Stage', color: '#1D6AE5' },
                  { indicator: 'AI Readiness Composite', module: 'Workforce', value: '60', scale: '/100', status: 'Developing', color: '#00A86B' },
                  { indicator: 'Strategic Intent', module: 'Workforce', value: '72', scale: '/100', status: 'Strong', color: '#00A86B' },
                  { indicator: 'Data Readiness', module: 'Workforce', value: '54', scale: '/100', status: 'Binding Constraint', color: '#00A86B' },
                  { indicator: 'Mean RIS Score', module: 'Supply Chain', value: '6.1', scale: '/10', status: 'Mixed', color: '#F59E0B' },
                  { indicator: 'Top Economy RIS (USA)', module: 'Supply Chain', value: '7.4', scale: '/10', status: 'Strong', color: '#F59E0B' },
                  { indicator: 'Credit Friction Index', module: 'Credit', value: '68.5', scale: '/100', status: 'High Friction', color: '#E53E3E' },
                  { indicator: 'Formal Credit Access', module: 'Credit', value: '14%', scale: 'MSME share', status: 'Critical Gap', color: '#E53E3E' },
                ].map((row) => (
                  <tr key={`${row.module}-${row.indicator}`}>
                    <td className="font-medium text-atlas-dark">{row.indicator}</td>
                    <td>
                      <span className="badge" style={{ backgroundColor: `${row.color}15`, color: row.color }}>{row.module}</span>
                    </td>
                    <td className="text-xl font-bold text-atlas-dark">{row.value}</td>
                    <td className="text-atlas-slate text-xs">{row.scale}</td>
                    <td><Badge variant="slate">{row.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Research Process */}
        <section>
          <SectionHeader eyebrow="Research Process" title="How the Atlas research is conducted" className="mb-10" />
          <div className="grid lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Literature Synthesis', desc: 'Each module begins with synthesis of institutional research — RBI, World Bank, IMF, McKinsey, Deloitte, WEF, ILO, OECD, and Ministry of MSME publications.' },
              { step: '02', title: 'Framework Construction', desc: 'Analytical frameworks are built from the synthesized literature — composite indices with defined dimensions, weights, and scoring rationales.' },
              { step: '03', title: 'Score Computation', desc: 'Composite scores are computed using equal or analytically justified dimension weights. All scoring rationale is documented explicitly.' },
              { step: '04', title: 'Policy Translation', desc: 'Research findings are translated into actionable policy recommendations with stakeholder identification, timeframes, and impact classifications.' },
            ].map((s) => (
              <div key={s.step} className="atlas-card p-6">
                <span className="text-3xl font-bold text-atlas-border mb-4 block">{s.step}</span>
                <h3 className="font-semibold text-atlas-dark mb-3">{s.title}</h3>
                <p className="text-sm text-atlas-slate leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations */}
        <section>
          <SectionHeader eyebrow="Research Limitations" title="Stated limitations and disclaimers" className="mb-10" />
          <div className="space-y-4">
            <AccordionItem title="MSME Intelligence Index — Limitations" defaultOpen>
              <ul className="space-y-2 mt-2">
                {['Based on a survey simulation framework, not a validated primary empirical survey', 'Sample of 50 MSMEs is indicative rather than statistically representative', 'State and sector distributions are analytical, not drawn from random probability sampling', 'AI readiness benchmarks reflect directional scoring, not calibrated psychometric instruments'].map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-atlas-blue mt-2 flex-shrink-0"></span>
                    {l}
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem title="AI Workforce Transition Index — Limitations">
              <ul className="space-y-2 mt-2">
                {workforceMethodology.limitations.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-atlas-green mt-2 flex-shrink-0"></span>
                    {l}
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem title="Sovereign Supply Chain Index — Limitations">
              <ul className="space-y-2 mt-2">
                {['Economy scores are ordinal analytical assessments, not empirically derived indices', 'Geopolitical scenarios are framed for analytical illustration, not predictive modeling', 'Sector risk horizons are directional estimates based on published institutional analysis', 'Taiwan semiconductor footnote reflects specific domain strength, not economy-wide insulation'].map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                    {l}
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem title="SME Credit Observatory — Limitations">
              <ul className="space-y-2 mt-2">
                {[
                  'Based exclusively on publicly available aggregate institutional reports rather than enterprise-level microdata',
                  'State-level averages do not capture localized rural credit pockets or intra-state disparities',
                  'Informal lending transaction volumes and interest premiums are calculated using secondary research estimates',
                  'The project is an independent analytical initiative for academic portfolio purposes',
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-atlas-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    {l}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </div>
        </section>

      </div>
    </div>
  )
}
