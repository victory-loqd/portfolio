# Coupon: Architecting a Multi-Institution Fixed-Deposit System

> **How we transformed a fragmented 141-screen fintech codebase into a coherent, regulated investment marketplace—engineering financial error recovery, tenor maturity lifecycles, and high-stakes deposit transparency.**

---

## ⚡ Executive Blueprint (The 60-Second Scan)

* **Role:** Lead Product Designer (Fintech Architecture, Systems Audit & Core Product UX)
* **Timeline:** Product Architecture & Rebuild Phase
* **Platform Scope:** Native Mobile Experience (iOS & Android) + Reusable Financial Component Architecture
* **Domain:** Fixed-Income WealthTech, Multi-Institution Marketplace, High-Yield Deposit Lifecycles (Regulated by the Central Bank of Nigeria & Insured by NDIC)
* **The Core Paradox:** In high-inflation macroeconomic climates (where local currency inflation hovers around 25–30%), holding idle cash in traditional bank accounts destroys purchasing power. Fixed deposits offer guaranteed yields (14% to 22% p.a.), but the market is fragmented: discovering rates, comparing creditworthiness, and locking funds across licensed commercial banks, merchant banks, and microfinance institutions (MFBs) required manual branch visits and opaque paperwork. Furthermore, the existing design system had degraded into a sprawling 141-screen maze where overlapping flows, ambiguous early liquidation rules, and brittle bank timeout states eroded customer trust.
* **The Strategic Transformation:** We re-architected Coupon around **eight foundational product domains**, standardized the **investment-to-maturity lifecycle**, introduced **transparent early-break liquidation modeling**, engineered a **resilient asynchronous transaction state machine** for bank API outages, and reconciled the product into a verified, canonical 115-screen architecture.

---

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE 15-ARTIFACT VISUAL NARRATIVE MAP                                  │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 01. The Product Ecosystem Shift (Marketplace ➔ Portfolio)│ 09. Asynchronous Processing & Settlement States     │
│ 02. Macroeconomic Landscape & The Yield Matrix          │ 10. Active Portfolio & Accrued Earnings Dashboard    │
│ 03. The 8-Domain Product Architecture Sitemap           │ 11. The 3-Way Maturity Automation Engine (Rollover)  │
│ 04. Marketplace Discovery & Comparison Engine           │ 12. Defensive State Design: Bank API Timeout Flow    │
│ 05. Institution Due Diligence & Credibility Sheet       │ 13. Progressive KYC Tiering & Verification Matrix    │
│ 06. Investment Amount & Tenor Configuration Modeler     │ 14. System Audit: 141 ➔ 115 Canonical Screen Recon   │
│ 07. The "Emergency Break" Liquidation Disclosure Card   │ 15. The Design System: Tabular Numerics & Badges     │
│ 08. Transaction Review & Security PIN Confirmation      │                                                      │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Context: The High-Stakes Reality of Nigerian Fixed-Income

