import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Globe, BarChart2, Shield, Download, Users, ChevronRight } from 'lucide-react'
import { atlasModules, atlasPublications, researcherIdentity } from '../data/publications'
import { SectionHeader, ScoreBar, Badge } from '../components/UI/index'

// Ticker data from real module scores
const tickerItems = [
  'MSME Stress Index: 58.7 / 100 — Transitional',
  'AI Composite Score: 60 / 100 — Developing',
  'Supply Chain RIS Mean: 6.1 / 10',
  'Credit Friction Index: 68.5 / 100 — High Friction',
  'Formal Credit Access: 14% of MSMEs',
  'Digital Lending Share: 44% FY24',
  'Workforce Adaptability: 67 / 100',
  'Data Readiness: 54 / 100 — Binding Constraint',
]

const featuredIndicators = [
  { label: 'MSME Readiness', value: 61, color: '#1D6AE5', module: 'MSME Intelligence', path: '/modules/msme' },
  { label: 'Workforce Transformation', value: 60, color: '#00A86B', module: 'AI Workforce Index', path: '/modules/workforce' },
  { label: 'Supply Chain Resilience', value: 61, color: '#F59E0B', module: 'Sovereign Supply Chain', path: '/modules/supplychain' },
  { label: 'Credit Accessibility', value: 14, color: '#E53E3E', module: 'SME Credit Observatory', path: '/modules/credit' },
]

const overviewKPIs = [
  { label: 'MSME Stress Index', value: '58.7', unit: '/100', badge: 'Transitional', badgeVariant: 'amber', icon: TrendingUp, color: '#1D6AE5' },
  { label: 'AI Composite Score', value: '60', unit: '/100', badge: 'Developing', badgeVariant: 'green', icon: BarChart2, color: '#00A86B' },
  { label: 'Supply Chain RIS Mean', value: '6.1', unit: '/10', badge: 'Critical Sectors: 4', badgeVariant: 'amber', icon: Globe, color: '#F59E0B' },
  { label: 'Credit Friction Index', value: '68.5', unit: '/100', badge: 'High Friction', badgeVariant: 'red', icon: Shield, color: '#E53E3E' },
]

