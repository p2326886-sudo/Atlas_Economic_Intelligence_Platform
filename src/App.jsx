import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const ExecutiveDashboard = lazy(() => import('./pages/ExecutiveDashboard'))
const MSMEModule = lazy(() => import('./pages/modules/MSMEModule'))
const WorkforceModule = lazy(() => import('./pages/modules/WorkforceModule'))
const SupplyChainModule = lazy(() => import('./pages/modules/SupplyChainModule'))
const CreditModule = lazy(() => import('./pages/modules/CreditModule'))
const ResearchLibrary = lazy(() => import('./pages/ResearchLibrary'))
const Publications = lazy(() => import('./pages/Publications'))
const Methodology = lazy(() => import('./pages/Methodology'))
const About = lazy(() => import('./pages/About'))
const DownloadCenter = lazy(() => import('./pages/DownloadCenter'))
const Architecture = lazy(() => import('./pages/Architecture'))
const ResearchReport = lazy(() => import('./pages/ResearchReport'))

const routeMeta = {
  '/report': {
    title: 'Executive Research Report | Atlas Economic Intelligence',
    description: 'Printable executive research report compiling macroeconomic scores, transition maps, early warning signals, and strategic roadmap recommendations.',
  },
  '/': {
    title: 'Atlas Economic Intelligence Platform',
    description: 'A unified economic intelligence platform tracking enterprise resilience, workforce transformation, credit accessibility, and supply chain readiness.',
  },
  '/dashboard': {
    title: 'Executive Dashboard | Atlas Economic Intelligence',
    description: 'Cross-module dashboard for Atlas economic intelligence indicators, risk bands, and composite readiness metrics.',
  },
  '/modules/msme': {
    title: 'MSME Intelligence Index | Atlas',
    description: 'MSME stress, digital readiness, and AI preparedness analytics for India enterprise resilience research.',
  },
  '/modules/workforce': {
    title: 'AI Workforce Transition Index | Atlas',
    description: 'AI readiness and workforce transition diagnostics across enterprise strategy, operations, data, and adaptability.',
  },
  '/modules/supplychain': {
    title: 'Sovereign Supply Chain Index | Atlas',
    description: 'Supply chain resilience scoring across economies, critical sectors, and geopolitical-industrial vulnerabilities.',
  },
  '/modules/credit': {
    title: 'SME Credit Observatory | Atlas',
    description: 'Credit friction, working-capital stress, and digital lending intelligence for India MSME finance.',
  },
  '/library': {
    title: 'Research Library | Atlas Economic Intelligence',
    description: 'Search the Atlas research library across MSME, workforce, supply chain, and credit intelligence publications.',
  },
  '/publications': {
    title: 'Publications | Atlas Economic Intelligence',
    description: 'Independent economic intelligence publications by Priyanshu Gupta, Independent Researcher and Student.',
  },
  '/methodology': {
    title: 'Methodology | Atlas Economic Intelligence',
    description: 'Transparent scoring frameworks, indicator definitions, and research limitations for Atlas modules.',
  },
  '/about': {
    title: 'Priyanshu Gupta | Atlas Economic Intelligence',
    description: 'Priyanshu Gupta, Independent Researcher and Student focused on economic intelligence and enterprise resilience.',
  },
  '/downloads': {
    title: 'Download Center | Atlas Economic Intelligence',
    description: 'Centralized access point for Atlas research reports, analytical frameworks, and module documentation.',
  },
  '/architecture': {
    title: 'Platform Architecture | Atlas Economic Intelligence',
    description: 'Scoring framework equations, systemic transmission vectors, decision flows, and input data pipeline details for Atlas.',
  },
}

function ScrollToTop() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
      })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [hash, pathname])
  return null
}

function RouteHead() {
  const { pathname } = useLocation()
  const meta = routeMeta[pathname] || routeMeta['/']

  useEffect(() => {
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    description?.setAttribute('content', meta.description)
    ogTitle?.setAttribute('content', meta.title)
    ogDescription?.setAttribute('content', meta.description)
  }, [meta])

  return null
}

function PageFallback() {
  return (
    <main className="pt-32 pb-24 px-6" aria-busy="true">
      <div className="mx-auto max-w-7xl">
        <div className="atlas-card p-8 animate-pulse">
          <div className="h-4 w-40 rounded bg-slate-200 mb-4" />
          <div className="h-8 w-full max-w-xl rounded bg-slate-200 mb-3" />
          <div className="h-4 w-full max-w-2xl rounded bg-slate-100" />
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteHead />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="min-h-screen bg-atlas-light">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<ExecutiveDashboard />} />
              <Route path="/modules/msme" element={<MSMEModule />} />
              <Route path="/modules/workforce" element={<WorkforceModule />} />
              <Route path="/modules/supplychain" element={<SupplyChainModule />} />
              <Route path="/modules/credit" element={<CreditModule />} />
              <Route path="/library" element={<ResearchLibrary />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/about" element={<About />} />
              <Route path="/downloads" element={<DownloadCenter />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/report" element={<ResearchReport />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
