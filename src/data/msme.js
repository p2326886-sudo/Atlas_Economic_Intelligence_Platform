// ══════════════════════════════════════════════════════
// MSME Intelligence Index — Real Data
// Source: MSME_Project/src/main.jsx
// ══════════════════════════════════════════════════════

export const msmeOverview = {
  title: 'India MSME Stress & Digital Readiness Index',
  year: '2026',
  edition: 'Research Edition',
  compositeScore: 58.7,
  riskBand: 'Transitional',
  description:
    'A national research portal measuring financial stress, digital maturity, and AI preparedness across India\'s micro, small, and medium enterprise ecosystem.',
};

export const msmeStats = [
  { label: 'MSMEs Surveyed', value: '50', unit: '' },
  { label: 'Avg Stress Index', value: '58.7', unit: '/100' },
  { label: 'Digital Readiness', value: '61', unit: '/100' },
  { label: 'AI Readiness', value: '43', unit: '/100' },
];

export const msmeScope = [
  { value: '50', label: 'MSMEs surveyed' },
  { value: '10', label: 'Sectors covered' },
  { value: '10', label: 'States represented' },
  { value: 'FY2025-26', label: 'Reference period' },
];

export const msmeFindings = [
  { value: '37%', label: 'MSMEs showing elevated working-capital stress', detail: 'Cash-flow strain is concentrated in micro manufacturers and small service firms.' },
  { value: '2.4×', label: 'Higher resilience among digitally mature firms', detail: 'Digital payments, e-invoicing, and cloud accounting correlate with faster recovery cycles.' },
  { value: '61', label: 'National Digital Readiness Score', detail: 'India\'s MSME ecosystem is improving, but adoption depth remains uneven across sectors.' },
  { value: '18%', label: 'Firms prepared for AI-enabled workflows', detail: 'AI readiness is emerging from basic automation, not advanced model deployment.' },
];

export const msmeWhyMatters = [
  { value: '~30%', label: 'India GDP contribution', detail: 'MSMEs remain a core engine of domestic output and distributed enterprise activity.' },
  { value: '~45%', label: 'Export contribution', detail: 'The sector is deeply linked to India\'s trade competitiveness and supplier depth.' },
  { value: '110M+', label: 'Employment base', detail: 'MSME resilience has direct implications for livelihoods, regional mobility, and household income stability.' },
  { value: 'Persistent', label: 'Financing gaps', detail: 'Credit access is still constrained by documentation, collateral, delayed payments, and formal underwriting friction.' },
  { value: 'Uneven', label: 'Digital adoption gaps', detail: 'Basic digital use is rising, but accounting, cloud workflows, cybersecurity, and data quality lag.' },
  { value: 'Emerging', label: 'AI readiness challenges', detail: 'AI value depends on structured records, workflow discipline, affordability, and literacy.' },
];

export const msmeStructuralChallenges = [
  { code: 'CX', title: 'Credit Exclusion', detail: 'Many smaller firms remain outside formal credit channels because operational data is fragmented and documentation readiness is weak.' },
  { code: 'DO', title: 'Digital Operations Gap', detail: 'Digital payments have scaled faster than deeper systems such as inventory, accounting, analytics, and cybersecurity.' },
  { code: 'AI', title: 'AI Inaccessibility', detail: 'AI tools are promising for compliance, forecasting, and support, but adoption is limited by cost, trust, data quality, and skills.' },
];

export const msmeSectorData = [
  { sector: 'Textile', stress: 64, digital: 48, ai: 31 },
  { sector: 'Retail', stress: 59, digital: 55, ai: 36 },
  { sector: 'Handicrafts', stress: 68, digital: 42, ai: 27 },
  { sector: 'IT Services', stress: 43, digital: 78, ai: 59 },
  { sector: 'Logistics', stress: 61, digital: 57, ai: 39 },
  { sector: 'Pharma', stress: 52, digital: 66, ai: 46 },
];

export const msmeStressRows = [
  { label: 'Liquidity pressure', value: 78, band: 'High' },
  { label: 'Credit access friction', value: 64, band: 'Moderate' },
  { label: 'Demand volatility', value: 59, band: 'Moderate' },
  { label: 'Compliance load', value: 46, band: 'Watch' },
  { label: 'Input-cost shock', value: 71, band: 'High' },
];

export const msmeReadinessBars = [
  { label: 'Digital payments', value: 82, color: '#1D6AE5' },
  { label: 'Cloud accounting', value: 57, color: '#00A86B' },
  { label: 'ERP / inventory systems', value: 41, color: '#F59E0B' },
  { label: 'Cyber hygiene', value: 35, color: '#1D6AE5' },
  { label: 'Data interoperability', value: 29, color: '#00A86B' },
];

export const msmeKeyInsights = [
  { value: '62%', label: 'Moderate/high stress' },
  { value: '44%', label: 'Lack formal credit' },
  { value: '34%', label: 'Use cloud tools' },
  { value: '38%', label: 'Willing to pay for AI tools' },
];

export const msmeRecommendations = [
  { title: 'MSME digitalization support', detail: 'Move beyond onboarding and fund sustained usage of accounting, inventory, cybersecurity, and data-quality systems.' },
  { title: 'Credit access modernization', detail: 'Use consent-based operating data, payment histories, and digital records to reduce formal credit exclusion.' },
  { title: 'AI literacy programs', detail: 'Create practical training for compliance copilots, forecasting, collections, customer support, and procurement intelligence.' },
  { title: 'Cloud adoption incentives', detail: 'Offer targeted incentives for affordable cloud accounting, backup, invoicing, and secure workflow tools.' },
];

export const msmeMethodology = [
  'Survey simulation framework',
  'MSME operational indicators',
  'Sector analysis',
  'Digital readiness scoring',
  'AI adoption metrics',
];
