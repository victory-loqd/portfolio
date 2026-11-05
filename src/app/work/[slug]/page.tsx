'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import CtaSection from '@/components/CtaSection';
import PageFooter from '@/components/PageFooter';

interface Decision {
  title: string;
  context: string;
  solution: string;
  tradeoff: string;
}

interface GalleryItem {
  src: string;
  caption: string;
}

interface CaseStudy {
  title: string;
  category: string;
  headline: string;
  role: string;
  company: string;
  timeline: string;
  projectLink: string;
  overview: string;
  challenge: string;
  decisions: Decision[];
  results: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  heroImage: string;
  gallery: GalleryItem[];
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  skydd: {
    title: 'Skydd',
    category: 'Platform Expansion & Insurtech',
    headline:
      'Architecting an Eight-Product Protection Ecosystem across web, mobile, and acquisition surfaces.',
    role: 'Lead Product Designer (Web Platform & Systems Architecture)',
    company: 'Skydd (NAICOM / Sterling Bank)',
    timeline: 'July 2025 – Present',
    projectLink: 'https://skydd.ng',
    overview:
      'Skydd was evolving from a narrow 2-product insurer (Auto and Health) into an 8-product platform spanning both Risk/Indemnity (Auto, Health, Property, Travel, Income) and Accumulation/Savings (GoalGuard, Future Scholar, Legacy). In the Nigerian macroeconomic climate—marked by currency volatility, inflation, and historic consumer distrust of financial institutions—traditional insurance UX (siloed 14-page forms and opaque claims processes) caused massive drop-offs. We replaced isolated product funnels with a Universal 6-Stage Lifecycle, decoupled the policy buyer from the secondary beneficiary, eliminated post-payment verification traps, and introduced a transparent 4-stage live claims tracker supported by a 40+ state tokenized design system.',
    challenge:
      'Insurance penetration in Nigeria sits under 1%. The barrier is systemic friction: income volatility and the "Black Tax" disrupt rigid monthly debits; traditional insurers take payment first then demand physical inspection documents within 72 hours (quietly voiding policies when users fail); and the person purchasing the policy is rarely the person presenting the card at the hospital desk. The design challenge was to architect a unified platform that makes complex underwriting feel effortless while defending users against unexpected financial penalties.',
    decisions: [
      {
        title: 'Decoupling the Policy Buyer from the Secondary Beneficiary',
        context:
          'In Nigeria, working professionals frequently purchase health and education policies for aging parents or young children who do not own smartphones.',
        solution:
          'Split policy ownership into two independent layers: Buyer Account (financial management & renewals) and Beneficiary Enrollee Cards (dedicated verification QR codes issued directly to clinics without exposing financial credentials).',
        tradeoff:
          'Required dual identity state machines in the backend, but reduced clinic admittance verification delays from 45 minutes to under 30 seconds.',
      },
      {
        title: 'Eliminating the Post-Payment Verification Trap',
        context:
          'Legacy insurers accept payments instantly, but demand vehicle inspection photos or birth certificates 72 hours later—quietly cancelling policies and keeping premiums if unsubmitted.',
        solution:
          'Engineered upfront progressive qualification with unambiguous "Eligible vs. Active" status badges before funds leave the user\'s wallet.',
        tradeoff:
          'Slightly increased initial checkout form length, but dropped 72-hour customer churn and dispute chargebacks to zero.',
      },
      {
        title: 'Defensive Grace-Period State Machine for Missed Debits',
        context:
          'Macroeconomic cash crunches frequently cause salaried professionals to miss recurring monthly debits during rent or school fee seasons.',
        solution:
          'Built a 14-day silent grace period with contextual debit-retry schedules and partial liquidity protections instead of immediate policy forfeiture.',
        tradeoff:
          'The platform absorbs short-term counterparty risk, which was offset by a 3.4x higher long-term policy renewal rate.',
      },
    ],
    results:
      'Replaced fragmented product silos with an integrated platform that scales seamlessly across savings-backed vaults and indemnity risk models. The 4-stage live claims tracker and tokenized component architecture established Skydd as a benchmark for consumer trust in West African insurtech.',
    stat1Value: '2 ➔ 8',
    stat1Label: 'Products unified into single platform',
    stat2Value: '4-Stage',
    stat2Label: 'Live claims tracker eliminating drop-off',
    heroImage: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
    gallery: [
      {
        src: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
        caption:
          '01. Eight-Product Taxonomy: Categorized into savings-backed accumulation vaults vs. indemnity risk protection.',
      },
      {
        src: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
        caption:
          '02. Dual-Engine Lifecycle: Universal 6-stage lifecycle from discovery to settlement.',
      },
      {
        src: '/images/liam/NaeMWjVctEddqqtAq8k1RmgIkm0.png',
        caption:
          '03. Progressive KYC & Claims: Frictionless contextual intake with instant verification status.',
      },
      {
        src: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
        caption:
          '04. Design System Architecture: 40+ state tokenized component matrix across platforms.',
      },
    ],
  },

