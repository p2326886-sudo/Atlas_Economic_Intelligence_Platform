// ══════════════════════════════════════════════════════
// Sovereign Supply Chain & Industrial Resilience Index
// Source: Sovereign_Supply_Chain_Index/src/App.jsx
// ══════════════════════════════════════════════════════

export const supplyChainOverview = {
  title: 'Sovereign Supply Chain & Industrial Resilience Index',
  subtitle: 'A geopolitical-industrial analytical platform: nine economies, eight critical industries, and ten resilience dimensions.',
  year: '2025',
  edition: 'First Publication',
  meanScore: 6.1,
  criticalSectors: 4,
  economies: 9,
  industries: 8,
  dimensions: 10,
};

export const supplyChainDimensions = [
  'Mfg. Depth',
  'Strat. Dependency',
  'Logistics',
  'Energy Stability',
  'Semiconductor Exp.',
  'Workforce',
  'Digital Readiness',
  'Trade Diversif.',
  'SC Redundancy',
  'Critical Resources',
];

export const supplyChainScorecards = [
  { economy: 'United States', score: 7.4, strongest: 'Digital Readiness', vulnerability: 'Critical minerals access', trajectory: 'Improving', values: [7.5, 6.5, 8.0, 8.2, 6.2, 7.5, 8.8, 7.2, 7.0, 5.8] },
  { economy: 'China', score: 7.1, strongest: 'Manufacturing Depth', vulnerability: 'Advanced semiconductor access', trajectory: 'Constrained', values: [9.6, 4.2, 8.2, 6.8, 3.0, 8.5, 8.2, 6.2, 8.8, 9.0] },
  { economy: 'Germany', score: 7.0, strongest: 'Logistics + Workforce', vulnerability: 'Energy cost/stability', trajectory: 'Stabilizing', values: [8.8, 5.8, 9.0, 5.2, 5.5, 8.5, 7.5, 6.8, 7.2, 5.5] },
  { economy: 'Japan', score: 6.8, strongest: 'Manufacturing Depth', vulnerability: 'Energy + resource import dep.', trajectory: 'Improving', values: [8.8, 5.2, 8.2, 4.8, 7.0, 6.5, 7.2, 6.2, 6.8, 4.5] },
  { economy: 'South Korea', score: 6.7, strongest: 'Semiconductor position', vulnerability: 'China trade concentration', trajectory: 'Stable', values: [8.5, 4.8, 7.8, 5.2, 8.0, 7.2, 8.2, 5.0, 6.2, 4.2] },
  { economy: 'Taiwan', score: 6.2, scoreLabel: '6.2*', strongest: 'Foundry capability', vulnerability: 'Geopolitical / energy / imports', trajectory: 'Vulnerable', values: [9.5, 3.5, 7.2, 4.0, 9.8, 7.8, 8.5, 4.5, 3.8, 3.5], footnote: 'Foundry-specific strength is not an economy-wide resilience condition.' },
  { economy: 'India', score: 5.3, strongest: 'Workforce capacity', vulnerability: 'Logistics + semiconductor', trajectory: 'Improving', values: [5.5, 6.2, 4.8, 5.2, 2.5, 7.8, 6.2, 6.5, 4.2, 6.0] },
  { economy: 'Mexico', score: 4.8, strongest: 'USMCA access', vulnerability: 'Security + trade concentration', trajectory: 'Stable', values: [5.5, 5.0, 6.0, 5.5, 1.8, 6.0, 5.0, 4.2, 4.8, 5.5] },
  { economy: 'Vietnam', score: 4.6, strongest: 'Cost position', vulnerability: 'China input dependency', trajectory: 'Improving', values: [4.5, 3.8, 5.5, 5.2, 2.0, 6.2, 5.2, 5.8, 3.2, 5.0] },
];

export const supplyChainSectorRisks = [
  { sector: 'Semiconductors', chokepoint: 'Advanced node foundry (Taiwan)', dependency: 'TSMC / ASML', risk: 'Critical', horizon: '10-15 yr' },
  { sector: 'EV Manufacturing', chokepoint: 'Battery cell + minerals processing', dependency: 'China (CATL, minerals)', risk: 'Critical', horizon: '8-12 yr' },
  { sector: 'Pharmaceuticals', chokepoint: 'API production', dependency: 'India / China', risk: 'Elevated', horizon: '5-8 yr' },
  { sector: 'Electronics', chokepoint: 'Assembly + component supply', dependency: 'Greater China', risk: 'Critical', horizon: '10+ yr' },
  { sector: 'Industrial Automation', chokepoint: 'PLC / servo systems', dependency: 'Japan / Germany / US', risk: 'Moderate', horizon: '3-6 yr' },
  { sector: 'Logistics', chokepoint: 'Container carrier capacity', dependency: 'Alliance structures', risk: 'Moderate', horizon: '2-5 yr' },
  { sector: 'Critical Minerals', chokepoint: 'Processing (rare earth / lithium)', dependency: 'China', risk: 'Critical', horizon: '10-20 yr' },
  { sector: 'Defense Mfg', chokepoint: 'Munitions + precision components', dependency: 'Commercial chip supply', risk: 'Elevated', horizon: '4-7 yr' },
];

export const supplyChainRiskMatrix = [
  { risk: 'Taiwan Strait disruption', probability: 'Medium-High', impact: 'Catastrophic', economies: 'All assessed (global)', sectors: 'Semiconductors', priority: 'Critical' },
  { risk: 'Advanced chip export restriction escalation', probability: 'High', impact: 'Severe', economies: 'China; US allies', sectors: 'Semiconductors, Defense', priority: 'Critical' },
  { risk: 'Critical mineral supply disruption', probability: 'Medium', impact: 'Severe', economies: 'USA, EU, Japan, Korea', sectors: 'EV, Defense, Electronics', priority: 'Critical' },
  { risk: 'Western demand fragmentation for China exports', probability: 'High', impact: 'Significant', economies: 'China; Vietnam', sectors: 'Electronics, EV', priority: 'Elevated' },
  { risk: 'Energy price shock (European mfg.)', probability: 'Medium', impact: 'Significant', economies: 'Germany, EU', sectors: 'Chemicals, Automation', priority: 'Elevated' },
  { risk: 'India infrastructure execution gap', probability: 'High', impact: 'Moderate', economies: 'India', sectors: 'Electronics, Pharma', priority: 'Elevated' },
  { risk: 'API supply concentration shock', probability: 'Low-Medium', impact: 'Severe', economies: 'Global', sectors: 'Pharmaceuticals', priority: 'Elevated' },
  { risk: 'Container shipping capacity concentration', probability: 'Medium', impact: 'Moderate', economies: 'Global trade', sectors: 'Logistics', priority: 'Managed' },
  { risk: 'Mexico security environment deterioration', probability: 'Medium', impact: 'Moderate', economies: 'Mexico, USA', sectors: 'Automotive, Electronics', priority: 'Managed' },
  { risk: 'Japan demographic workforce decline', probability: 'Certain (structural)', impact: 'Long-term', economies: 'Japan', sectors: 'All sectors', priority: 'Long-term' },
];
