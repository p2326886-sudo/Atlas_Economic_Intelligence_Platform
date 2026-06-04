// ══════════════════════════════════════════════════════
// SME Credit Observatory — Real Data
// Source: SME_Credit_Observatory/src/data/researchData.js
// Author: Priyanshu Gupta, Independent Researcher and Student
// ══════════════════════════════════════════════════════

export const creditOverview = {
  title: 'India SME Credit Intelligence Observatory',
  subtitle: 'A comprehensive analytical framework examining credit friction, working-capital stress, and financial access patterns across India\'s MSME ecosystem.',
  year: '2024',
  creditFrictionIndex: 68.5,
  formalCreditAccess: 14,
  creditGap: '₹25T',
  digitalLendingShare: 44,
};

export const creditKeyFindings = [
  { stat: '14%', title: 'Low Formal Credit Penetration', description: 'Fewer than one in six MSME units (approximately 14%) currently access formal institutional credit in India, with the vast majority locked into informal debt markets.' },
  { stat: '142d', title: 'Acute Working-Capital Stress Peak', description: 'During peak pandemic stress, cash conversion cycles stretched to 142 days as receivables collection collapsed while supplier payable demands accelerated.' },
  { stat: '2.2×', title: 'Geographic Disparity Ratio', description: 'Highly industrialized states show credit readiness and formal credit penetration ratios over 2.2 times higher than credit-underserved regions such as Uttar Pradesh and Bihar.' },
  { stat: '44%', title: 'Alternative Credit Integration Surge', description: 'Fintech-intermediated and digital-first credit channels expanded to capture 44% of all new credit disbursals in FY24, fundamentally shifting market share from commercial banks.' },
  { stat: '₹25T', title: 'Unmet MSME Credit Demand Gap', description: 'The aggregate formal MSME credit gap in India exceeds ₹25 Lakh Crore ($300B+), presenting a structural drag on industrial capacity and business growth.' },
  { stat: '82%', title: 'Traditional Handicrafts Capital Lockout', description: 'Craft-based micro-enterprises exhibit the highest structural friction, resulting in 82% dependence on informal moneylenders and commission agents for cash flow.' },
];

export const creditStressIndicators = [
  { id: 'cfi', label: 'Credit Friction Index', value: 68.5, benchmark: 40, unit: '/100', trend: 'declining', delta: -3.1, description: 'Composite metric tracking documentation requirements, collateral margins, processing timelines, and credit rejection frequencies across sectors.' },
  { id: 'wcv', label: 'Working-Capital Cycle', value: 68, benchmark: 82, unit: 'days CCC', trend: 'improving', delta: -14, description: 'Average Cash Conversion Cycle (CCC) across small enterprises, tracking outstanding receivable collection cycles vs payable durations.' },
  { id: 'ols', label: 'Formal Credit Access', value: 14, benchmark: 100, unit: '%', trend: 'improving', delta: +2, description: 'Proportion of registered MSME units with active, verified credit linkages with commercial banks or NBFCs in the formal sector.' },
  { id: 'ild', label: 'GDP Contribution', value: 30, benchmark: 100, unit: '%', trend: 'stable', delta: 0.5, description: 'Overall economic output contribution of micro, small, and medium enterprises to India\'s Gross Domestic Product (GDP).' },
];

export const creditSectorFrictionData = [
  { sector: 'Agro-processing', creditAccess: 'Low', wcCycleMin: 80, wcCycleMax: 120, overallStress: 'Critical', score: 85, informalDependence: 76 },
  { sector: 'Construction (sub-cont.)', creditAccess: 'Low', wcCycleMin: 90, wcCycleMax: 180, overallStress: 'Critical', score: 90, informalDependence: 82 },
  { sector: 'Textile & Garments', creditAccess: 'Low', wcCycleMin: 70, wcCycleMax: 100, overallStress: 'High', score: 78, informalDependence: 71 },
  { sector: 'Manufacturing (Light)', creditAccess: 'Moderate', wcCycleMin: 65, wcCycleMax: 90, overallStress: 'High', score: 72, informalDependence: 65 },
  { sector: 'Retail Trade', creditAccess: 'Low-Mod', wcCycleMin: 15, wcCycleMax: 45, overallStress: 'Medium', score: 67, informalDependence: 59 },
  { sector: 'Wholesale Trade', creditAccess: 'Moderate', wcCycleMin: 45, wcCycleMax: 75, overallStress: 'Medium', score: 54, informalDependence: 38 },
  { sector: 'Food & Beverages', creditAccess: 'Moderate', wcCycleMin: 30, wcCycleMax: 60, overallStress: 'Medium', score: 58, informalDependence: 42 },
  { sector: 'Transport & Logistics', creditAccess: 'Moderate', wcCycleMin: 30, wcCycleMax: 60, overallStress: 'Medium', score: 63, informalDependence: 51 },
  { sector: 'IT / Digital Services', creditAccess: 'Good', wcCycleMin: 30, wcCycleMax: 60, overallStress: 'Low', score: 38, informalDependence: 22 },
];

export const creditStateReadinessData = [
  { state: 'Maharashtra', bankDensity: 28, formalCredit: 22, score: 7.8 },
  { state: 'Gujarat', bankDensity: 24, formalCredit: 20, score: 7.5 },
  { state: 'Tamil Nadu', bankDensity: 26, formalCredit: 19, score: 7.4 },
  { state: 'Karnataka', bankDensity: 22, formalCredit: 18, score: 7.1 },
  { state: 'Punjab / Haryana', bankDensity: 21, formalCredit: 16, score: 6.0 },
  { state: 'West Bengal', bankDensity: 18, formalCredit: 14, score: 5.3 },
  { state: 'Rajasthan', bankDensity: 16, formalCredit: 12, score: 5.0 },
  { state: 'Uttar Pradesh', bankDensity: 14, formalCredit: 9, score: 4.2 },
  { state: 'Madhya Pradesh', bankDensity: 13, formalCredit: 8, score: 3.8 },
  { state: 'Bihar', bankDensity: 11, formalCredit: 7, score: 3.5 },
];

