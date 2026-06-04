import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { ArrowRight, TrendingUp, TrendingDown, ShieldAlert, AlertTriangle, Cpu, CreditCard, Activity, ArrowUpRight, Zap, Info, Compass, HelpCircle } from 'lucide-react'
import { SectionHeader, PageHero, Badge, RiskBadge } from '../components/UI/index'
import { atlasModules } from '../data/publications'
import { SCENARIOS, calculateScores, getRecommendations, RELATIONSHIPS } from '../data/intelligenceEngine'

export default function ExecutiveDashboard() {
  const [activeScenario, setActiveScenario] = useState('baseline')
  const [hoveredNode, setHoveredNode] = useState(null)
  const [activeRelationship, setActiveRelationship] = useState(null)
  const [showBriefModal, setShowBriefModal] = useState(false)
  const [actionTab, setActionTab] = useState('Immediate')
  const [showExplain, setShowExplain] = useState({ composite: false, resilience: false, risk: false })

  const scenarioData = SCENARIOS[activeScenario]
  const scores = calculateScores(scenarioData)
  const recommendations = getRecommendations(activeScenario, scores)

  // Filters for action center
  const immediateRecs = recommendations.filter(r => r.timeline.includes('3–6') || r.timeline.includes('Immediate'))
  const mediumRecs = recommendations.filter(r => r.timeline.includes('6–12') || r.timeline.includes('12') || r.timeline.includes('Medium') || r.timeline.includes('12–18'))
  const longRecs = recommendations.filter(r => r.timeline.includes('18–24') || r.timeline.includes('24–36') || r.timeline.includes('Long'))

  const activeRecs = actionTab === 'Immediate' ? immediateRecs : actionTab === 'Medium-Term' ? mediumRecs : longRecs;

  // Recharts Dynamic Mapping
  const radarData = [
    { subject: 'Stress Index', MSME: scenarioData.msme.stressIndex, Credit: scenarioData.credit.creditFriction, SC: (10 - scenarioData.supplychain.overallScore) * 10, WF: 100 - scenarioData.workforce.workforceAdaptability },
    { subject: 'Digital Readiness', MSME: scenarioData.msme.digitalReadiness, Credit: 44, SC: scenarioData.supplychain.tradeDiversif * 10, WF: scenarioData.workforce.digitalOperations },
    { subject: 'AI/Tech Adoption', MSME: scenarioData.msme.aiReadiness, Credit: 38, SC: scenarioData.supplychain.semiconductorExp * 10, WF: scenarioData.workforce.strategicIntent },
    { subject: 'Resilience Score', MSME: 100 - scenarioData.msme.stressIndex, Credit: 100 - scenarioData.credit.creditFriction, SC: scenarioData.supplychain.overallScore * 10, WF: scenarioData.workforce.workforceAdaptability },
    { subject: 'Formal Inclusion', MSME: scenarioData.msme.digitalReadiness * 0.7, Credit: scenarioData.credit.creditAccess * 3.5, SC: scenarioData.supplychain.tradeDiversif * 8, WF: scenarioData.workforce.workforceAdaptability * 0.8 },
  ]

  const moduleComparisonData = [
    { module: 'MSME', stress: scenarioData.msme.stressIndex, digital: scenarioData.msme.digitalReadiness, ai: scenarioData.msme.aiReadiness, credit: scenarioData.msme.digitalReadiness * 0.7 },
    { module: 'Workforce', stress: 100 - scenarioData.workforce.workforceAdaptability, digital: scenarioData.workforce.digitalOperations, ai: scenarioData.workforce.strategicIntent, credit: scenarioData.workforce.workforceAdaptability * 0.8 },
    { module: 'Supply Chain', stress: (10 - scenarioData.supplychain.overallScore) * 10, digital: scenarioData.supplychain.tradeDiversif * 10, ai: scenarioData.supplychain.semiconductorExp * 10, credit: scenarioData.supplychain.logistics * 10 },
    { module: 'Credit', stress: scenarioData.credit.creditFriction, digital: scenarioData.msme.digitalReadiness * 0.8, ai: 38, credit: scenarioData.credit.creditAccess * 3.5 },
  ]

  // Node position helper for relationships panel
  const nodes = {
    msme: { x: 90, y: 70, label: 'MSME Index', color: '#1D6AE5', id: 'msme', icon: 'M' },
    credit: { x: 370, y: 70, label: 'Credit Obs.', color: '#E53E3E', id: 'credit', icon: 'C' },
    workforce: { x: 90, y: 230, label: 'Workforce Index', color: '#00A86B', id: 'workforce', icon: 'W' },
    supplychain: { x: 370, y: 230, label: 'Supply Chain', color: '#F59E0B', id: 'supplychain', icon: 'S' }
  }

  return (
    <div className="pt-24 min-h-screen bg-[#F8FAFC]">
      <PageHero
        eyebrow="Executive Command Center"
        title="Economic Intelligence Operating System"
        subtitle="Vantage view of India's macroeconomic resilience, credit observatories, and labor adaptability. Shift scenarios to run real-time stress testing."
        color="#102A43"
        meta={[
          { value: 'AEIOS v2.0', label: 'Engine Mode' },
          { value: activeScenario.toUpperCase(), label: 'Active State' },
          { value: '92.4%', label: 'Composite Confidence' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-10 space-y-10">

        {/* ─── SCENARIO CONTROLLER ─── */}
        <section className="atlas-card p-6 border-l-4 border-atlas-navy bg-white shadow-premium">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-blue flex items-center gap-1.5">
                <Compass size={12} className="animate-spin" /> Live Scenario Stress Testing
              </span>
              <h2 className="text-xl font-bold text-atlas-dark">Macroeconomic Trajectory Models</h2>
              <p className="text-xs text-atlas-slate max-w-xl">
                Simulate alternate risk futures. Selecting a scenario updates all composite indices, risk bands, policy recommendations, and transmission curves instantly.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => setShowBriefModal(true)}
                className="btn-primary flex items-center gap-1.5 text-xs px-4 py-2"
              >
                <Cpu size={14} /> Generate Boardroom Brief
              </button>
              
              <div className="flex flex-wrap gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => { setActiveScenario('baseline'); setActiveRelationship(null); }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeScenario === 'baseline'
                      ? 'bg-white text-atlas-navy shadow-sm'
                      : 'text-atlas-slate hover:text-atlas-navy'
                  }`}
                >
                  Baseline Case
                </button>
                <button
                  onClick={() => { setActiveScenario('optimistic'); setActiveRelationship(null); }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeScenario === 'optimistic'
                      ? 'bg-white text-atlas-green shadow-sm'
                      : 'text-atlas-slate hover:text-atlas-navy'
                  }`}
                >
                  Optimistic (Policy Active)
                </button>
                <button
                  onClick={() => { setActiveScenario('stress'); setActiveRelationship(null); }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeScenario === 'stress'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-atlas-slate hover:text-atlas-navy'
                  }`}
                >
                  Stress Case (Disrupted)
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
            <Info size={14} className="text-atlas-blue flex-shrink-0" />
            <p className="text-xs italic text-atlas-slate">
              <strong className="text-atlas-dark">Active Environment:</strong> {scenarioData.description}
            </p>
          </div>
        </section>

        {/* ─── EXECUTIVE INSIGHTS & EARLY WARNING PANEL ─── */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Executive Insights & Narrative Summary */}
          <div className="atlas-card p-6 lg:col-span-2 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-blue flex items-center gap-1.5">
                    <Activity size={12} /> Executive Insights Panel
                  </span>
                  <h3 className="text-lg font-bold text-atlas-dark">Macroeconomic Narrative & Findings</h3>
                </div>
                <Badge variant="blue">Real-Time Synthesis</Badge>
              </div>

              {/* Narrative Engine output */}
              <div className="p-4 bg-slate-50 border-l-4 border-atlas-blue rounded-r-xl text-left">
                <p className="text-sm font-semibold text-atlas-navy leading-relaxed">
                  "{scores.narrative}"
                </p>
              </div>

              {/* Findings */}
              <div className="space-y-3 text-left">
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block">Top 5 Strategic Findings</span>
                <ul className="space-y-2.5">
                  {scores.findings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-atlas-dark leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-atlas-blue text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Early Warning System */}
          <div className="atlas-card p-6 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 flex items-center gap-1.5">
                    <ShieldAlert size={12} className="text-red-500 animate-pulse" /> Early Warning System
                  </span>
                  <h3 className="text-lg font-bold text-atlas-dark">Emerging Risks</h3>
                </div>
                <Badge variant="red">Active Alerts</Badge>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-atlas-slate leading-relaxed text-left">
                  Systemic risks generated dynamically based on active scenario variables and threshold stress breaches.
                </p>
                <div className="space-y-3">
                  {scores.earlyWarning.map((risk, idx) => (
                    <div key={idx} className="p-3 border border-slate-100 bg-slate-50 hover:bg-red-50/20 hover:border-red-100 rounded-xl transition-all text-left">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-atlas-dark flex items-center gap-1">
                          <AlertTriangle size={11} className={risk.severity === 'High' ? 'text-red-500' : 'text-amber-500'} />
                          {risk.label}
                        </span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {risk.severity} Risk
                        </span>
                      </div>
                      <p className="text-[11px] text-atlas-slate leading-relaxed">
                        {risk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── SYSTEM COMPOSITE SCORE STRIP ─── */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Atlas Composite Score */}
          <div className="atlas-card p-6 bg-gradient-to-br from-slate-900 via-[#0E1E2F] to-[#0A1826] text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-atlas-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Atlas Composite Score</span>
                <Badge variant="blue">Dynamic Aggregation</Badge>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black tracking-tight">{scores.compositeScore}</span>
                <span className="text-lg text-white/40">/ 100</span>
              </div>
              {/* Score visual guide */}
              <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-atlas-blue to-atlas-green transition-all duration-700"
                  style={{ width: `${scores.compositeScore}%` }}
                />
              </div>

              {/* Explain Score Toggle */}
              <button
                onClick={() => setShowExplain(prev => ({ ...prev, composite: !prev.composite }))}
                className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60 hover:text-white bg-white/5 border border-white/10 px-2 py-1 rounded transition-colors"
              >
                <HelpCircle size={11} /> {showExplain.composite ? 'Hide Contributors' : 'Explain Score'}
              </button>

              {/* Explainability breakdown */}
              {showExplain.composite && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5 animate-fadeIn text-left">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider block">Contributor Weight Attribution</span>
                  <div className="space-y-2">
                    {scores.explainability.composite.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-[11px] leading-tight">
                        <div className="text-white/80 pr-2">
                          <p className="font-semibold text-white">{item.label}</p>
                          <p className="text-[9px] text-white/40 leading-normal">{item.description}</p>
                        </div>
                        <span className="font-mono font-bold text-atlas-blue">+{item.value.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/60 flex items-center justify-between">
              <span>Calibration Formula: v2.0</span>
              <span className="flex items-center gap-1 text-atlas-green">
                <TrendingUp size={12} /> Live Computed
              </span>
            </div>
          </div>

          {/* National Resilience Score */}
          <div className="atlas-card p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-slate">National Resilience Score</span>
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${scores.resilience.trendDir === 'up' ? 'text-atlas-green' : 'text-red-500'}`}>
                  {scores.resilience.trendDir === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {scores.resilience.trend.split(' ')[0]}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-atlas-dark tracking-tight">{scores.resilience.score}%</span>
                <span className="text-xs text-atlas-slate font-medium">Resilience Index</span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                  scores.resilience.score > 75 
                     ? 'bg-green-50 text-atlas-green border border-green-200' 
                     : scores.resilience.score > 50 
                       ? 'bg-amber-50 text-amber-600 border border-amber-200' 
                       : 'bg-red-50 text-red-600 border border-red-200'
                }`}>
                  {scores.resilience.trend.includes('Negative') ? 'Fragile / Vulnerable' : scores.resilience.score > 75 ? 'Resilient' : 'Transitional'}
                </span>
                <span className="text-[10px] text-atlas-slate bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                  {scores.resilience.confidence}
                </span>
              </div>

              {/* Explain Score Toggle */}
              <button
                onClick={() => setShowExplain(prev => ({ ...prev, resilience: !prev.resilience }))}
                className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-atlas-slate/60 hover:text-atlas-navy bg-slate-50 border border-slate-200 px-2 py-1 rounded transition-colors"
              >
                <HelpCircle size={11} /> {showExplain.resilience ? 'Hide Contributors' : 'Explain Score'}
              </button>

              {/* Explainability breakdown */}
              {showExplain.resilience && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 animate-fadeIn text-left">
                  <span className="text-[9px] font-bold text-atlas-slate uppercase tracking-wider block">Contributor Weight Attribution</span>
                  <div className="space-y-2">
                    {scores.explainability.resilience.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-[11px] leading-tight">
                        <div className="text-atlas-dark pr-2">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-[9px] text-atlas-slate leading-normal">{item.description}</p>
                        </div>
                        <span className="font-mono font-bold text-atlas-green">+{item.value.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-atlas-slate flex justify-between items-center">
              <span>Risk State:</span>
              <span className="font-semibold text-atlas-dark">{scores.resilience.trend}</span>
            </div>
          </div>

          {/* Economic Risk Score */}
          <div className="atlas-card p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-slate">Economic Risk Score</span>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                    scores.risk.color === 'green' ? 'bg-atlas-green' : scores.risk.color === 'amber' ? 'bg-amber-500' : 'bg-red-600'
                  }`} />
                  <span className="text-[10px] font-bold text-atlas-slate uppercase">{scores.risk.level} RISK</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-atlas-dark tracking-tight">{scores.risk.value}</span>
                <span className="text-lg text-atlas-slate">/ 100</span>
              </div>

              {/* Risk Band Indicators */}
              <div className="mt-4 grid grid-cols-4 gap-1 text-center text-[9px] font-bold uppercase tracking-wider">
                <div className={`py-1 rounded ${activeScenario === 'optimistic' ? 'bg-green-500 text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>Low</div>
                <div className="py-1 rounded bg-slate-100 text-slate-400">Mod</div>
                <div className={`py-1 rounded ${activeScenario === 'baseline' ? 'bg-amber-500 text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>Elevated</div>
                <div className={`py-1 rounded ${activeScenario === 'stress' ? 'bg-red-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400'}`}>High</div>
              </div>

              {/* Explain Score Toggle */}
              <button
                onClick={() => setShowExplain(prev => ({ ...prev, risk: !prev.risk }))}
                className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-atlas-slate/60 hover:text-atlas-navy bg-slate-50 border border-slate-200 px-2 py-1 rounded transition-colors"
              >
                <HelpCircle size={11} /> {showExplain.risk ? 'Hide Contributors' : 'Explain Score'}
              </button>

              {/* Explainability breakdown */}
              {showExplain.risk && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 animate-fadeIn text-left">
                  <span className="text-[9px] font-bold text-atlas-slate uppercase tracking-wider block">Risk Contributor Breakdown</span>
                  <div className="space-y-2">
                    {scores.explainability.risk.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start text-[11px] leading-tight">
                        <div className="text-atlas-dark pr-2">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-[9px] text-atlas-slate leading-normal">{item.description}</p>
                        </div>
                        <span className="font-mono font-bold text-red-600">+{item.value.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-atlas-slate flex justify-between items-center">
              <span>Risk Volatility Indicator:</span>
              <span className="font-semibold text-atlas-dark">{scores.risk.level === 'Low' ? 'Stable' : scores.risk.level === 'Elevated' ? 'Cautious' : 'Volatile'}</span>
            </div>
          </div>

        </div>

        {/* ─── COUNTRY OUTLOOK GENERATOR ─── */}
        <section className="atlas-card p-6 bg-white border-t border-slate-100">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6 text-left">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-blue flex items-center gap-1.5">
                <Compass size={12} /> Country Outlook Generator
              </span>
              <h3 className="text-lg font-bold text-atlas-dark">Macroeconomic Progression Horizons</h3>
            </div>
            <Badge variant="blue">Dynamic Modeling</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {/* Current Outlook */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-sm transition-all flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-atlas-blue/10 text-atlas-blue tracking-wider">Current Outlook</span>
                <p className="text-xs text-atlas-dark font-medium leading-relaxed mt-3">
                  {scores.outlook.current}
                </p>
              </div>
              <span className="text-[9px] font-bold text-atlas-slate mt-4 uppercase">Status: Live Baseline</span>
            </div>

            {/* 6-Month Outlook */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-sm transition-all flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 tracking-wider">6-Month Horizon</span>
                <p className="text-xs text-atlas-dark font-medium leading-relaxed mt-3">
                  {scores.outlook.sixMonth}
                </p>
              </div>
              <span className="text-[9px] font-bold text-atlas-slate mt-4 uppercase">Projection: Mid-term Model</span>
            </div>

            {/* 12-Month Outlook */}
            <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-sm transition-all flex flex-col justify-between min-h-[140px]">
              <div>
                <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-green-50 text-atlas-green border border-green-200 tracking-wider">12-Month Horizon</span>
                <p className="text-xs text-atlas-dark font-medium leading-relaxed mt-3">
                  {scores.outlook.twelveMonth}
                </p>
              </div>
              <span className="text-[9px] font-bold text-atlas-slate mt-4 uppercase">Projection: Strategic Target</span>
            </div>
          </div>
        </section>

        {/* ─── SYSTEM LINKAGE & SCENARIO CHARTS SECTION ─── */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* SVG Systemic Relationships Panel (3/5 Columns) */}
          <div className="atlas-card p-6 lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="space-y-0.5">
                  <h3 className="data-panel-title">Cross-Module Transmission Engine</h3>
                  <p className="text-xs text-atlas-slate">Click transmission vector nodes to analyze feedback loops and ripple effects.</p>
                </div>
                <Badge variant="navy">Inter-connected System</Badge>
              </div>

              {/* SVG Network Visualizer */}
              <div className="bg-slate-900 rounded-xl p-4 flex items-center justify-center relative overflow-hidden border border-slate-800 my-4 min-h-[300px]">
                {/* SVG Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minWidth: '460px' }}>
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#CBD5E1" />
                    </marker>
                    <marker id="arrow-active" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#1D6AE5" />
                    </marker>
                  </defs>

                  {/* Nodes & Connections lines */}
                  {/* MSME <-> Credit */}
                  <path d="M 120 70 L 340 70" stroke={activeRelationship === 1 ? '#E53E3E' : '#475569'} strokeWidth={activeRelationship === 1 ? '3' : '1.5'} strokeDasharray={activeRelationship === 1 ? '6 3' : 'none'} markerEnd="url(#arrow)" className="transition-all" />
                  
                  {/* Credit <-> Workforce */}
                  <path d="M 370 100 L 120 230" stroke={activeRelationship === 0 ? '#1D6AE5' : '#475569'} strokeWidth={activeRelationship === 0 ? '3' : '1.5'} strokeDasharray={activeRelationship === 0 ? '6 3' : 'none'} markerEnd="url(#arrow)" className="transition-all" />

                  {/* Supply Chain -> Workforce */}
                  <path d="M 370 230 L 120 230" stroke={activeRelationship === 2 ? '#F59E0B' : '#475569'} strokeWidth={activeRelationship === 2 ? '3' : '1.5'} strokeDasharray={activeRelationship === 2 ? '6 3' : 'none'} markerEnd="url(#arrow)" className="transition-all" />

                  {/* MSME -> Supply Chain */}
                  <path d="M 90 100 L 340 230" stroke={activeRelationship === 3 ? '#00A86B' : '#475569'} strokeWidth={activeRelationship === 3 ? '3' : '1.5'} strokeDasharray={activeRelationship === 3 ? '6 3' : 'none'} markerEnd="url(#arrow)" className="transition-all" />
                </svg>

                {/* DOM Nodes aligned above SVG */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto" style={{ minWidth: '460px' }}>
                  {Object.values(nodes).map((n) => {
                    const isActive = hoveredNode === n.id
                    return (
                      <button
                        key={n.id}
                        onMouseEnter={() => setHoveredNode(n.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className="absolute w-28 h-12 rounded-lg border flex items-center gap-2 px-3 justify-start transition-all shadow-lg"
                        style={{
                          left: `${n.x}px`,
                          top: `${n.y}px`,
                          backgroundColor: '#0F172A',
                          borderColor: isActive ? n.color : '#334155',
                          boxShadow: isActive ? `0 0 12px ${n.color}50` : 'none',
                        }}
                      >
                        <span className="w-6 h-6 rounded flex items-center justify-center font-bold text-xs text-white" style={{ backgroundColor: n.color }}>
                          {n.icon}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-300 text-left leading-tight">{n.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Relationship Transmission details */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="text-[10px] font-bold text-atlas-blue uppercase tracking-wider block mb-2">Causal Transmission Pathways</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {RELATIONSHIPS.map((rel, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveRelationship(idx)}
                      className={`text-left p-2.5 rounded-lg border text-[11px] font-medium transition-all ${
                        activeRelationship === idx
                          ? 'border-atlas-blue bg-blue-50 text-atlas-navy'
                          : 'border-slate-200 bg-white hover:bg-slate-100 text-atlas-slate'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1">
                        <Zap size={10} className="text-amber-500" />
                        Vector {idx + 1}
                      </div>
                      <p className="truncate mt-1 font-semibold">{rel.label.split('→')[0]}</p>
                    </button>
                  ))}
                </div>

                {activeRelationship !== null ? (
                  <div className="mt-4 p-3 bg-white border border-slate-200 rounded-lg animate-fadeIn text-xs leading-relaxed text-atlas-dark">
                    <div className="flex justify-between items-center mb-1.5">
                      <strong className="text-atlas-navy font-bold">{RELATIONSHIPS[activeRelationship].label}</strong>
                      <span className="font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                        Correlation: {RELATIONSHIPS[activeRelationship].coefficient} ({RELATIONSHIPS[activeRelationship].effect})
                      </span>
                    </div>
                    <p>{RELATIONSHIPS[activeRelationship].description}</p>
                  </div>
                ) : (
                  <div className="mt-4 p-3 bg-white/50 border border-slate-100 rounded-lg text-center text-xs text-atlas-slate italic">
                    Select a systemic vector above to visualize feedback loops.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Radar Chart Panel (2/5 Columns) */}
          <div className="atlas-card p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="data-panel-header mb-2">
                <h3 className="data-panel-title">Dynamic Radar Diagnostic</h3>
                <Badge variant="slate">4 Indices</Badge>
              </div>
              <p className="text-[11px] text-atlas-slate mb-4">Displays how the selected scenario influences stress, digitization, and safety thresholds.</p>
              
              <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#64748B' }} />
                    <Radar name="MSME" dataKey="MSME" stroke="#1D6AE5" fill="#1D6AE5" fillOpacity={0.12} />
                    <Radar name="Workforce" dataKey="WF" stroke="#00A86B" fill="#00A86B" fillOpacity={0.12} />
                    <Radar name="Supply Chain" dataKey="SC" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.12} />
                    <Radar name="Credit" dataKey="Credit" stroke="#E53E3E" fill="#E53E3E" fillOpacity={0.12} />
                    <Legend wrapperStyle={{ fontSize: 10 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>

        {/* ─── DYNAMIC BAR CHART COMPARISON & MODULE VALUES ─── */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Bar Chart module comparison */}
          <div className="atlas-card p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="data-panel-header mb-2">
                <h3 className="data-panel-title">Scored Matrix Benchmarking</h3>
                <Badge variant="slate">Multi-Dimension</Badge>
              </div>
              <p className="text-xs text-atlas-slate mb-6">Aggregate scoring comparison: Stress, Digital, and AI indices under the {scenarioData.name}.</p>
              
              <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={moduleComparisonData} barSize={12} barGap={2}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="module" tick={{ fontSize: 11, fill: '#64748B' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} domain={[0, 100]} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E2E8F0', fontSize: 11 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="digital" name="Digital Operations" fill="#1D6AE5" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="ai" name="AI Readiness" fill="#00A86B" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="stress" name="Stress / Friction" fill="#F59E0B" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="credit" name="Access / Credit Capacity" fill="#E53E3E" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Module Live Values Table */}
          <div className="atlas-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="data-panel-title">Dynamic Module Health Matrix</h3>
                <Badge variant="navy">{activeScenario.toUpperCase()}</Badge>
              </div>
              <div className="space-y-4">
                {atlasModules.map((m) => {
                  let liveScore = m.compositeScore
                  let liveBand = m.scoreBand
                  let badgeVar = 'blue'

                  if (m.id === 'msme') {
                    liveScore = scenarioData.msme.stressIndex
                    liveBand = liveScore > 70 ? 'Critical Stress' : liveScore > 50 ? 'Transitional' : 'Stable'
                    badgeVar = liveScore > 70 ? 'red' : liveScore > 50 ? 'amber' : 'green'
                  } else if (m.id === 'workforce') {
                    liveScore = parseFloat(((scenarioData.workforce.strategicIntent + scenarioData.workforce.digitalOperations + scenarioData.workforce.dataReadiness + scenarioData.workforce.workforceAdaptability)/4).toFixed(1))
                    liveBand = liveScore > 75 ? 'Optimized' : liveScore > 55 ? 'Developing' : 'Fragmented'
                    badgeVar = liveScore > 75 ? 'green' : liveScore > 55 ? 'amber' : 'red'
                  } else if (m.id === 'supplychain') {
                    liveScore = parseFloat((scenarioData.supplychain.overallScore * 10).toFixed(1))
                    liveBand = liveScore > 65 ? 'High Resilience' : liveScore > 45 ? 'Developing' : 'Vulnerable'
                    badgeVar = liveScore > 65 ? 'green' : liveScore > 45 ? 'amber' : 'red'
                  } else if (m.id === 'credit') {
                    liveScore = scenarioData.credit.creditFriction
                    liveBand = liveScore > 80 ? 'Credit Lockout' : liveScore > 60 ? 'High Friction' : 'Frictionless'
                    badgeVar = liveScore > 80 ? 'red' : liveScore > 60 ? 'amber' : 'green'
                  }

                  return (
                    <div key={m.id} className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg border border-slate-100 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: m.color }}>
                          {m.icon}
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-bold text-atlas-dark leading-tight">{m.shortTitle}</p>
                          <span className="text-[9px] text-atlas-slate">{m.id === 'credit' ? 'CFI Friction' : m.id === 'msme' ? 'Stress Index' : 'Maturity Score'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-atlas-dark">{liveScore}</p>
                        <Badge variant={badgeVar}>{liveBand}</Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-center">
              <Link to="/downloads" className="text-xs font-bold text-atlas-blue hover:underline flex items-center justify-center gap-1">
                Access Analytical Download Center <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

        {/* ─── STRATEGIC ACTION CENTER ─── */}
        <section className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-3">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-atlas-blue">Strategic Action Center</span>
              <h2 className="text-xl font-bold text-atlas-dark">Priority Policy Roadmap</h2>
            </div>
            
            {/* Action Center Tabs */}
            <div className="flex gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 w-fit">
              {['Immediate', 'Medium-Term', 'Long-Term'].map((tab) => {
                const count = tab === 'Immediate' ? immediateRecs.length 
                              : tab === 'Medium-Term' ? mediumRecs.length 
                              : longRecs.length;
                return (
                  <button
                    key={tab}
                    onClick={() => setActionTab(tab)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                      actionTab === tab
                        ? 'bg-white text-atlas-navy shadow-sm'
                        : 'text-atlas-slate hover:text-atlas-navy'
                    }`}
                  >
                    {tab}
                    <span className={`px-1.5 py-0.2 text-[9px] rounded-full font-bold ${
                      actionTab === tab ? 'bg-atlas-blue text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeRecs.length > 0 ? (
              activeRecs.map((rec) => (
                <div key={rec.id} className="atlas-card p-6 bg-white border-t-4 border-t-atlas-navy hover:shadow-premium flex flex-col justify-between min-h-[220px]">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{rec.category}</span>
                      <span className="text-[9px] font-black uppercase text-red-600 tracking-wider flex items-center gap-0.5">
                        <Zap size={10} /> {rec.impact}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-atlas-dark leading-tight">{rec.title}</h3>
                    <p className="text-xs text-atlas-slate leading-relaxed">{rec.description}</p>
                  </div>
                  
                  <div className="mt-6 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[10px] text-atlas-slate">
                    <div>
                      <span className="block font-bold text-atlas-dark uppercase text-[8px]">Stakeholder</span>
                      <span className="truncate block max-w-[120px]">{rec.stakeholders}</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-atlas-dark uppercase text-[8px]">Execution Horizon</span>
                      <span>{rec.timeline}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full atlas-card p-8 bg-white text-center border border-slate-150 flex flex-col items-center justify-center min-h-[180px]">
                <Info size={24} className="text-atlas-slate mb-2" />
                <p className="text-sm font-semibold text-atlas-dark">No priorities triggered</p>
                <p className="text-xs text-atlas-slate mt-1">There are no {actionTab.toLowerCase()} policies recommended in this macroeconomic scenario.</p>
              </div>
            )}
          </div>
        </section>

      </div>

      {/* ─── BOARDROOM BRIEF MODAL ─── */}
      {showBriefModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-hero max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-atlas-navy text-white p-6 flex justify-between items-center text-left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Boardroom Brief Generator</span>
                <h3 className="text-xl font-bold mt-1">Economic Resiliency Executive Summary</h3>
              </div>
              <button
                onClick={() => setShowBriefModal(false)}
                className="text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-lg text-xs font-bold transition-all"
              >
                ✕ Close
              </button>
            </div>

            {/* Print-friendly container */}
            <div className="p-8 space-y-6 overflow-y-auto flex-1 text-left" id="boardroom-brief-print">
              <div className="border-b border-slate-150 pb-4 flex justify-between items-end">
                <div>
                  <h4 className="text-2xl font-black text-atlas-navy tracking-tight">ATLAS BRIEF</h4>
                  <p className="text-xs text-atlas-slate uppercase tracking-wider font-semibold">Active State: {scenarioData.name}</p>
                </div>
                <div className="text-right text-[10.5px] text-atlas-slate font-medium">
                  <p>System Engine Mode: AEIOS v2.0</p>
                  <p>Confidence: {scores.resilience.confidence.split(' ')[0]}</p>
                </div>
              </div>

              {/* Summary Paragraph */}
              <div className="p-4 bg-slate-50 border-l-4 border-atlas-blue rounded-r-xl">
                <span className="text-[9px] font-bold text-atlas-blue uppercase tracking-wider block mb-1">Narrative Summary</span>
                <p className="text-sm font-semibold text-atlas-navy leading-relaxed">
                  "{scores.narrative}"
                </p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                  <span className="text-[9px] font-bold text-atlas-slate uppercase tracking-wider block">Composite Score</span>
                  <p className="text-3xl font-black text-atlas-dark mt-1">{scores.compositeScore}</p>
                </div>
                <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                  <span className="text-[9px] font-bold text-atlas-slate uppercase tracking-wider block">Resilience Index</span>
                  <p className="text-3xl font-black text-atlas-dark mt-1">{scores.resilience.score}%</p>
                </div>
                <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
                  <span className="text-[9px] font-bold text-atlas-slate uppercase tracking-wider block">Economic Risk</span>
                  <p className="text-3xl font-black text-atlas-dark mt-1">{scores.risk.value}</p>
                </div>
              </div>

              {/* Two Column details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block mb-2 pb-1 border-b border-slate-100">Top Findings</span>
                  <ul className="space-y-2">
                    {scores.findings.map((finding, idx) => (
                      <li key={idx} className="text-xs text-atlas-dark flex items-start gap-2 leading-relaxed">
                        <span className="font-bold text-atlas-blue mt-0.5">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block mb-2 pb-1 border-b border-slate-100">Priority Action Roadmap</span>
                  <ul className="space-y-2">
                    {recommendations.slice(0, 4).map((rec, idx) => (
                      <li key={idx} className="text-xs text-atlas-dark flex flex-col gap-0.5 leading-relaxed">
                        <span className="font-bold text-atlas-navy">{rec.title}</span>
                        <span className="text-[10px] text-atlas-slate">Horizon: {rec.timeline} | Stakeholder: {rec.stakeholders}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Emerging Risks */}
              <div>
                <span className="text-[10px] font-bold text-atlas-slate uppercase tracking-wider block mb-2 pb-1 border-b border-slate-100">Emerging Risk Warnings</span>
                <div className="grid md:grid-cols-3 gap-3">
                  {scores.earlyWarning.map((risk, idx) => (
                    <div key={idx} className="p-2.5 border border-slate-100 bg-slate-50 rounded-lg text-left">
                      <span className="text-xs font-bold text-atlas-dark block">{risk.label}</span>
                      <span className="text-[9px] font-semibold text-red-600">{risk.severity} Severity Alert</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-between items-center">
              <span className="text-xs text-atlas-slate">Generated by Atlas Economic Intelligence Operating System</span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1"
                >
                  Print Brief
                </button>
                <button
                  onClick={() => setShowBriefModal(false)}
                  className="btn-primary text-xs py-1.5 px-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