function RevealSection({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}

export default function Home() {
  return (
    <div className="pt-24">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Grid bg */}
        <div className="absolute inset-0 hero-grid-bg" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-atlas-blue/20 bg-blue-50 text-atlas-blue text-xs font-semibold uppercase tracking-[0.18em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-atlas-blue animate-pulse"></span>
                Flagship Intelligence Platform · 2024–2026
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-atlas-dark leading-[1.05] tracking-tight mb-6">
                Atlas Economic<br />
                <span className="text-atlas-blue">Intelligence</span><br />
                Platform
              </h1>
              <p className="text-xl text-atlas-slate leading-relaxed mb-10 max-w-xl">
                A unified economic intelligence platform tracking enterprise resilience, workforce transformation, credit accessibility, and supply chain readiness.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/modules/msme" className="btn-primary">
                  Explore Modules <ArrowRight size={16} />
                </Link>
                <Link to="/dashboard" className="btn-secondary">
                  Executive Dashboard
                </Link>
              </div>

              {/* Module tags */}
              <div className="flex flex-wrap gap-2">
                {atlasModules.map((m) => (
                  <Link key={m.id} to={m.route}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold transition-all hover:shadow-sm"
                      style={{ borderColor: `${m.color}40`, color: m.color, backgroundColor: `${m.color}08` }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: m.color }}></span>
                      {m.shortTitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — live indicator panel */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-atlas-blue/5 to-atlas-green/5 rounded-2xl blur-xl" />
              <div className="relative bg-white rounded-2xl border border-atlas-border shadow-hero p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-atlas-border">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-slate">Atlas Composite View</p>
                    <p className="text-2xl font-bold text-atlas-dark mt-0.5">Live Indicators</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-atlas-slate uppercase tracking-[0.14em]">Coverage</p>
                    <p className="text-sm font-semibold text-atlas-dark">4 Modules · FY2026</p>
                  </div>
                </div>

                {/* KPI Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {overviewKPIs.map((kpi) => (
                    <div key={kpi.label} className="bg-atlas-light rounded-xl p-4 border border-atlas-border">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">{kpi.label}</p>
                      <p className="text-3xl font-bold text-atlas-dark">
                        {kpi.value}<span className="text-sm text-atlas-slate ml-0.5">{kpi.unit}</span>
                      </p>
                      <Badge variant={kpi.badgeVariant}>{kpi.badge}</Badge>
                    </div>
                  ))}
                </div>

                {/* Score bars */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mb-3">Composite Readiness Dimensions</p>
                  {featuredIndicators.map((ind) => (
                    <ScoreBar key={ind.label} label={ind.label} value={ind.value} color={ind.color} />
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-atlas-border flex items-center justify-between">
                  <span className="text-xs text-atlas-slate">Researcher: {researcherIdentity}</span>
                  <Link to="/dashboard" className="text-xs font-semibold text-atlas-blue hover:underline flex items-center gap-1">
                    Full Dashboard <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────── */}
      <div className="bg-atlas-navy border-y border-white/10 py-3 overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 text-xs font-semibold text-white/70 uppercase tracking-[0.15em]">
                <span className="w-1 h-1 rounded-full bg-atlas-blue"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Executive Intelligence Overview ─────────────── */}
      <section className="py-24 px-6 bg-atlas-light border-b border-atlas-border">
        <div className="mx-auto max-w-7xl">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                  eyebrow="Executive Intelligence"
                  title="A flagship research platform for institutional-grade economic analysis"
                  subtitle="Atlas integrates four specialized intelligence modules covering India's enterprise ecosystem and global supply chain dynamics — producing research-grade insights for analysts, consultants, and policymakers."
                />
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: '4', label: 'Intelligence Modules' },
                    { value: '14+', label: 'Analytical Frameworks' },
                    { value: '9', label: 'Economies Tracked' },
                    { value: '10+', label: 'Research Dimensions' },
                  ].map((stat) => (
                    <div key={stat.label} className="atlas-card p-5">
                      <p className="text-4xl font-bold text-atlas-dark">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: BarChart2, title: 'Composite Index Scoring', desc: 'Every module produces a composite index built on real analytical frameworks — stress testing, readiness scoring, and resilience mapping.' },
                  { icon: Globe, title: 'Multi-Domain Coverage', desc: 'From India\'s 110M+ MSME ecosystem to global supply chain geopolitics spanning 9 major economies and 8 critical industries.' },
                  { icon: Users, title: 'Independent Research', desc: `All research is independently produced by ${researcherIdentity} — analytically rigorous, methodologically transparent, and portfolio-grade.` },
                  { icon: Shield, title: 'Policy-Grade Analysis', desc: 'Frameworks directly reference RBI data, World Bank surveys, IMF reports, and McKinsey research — institutional sources throughout.' },
                ].map((item) => (
                  <div key={item.title} className="atlas-card p-5 flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-atlas-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-atlas-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-atlas-slate leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Featured Indicators ──────────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl">
          <RevealSection>
            <SectionHeader
              eyebrow="Featured Indicators"
              title="Four dimensions of economic intelligence"
              subtitle="Real composite scores drawn from independent research frameworks across all Atlas modules."
              className="mb-12"
            />
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIndicators.map((ind, i) => (
              <RevealSection key={ind.label}>
                <Link to={atlasModules[i].route} className="block atlas-card p-6 hover:border-current group" style={{ '--tw-border-opacity': 1 }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: ind.color }}>
                      {atlasModules[i].icon}
                    </div>
                    <ArrowRight size={16} className="text-atlas-slate group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mb-1">{ind.module}</p>
                  <p className="font-semibold text-atlas-dark mb-5">{ind.label}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-atlas-slate">Score</span>
                      <span className="font-bold text-atlas-dark">{ind.value}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${ind.value}%`, backgroundColor: ind.color }} />
                    </div>
                  </div>
                  <p className="text-xs text-atlas-blue font-semibold">View module →</p>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intelligence Modules ─────────────────────────── */}
      <section className="py-24 px-6 bg-atlas-light border-b border-atlas-border">
        <div className="mx-auto max-w-7xl">
          <RevealSection>
            <SectionHeader
              eyebrow="Intelligence Modules"
              title="Four specialized research modules"
              subtitle="Each module is a complete independent research initiative with its own analytical framework, composite index, and policy-grade findings."
              className="mb-14"
            />
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-8">
            {atlasModules.map((m) => (
              <RevealSection key={m.id}>
                <div className="atlas-card p-8 flex flex-col h-full group hover:border-current"
                  style={{ '--hover-border': m.color }}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-sm"
                        style={{ backgroundColor: m.color }}>
                        {m.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-1" style={{ color: m.color }}>
                          {m.year} Edition
                        </p>
                        <h3 className="text-lg font-bold text-atlas-dark">{m.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-atlas-dark">{m.compositeScore}</p>
                      <p className="text-xs text-atlas-slate">{m.scoreBand}</p>
                    </div>
                  </div>
                  <p className="text-sm text-atlas-slate leading-relaxed mb-6">{m.overview}</p>

                  {/* Key Metrics grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {m.keyMetrics.map((metric) => (
                      <div key={metric.label} className="bg-atlas-light rounded-lg p-3 border border-atlas-border">
                        <p className="text-xs text-atlas-slate uppercase tracking-[0.12em] mb-1">{metric.label}</p>
                        <p className="text-lg font-bold text-atlas-dark">{metric.value}<span className="text-sm text-atlas-slate ml-0.5">{metric.unit}</span></p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link to={m.route}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                      style={{ backgroundColor: m.color }}>
                      View Module <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Library Preview ─────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl">
          <RevealSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
              <SectionHeader
                eyebrow="Research Library"
                title="All publications, one place"
                subtitle="Browse the complete research portfolio — indexed, searchable, and downloadable."
              />
              <Link to="/library" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-atlas-blue hover:underline flex-shrink-0 ml-8">
                View all <ChevronRight size={16} />
              </Link>
            </div>
          </RevealSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {atlasPublications.map((pub) => (
              <RevealSection key={pub.id}>
                <div className="atlas-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pub.moduleColor }}></span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate">{pub.module}</span>
                    <span className="ml-auto text-xs text-atlas-slate">{pub.year}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-atlas-dark leading-tight mb-3 flex-1">{pub.title}</h3>
                  <p className="text-xs text-atlas-slate leading-relaxed mb-4 line-clamp-3">{pub.abstract}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pub.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="badge-slate">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/publications#${pub.id}`} className="text-xs font-semibold flex items-center gap-1 mt-auto"
                    style={{ color: pub.moduleColor }}>
                    Read publication <ChevronRight size={12} />
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/library" className="btn-outline">View all publications</Link>
          </div>
        </div>
      </section>

      {/* ── Download + Researcher ────────────────────────── */}
      <section className="py-24 px-6 bg-atlas-light border-b border-atlas-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Download Center preview */}
            <RevealSection>
              <div className="atlas-card-navy p-8 h-full rounded-xl flex flex-col">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Download size={22} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Download Center</h2>
                <p className="text-white/70 leading-relaxed mb-8 flex-1">
                  Access all research reports, methodology guides, analytical frameworks, and data exports from one centralized repository.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { label: 'Research Reports', count: '4' },
                    { label: 'Frameworks', count: '12+' },
                    { label: 'Publications', count: '4' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">{item.count}</p>
                      <p className="text-xs text-white/60 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
                <Link to="/downloads" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-atlas-navy text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                  Access Downloads <ArrowRight size={15} />
                </Link>
              </div>
            </RevealSection>

            {/* Researcher Profile preview */}
            <RevealSection>
              <div className="atlas-card p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-atlas-navy rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    PG
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-atlas-dark">Priyanshu Gupta</h2>
                    <p className="text-sm text-atlas-slate">Independent Researcher and Student</p>
                    <p className="text-xs text-atlas-blue font-medium mt-0.5">Punjab, India | Padrauna, Uttar Pradesh</p>
                  </div>
                </div>
                <p className="text-sm text-atlas-slate leading-relaxed mb-6">
                  Independent researcher in economic intelligence, specializing in MSME analytics, AI readiness, enterprise resilience, supply chain intelligence, and credit access. All four Atlas modules are independent analytical initiatives created for academic portfolio purposes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['MSME Analytics', 'AI Readiness', 'Supply Chain', 'Credit Access', 'Enterprise Resilience'].map((tag) => (
                    <span key={tag} className="badge-navy text-xs">{tag}</span>
                  ))}
                </div>
                <div className="space-y-2 mb-6">
                  {[
                    'India MSME Stress & Digital Readiness Index (2026)',
                    'AI Readiness & Workforce Transition Index (2024)',
                    'Sovereign Supply Chain & Industrial Resilience Index (2025)',
                    'India SME Credit Intelligence Observatory (2024)',
                  ].map((project, i) => (
                    <div key={project} className="flex items-start gap-2 text-sm text-atlas-slate">
                      <span className="w-5 h-5 rounded-full bg-atlas-blue/10 text-atlas-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {project}
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn-outline mt-auto w-fit flex items-center gap-2">
                  Full Profile <ArrowRight size={14} />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-atlas-navy">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-eyebrow text-white/60">Start Exploring</p>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to explore the platform?</h2>
          <p className="text-lg text-white/70 mb-10">
            Begin with the Executive Dashboard for a cross-module overview, or dive directly into any of the four specialized intelligence modules.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/dashboard" className="btn-primary bg-white text-atlas-navy hover:bg-slate-100">
              Executive Dashboard <ArrowRight size={16} />
            </Link>
            <Link to="/modules/msme" className="btn-secondary border-white text-white hover:bg-white hover:text-atlas-navy">
              MSME Module
            </Link>
            <Link to="/library" className="btn-outline border-white/30 text-white hover:border-white hover:bg-white/10">
              Research Library
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
