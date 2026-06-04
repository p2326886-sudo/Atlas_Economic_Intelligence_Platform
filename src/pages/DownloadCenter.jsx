import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, FileText, BookOpen } from 'lucide-react'
import { PageHero, Badge } from '../components/UI/index'
import { atlasPublications, atlasModules, moduleRoutesByName } from '../data/publications'

const downloads = [
  {
    id: 'live-scenario-report',
    title: 'Executive Economic Resiliency Report (Live Scenario Mode)',
    type: 'Research Report',
    module: 'MSME',
    moduleColor: '#1D6AE5',
    year: '2026',
    format: 'Printable PDF',
    size: 'Full Executive Report',
    description: 'The dynamically generated executive report compiling live scenario calibrations, explainability attribution scores, early warnings, and strategic Roadmaps.',
    path: '/report',
    available: true,
  },
  ...atlasPublications.map(pub => ({
    id: pub.id,
    title: pub.title,
    type: 'Research Report',
    module: pub.module,
    moduleColor: pub.moduleColor,
    year: pub.year,
    format: 'PDF',
    size: 'Full Report',
    description: pub.abstract.substring(0, 140) + '...',
    path: `/publications#${pub.id}`,
    available: false,
  })),
  ...atlasModules.map(m => ({
    id: `framework-${m.id}`,
    title: `${m.title} — Analytical Framework`,
    type: 'Analytical Framework',
    module: m.module,
    moduleColor: m.color,
    year: m.year,
    format: 'Documentation',
    size: 'Framework Reference',
    description: `The complete scoring framework, indicator definitions, and methodology reference for the ${m.title}.`,
    path: m.route,
    available: false,
  })),
]

const categories = ['All', 'Research Report', 'Analytical Framework']
const moduleFilters = ['All', 'MSME', 'Workforce', 'Supply Chain', 'Credit']

export default function DownloadCenter() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeModule, setActiveModule] = useState('All')

  const filtered = downloads.filter(d => {
    const matchCat = activeCategory === 'All' || d.type === activeCategory
    const matchModule = activeModule === 'All' || d.module === activeModule
    return matchCat && matchModule
  })

  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Download Center"
        title="Centralized Research Repository"
        subtitle="Access all Atlas research reports, analytical frameworks, methodology guides, and research papers from one centralized download repository."
        color="#0A2540"
        meta={[
          { value: '4', label: 'Research Reports' },
          { value: '8', label: 'Total Resources' },
          { value: 'PDF / HTML', label: 'Available Formats' },
        ]}
      />

      {/* Stats strip */}
      <div className="bg-white border-b border-atlas-border">
        <div className="mx-auto max-w-7xl px-6 py-8 grid sm:grid-cols-3 gap-5">
          {[
            { label: 'Research Reports', value: '4', icon: FileText, color: '#1D6AE5' },
            { label: 'Analytical Frameworks', value: '4', icon: BookOpen, color: '#00A86B' },
            { label: 'Intelligence Modules', value: '4', icon: Download, color: '#F59E0B' },
          ].map((s) => (
            <div key={s.label} className="atlas-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${s.color}15` }}>
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-atlas-dark">{s.value}</p>
                <p className="text-xs text-atlas-slate">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Notice */}
        <div className="atlas-card p-5 mb-10 border-l-4 border-atlas-blue bg-blue-50">
          <p className="text-sm text-atlas-dark">
            <span className="font-semibold">Download Note:</span> Research files are available through the individual module pages. The Atlas platform is an academic portfolio project — reports are available as HTML/PDF via the source project repositories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                aria-pressed={activeCategory === c}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeCategory === c ? 'bg-atlas-navy text-white border-atlas-navy' : 'border-atlas-border text-atlas-slate hover:border-atlas-navy'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {moduleFilters.map(m => (
              <button key={m} onClick={() => setActiveModule(m)}
                aria-pressed={activeModule === m}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeModule === m ? 'bg-atlas-navy text-white border-atlas-navy' : 'border-atlas-border text-atlas-slate hover:border-atlas-navy'}`}>
                {m}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-atlas-slate mb-6">{filtered.length} resource{filtered.length !== 1 ? 's' : ''} available</p>

        {/* Downloads Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((d) => (
            <div key={d.id} className="atlas-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.moduleColor }}></span>
                  <Badge variant="slate">{d.type}</Badge>
                  <Badge variant="slate">{d.year}</Badge>
                </div>
                <span className="text-xs font-semibold text-atlas-slate bg-atlas-light px-2 py-1 rounded">{d.format}</span>
              </div>
              <h3 className="font-semibold text-atlas-dark mb-2 leading-tight">{d.title}</h3>
              <p className="text-xs text-atlas-slate leading-relaxed mb-5">{d.description}</p>
              <div className="flex items-center gap-3">
                <Link
                  to={d.path || moduleRoutesByName[d.module] || '/library'}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: d.moduleColor }}
                >
                  <Download size={14} /> {d.available ? 'Download / Print' : 'View Resource'}
                </Link>
                <span className="text-xs text-atlas-slate">{d.available ? 'Fully Available' : 'Portfolio access only'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Source projects note */}
        <div className="mt-16 atlas-card p-8">
          <h3 className="font-semibold text-atlas-dark mb-4">Accessing Source Projects</h3>
          <p className="text-sm text-atlas-slate leading-relaxed mb-6">
            The four Atlas intelligence modules are sourced from independent research projects. Each module's full source code and report files are available via the individual project repositories.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {atlasModules.map((m) => (
              <div key={m.id} className="border border-atlas-border rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-3"
                  style={{ backgroundColor: m.color }}>{m.icon}</div>
                <h4 className="text-sm font-semibold text-atlas-dark mb-1">{m.shortTitle}</h4>
                <p className="text-xs text-atlas-slate">{m.year} Edition</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
