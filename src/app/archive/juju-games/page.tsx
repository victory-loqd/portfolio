import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Gamepad2, Compass, Sparkles, Layers, Shield, Award, Terminal } from 'lucide-react';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function JujuGamesRetrospective() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ────────────────── TOP BREADCRUMB ────────────────── */}
      <div className="w-full max-w-5xl px-6 pt-12 pb-6">
        <Link
          href="/#archive"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Archive</span>
        </Link>
      </div>

      {/* ────────────────── HERO & METADATA BAR ────────────────── */}
      <section className="w-full max-w-5xl px-6 pb-12 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
            Archival Retrospective · Studio Co-Founding & Game HUDs
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs font-mono text-zinc-500">May 2023 – 2025</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
          Juju Games: The Studio Archive & Production Retrospective
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10">
          Co-founding an independent African game studio, directing cross-disciplinary production, and engineering complex HUDs, stateful inventories, and branching narrative systems.
        </p>

        {/* 4-Column Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.08] text-xs font-mono">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-zinc-200 font-medium">Co-Founder & Head of Product</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Domain</span>
            <span className="text-zinc-200 font-medium">Indie Games & Interactive</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Titles</span>
            <span className="text-zinc-200 font-medium">Vodou, Boju Boju, Payton Ville</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px] mb-1">Press</span>
            <span className="text-zinc-200 font-medium">BusinessDay, IGM Featured</span>
          </div>
        </div>
      </section>

      {/* ────────────────── HERO VISUAL (IMG 01) ────────────────── */}
      <div className="w-full max-w-5xl px-6 py-8">
        <PlaceholderImage
          id="IMG_01"
          title="Studio Retrospective Hero & Title Suite"
          filename="juju-01-hero-studio-suite.png"
          aspectRatio="16/9"
          dimensions="2400 × 1350 px"
          description="Archival collage hero: The official Juju Games wordmark, key visual renders/stills from the 3 flagship titles (Vodou, Boju Boju, Payton Ville), and press recognition badges."
        />
      </div>

      {/* ────────────────── SECTION 01: THE GENESIS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 / Studio Genesis</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Building a Studio Before Building a Startup
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In mid-2023, independent African gaming was an untapped cultural frontier. African folklore, mythology, and modern urban realities were almost entirely absent from global gaming platforms.
            </p>
            <p>
              We co-founded <strong>Juju Games</strong> to challenge this: blending rich West African cultural motifs with uncompromising modern game design mechanics across PC, console, and mobile.
            </p>
            <p>
              As Co-Founder and Head of Product, my role went far beyond static interface design—I served as the bridge between abstract lore, concept art, 3D modeling, audio design, and technical engine implementation in Unity and Unreal.
            </p>
          </div>
        </div>

        {/* Chronology Visual (IMG 02) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_02"
            title="The Co-Founding Chronology & Evolution"
            filename="juju-02-chronology-evolution.png"
            aspectRatio="16/9"
            dimensions="2000 × 1125 px"
            description="Visual timeline graphic mapping the studio's milestone progression: Studio Inception (May 2023) ➔ Prototype Mechanics ➔ Global Press Features (BusinessDay, IGM) ➔ Pitch Demonstrations."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 02: VODOU: A SPACE ODYSSEY ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 / Project Vodou</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Complex Telemetry & Spatial HUD Design
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              <em>Vodou: A Space Odyssey</em> was our flagship high-concept space exploration RPG, fusing West African spiritual cosmology with hard sci-fi interstellar mechanics.
            </p>
            <p>
              Piloting a starship through gravitational anomalies requires split-second spatial awareness without cluttering the screen or obstructing combat visibility.
            </p>
            <ul className="text-xs text-zinc-400 space-y-2 font-mono mt-2">
              <li>• <strong className="text-white">Minimalist Cockpit HUD:</strong> Peripheral heads-up telemetry displaying shield harmonics, thruster heat dissipation, and dynamic orbital reticles.</li>
              <li>• <strong className="text-white">Spatial Grid Inventory:</strong> A tactile spatial inventory requiring players to balance mass, slot geometry, and elemental crafting resources.</li>
              <li>• <strong className="text-white">Controller & Mouse Parity:</strong> Rapid 1-thumb muscle memory on analog sticks mapped seamlessly to precision desktop mouse input.</li>
            </ul>
          </div>
        </div>

        {/* Vodou Concept (IMG 03) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_03"
            title="Vodou: A Space Odyssey — World & Concept Direction"
            filename="juju-03-vodou-world-direction.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Concept art and visual moodboard: Blending traditional West African bronze motifs and talismanic iconography with interstellar sci-fi starship architecture."
          />
        </div>

        {/* Cockpit HUD (IMG 04) & Inventory Economy (IMG 05) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_04"
            title="Vodou — Cockpit Telemetry & Real-Time HUD"
            filename="juju-04-vodou-cockpit-hud.png"
            aspectRatio="16/9"
            dimensions="2560 × 1440 px"
            description="High-fidelity cockpit UI overlay: Real-time telemetry, shield integrity rings, dynamic orbital reticle, and low-distraction peripheral warning states."
          />
          <PlaceholderImage
            id="IMG_05"
            title="The Grid Inventory & Crafting Economy System"
            filename="juju-05-inventory-crafting-system.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="The spatial inventory management screen: Modular grid slotting, weight capacity meters, elemental crafting matrices, and item rarity token system."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 03: BOJU BOJU & PAYTON VILLE ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Stealth & Narrative</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Sensory Feedback & Conversational Trees
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              In <em>Boju Boju</em> (a cultural folklore suspense title), traditional minimaps and health meters were stripped away in favor of an organic audio-visual heartbeat radar and shadow vignette indicators that heightened atmospheric dread.
            </p>
            <p>
              In <em>Payton Ville</em> (a civic narrative adventure), we built a contextual radial dialogue engine and multi-layered quest journal that made the social and civic consequences of player decisions transparent without spoiling future revelations.
            </p>
          </div>
        </div>

        {/* Boju Boju Sensory (IMG 06) & Payton Ville Quest (IMG 07) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_06"
            title="Boju Boju — Stealth & Proximity Sensory UI"
            filename="juju-06-boju-boju-sensory-ui.png"
            aspectRatio="16/9"
            dimensions="2560 × 1440 px"
            description="In-game stealth view: Vignette visibility shading, ambient heartbeat pulse indicator, interaction prompts, and mythological creature encounter HUD."
          />
          <PlaceholderImage
            id="IMG_07"
            title="Payton Ville — Branching Quest & Dialogue Engine"
            filename="juju-07-payton-ville-quest-engine.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Dialogue and quest interface: Radial conversation selector showing relationship impact icons, active journal ledger, and civic reputation tracking meters."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 04: PRODUCTION & PRESS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">04 / Studio Operations</span>
            <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Cross-Disciplinary Production & Publisher Pitching
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-4 text-sm text-zinc-300 leading-relaxed font-normal">
            <p>
              Running an independent game studio requires extreme discipline across technical budgets: polygon limits for 3D character meshes, draw call budgets for mobile rendering, audio event management, and developer velocity.
            </p>
            <p>
              I authored our comprehensive publisher pitch decks—synthesizing Africa&apos;s 500M+ youth demographic opportunity, production schedules, and playable vertical slices—garnering features in <strong>BusinessDay</strong>, <strong>International Games Magazine (IGM)</strong>, and indie showcases.
            </p>
          </div>
        </div>

        {/* Production Board (IMG 08) */}
        <div className="my-8">
          <PlaceholderImage
            id="IMG_08"
            title="The Multi-Disciplinary Production Pipeline"
            filename="juju-08-production-pipeline-board.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Production artifacts: Sprint planning boards, asset dependency flowcharts, polygon constraint sheets, and cross-functional agile handoff milestones."
          />
        </div>

        {/* Pitch Decks (IMG 09) & Press Validation (IMG 10) */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlaceholderImage
            id="IMG_09"
            title="Publisher Pitch Materials & Commercial Decks"
            filename="juju-09-pitch-deck-showcase.png"
            aspectRatio="16/10"
            dimensions="2560 × 1600 px"
            description="Multi-slide layout of the official Juju Games Publisher Pitch Deck: Market demographic analysis, game mechanics breakdowns, production budget, and monetization roadmap."
          />
          <PlaceholderImage
            id="IMG_10"
            title="External Validation, Press & Cultural Footprint"
            filename="juju-10-press-community-validation.png"
            aspectRatio="16/9"
            dimensions="2400 × 1350 px"
            description="Press coverage montage: Featured articles from BusinessDay, International Games Magazine, online indie reviews, and community playtest exhibition photographs."
          />
        </div>
      </section>

      {/* ────────────────── SECTION 05: RETROSPECTIVE LESSONS ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06]">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">05 / Senior Retrospective</span>
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-8">
          How Game Development Shaped My Product Design DNA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 font-semibold block mb-2">01 / State Machines</span>
              <h3 className="text-base font-semibold text-white mb-2">Games Teach Systems Better Than SaaS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                In gaming, interfaces must synchronize real-time physics, latency spikes, spatial coordinates, and persistent player inventory simultaneously. That rigor is why multi-state fintech flows feel intuitive.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 font-semibold block mb-2">02 / Technical Empathy</span>
              <h3 className="text-base font-semibold text-white mb-2">Production Requires Real Constraints</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Co-founding a studio meant respecting polygon counts, memory limits, and render cycles. That engineering empathy makes my commercial developer handoffs exceptionally smooth.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/[0.06] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 font-semibold block mb-2">03 / World-Building</span>
              <h3 className="text-base font-semibold text-white mb-2">Coherence is the Highest Strategy</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Whether creating an Afrofuturist sci-fi odyssey or an enterprise liquidity system, product design is about constructing a believable, coherent world that users trust completely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM NAVIGATION ────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12 border-t border-white/[0.06] mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/work/coupon"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] text-zinc-500 block uppercase">Previous Flagship</span>
              <span className="text-white font-medium">Coupon: Fixed Deposit Marketplace</span>
            </div>
          </Link>

          <Link
            href="/archive/earlier-systems"
            className="group flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <div className="text-right">
              <span className="text-[10px] text-zinc-500 block uppercase">Next: Archival Retrospective</span>
              <span className="text-white font-medium">Earlier Work: VROOM, SKRHYB & Globlservice</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-purple-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}
