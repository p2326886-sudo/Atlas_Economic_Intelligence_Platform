import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe, TrendingUp, Shield, MapPin, User } from 'lucide-react'
import { PageHero } from '../components/UI/index'
import { atlasModules, researcherIdentity } from '../data/publications'

const researchCompetencies = [
  'Financial Systems Analysis & Underwriting Indicators',
  'Working-Capital Management & Supply-Chain Cash Flows',
  'Fintech Credit Models & Digital Financial Infrastructure',
  'Policy Analysis & Regional Economic Development Research',
  'AI Readiness & Workforce Transition Frameworks',
  'Supply Chain Geopolitics & Industrial Resilience',
  'Business Intelligence Visualization & Technical Architecture Design',
]

const researchInterests = [
  { icon: TrendingUp, title: 'MSME Financial Inclusion & Credit Architecture', color: '#1D6AE5' },
  { icon: Globe, title: 'AI Readiness & Enterprise Digital Transformation', color: '#00A86B' },
  { icon: Shield, title: 'Supply Chain Resilience & Geopolitical Risk', color: '#F59E0B' },
  { icon: BookOpen, title: 'Consented Financial Data Infrastructure (India Stack)', color: '#E53E3E' },
  { icon: TrendingUp, title: 'Flow-Based Lending & Credit Underwriting Innovation', color: '#1D6AE5' },
  { icon: Globe, title: 'Economic Formalization & Regional Development Policies', color: '#00A86B' },
]

const researchTimeline = [
  { year: '2024', title: 'AI Readiness & Workforce Transition Index', type: 'Research Framework', color: '#00A86B' },
  { year: '2024', title: 'India SME Credit Intelligence Observatory', type: 'Credit Intelligence Report', color: '#E53E3E' },
  { year: '2025', title: 'Sovereign Supply Chain & Industrial Resilience Index', type: 'Geopolitical-Industrial Analysis', color: '#F59E0B' },
  { year: '2026', title: 'India MSME Stress & Digital Readiness Index', type: 'Research Edition', color: '#1D6AE5' },
  { year: '2026', title: 'Atlas Economic Intelligence Platform', type: 'Umbrella Platform', color: '#0A2540' },
]

export default function About() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="About the Researcher"
        title="Priyanshu Gupta"
        subtitle="Independent researcher in economic intelligence — specializing in MSME analytics, AI readiness, enterprise resilience, supply chain intelligence, and credit access."
        color="#0A2540"
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <User size={16} className="text-atlas-blue" />
            {researcherIdentity}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin size={16} className="text-atlas-blue" />
            India
          </div>
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">

        {/* Profile */}
        <section id="profile" className="grid lg:grid-cols-[auto_1fr] gap-12 scroll-mt-32">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 bg-atlas-navy rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-premium">
              PG
            </div>
            <div className="text-center">
              <p className="font-bold text-atlas-dark text-lg">Priyanshu Gupta</p>
              <p className="text-sm text-atlas-slate">Research Author</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold text-atlas-dark mb-6">About the Researcher</h2>
            <div className="space-y-4 text-atlas-slate leading-relaxed text-base">
              <p>
                Priyanshu Gupta is an independent researcher and student with a research focus spanning MSME financial inclusion, enterprise AI readiness, sovereign supply chain resilience, and credit access architecture.
              </p>
              <p>
                His research motivation emerged from direct operational exposure to MSME business environments — observing the acute working-capital stress and collateral constraints in a family-run retail and logistics business in Padrauna, Uttar Pradesh during pandemic-induced disruptions. This ground-level context shapes a research perspective that bridges institutional economic theory with real operational reality.
              </p>
              <p>
                All four Atlas research modules are independent analytical initiatives. They synthesize published institutional research from RBI, World Bank, IMF, McKinsey Global Institute, Deloitte, OECD, and WEF into structured analytical frameworks with transparent methodologies and stated limitations.
              </p>
              <p>
                The Atlas Economic Intelligence Platform represents the integration of these four specialized modules into a flagship research portfolio — designed for institutional credibility, analytical rigor, and public accessibility.
              </p>
            </div>
          </div>
        </section>

        {/* Research Focus Areas */}
        <section id="focus" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-atlas-dark mb-8">Research Focus Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchInterests.map((item) => (
              <div key={item.title} className="atlas-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <p className="text-sm font-medium text-atlas-dark leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competencies */}
        <section>
          <h2 className="text-2xl font-bold text-atlas-dark mb-8">Research Competencies</h2>
          <div className="atlas-card p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {researchCompetencies.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-atlas-blue flex-shrink-0"></span>
                  <span className="text-sm text-atlas-dark">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-atlas-dark mb-8">Research Portfolio Timeline</h2>
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-atlas-border"></div>
            <div className="space-y-8">
              {researchTimeline.map((item) => (
                <div key={item.title} className="relative flex items-start gap-6">
                  <div className="absolute -left-9 w-5 h-5 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                    style={{ backgroundColor: item.color }}></div>
                  <div className="w-12 text-sm font-bold text-atlas-slate flex-shrink-0">{item.year}</div>
                  <div className="atlas-card p-5 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-1" style={{ color: item.color }}>{item.type}</p>
                    <h3 className="font-semibold text-atlas-dark">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module Links */}
        <section>
          <h2 className="text-2xl font-bold text-atlas-dark mb-8">Research Publications</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {atlasModules.map((m) => (
              <Link key={m.id} to={m.route} className="atlas-card p-6 flex items-center gap-5 group hover:shadow-premium">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: m.color }}>{m.icon}</div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-1" style={{ color: m.color }}>{m.year} Edition</p>
                  <h3 className="font-semibold text-atlas-dark">{m.title}</h3>
                  <p className="text-xs text-atlas-slate mt-1">Composite Score: {m.compositeScore} · {m.scoreBand}</p>
                </div>
                <ArrowRight size={16} className="text-atlas-slate group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* Research Context */}
        <section className="atlas-card p-8 bg-atlas-light border-atlas-border">
          <h3 className="font-semibold text-atlas-dark mb-4">Research Context & Motivation</h3>
          <p className="text-sm text-atlas-slate leading-relaxed mb-4">
            This research portfolio grew from a persistent analytical preoccupation with how organisations and enterprises navigate technological discontinuity — the kind of deep structural disruption that AI, supply chain fragmentation, and credit market failures are currently producing across emerging economies.
          </p>
          <p className="text-sm text-atlas-slate leading-relaxed">
            The limitations documented in each module's methodology section are real and stated explicitly. What remains durable across all four modules is the analytical structure: enterprise resilience is multidimensional, data infrastructure is chronically underinvested, and human adaptability is the most complex and consequential variable in every framework studied.
          </p>
        </section>

      </div>
    </div>
  )
}
