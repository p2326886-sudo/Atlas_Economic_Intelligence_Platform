import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { atlasModules, researcherIdentity } from '../../data/publications'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Executive Dashboard', path: '/dashboard' },
  {
    label: 'Modules',
    children: atlasModules.map(m => ({ label: m.title, path: m.route, color: m.color })),
  },
  { label: 'Research Report', path: '/report' },
  { label: 'Research Library', path: '/library' },
  { label: 'Publications', path: '/publications' },
  { label: 'Methodology', path: '/methodology' },
  { label: 'Architecture', path: '/architecture' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [modulesOpen, setModulesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setModulesOpen(false)
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-premium border-b border-atlas-border' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-atlas-navy text-white/70 text-[10px] font-semibold uppercase tracking-[0.2em] py-1.5 px-6 text-center">
        Atlas Economic Intelligence Platform · {researcherIdentity}
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Atlas Economic Intelligence home">
            <div className="w-9 h-9 bg-atlas-navy rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 3L22 20H2L12 3Z" stroke="#1D6AE5" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7.5 15H16.5" stroke="#00A86B" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="text-base font-bold text-atlas-navy tracking-tight leading-none block">ATLAS</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-atlas-slate leading-none block">Economic Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setModulesOpen(!modulesOpen)}
                    aria-expanded={modulesOpen}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-atlas-slate hover:text-atlas-navy transition-colors rounded-lg hover:bg-slate-50"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${modulesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {modulesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-premium border border-atlas-border py-2 z-[60]" role="menu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          role="menuitem"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-atlas-slate hover:bg-slate-50 hover:text-atlas-navy transition-colors"
                        >
                          <span className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: child.color }}>
                            {child.label[0]}
                          </span>
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-atlas-navy bg-blue-50 font-semibold'
                        : 'text-atlas-slate hover:text-atlas-navy hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Download CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/downloads" className="btn-primary text-xs px-4 py-2">
              Download Center
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden min-h-11 min-w-11 rounded-lg p-2 text-atlas-slate hover:bg-slate-50 hover:text-atlas-navy"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-navigation" className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-atlas-border pb-4 pt-3 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-atlas-slate">Modules</div>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-atlas-slate hover:text-atlas-navy hover:bg-slate-50 rounded-lg"
                    >
                      <span className="w-5 h-5 rounded text-white text-xs font-bold flex items-center justify-center"
                        style={{ backgroundColor: child.color }}>
                        {child.label[0]}
                      </span>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 text-sm font-medium rounded-lg ${
                      isActive ? 'text-atlas-navy bg-blue-50 font-semibold' : 'text-atlas-slate hover:text-atlas-navy hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="pt-2 px-3">
              <Link to="/downloads" className="btn-primary w-full justify-center text-xs">
                Download Center
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close modules dropdown */}
      {modulesOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setModulesOpen(false)} aria-hidden="true" />
      )}
    </header>
  )
}