  loqd: {
    title: 'LOQD',
    category: 'Physical Custody · 0-to-1 Service Design',
    headline:
      'Designing trust into a real-world physical custody system for chaotic nightlife and live event environments.',
    role: 'Founder & Lead Product Designer (End-to-End Service Design & Operations)',
    company: 'LOQD',
    timeline: 'April 2026 – Present',
    projectLink: 'https://loqd.app',
    overview:
      'Conceived, designed, and deployed a 0-to-1 temporary custody service for chaotic nightlife, concerts, and festivals. LOQD spans four distinct digital roles (Customer Mobile Web, Counter Tablet, Runner Mobile App, and Admin Operations HQ) synchronized with physical storage racks, tamper-evident seals, and acrylic barcode tokens. We stopped treating LOQD as an "app for lockers" and engineered it as a fault-tolerant chain of custody designed specifically for environments where batteries die, networks crash, and venues clear out in massive stampedes.',
    challenge:
      'Asking attendees to hand over their most valuable items (laptops, cameras, car keys) in a loud, 3,000-person venue at 11:00 PM requires absolute trust. Furthermore, by 3:00 AM, 42% of attendees have phones under 15% battery, cellular networks collapse under venue congestion, and when headliner artists finish, hundreds of intoxicated guests rush the cloakroom simultaneously—causing 25-minute choke points.',
    decisions: [
      {
        title: '"Payment is Not Custody" State Separation',
        context:
          'In chaotic event environments, customers pay via mobile web but may get distracted by music before physically handing their bag over.',
        solution:
          'Strictly separated financial payment from legal custody: items remain in a "Payment-Verified / Awaiting Check-In" state until a staff member physically scans both the customer QR and the tamper-evident acrylic tag.',
        tradeoff:
          'Added a required physical confirmation tap, but eliminated 100% of legal liability for uncollected or misplaced items.',
      },
      {
        title: 'The 15/30-Minute "Leaving Soon" Surge Flattening Engine',
        context:
          'When headliner sets end at 3:30 AM, hundreds of guests rush the retrieval counter simultaneously, causing queue stampedes and high staff stress.',
        solution:
          'Built a proactive "Leaving Soon" flow allowing guests to pre-signal departure 15 or 30 minutes in advance. The Runner App stages items from high-density rear vault racks to the front-of-house "Ready Counter" before the user arrives.',
        tradeoff:
          'Demands active runner pre-fetching labor, but reduced counter wait times from 25 minutes to under 45 seconds.',
      },
      {
        title: 'Hardware-Agnostic Dead-Phone Fallback System',
        context:
          'Attendees whose phones die during 6-hour music festivals cannot display digital QR codes at retrieval time.',
        solution:
          'Paired every storage bag with a laser-engraved acrylic barcode token given to the attendee, backed by a 5-point identity verification terminal on staff tablets.',
        tradeoff:
          'Physical production and inventory cost for reusable acrylic tokens, which paid for itself in zero lost-property incidents across live pilots.',
      },
    ],
    results:
      'Engineered a 3-lane service blueprint separating customer intake, staff runner fulfillment, and cloud audit logging. Achieved a sub-15 second average handover speed and zero lost items during live pilot operations.',
    stat1Value: '15s',
    stat1Label: 'Average handover speed per attendee',
    stat2Value: '0',
    stat2Label: 'Lost items or custody disputes in live pilot',
    heroImage: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
    gallery: [
      {
        src: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
        caption:
          '01. 3-Lane Service Blueprint: Coordinating Customer, Physical Token, Staff Runner, and Cloud Ledger.',
      },
      {
        src: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
        caption:
          '02. Counter Terminal UI: High-contrast ambient display engineered for dark, loud nightclub environments.',
      },
      {
        src: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
        caption:
          '03. Runner Queue & Rack Spatial Grid: Real-time visual slot locator for lightning-fast item retrieval.',
      },
      {
        src: '/images/liam/NaeMWjVctEddqqtAq8k1RmgIkm0.png',
        caption:
          '04. Dead-Battery Fallback System: Physical acrylic token pairing and manual evidence capture.',
      },
    ],
  },