Fixed-deposit investing is not casual micro-savings. Users on Coupon commit substantial capital—from **₦100,000 to over ₦10,000,000**—locked away for 30, 90, 180, or 365 days. 

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE HIGH-INFLATION INVESTMENT TENSION                                │
├──────────────────────────────────┬──────────────────────────────────┬──────────────────────────────────┤
│ The Purchasing Power Trap        │ The Counterparty Fear            │ The Asymmetrical Penalty Shock   │
│ With inflation exceeding 28%,    │ Users are terrified of Ponzi     │ In legacy banking, breaking a    │
│ traditional 4% savings accounts  │ schemes or failing micro-banks;  │ deposit early forfeits 100% of   │
│ guarantee real wealth loss.      │ they demand visible regulatory   │ interest without prior warning;  │
│ Users need 18–22% fixed returns. │ backing (CBN, NDIC coverage).    │ users feel legally extorted.     │
└──────────────────────────────────┴──────────────────────────────────┴──────────────────────────────────┘
```

### The Systemic Breakdown Before the Redesign
When we conducted our initial product audit, the interface reflected the chaos of rapid, uncoordinated feature sprints:
1. **The 141-Screen Sprawl:** 30 near-duplicate screens, 10 severely mislabeled frames, and 6 orphaned routes meant engineers frequently implemented superseded visual states.
2. **The "Happy Path" Bias:** The original designs assumed instant bank transfers. In reality, Nigerian interbank switching rails (NIBSS) experience frequent timeouts, leaving users in an agonizing state where their money left their bank account but was not acknowledged by Coupon.
3. **Hidden Liquidation Rules:** Early liquidation penalties were buried in unlinked terms-and-conditions modals, leading to immediate customer support escalations when users needed emergency cash.

> 🖼️ **[IMG_01: HERO_PRODUCT_ECOSYSTEM_SPLIT]**  
> *Format: 16:9 Widescreen (2400x1350px)*  
> *Content: Visual split: The marketplace discovery feed featuring competing institution rate cards transitioning into the active Portfolio & Accrued Earnings overview, anchored by the unified system navigation.*

> 🖼️ **[IMG_02: MACROECONOMIC_YIELD_MATRIX]**  
> *Format: 16:9 (2000x1125px)*  
> *Content: Educational benchmark chart comparing: Inflation (28%) vs. Commercial Bank Savings (4%) vs. Coupon Multi-Institution Fixed Deposits (14% to 22%), overlaid with NDIC insurance safety thresholds.*

---

## 2. Decision 1: Structuring the 8-Domain Product Architecture

### Moving from Screen Lists to Domain Ownership
To eradicate architectural ambiguity, we eliminated loose feature branches and reorganized the entire product surface around **eight strict functional domains**:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE 8 CORE PRODUCT DOMAINS                                           │
├─────────────────────┬──────────────────────────────────────────────────────────────────────────────────┤
│ 1. Onboarding & Auth│ Splash, phone registration, biometrics, PIN setup, session recovery              │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 2. KYC & Compliance │ Tier 1 (BVN validation) ➔ Tier 2 (NIN/ID) ➔ Tier 3 (Proof of address & source)  │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 3. Marketplace Hub  │ Rate discovery, institution comparison, tenor filtering, creditworthiness badges │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 4. Investment Engine│ Tenor slider, principal calculation, WHT tax deduction, debit authorization     │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 5. Portfolio Center │ Active deposits, daily accrued interest counter, maturity calendar, certificates │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 6. Maturity Engine  │ 3-way automation: Auto-rollover (all), rollover principal only, or full payout   │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 7. Account & Payouts│ Linked settlement commercial bank accounts, payout statements, audit trail       │
├─────────────────────┼──────────────────────────────────────────────────────────────────────────────────┤
│ 8. System Recovery  │ Bank API network timeouts, NIBSS gateway delays, transaction trace generators   │
└─────────────────────┴──────────────────────────────────────────────────────────────────────────────────┘
```

> 🖼️ **[IMG_03: EIGHT_DOMAIN_ARCHITECTURE_MAP]**  
> *Format: 16:9 (2400x1350px)*  
> *Content: Comprehensive sitemap displaying all 8 domains with standardized naming hierarchy (`DOMAIN — FUNCTION — STATE`), illustrating the unified user journey from discovery to settlement.*

---

## 3. Decision 2: The Marketplace Discovery & Due Diligence Sheet

### The Challenge
A user sees an offer: *“21.5% p.a. from SafeHaven MFB”* vs. *“14.0% p.a. from First Bank.”* 
Why wouldn't they always pick 21.5%? Because they are terrified that the microfinance bank will collapse with their life savings.

### The Solution: Building Institutional Due Diligence into the Card
Instead of simple rate banners, every marketplace card was engineered as an **auditable financial trust unit**:
1. **CBN & NDIC Assurance:** Clear badges verifying that deposits are protected up to statutory limits by the Nigeria Deposit Insurance Corporation (NDIC).
2. **Tenor Flexibility Badges:** Highlighting minimum commitment windows (e.g. *“30-day minimum”* vs. *“365-day lock”*).
3. **The Due Diligence Bottom Sheet:** Tapping an institution opens its financial profile: operating history, capitalization tier, and historical payout reliability score.