export const creditWorkingCapitalTimeline = [
  { quarter: 'Q4 FY20', cashConversionCycle: 108, liquidityScore: 38 },
  { quarter: 'Q1 FY21', cashConversionCycle: 142, liquidityScore: 21 },
  { quarter: 'Q2 FY21', cashConversionCycle: 128, liquidityScore: 28 },
  { quarter: 'Q3 FY21', cashConversionCycle: 105, liquidityScore: 42 },
  { quarter: 'Q4 FY21', cashConversionCycle: 94, liquidityScore: 49 },
  { quarter: 'Q2 FY22', cashConversionCycle: 86, liquidityScore: 55 },
  { quarter: 'Q4 FY22', cashConversionCycle: 79, liquidityScore: 61 },
  { quarter: 'Q2 FY23', cashConversionCycle: 74, liquidityScore: 65 },
  { quarter: 'Q4 FY23', cashConversionCycle: 70, liquidityScore: 68 },
  { quarter: 'Q2 FY24', cashConversionCycle: 68, liquidityScore: 70 },
];

export const creditDigitalLendingData = [
  { year: 'FY19', totalDisbursal: 1.1, bankShare: 52, nbfcShare: 32, digitalShare: 8 },
  { year: 'FY20', totalDisbursal: 1.3, bankShare: 49, nbfcShare: 31, digitalShare: 12 },
  { year: 'FY21', totalDisbursal: 0.9, bankShare: 46, nbfcShare: 28, digitalShare: 19 },
  { year: 'FY22', totalDisbursal: 1.8, bankShare: 41, nbfcShare: 26, digitalShare: 27 },
  { year: 'FY23', totalDisbursal: 2.7, bankShare: 37, nbfcShare: 24, digitalShare: 36 },
  { year: 'FY24', totalDisbursal: 3.4, bankShare: 34, nbfcShare: 22, digitalShare: 44 },
];

export const creditPolicyRecommendations = [
  { category: 'Credit Infrastructure', title: 'GST-Linked Cash-Flow Based Underwriting', description: 'Transition from collateral-backed models to cash-flow validation using real-time GST invoicing records to enable collateral-free credit lines for formalizing MSMEs.', impact: 'High', timeline: '12–18 months', stakeholders: ['RBI', 'GSTN', 'Commercial Banks'] },
  { category: 'Working Capital', title: 'Automatic PSU & Corporate Onboarding on TReDS', description: 'Mandate TReDS enrollment for all public sector undertakings and mid-market corporates while creating local-language discounting platforms to reduce payment cycles.', impact: 'High', timeline: '6–12 months', stakeholders: ['Ministry of MSME', 'SIDBI', 'Trade Exchanges'] },
  { category: 'Digital Infrastructure', title: 'Account Aggregator Native Underwriting Platforms', description: 'Build consented transactional data sharing layers directly into commercial lending processes to reduce loan underwriting timelines from weeks to minutes.', impact: 'Medium-High', timeline: '12–24 months', stakeholders: ['RBI', 'Fintech Association', 'NPCI'] },
  { category: 'Institutional Capacity', title: 'Modernize District Industries Centres (DICs) as Credit Hubs', description: 'Transform local paper-based DIC offices into District Digital Trade & Credit hubs providing GST return filing support and structured banking connection paths.', impact: 'Medium', timeline: '18–36 months', stakeholders: ['State Governments', 'MSME Development Centers'] },
  { category: 'Risk Mitigation', title: 'District-Level Credit Guarantee Pool Mobilization', description: 'Launch municipal and state-backed first-loss guarantee pools tailored for high-friction sectors (such as handicrafts and regional agro-processing) to mitigate lender risk.', impact: 'High', timeline: '12–18 months', stakeholders: ['CGTMSE', 'SIDBI', 'State Finance Depts'] },
];

export const creditMethodology = {
  approach: 'Independent analytical synthesis and educational research project. The methodology integrates institutional reports with ground-level operational case patterns from non-metropolitan supply chains.',
  dataSources: [
    'RBI Annual Reports on MSME Lending & Financial Inclusion',
    'SIDBI MSME Pulse Reports & Health Monitors',
    'World Bank Enterprise Surveys — India Modules',
    'IFC SME Finance Gap Global Databases',
    'Ministry of MSME Annual Performance Reports',
    'NABARD Financial Inclusion Surveys & Agricultural Credit Profiles',
    'TransUnion CIBIL SME Credit Health Index Reports',
    'Direct operational logistics logs from small family firms in Padrauna, UP',
  ],
};

export const creditResearcherProfile = {
  name: 'Priyanshu Gupta',
  role: 'Independent Researcher and Student',
  institution: 'Independent Research Initiative',
  program: 'Economic Intelligence Research',
  location: 'India',
  researchMotivation: 'This independent research was motivated by observing the acute working-capital stress and collateral constraints in a family-run retail and logistics business in Padrauna, Uttar Pradesh during pandemic-induced disruptions. The project bridges corporate finance theory with ground-level operational reality, serving as an educational academic portfolio exploration of India\'s small business financing architecture.',
};