  meelow: {
    title: 'Meelow',
    category: 'Geospatial Safety & Permissions',
    headline:
      'Safety without surveillance: engineering a consent-first personal safety and geospatial coordination system.',
    role: 'Lead Product Designer (Mobile Systems Architecture & Ops)',
    company: 'Meelow',
    timeline: 'Product Architecture Phase',
    projectLink: 'https://meelow.app',
    overview:
      'Engineered a consent-first personal safety and geospatial coordination system for an African urban mobility super-app. Urban commuting in major metropolitan centers carries genuine physical safety risks (late-night transit, police harassment, and kidnapping). People want loved ones to know they are safe. However, existing safety apps (Life360) enforce a suffocating model: you are either broadcasted 24/7 with pinpoint GPS precision, or you are invisible. In practice, this turns protective care into toxic surveillance, driving teenagers and partners to disable location sharing entirely or use GPS spoofers. We re-architected location sharing around granular intent and asymmetric consent.',
    challenge:
      'Location is social currency, autonomy, and vulnerability. The core paradox was resolving the tension between deep family reassurance ("Did my sister make it across Third Mainland Bridge safely?") and interpersonal privacy ("Does my circle need to monitor my exact room coordinates on a Saturday night?"). The interface had to handle life-or-death emergencies while preventing coercive interpersonal control.',
    decisions: [
      {
        title: 'Asymmetric Directional Permission Logic',
        context:
          'Conventional apps enforce bilateral location sharing: if I join your circle, you see me and I see you constantly.',
        solution:
          'Decoupled circles into asymmetric pairs: users can independently toggle "Who Sees Me" vs. "Who I See" across 5 distinct intent modes (Off, Approximate Neighborhood, En Route, Timed, and High-Precision Emergency).',
        tradeoff:
          'Required a more nuanced permissions mental model, resulting in an 88% higher circle retention rate among young adults.',
      },
      {
        title: 'The Stealth "Pause" State Architecture',
        context:
          'Disabling location sharing in conventional apps triggers aggressive push notifications to parents or partners, immediately causing domestic conflict.',
        solution:
          'Engineered a stealth pause state that gracefully freezes the user\'s coordinates at their last public zone with an ambient "Signal low" timestamp, avoiding accusatory alerts.',
        tradeoff:
          'Slight latency in location refresh for circle watchers, intentionally prioritizing user agency and safety.',
      },
      {
        title: 'Coerced Cancellation Defense (Duress PIN)',
        context:
          'In street harassment, mugging, or forced detention scenarios, attackers frequently coerce victims into unlocking their phone and cancelling active SOS emergency alerts.',
        solution:
          'Designed a dual-PIN defense: entering the standard PIN disarms the alert normally, while entering a secret Duress PIN visually closes the modal as if cancelled, but silently streams high-priority coordinates and microphone audio to emergency responders.',
        tradeoff:
          'Requires careful onboarding education, but provides vital life-saving defense in high-risk urban security scenarios.',
      },
    ],
    results:
      'Created an ambient map system that separates everyday fintech payments from high-anxiety emergency triggers. The 1-hand tactile SOS slider delivers under-2-second trigger response times while protecting user autonomy.',
    stat1Value: '5 Modes',
    stat1Label: 'Granular intent-based sharing controls',
    stat2Value: '< 2s',
    stat2Label: 'Emergency SOS trigger to contact dispatch',
    heroImage: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
    gallery: [
      {
        src: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
        caption:
          '01. Asymmetric Directional Matrix: Independent control over "Who sees me" vs. "Who I see".',
      },
      {
        src: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
        caption:
          '02. Five Intent-Based Sharing Modes: From approximate neighbourhood bubble to high-precision live route.',
      },
      {
        src: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
        caption:
          '03. Stealth Pause Architecture: Freezing last known location to avoid awkward relationship friction.',
      },
      {
        src: '/images/liam/NaeMWjVctEddqqtAq8k1RmgIkm0.png',
        caption:
          '04. Coerced Cancellation Defense: Duress PIN that appears to dismiss the alert while secretly alerting dispatch.',
      },
    ],
  },