> 🖼️ **[IMG_04: MARKETPLACE_DISCOVERY_ENGINE]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Marketplace discovery interface: Tenor filter pills (30d, 90d, 180d, 365d), institution rate cards, net yield comparisons, and regulatory assurance chips.*

> 🖼️ **[IMG_05: INSTITUTION_CREDIBILITY_SHEET]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Due Diligence Sheet modal displaying institution license details, NDIC coverage threshold (up to ₦5,000,000), total active marketplace volume, and payout track record.*

---

## 4. Decision 3: Mathematical Transparency & Withholding Tax (WHT)

### The Dirty Secret in Fintech Marketing
Many investment apps advertise gross interest (e.g. *“Earn 20%!”*). When the deposit matures, users receive less than expected because Nigerian law mandates a **10% Withholding Tax (WHT)** on interest earnings. Users feel cheated.

### The Plain-English Configuration Modeler
In Coupon, the configuration flow makes the exact tax math visible *before* confirmation:
* **Interactive Tenor Slider:** Adjusts maturity dates in real time.
* **Gross vs. Net Breakdown:** 
  $$\text{Gross Interest} - \text{10\% Statutory WHT} = \text{Guaranteed Take-Home Payout}$$
* **Maturity Date Anchor:** Explicitly displays the exact day and time funds become liquid (*e.g., “Wednesday, 14 October 2026 at 10:00 AM”*).

> 🖼️ **[IMG_06: INVESTMENT_CONFIG_MODELER]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Investment configuration screen: Principal input field, interactive tenor slider, real-time interest compounding calculation, and explicit 10% WHT tax disclosure line item.*

---

## 5. Decision 4: The "Emergency Break" Liquidation Disclosure

### Designing for Life’s Worst Timing
Life does not respect a 180-day lock-in period. Medical crises or family emergencies force people to liquidate early. In most banks, this involves writing formal letters and accepting punitive arbitrary deductions.

### The Upfront Liquidation Contract
We embedded the **"Emergency Break" Card** directly into the pre-investment review step:
* **Guaranteed Principal Preservation:** The user is reassured that their initial deposit is **100% safe and returned in full**.
* **Penal Interest Rule:** Explicitly states the consequence: *"Breaking this deposit before Day 90 forfeits 40% of accrued interest; breaking after Day 90 forfeits only 20%."*
* **Liquidation Settlement Window:** Clarifies that early breaks process within 24 business hours to linked commercial bank accounts.

> 🖼️ **[IMG_07: EMERGENCY_BREAK_DISCLOSURE]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: The pre-commitment Emergency Break card: Clear visual progress bar showing penal interest forfeiture tiers, principal safety guarantee, and estimated liquidation turnaround time.*

> 🖼️ **[IMG_08: TRANSACTION_REVIEW_AND_PIN]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Final review and confirmation sheet: Complete investment summary card, linked funding source, and high-security 4-digit Transaction PIN keypad with FaceID biometric authentication.*

---

## 6. Decision 5: The Asynchronous Bank API State Machine

