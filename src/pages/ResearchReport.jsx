import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Printer, Compass, Activity, ShieldAlert, Zap, TrendingUp, ChevronLeft } from 'lucide-react'
import { SCENARIOS, calculateScores, getRecommendations } from '../data/intelligenceEngine'
import { Badge } from '../components/UI/index'

export default function ResearchReport() {
  const [activeScenario, setActiveScenario] = useState('baseline')
  
  const scenarioData = SCENARIOS[activeScenario]
  const scores = calculateScores(scenarioData)
  const recommendations = getRecommendations(activeScenario, scores)

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC] pb-16">
      {/* Control Strip (Hidden in Print) */}
      <div className="bg-white border-b border-slate-200 py-4 px-6 print:hidden">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/dashboard" className="flex items-center gap-1.5 text-xs font-bold text-atlas-slate hover:text-atlas-navy">
            <ChevronLeft size={16} /> Back to Dashboard
          </Link>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-atlas-slate uppercase tracking-wider">Report Scenario:</span>
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              {['baseline', 'optimistic', 'stress'].map((sc) => (
                <button
                  key={sc}
                  onClick={() => setActiveScenario(sc)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeScenario === sc ? 'bg-white text-atlas-navy shadow-sm' : 'text-atlas-slate hover:text-atlas-navy'
                  }`}
                >
                  {sc === 'baseline' ? 'Baseline' : sc === 'optimistic' ? 'Optimistic' : 'Stress'}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="btn-primary flex items-center gap-1.5 text-xs px-4 py-2"
          >
            <Printer size={14} /> Download / Print PDF Report
          </button>
        </div>
      </div>

      {/* Report Canvas */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-8">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-premium p-8 sm:p-12 print:border-none print:shadow-none print:p-0 text-left space-y-8" id="research-report-print">
          
          {/* Institutional Header */}
          <div className="border-b-2 border-atlas-navy pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-[10px] font-bold text-atlas-blue uppercase tracking-[0.2em] block">Flagship Economic Intelligence Series</span>
              <h1 className="text-3xl font-black tracking-tight text-atlas-navy mt-1">ATLAS RESEARCH REPORT</h1>
              <p className="text-xs text-atlas-slate uppercase tracking-wider font-semibold mt-1">Scenario Analysis Model: {scenarioData.name}</p>
            </div>
            <div className="text-left sm:text-right text-xs text-atlas-slate">
              <p className="font-bold text-atlas-navy">AEIOS OPERATING SYSTEM v2.0</p>
              <p>Confidence Index: {scores.resilience.confidence.split(' ')[0]}</p>
              <p>Generated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Abstract / Executive Summary */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">1. Executive Overview</h2>
            <div className="p-4 bg-slate-50 border-l-4 border-atlas-blue rounded-r-xl">
              <p className="text-sm font-semibold text-atlas-navy leading-relaxed italic">
                "{scores.narrative}"
              </p>
            </div>
            <p className="text-xs text-atlas-slate leading-relaxed">
              This report examines India's structural resilience parameters under the {scenarioData.name}. 
              Using the Atlas Economic Intelligence Operating System (AEIOS) multi-dimensional diagnostic frameworks, we analyze the causal relationships between credit friction, workforce digitalization readiness, supply chain depth, and micro-enterprise stress cycles.
            </p>
          </section>

          {/* Scores Grid */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">2. Quantitative Benchmarks</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="border border-slate-150 p-5 rounded-xl bg-slate-50 text-center">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">Atlas Composite Score</span>
                <p className="text-4xl font-black text-atlas-navy mt-2">{scores.compositeScore}</p>
                <span className="text-[10px] text-atlas-slate block mt-1">Pillar Aggregate</span>
              </div>
              <div className="border border-slate-150 p-5 rounded-xl bg-slate-50 text-center">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">National Resilience Score</span>
                <p className="text-4xl font-black text-atlas-navy mt-2">{scores.resilience.score}%</p>
                <span className="text-[10px] text-atlas-slate block mt-1">{scores.resilience.trend}</span>
              </div>
              <div className="border border-slate-150 p-5 rounded-xl bg-slate-50 text-center">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">Economic Risk Rating</span>
                <p className="text-4xl font-black text-atlas-navy mt-2">{scores.risk.value}</p>
                <span className="text-[10px] text-atlas-slate block mt-1">Band: {scores.risk.level}</span>
              </div>
            </div>
          </section>

          {/* Score Explainability */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">3. Explainability & Contribution Breakdown</h2>
            <p className="text-xs text-atlas-slate leading-relaxed">
              Below is the dynamic contributor attribution breakdown detailing the exact numeric weights that establish the macro scores.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Composite Contributors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">Composite Score Contributors</h3>
                <div className="space-y-3">
                  {scores.explainability.composite.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs border-b border-slate-50 pb-2">
                      <div className="pr-2">
                        <p className="font-semibold text-atlas-dark">{item.label}</p>
                        <p className="text-[10px] text-atlas-slate leading-normal">{item.description}</p>
                      </div>
                      <span className="font-mono font-bold text-atlas-blue text-right">+{item.value.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resilience Contributors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">Resilience Index Contributors</h3>
                <div className="space-y-3">
                  {scores.explainability.resilience.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs border-b border-slate-50 pb-2">
                      <div className="pr-2">
                        <p className="font-semibold text-atlas-dark">{item.label}</p>
                        <p className="text-[10px] text-atlas-slate leading-normal">{item.description}</p>
                      </div>
                      <span className="font-mono font-bold text-atlas-green text-right">+{item.value.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Contributors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">Risk Score Contributors</h3>
                <div className="space-y-3">
                  {scores.explainability.risk.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs border-b border-slate-50 pb-2">
                      <div className="pr-2">
                        <p className="font-semibold text-atlas-dark">{item.label}</p>
                        <p className="text-[10px] text-atlas-slate leading-normal">{item.description}</p>
                      </div>
                      <span className="font-mono font-bold text-red-600 text-right">+{item.value.toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Analysis & Findings */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">4. Key Empirical Findings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">Critical Findings</span>
                <ul className="space-y-3">
                  {scores.findings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-atlas-dark leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-atlas-blue text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">Emerging Warning Flags</span>
                <div className="space-y-3">
                  {scores.earlyWarning.map((risk, idx) => (
                    <div key={idx} className="p-3 border border-slate-150 bg-slate-50 rounded-xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-atlas-dark">{risk.label}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {risk.severity} Alert
                        </span>
                      </div>
                      <p className="text-[11.5px] text-atlas-slate leading-relaxed">
                        {risk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Outlook Generator */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">5. Macroeconomic Progression Forecasts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                <span className="text-[9px] font-bold text-atlas-blue uppercase tracking-wider block">Current Outlook</span>
                <p className="text-xs text-atlas-dark leading-relaxed mt-2">{scores.outlook.current}</p>
              </div>
              <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider block">6-Month Forecast</span>
                <p className="text-xs text-atlas-dark leading-relaxed mt-2">{scores.outlook.sixMonth}</p>
              </div>
              <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                <span className="text-[9px] font-bold text-atlas-green uppercase tracking-wider block">12-Month Forecast</span>
                <p className="text-xs text-atlas-dark leading-relaxed mt-2">{scores.outlook.twelveMonth}</p>
              </div>
            </div>
          </section>

          {/* Strategic Actions Center */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-atlas-navy pb-1 border-b border-slate-100">6. Policy Recommendations</h2>
            <div className="space-y-3">
              {recommendations.map((rec) => (
                <div key={rec.id} className="p-4 border border-slate-150 rounded-xl hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500">{rec.category}</span>
                      <h4 className="font-bold text-sm text-atlas-navy mt-1">{rec.title}</h4>
                      <p className="text-xs text-atlas-slate leading-relaxed mt-1">{rec.description}</p>
                    </div>
                    <span className="text-[9px] font-black uppercase text-red-600 tracking-wider flex-shrink-0">{rec.impact}</span>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 grid grid-cols-2 text-[10px] text-atlas-slate">
                    <span>Stakeholders: {rec.stakeholders}</span>
                    <span className="text-right">Execution Horizon: {rec.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Institutional Footer */}
          <div className="border-t border-slate-200 pt-6 text-center text-[10px] text-atlas-slate">
            <p>Priyanshu Gupta (Independent Researcher and Student) · economicintelligence.github.io/atlas</p>
            <p className="mt-1 font-semibold uppercase">Confidential · Boardroom Distribution Only · Sourced via AEIOS Frameworks</p>
          </div>

        </div>
      </div>
    </div>
  )
}