  coupon: {
    title: 'Coupon',
    category: 'WealthTech · Fixed Deposit Marketplace',
    headline:
      'Architecting a multi-institution fixed-deposit system and engineering high-stakes financial error recovery.',
    role: 'Lead Product Designer (Fintech Architecture & Systems Audit)',
    company: 'Coupon (CBN Regulated / NDIC Insured)',
    timeline: 'Rebuild & Systems Audit Phase',
    projectLink: 'https://coupon.ng',
    overview:
      'Transformed a fragmented, redundant 141-screen codebase into a reconciled 115-screen canonical wealthtech marketplace. In high-inflation macroeconomic climates (where local inflation hovers at 25–30%), holding idle cash in traditional bank accounts destroys purchasing power. Fixed deposits offer guaranteed yields (14% to 22% p.a.), but discovering rates and locking funds across commercial banks, merchant banks, and microfinance institutions was historically manual and opaque. We standardized Coupon around eight foundational product domains, engineered transparent early-liquidation penalty modeling, and built resilient asynchronous state machines for banking API timeouts.',
    challenge:
      'Users on Coupon commit substantial capital—from ₦100,000 to over ₦10,000,000—locked away for 30 to 365 days. Breaking a deposit early in legacy banking forfeits 100% of accrued interest without prior disclosure, making users feel extorted. Furthermore, frequent Nigerian banking switch API dropouts during checkout created immense anxiety when multi-million Naira transfers hung in limbo.',
    decisions: [
      {
        title: 'Upfront "Emergency Break" Liquidation Disclosure Card',
        context:
          'Traditional banks hide early liquidation penalties in fine print, triggering outrage when a user experiences an emergency and discovers their interest was completely forfeited.',
        solution:
          'Designed an interactive pre-commitment modeler that explicitly displays the exact payout amount if the deposit is broken on day 15, 45, or 80 before funds are locked.',
        tradeoff:
          'Added friction to the checkout flow, but established industry-leading consumer credibility and virtually eliminated support liquidation complaints.',
      },
      {
        title: 'Defensive Asynchronous Transaction State Machine',
        context:
          'Inter-bank payment switches in Nigeria experience frequent 30-second timeouts. Generic "Transaction Failed" screens cause panic when users see money deducted from their source account.',
        solution:
          'Engineered a 4-state asynchronous recovery engine: "Debited / Awaiting Switch Handshake" with real-time countdown, automatic reversal triggers, and clear proof-of-payment receipts.',
        tradeoff:
          'Required complex polling state logic in the mobile app, reducing customer support escalations by 78%.',
      },
      {
        title: 'Reconciling 141 Screens into 115 Canonical States',
        context:
          'Rapid MVP growth had spawned 26 redundant divergent screens across branches with conflicting token styles.',
        solution:
          'Conducted a exhaustive system audit, cataloged all 8 product domains, unified modal sheets, and established a tabular numeric design system.',
        tradeoff:
          'Dedicated an entire sprint cycle to refactoring rather than shipping new features, cutting future frontend delivery time by 40%.',
      },
    ],
    results:
      'Delivered a verified, canonical 115-screen architecture backed by NDIC insurance compliance badges, automated 3-way tenor rollovers, and rock-solid error recovery states that protect high-net-worth customer capital.',
    stat1Value: '141 ➔ 115',
    stat1Label: 'Reconciled canonical screens without UX loss',
    stat2Value: '100%',
    stat2Label: 'Transparent upfront liquidation disclosure',
    heroImage: '/images/liam/uecOh2cH1y6yjY0skhMk1vxiIkk.png',
    gallery: [
      {
        src: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
        caption:
          '01. Eight Foundational Product Domains: Structured information architecture across deposits, KYC, and earnings.',
      },
      {
        src: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
        caption:
          '02. "Emergency Break" Liquidation Sheet: Transparent penalty preview before locking capital.',
      },
      {
        src: '/images/liam/NaeMWjVctEddqqtAq8k1RmgIkm0.png',
        caption:
          '03. Asynchronous Settlement Engine: Clear pending states during inter-bank settlement delays.',
      },
      {
        src: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
        caption:
          '04. Defensive Timeout State Machine: Reassuring error recovery and automatic receipt generation.',
      },
    ],
  },

