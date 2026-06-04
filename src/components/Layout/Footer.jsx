import React from 'react'
import { Link } from 'react-router-dom'
import { atlasModules, researcherIdentity } from '../../data/publications'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-atlas-dark text-white mt-24">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-atlas-blue/20 border border-atlas-blue/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 3L22 20H2L12 3Z" stroke="#1D6AE5" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M7.5 15H16.5" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="text-base font-bold tracking-tight leading-none block">ATLAS</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50 leading-none block">Economic Intelligence</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              A flagship independent research platform integrating four specialized economic intelligence modules across MSME analytics, workforce transformation, supply chain resilience, and credit access.
            </p>
            <div className="text-xs text-white/40 font-medium">
              Built by<br/>
              {researcherIdentity}
            </div>
          </div>

          {/* Intelligence Modules */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Intelligence Modules</h3>
            <ul className="space-y-2.5">
              {atlasModules.map((m) => (
                <li key={m.id}>
                  <Link
                    to={m.route}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: m.color }}></span>
                    {m.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Research</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Executive Dashboard', path: '/dashboard' },
                { label: 'Research Library', path: '/library' },
                { label: 'Publications', path: '/publications' },
                { label: 'Methodology Center', path: '/methodology' },
                { label: 'Download Center', path: '/downloads' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Researcher */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Researcher</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'About Priyanshu Gupta', path: '/about' },
                { label: 'Research Focus Areas', path: '/about#focus' },
                { label: 'Research Profile', path: '/about#profile' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <p className="text-xs text-white/50 mb-1">Research Disclaimer</p>
              <p className="text-xs text-white/40 leading-relaxed">
                Independent analytical initiative prepared for academic portfolio purposes. Not peer-reviewed institutional research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-white/40">
              © {year} Priyanshu Gupta. Atlas Economic Intelligence Platform. Independent Research Initiative.
            </span>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/40">
            <span>Business Analytics & Strategic Intelligence</span>
            <span>·</span>
            <span>Independent Researcher and Student</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
