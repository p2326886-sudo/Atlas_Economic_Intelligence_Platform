import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Download, ChevronRight, FileText } from 'lucide-react'
import { PageHero, SectionHeader, Badge } from '../components/UI/index'
import { atlasPublications, moduleRoutesByName, researcherIdentity } from '../data/publications'

export default function Publications() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Publications Center"
        title="Research Publications"
        subtitle="Research publications by Priyanshu Gupta, Independent Researcher and Student — analytical frameworks in economic intelligence, enterprise resilience, and digital transformation."
        color="#0A2540"
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Four Publications"
          title="The Atlas Research Portfolio"
          subtitle="Each publication is an independent analytical research initiative, documented with full methodology, frameworks, data sources, and limitations."
          className="mb-16"
        />

        <div className="space-y-12">
          {atlasPublications.map((pub, i) => (
            <div key={pub.id} id={pub.id} className="atlas-card overflow-hidden">
              {/* Accent top bar */}
              <div className="h-1.5" style={{ backgroundColor: pub.moduleColor }} />
              <div className="p-8">
                <div className="grid lg:grid-cols-[auto_1fr] gap-8">
                  {/* Publication number */}
                  <div className="hidden lg:flex flex-col items-center">
                    <span className="text-5xl font-bold text-atlas-border">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-px flex-1 bg-atlas-border mt-4"></div>
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      <Badge variant="navy">{pub.year}</Badge>
                      <Badge variant="slate">{pub.type}</Badge>
                      <span className="badge" style={{ backgroundColor: `${pub.moduleColor}15`, color: pub.moduleColor }}>{pub.module}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-atlas-dark mb-2">{pub.title}</h2>
                    <p className="text-sm text-atlas-slate mb-6">
                      <span className="font-semibold text-atlas-dark">{pub.author}</span> · {pub.institution}
                    </p>

                    {/* Abstract */}
                    <div className="bg-atlas-light rounded-xl p-5 border border-atlas-border mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mb-3">Abstract</p>
                      <p className="text-sm text-atlas-dark leading-7">{pub.abstract}</p>
                    </div>

                    {/* Key contributions */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-atlas-slate mb-4">Key Research Contributions</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {pub.keyContributions.map((c, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                              style={{ backgroundColor: pub.moduleColor }}>
                              {j + 1}
                            </span>
                            <p className="text-sm text-atlas-dark">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pub.tags.map(tag => (
                        <span key={tag} className="badge-slate">{tag}</span>
                      ))}
                    </div>

                    {/* Citation */}
                    <div className="bg-slate-50 border border-atlas-border rounded-lg p-4 mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-atlas-slate mb-2">Recommended Citation</p>
                      <p className="text-xs text-atlas-slate leading-relaxed font-mono italic">{pub.citation}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={moduleRoutesByName[pub.module] || '/library'}
                        className="btn-primary text-sm"
                        style={{ backgroundColor: pub.moduleColor }}
                      >
                        <BookOpen size={15} /> View Full Module
                      </Link>
                      <Link to="/downloads" className="btn-outline text-sm flex items-center gap-2">
                        <Download size={15} /> Download
                      </Link>
                      <Link to="/library" className="btn-outline text-sm flex items-center gap-2">
                        <FileText size={15} /> Research Library
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 atlas-card p-8 bg-atlas-light border-atlas-border">
          <h3 className="font-semibold text-atlas-dark mb-3">Research Disclaimer</h3>
          <p className="text-sm text-atlas-slate leading-relaxed">
            All publications presented in this center are independent analytical and educational research initiatives prepared by {researcherIdentity}. These are not official institutional publications, peer-reviewed academic works, government reports, empirical surveys, or validated benchmarking instruments. All analytical frameworks are designed for educational and portfolio demonstration purposes. Sources are cited throughout each module.
          </p>
        </div>
      </div>
    </div>
  )
}