  'juju-games': {
    title: 'Juju Games',
    category: 'Studio Archive & Game HUDs',
    headline:
      'Co-founding an independent African game studio, directing cross-disciplinary production, and engineering HUD systems.',
    role: 'Co-Founder & Head of Interface Design',
    company: 'Juju Games Studio',
    timeline: 'May 2023 – 2025',
    projectLink: 'https://jujugames.co',
    overview:
      'Co-founded an independent game studio pioneering Afrofuturist interactive entertainment across PC and console. Directed production pipelines across 3D artists, animators, and developers while designing complex real-time cockpit telemetry HUDs, grid inventory crafting economies, and branching narrative quest engines for titles including Vodou: A Space Odyssey, Boju Boju, and Payton Ville. Game design is the ultimate systems discipline: before designing financial state machines for Skydd or custody protocols for LOQD, Juju Games was where I learned to balance high cognitive load, low-latency spatial feedback, and multi-disciplinary sprints under tight constraints.',
    challenge:
      'Game UI must communicate multi-variable real-time spaceflight telemetry, life-support thresholds, and branching cultural lore without cluttering the screen or degrading frame rates on constrained target hardware.',
    decisions: [
      {
        title: 'Diegetic Cockpit Telemetry HUD Integration',
        context:
          'Traditional 2D head-up display overlays felt detached from the immersive Afrofuturist sci-fi aesthetic of Vodou.',
        solution:
          'Projected flight vectors, shields, and warp trajectories directly into the 3D geometry of the spacecraft console.',
        tradeoff:
          'Required close mathematical coordination with camera FOV shaders, producing an unforgettable cinematic sense of presence.',
      },
      {
        title: 'Tactile Audio-Visual Sensory System for Boju Boju',
        context:
          'Minimaps in stealth horror titles reduce tension by turning gameplay into watching a 2D radar dot.',
        solution:
          'Replaced the radar with dynamic acoustic pulse rings that react to creature proximity and player heartbeat.',
        tradeoff:
          'Increased cognitive demand on audio listening, greatly amplifying psychological immersion.',
      },
      {
        title: 'Cross-Disciplinary State Machine Pipeline',
        context:
          'Miscommunication between narrative designers, 3D modellers, and engine programmers caused costly code rework.',
        solution:
          'Standardized game mechanics into state-machine flow diagrams and tokenized component sheets before committing to 3D builds.',
        tradeoff:
          'Added upfront design documentation requirements, cutting sprint delivery rework in half.',
      },
    ],
    results:
      'Shipped 3 playable vertical slices, authored international publisher pitch decks, and earned press recognition for pioneering modern African game mechanics on global stages.',
    stat1Value: '3 Titles',
    stat1Label: 'Playable vertical slices shipped',
    stat2Value: '60 FPS',
    stat2Label: 'Zero-latency real-time HUD telemetry',
    heroImage: '/images/liam/j2ArVmSEHNPfwtoVMAqPEAr0I.png',
    gallery: [
      {
        src: '/images/liam/EwJeWgqP8OTxd7C0zN19O0JJhA.png',
        caption:
          '01. Vodou: A Space Odyssey: World direction blending Afrofuturist cosmological lore with deep space exploration.',
      },
      {
        src: '/images/liam/NaeMWjVctEddqqtAq8k1RmgIkm0.png',
        caption:
          '02. Cockpit Telemetry & Real-Time HUD: High-density spatial UI for flight dynamics and shield telemetry.',
      },
      {
        src: '/images/liam/lZeLGOVkhZl2IeLU28XxbMB5EE.webp',
        caption:
          '03. Boju Boju Sensory Interface: Soundwave proximity visualizers and stealth indicators for folklore survival.',
      },
    ],
  },

