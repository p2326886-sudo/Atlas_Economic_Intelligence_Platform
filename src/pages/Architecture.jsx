import React from 'react'
import { PageHero, SectionHeader, Badge } from '../components/UI/index'
import { Database, Cpu, Compass, GitMerge, FileText, ArrowRight, Server, BookOpen, Layers, CheckCircle } from 'lucide-react'

export default function Architecture() {
  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC]">
      <PageHero
        eyebrow="Platform Technical Architecture"
        title="Atlas Economic Intelligence scoring frameworks & decision pipelines."
        subtitle="Transparent documentation of empirical data sources, algorithmic scoring equations, systemic transmission vectors, and recommendation logic."
        color="#0A2540"
        meta={[
          { value: 'Empirical + Synthetic', label: 'Data Model' },
          { value: '4 Layers', label: 'Architecture Depth' },
          { value: 'Academic Portfolio', label: 'Classification' },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        
        {/* 1. LAYERED SYSTEM ARCHITECTURE DIAGRAM */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Layered Architecture"
            title="Four-Tier Integration Pipeline"
            subtitle="How primary indices are processed from ground-level data sources into unified risk vectors."
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="atlas-card p-5 accent-bar-blue bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Database size={16} className="text-atlas-blue" />
                <span className="font-bold text-xs uppercase tracking-wider text-atlas-dark">Tier 1: Data Ingestion</span>
              </div>
              <p className="text-xs text-atlas-slate leading-relaxed">
                Consolidates RBI bulletins, SIDBI health monitors, IMF databases, and field logistics sheets from Padrauna, UP.
              </p>
            </div>
            <div className="atlas-card p-5 accent-bar-green bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={16} className="text-atlas-green" />
                <span className="font-bold text-xs uppercase tracking-wider text-atlas-dark">Tier 2: Indicator Indexing</span>
              </div>
              <p className="text-xs text-atlas-slate leading-relaxed">
                Computes thematic scores: MSME stress index, Credit Friction (CFI), AI Readiness, and Supply Chain RIS.
              </p>
            </div>
            <div className="atlas-card p-5 accent-bar-amber bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={16} className="text-amber-500" />
                <span className="font-bold text-xs uppercase tracking-wider text-atlas-dark">Tier 3: Aggregation</span>
              </div>
              <p className="text-xs text-atlas-slate leading-relaxed">
                Weighs and normalizes indicators under Scenario states (Optimistic, Baseline, Stress Case) to produce composite resilience ratings.
              </p>
            </div>
            <div className="atlas-card p-5 accent-bar-navy bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Compass size={16} className="text-atlas-navy" />
                <span className="font-bold text-xs uppercase tracking-wider text-atlas-dark">Tier 4: Decision Output</span>
              </div>
              <p className="text-xs text-atlas-slate leading-relaxed">
                Triggers policy recommendations and updates transmission maps based on active indicator thresholds.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SCORING METHODOLOGY & MATHEMATICAL EQUATIONS */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Algorithmic Scoring Framework"
            title="Mathematical Formulations"
            subtitle="The underlying equations governing the primary indicators and composite indexes."
          />

          <div className="space-y-6">
            
            {/* Formula 1 */}
            <div className="atlas-card p-6 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-atlas-blue uppercase tracking-wider">1. Atlas Composite Score (ACS)</span>
                <Badge variant="blue">Normalized 0-100</Badge>
              </div>
              <p className="text-xs text-atlas-slate">
                Calculates the overall health of the enterprise ecosystem by averaging the normalized performance of all four core intelligence modules, calibrated dynamically against the scenario scalar.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs text-center text-atlas-navy">
                {"ACS = \\left( \\frac{S_{MSME} + S_{Credit} + S_{Workforce} + S_{SC}}{4} \\right) \\times \\gamma_{Scenario}"}
              </div>
              <div className="text-xs text-atlas-slate leading-relaxed">
                Where:
                <ul className="list-disc pl-5 mt-1.5 space-y-1">
                  <li><strong>S_MSME:</strong> (Digital Readiness + AI Readiness + (100 - Stress Index)) / 3</li>
                  <li><strong>S_Credit:</strong> (Credit Access * 3.5 + (100 - Friction) + (100 - WC_Cycle)) / 2.5</li>
                  <li><strong>S_Workforce:</strong> Average of Strategic, Operations, Data, and Adaptability scores</li>
                  <li><strong>S_SC:</strong> Average of 6 Supply Chain dimensions multiplied by 10</li>
                  <li><strong>γ_Scenario:</strong> Calibration scalar (Baseline: 1.133, Optimistic: 1.155, Stress: 1.002)</li>
                </ul>
              </div>
            </div>

            {/* Formula 2 */}
            <div className="atlas-card p-6 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-atlas-green uppercase tracking-wider">2. National Resilience Score (NRS)</span>
                <Badge variant="green">Resilience Capacity %</Badge>
              </div>
              <p className="text-xs text-atlas-slate">
                Estimates macro capacity to absorb shocks. Heavily weighted toward manufacturing depth and workforce flexibility rather than financial indicators.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-xs text-center text-atlas-green">
                {"NRS = 0.40(S_{SC}) + 0.30(WF_{Adapt}) + 0.20(100 - CFI) + 0.10(MSME_{Dig})"}
              </div>
              <div className="text-xs text-atlas-slate leading-relaxed">
                Where <strong>CFI</strong> is Credit Friction Index, and <strong>MSME_Dig</strong> is MSME Digital Readiness score.
              </div>
            </div>

          </div>
        </section>

        {/* 3. EMPIRICAL DATA SOURCES */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Data Sources & Pipelines"
            title="System Input Inventory"
            subtitle="The datasets, surveys, and qualitative indexes that feed the Atlas intelligence layers."
          />

          <div className="atlas-card overflow-hidden bg-white">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-atlas-slate font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-4">Module</th>
                  <th className="p-4">Primary Datasets Referenced</th>
                  <th className="p-4">Nature of Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-atlas-dark">
                <tr>
                  <td className="p-4 font-bold text-atlas-blue">MSME Intelligence</td>
                  <td className="p-4">SIDBI MSME Pulse Reports, World Bank Enterprise Survey (India modules)</td>
                  <td className="p-4">Survey compilation on liquidity and technology use.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-red-600">SME Credit Observatory</td>
                  <td className="p-4">RBI Financial Inclusion Indexes, CIBIL Health index, ground-level business logsheets (Padrauna, UP)</td>
                  <td className="p-4">Lending frictions, working-capital durations, cash conversion cycles.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-atlas-green">AI Workforce Transition</td>
                  <td className="p-4">OECD Skills Outlook, World Economic Forum Future of Jobs datasets, ILO indices</td>
                  <td className="p-4">Organizational capability diagnostics and skills velocity gaps.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-amber-500">Sovereign Supply Chain</td>
                  <td className="p-4">USMCA Trade logs, Geopolitical risk models, semiconductor foundry allocation sheets</td>
                  <td className="p-4">Critical sector vulnerabilities and import concentration risks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. RECOMMENDATIONS DECISION FLOW */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Decision Flow Diagram"
            title="Logic Threshold Model"
            subtitle="How active indicator thresholds trigger specific strategic recommendation alerts."
          />

          <div className="atlas-card p-6 bg-slate-900 text-white space-y-6">
            <div className="flex items-center gap-3">
              <Server size={18} className="text-atlas-blue animate-pulse" />
              <h4 className="font-bold text-sm text-slate-200">Recommendation Rule-Tree</h4>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-4">
                <span className="text-atlas-blue">[Start]</span>
                <p className="text-slate-300">Continuous scanning of calculated module subscores...</p>
              </div>

              <div className="pl-6 border-l border-slate-700 space-y-4">
                <div className="space-y-1">
                  <div className="text-amber-500 flex items-center gap-2">
                    <span>IF</span>
                    <span className="bg-slate-800 text-slate-300 px-1 rounded">{"S_Workforce < 70"}</span>
                  </div>
                  <div className="pl-6 text-slate-400">
                    → TRIGGER: <strong>"Accelerate Enterprise AI Reskilling Programs"</strong>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-amber-500 flex items-center gap-2">
                    <span>IF</span>
                    <span className="bg-slate-800 text-slate-300 px-1 rounded">{"S_Credit < 60"}</span>
                  </div>
                  <div className="pl-6 text-slate-400">
                    → TRIGGER: <strong>"Mandate Cash-Flow / GST-Linked SME Underwriting"</strong>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-amber-500 flex items-center gap-2">
                    <span>IF</span>
                    <span className="bg-slate-800 text-slate-300 px-1 rounded">{"Scenario === \"Stress\" OR S_SC < 50"}</span>
                  </div>
                  <div className="pl-6 text-slate-400">
                    → TRIGGER: <strong>"Expand Domestic Semiconductor Packaging & Assembly Infill"</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-atlas-green">[Output]</span>
                <p className="text-slate-300">Deliver active strategic policy cards to the Executive Command Center.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PORTFOLIO AND ACADEMIC INTEGRITY DISCLAIMER */}
        <section className="atlas-card-navy rounded-xl p-8 space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-atlas-green" />
            <h4 className="font-bold text-white text-base">Academic & Portfolio Integrity Statement</h4>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            This platform acts as an educational model synthesizing research across macroeconomics, small business lending structures, and supply chain disruptions. The algorithms, scenarios, and causal link coefficients represent structural models meant to demonstrate data visualization techniques and dashboard interface designs suitable for policy research portfolios.
          </p>
        </section>

      </div>
    </div>
  )
}
