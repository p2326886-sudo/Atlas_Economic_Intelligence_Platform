import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, BookOpen } from 'lucide-react'
import { PageHero, Badge } from '../components/UI/index'
import { atlasPublications, moduleRoutesByName } from '../data/publications'

const modules = ['All', 'MSME', 'Workforce', 'Supply Chain', 'Credit']

export default function ResearchLibrary() {
  const [search, setSearch] = useState('')
  const [activeModule, setActiveModule] = useState('All')

  const filtered = atlasPublications.filter(p => {
    const matchModule = activeModule === 'All' || p.module === activeModule
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.abstract.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchModule && matchSearch
  })

  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Research Library"
        title="Centralized Research Repository"
        subtitle="All Atlas publications, analytical frameworks, and research outputs in one searchable library."
        color="#1D6AE5"
        meta={[
          { value: '4', label: 'Research Reports' },
          { value: '4', label: 'Modules' },
          { value: '2024–2026', label: 'Coverage Period' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-atlas-slate" />
            <input
              id="library-search"
              type="text"
              aria-label="Search publications"
              placeholder="Search publications, topics, or keywords..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-3 border border-atlas-border rounded-xl text-sm focus:outline-none focus:border-atlas-blue focus:ring-2 focus:ring-atlas-blue/10"
            />
          </div>
          <div className="flex gap-2">
            {modules.map(m => (
              <button
                key={m}
                onClick={() => setActiveModule(m)}
                aria-pressed={activeModule === m}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  activeModule === m
                    ? 'bg-atlas-navy text-white border-atlas-navy'
                    : 'border-atlas-border text-atlas-slate hover:border-atlas-navy hover:text-atlas-navy'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-atlas-slate mb-8">{filtered.length} publication{filtered.length !== 1 ? 's' : ''} found</p>

        {/* Publication cards */}
        <div className="space-y-8">
          {filtered.map((pub) => (
            <div key={pub.id} id={pub.id} className="atlas-card p-8">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: pub.moduleColor }}></span>
                    <Badge variant="slate">{pub.module}</Badge>
                    <Badge variant="slate">{pub.year}</Badge>
                    <Badge variant="slate">{pub.type}</Badge>
                  </div>
                  <h2 className="text-xl font-bold text-atlas-dark mb-3">{pub.title}</h2>
                  <p className="text-sm text-atlas-slate mb-1">
                    <span className="font-semibold text-atlas-dark">{pub.author}</span> · {pub.institution}
                  </p>
                  <p className="text-sm text-atlas-slate leading-relaxed mt-4 mb-5">{pub.abstract}</p>

                  {/* Key Contributions */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mb-3">Key Contributions</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {pub.keyContributions.map((c) => (
                        <div key={c} className="flex items-start gap-2 text-sm text-atlas-dark">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[9px] font-bold"
                            style={{ backgroundColor: pub.moduleColor }}>✓</span>
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="badge-slate">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-48 flex flex-col gap-3">
                  <Link
                    to={moduleRoutesByName[pub.module] || '/library'}
                    className="btn-primary text-sm justify-center"
                    style={{ backgroundColor: pub.moduleColor }}
                  >
                    <BookOpen size={15} /> View Module
                  </Link>
                  <Link to="/downloads" className="btn-outline text-sm justify-center">
                    Downloads
                  </Link>
                  <div className="atlas-card p-4 mt-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">Citation</p>
                    <p className="text-xs text-atlas-slate leading-relaxed italic">{pub.citation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-atlas-slate">No publications match your search. Try different keywords or clear filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