  'earlier-systems': {
    title: 'Earlier Systems Archive',
    category: 'Mobility, Marketplaces & Logistics',
    headline:
      'Selected commercial systems, two-sided marketplaces, and cross-border logistics engineered between 2023 and 2025.',
    role: 'Lead Product Designer',
    company: 'VROOM · SKRHYB · GLOBLSERVICE',
    timeline: '2023 – 2025',
    projectLink: 'https://linkedin.com/in/victory-chukwuma',
    overview:
      'The foundational production archive across urban mobility (VROOM), two-sided professional service marketplaces (SKRHYB), and cross-border logistics concierges (GLOBLSERVICE). Across these three platforms, I established core systems competencies: dual-app passenger/driver synchronizations, dynamic security code handshakes, rapid 8-week cross-platform component architectures, and transparent multi-leg customs tracking.',
    challenge:
      'Designing two-sided ecosystems where trust must be established between unvetted strangers (riders and drivers, clients and artisans, shoppers and overseas logistics brokers) under volatile infrastructure conditions.',
    decisions: [
      {
        title: 'Dynamic Security Code Handshake in VROOM',
        context:
          'Urban ride-hailing in Nigerian cities suffered from vehicle impersonation and rider security fears.',
        solution:
          'Engineered a mandatory dynamic 4-digit PIN matching handshake between rider and driver phones before any trip can initiate.',
        tradeoff:
          'Added a 5-second physical verification step at pickup, which became the platform\'s most praised security feature.',
      },
      {
        title: 'Intelligent "Paste-a-Link" Logistics Concierge in GLOBLSERVICE',
        context:
          'African consumers were blocked from buying on Amazon or eBay due to FX payment restrictions and customs opacity.',
        solution:
          'Built an automated link intake engine that scrapes product weight and price, calculates total landed customs duties, and allows immediate local Naira checkout.',
        tradeoff:
          'Required complex automated scraping and duty estimation heuristics, achieving a 70% reduction in cart abandonment.',
      },
      {
        title: '8-Week Unified Multi-Platform Design System in SKRHYB',
        context:
          'Tight runway required shipping iOS, Android, and web admin dashboards within 2 months.',
        solution:
          'Created a tokenized design system in Figma mapped 1:1 with cross-platform React Native primitives.',
        tradeoff:
          'Kept initial component variants disciplined, enabling an on-time production launch with zero visual divergence.',
      },
    ],
    results:
      'Delivered production platforms across three high-growth sectors, proving systems resilience under low-bandwidth and high-friction African operating conditions.',
    stat1Value: '3 Apps',
    stat1Label: 'Shipped across mobility, marketplace, and logistics',
    stat2Value: '< 60s',
    stat2Label: 'Average service booking and verification latency',
    heroImage: '/images/liam/lZeLGOVkhZl2IeLU28XxbMB5EE.webp',
    gallery: [
      {
        src: '/images/liam/IDcf3P8gXYdSc4M3AkdZQ1lpyE.webp',
        caption:
          '01. VROOM Security Handshake: Dynamic PIN verification to prevent impersonation and rapid panic trigger.',
      },
      {
        src: '/images/liam/5Tr3lVFQValweNo1PwCFDcPYFM.webp',
        caption:
          '02. SKRHYB Dual-User Marketplace: Discovery, ratings, and verified booking flows for skilled artisans.',
      },
      {
        src: '/images/liam/CeWnKDqMcaC6QV5UaE472hLOzQ.png',
        caption:
          '03. GLOBLSERVICE "Paste-a-Link" Intake: Intelligent URL parser extracting price, weight, and import duty.',
      },
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const study = CASE_STUDIES[slug];

  if (!study) {
    return notFound();
  }

  // Pick other projects for "More Projects"
  const moreProjects = Object.entries(CASE_STUDIES)
    .filter(([key]) => key !== slug)
    .slice(0, 2);

  return (
    <div className="w-full flex flex-col">
      {/* ────────────────── BACK LINK ────────────────── */}
      <div className="mb-8">
        <Link
          href="/work"
          className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* ────────────────── CATEGORY & HEADLINE ────────────────── */}
      <div className="mb-3">
        <span className="text-xs uppercase font-mono tracking-wider text-neutral-500">
          {study.category}
        </span>
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-10 leading-tight">
        {study.headline}
      </h1>

      {/* ────────────────── METADATA 4-COLUMN ────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[#1a1a1a] mb-12 text-xs">
        <div>
          <span className="text-neutral-500 block mb-1.5">Role</span>
          <span className="text-white font-medium">{study.role}</span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1.5">Platform</span>
          <span className="text-white font-medium">{study.company}</span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1.5">Timeline</span>
          <span className="text-white font-medium">{study.timeline}</span>
        </div>
        <div>
          <span className="text-neutral-500 block mb-1.5">Direct Channel</span>
          <a
            href={study.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline flex items-center gap-1"
          >
            <span>Live Project</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ────────────────── HERO MOCKUP IMAGE ────────────────── */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] mb-16 shadow-2xl">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>

      {/* ────────────────── OVERVIEW & CHALLENGE ────────────────── */}
      <div className="flex flex-col gap-12 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <h2 className="text-xs uppercase font-mono tracking-wider text-neutral-500">
            Platform Overview
          </h2>
          <p className="sm:col-span-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {study.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <h2 className="text-xs uppercase font-mono tracking-wider text-neutral-500">
            The Hard Constraint
          </h2>
          <p className="sm:col-span-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {study.challenge}
          </p>
        </div>
      </div>

      {/* ────────────────── 3 CONSEQUENTIAL DECISIONS (TIER 2) ────────────────── */}
      {study.decisions && study.decisions.length > 0 && (
        <section className="mb-24 pt-12 border-t border-[#1a1a1a]">
          <div className="mb-8">
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 block mb-1">
              Systems Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Three Consequential Decisions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {study.decisions.map((dec, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0e] border border-white/[0.08] flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1a1a1f] border border-white/[0.1] text-xs font-mono text-neutral-300 flex items-center justify-center shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-medium text-white">{dec.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-[#050507] border border-white/[0.04]">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                      Context & Constraint
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{dec.context}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#050507] border border-white/[0.04]">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{dec.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#050507] border border-white/[0.04]">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                      The Trade-Off
                    </span>
                    <p className="text-neutral-400 leading-relaxed">{dec.tradeoff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ────────────────── VISUAL ARTIFACT GALLERY ────────────────── */}
      <section className="mb-24 pt-12 border-t border-[#1a1a1a]">
        <div className="mb-8">
          <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 block mb-1">
            Visual Proof
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Interface Artifacts & Systems Evidence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {study.gallery.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] shadow-lg">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
              <p className="text-xs text-neutral-400 px-1 font-mono leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── RESULTS & STATS ────────────────── */}
      <section className="mb-24 pt-12 border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <h2 className="text-xs uppercase font-mono tracking-wider text-neutral-500">
            Outcomes & Synthesis
          </h2>
          <div className="sm:col-span-2 flex flex-col gap-8">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              {study.results}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1a1a1a]">
              <div>
                <div className="text-3xl sm:text-4xl font-medium text-white mb-1">
                  {study.stat1Value}
                </div>
                <div className="text-xs text-neutral-400">{study.stat1Label}</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-medium text-white mb-1">
                  {study.stat2Value}
                </div>
                <div className="text-xs text-neutral-400">{study.stat2Label}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── MORE PROJECTS ────────────────── */}
      <section className="mb-20 pt-16 border-t border-[#1a1a1a]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
            More Projects
          </h2>
          <Link
            href="/work"
            className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group font-mono"
          >
            <span>See all works</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {moreProjects.map(([key, p]) => (
            <Link key={key} href={`/work/${key}`} className="group block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] transition-all duration-500 ease-out group-hover:border-white/[0.2] shadow-lg">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 880px) 400px, 100vw"
                />
              </div>
              <div className="mt-3.5">
                <h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-neutral-400 font-normal mt-0.5">
                  {p.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ────────────────── CTA & FOOTER ────────────────── */}
      <CtaSection />
      <PageFooter />
    </div>
  );
}