In Nigerian fintech, interbank debit operations frequently hang. If the app displays a red *"Failed"* screen while the user’s bank has already deducted ₦1,000,000, panic ensues.

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE ASYNCHRONOUS SETTLEMENT STATE MACHINE                            │
├───────────────────┬────────────────────┬───────────────────────┬───────────────────────────────────────┤
│ 1. DEBIT VERIFIED │ 2. NIBSS TRANSIT   │ 3. CERTIFICATE ISSUANCE│ 4. TIMEOUT RECOVERY                   │
├───────────────────┼────────────────────┼───────────────────────┼───────────────────────────────────────┤
│ Instant webhook   │ Funds routed to    │ Partner bank locks    │ If gateway stalls >30s, UI transitions│
│ confirms debit    │ partner depository │ deposit; formal legal │ to "Processing in Background" with    │
│ from user's bank  │ bank holding vault │ certificate issued    │ CBN session trace ID; zero panic      │
└───────────────────┴────────────────────┴───────────────────────┴───────────────────────────────────────┘
```

### Eliminating the "Vanishing Money" Panic
1. **Never Show False Failures:** If a debit webhook is received but the destination deposit confirmation stalls, the UI shifts to **"Processing Under Guarantee."**
2. **The CBN Session Trace ID:** Generates an official interbank tracking reference immediately so the user can verify the status with their home bank.
3. **Automated Background Polling:** The system polls partner bank APIs in the background for 15 minutes, automatically updating the deposit status to `Active` the moment settlement confirms without requiring user re-entry.

> 🖼️ **[IMG_09: ASYNCHRONOUS_PROCESSING_STATES]**  
> *Format: 16:9 (2400x1350px)*  
> *Content: Multi-screen progression of the settlement flow: Step-by-step processing tracker (`Debit Confirmed` ➔ `Routing Funds` ➔ `Issuing Certificate`), and the background processing receipt.*

> 🖼️ **[IMG_12: DEFENSIVE_TIMEOUT_FLOW]**  
> *Format: 16:9 (2400x1350px)*  
> *Content: Contextual error recovery screen for bank network timeouts: Plain-English explanation, verified CBN transaction reference code, live retry countdown, and 1-tap support escalation.*

---

## 7. Decision 6: The Active Portfolio & The 3-Way Maturity Engine

### Managing the Lifecycle After Confirmation
A fixed deposit is not a static receipt; it is an active financial asset.

### The Portfolio Command Center
* **Daily Accrued Interest Ticker:** Displays real-time daily earnings, transforming a passive locked deposit into active psychological gratification.
* **The Maturity Countdown:** Clear timeline showing exact days remaining until maturity.

### The 3-Way Maturity Fork (Preventing Unwanted Auto-Locks)
Forty-eight hours before a deposit matures, the system surfaces the **Maturity Automation Engine**:
1. **Option A: Rollover Principal + Interest (Compound Growth):** Automatically rolls the entire balance into a new deposit at the prevailing market rate.
2. **Option B: Rollover Principal, Payout Interest:** Keeps the original capital working while transferring accrued profit directly into the user’s linked commercial bank account.
3. **Option C: Total Liquidation:** Deposits 100% of capital and returns into the linked account at zero fee.

> 🖼️ **[IMG_10: ACTIVE_PORTFOLIO_DASHBOARD]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Active Portfolio interface: Total active investment counter, live daily accrued interest ticker, interactive maturity timeline, and active deposit cards.*

> 🖼️ **[IMG_11: MATURITY_AUTOMATION_ENGINE]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: The 3-way maturity decision modal: Interactive selection cards for Compound Rollover, Interest Payout, and Full Liquidation with automated 48-hour pre-maturity reminder toggles.*

---

## 8. Decision 7: Progressive KYC Tiering

To comply with Central Bank of Nigeria anti-money laundering regulations without suffocating onboarding conversion, we introduced **Progressive KYC Tiering**:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   PROGRESSIVE KYC SPECIFICATION MATRIX                                 │
├────────────────────┬──────────────────────────────────────┬────────────────────────────────────────────┤
│ TIER LEVEL         │ VERIFICATION REQUIREMENTS            │ INVESTMENT THRESHOLD                       │
├────────────────────┼──────────────────────────────────────┼────────────────────────────────────────────┤
│ Tier 1 (Instant)   │ BVN + Phone OTP validation           │ Maximum ₦300,000 single deposit            │
├────────────────────┼──────────────────────────────────────┼────────────────────────────────────────────┤
│ Tier 2 (Standard)  │ Government ID (NIN / Driver's License)│ Maximum ₦2,000,000 single deposit          │
├────────────────────┼──────────────────────────────────────┼────────────────────────────────────────────┤
│ Tier 3 (Enhanced)  │ Verified Proof of Address + Liveness │ Unlimited institutional investment capital │
└────────────────────┴──────────────────────────────────────┴────────────────────────────────────────────┘
```

