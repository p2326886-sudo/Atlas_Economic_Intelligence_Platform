import React from 'react'

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  )
}

export function PageHero({ eyebrow, title, subtitle, meta, color = '#1D6AE5', children }) {
  return (
    <section className="relative bg-atlas-navy text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.18em] mb-6"
            style={{ backgroundColor: `${color}20`, color: color }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight max-w-4xl mb-6">{title}</h1>
        {subtitle && <p className="text-lg text-white/70 max-w-3xl leading-relaxed mb-8">{subtitle}</p>}
        {meta && (
          <div className="flex flex-wrap gap-4">
            {meta.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-white/60">
                <span className="w-1 h-4 rounded" style={{ backgroundColor: color }}></span>
                <span className="font-medium text-white">{item.value}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function MetricTile({ label, value, unit = '', delta, deltaDir, subtitle, className = '' }) {
  return (
    <div className={`metric-tile ${className}`}>
      <p className="metric-label">{label}</p>
      <p className="metric-value">
        {value}<span className="text-xl text-atlas-slate ml-1">{unit}</span>
      </p>
      {delta && (
        <p className={deltaDir === 'up' ? 'metric-change-up' : 'metric-change-down'}>
          {deltaDir === 'up' ? '↑' : '↓'} {delta}
        </p>
      )}
      {subtitle && <p className="text-xs text-atlas-slate mt-2">{subtitle}</p>}
    </div>
  )
}

export function ScoreBar({ label, value, max = 100, color = '#1D6AE5', showValue = true }) {
  const pct = Math.min(100, (value / max) * 100)
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-atlas-dark">{label}</span>
        {showValue && <span className="text-sm font-semibold text-atlas-dark">{value}/{max}</span>}
      </div>
      <div className="score-bar-track">
        <div
          className="score-bar-fill"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export function Badge({ children, variant = 'blue' }) {
  const variants = {
    blue: 'badge-blue',
    green: 'badge-green',
    amber: 'badge-amber',
    red: 'badge-red',
    navy: 'badge-navy',
    slate: 'badge-slate',
  }
  return <span className={variants[variant] || 'badge-slate'}>{children}</span>
}

export function RiskBadge({ level }) {
  const map = {
    Critical: 'risk-critical',
    Elevated: 'risk-elevated',
    Managed: 'risk-managed',
    Improving: 'risk-improving',
    Constrained: 'risk-constrained',
    Vulnerable: 'risk-critical',
    Stable: 'risk-managed',
    'Long-term': 'badge-slate',
    Stabilizing: 'risk-improving',
    'Medium-High': 'risk-elevated',
    High: 'risk-critical',
    Medium: 'risk-managed',
    'Low-Medium': 'risk-managed',
    'Certain (structural)': 'badge-slate',
  }
  return <span className={map[level] || 'badge-slate'}>{level}</span>
}

export function Card({ children, className = '', hover = true }) {
  return (
    <div className={`atlas-card ${hover ? 'hover:shadow-premium transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}