> 🖼️ **[IMG_13: PROGRESSIVE_KYC_MATRIX]**  
> *Format: 16:10 (2560x1600px)*  
> *Content: Progressive KYC verification screens: BVN instant validation card, automated facial liveness capture guide, and tier-limit unlock progress status.*

---

## 9. Decision 8: Reconciling 141 Screens into a Canonical 115-Screen System

### From File Debt to Engineering Velocity
The initial design repository contained 141 screens across multiple generations of unmerged product iterations. We treated this audit not as simple file hygiene, but as an **operational risk intervention**:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       SYSTEM RECONCILIATION AUDIT                                      │
├──────────────────────────────────┬──────────────────────────────────┬──────────────────────────────────┤
│ 26 Redundant Screens Eliminated  │ 100% Naming Standardization      │ 0 Orphaned Routes                │
│ Merged obsolete duplicate flows, │ Standardized to universal syntax:│ Every screen linked to a verified│
│ retiring fragmented checkout branches `DOMAIN — FUNCTION — STATE`   │ canonical journey & error recovery│
└──────────────────────────────────┴──────────────────────────────────┴──────────────────────────────────┘
```

> 🖼️ **[IMG_14: SYSTEM_RECONCILIATION_AUDIT]**  
> *Format: 16:9 (2400x1350px)*  
> *Content: Architectural audit visual contrasting the legacy 141-screen fragmented sprawl against the reconciled 115-screen canonical flow structure with color-coded domain clusters.*

---

## 10. Design System: Precision Financial Ergonomics

Financial data requires strict spatial and typographic discipline to prevent misinterpretation:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   COUPON DESIGN SYSTEM SPECIFICATIONS                                  │
├───────────────────┬────────────────────────────────────────────────────────────────────────────────────┤
│ Typography System │ Heavy tabular/monospaced numeric figures enabled across all balance counters and   │
│                   │ interest rate displays to eliminate visual jump during real-time recalculations.   │
├───────────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ Status Badges     │ 6 universal financial states: `Accruing` (Emerald), `Matured` (Blue), `Pending`    │
│                   │ (Amber), `Liquidating` (Purple), `Broken Early` (Orange), `Failed` (Red).          │
├───────────────────┼────────────────────────────────────────────────────────────────────────────────────┤
│ Spatial Grid      │ Strict 4px/8px modular vertical rhythm; compact key-value data pairing for review  │
│                   │ sheets to keep all critical financial figures above the mobile viewport fold.     │
└───────────────────┴────────────────────────────────────────────────────────────────────────────────────┘
```

> 🖼️ **[IMG_15: DESIGN_SYSTEM_TOKENS]**  
> *Format: 16:9 (2400x1350px)*  
> *Content: Design system component sheet: Tabular numeric type scale, status badge matrix across all 6 financial lifecycle states, modular summary card components, and accessible form inputs.*

---

## 11. Senior Retrospective: What Designing for Fixed-Income Taught Me

1. **In fintech, ambiguity is an existential liability:** If an interface cannot explain what happens to a user's money when an API times out, users will pull their funds and never return. A senior designer must design the failure states with ten times more rigor than the happy path.
2. **File hygiene is engineering reliability:** When design files are cluttered with duplicates and orphan states, engineers build the wrong screens. Reconciling 141 screens into a clean 115-screen canonical source of truth directly cut front-end implementation debt and eliminated edge-case bugs before code was shipped.
3. **Respect the reality of user anxiety:** High-interest returns look exciting on pitch decks, but users fear losing their hard-earned capital. Designing visible regulatory protections, NDIC insurance badges, and transparent early-break terms transforms a scary financial decision into an empowering wealth preservation tool.
