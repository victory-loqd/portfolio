# Coupon

## From 141 screens to one coherent investment system

Coupon is a mobile fintech product that helps people discover and manage fixed-deposit investments from Nigerian financial institutions. I worked across the product architecture, investment journeys, account verification, portfolio management, withdrawals, rollovers, and system states, then audited and restructured the design file so the product could be understood as one system rather than a collection of screens.

**Role:** Product Designer  
**Scope:** Product architecture, UX audit, interaction design, mobile UX, information architecture, flow design, error recovery, design-system alignment, and developer handoff

## Overview

Investing is not difficult only because the language is technical. It is difficult because every decision carries dependencies.

A person needs to understand the institution holding their money, the rate and duration of a deposit, the minimum amount, when returns are paid, what happens at maturity, whether funds can be withdrawn early, and what to do when identity or payment checks fail.

Coupon brings those decisions into one mobile product. Its product surface covers onboarding, identity verification, marketplace discovery, comparison, investment, portfolio tracking, withdrawals, rollovers, linked bank accounts, notifications, compliance, and recovery states.

My central design question was:

> How might we make a multi-institution investment product feel clear and dependable at every decision point, including when something goes wrong?

## The problem behind the interface

Coupon had substantial product depth, but the design file no longer expressed that depth clearly.

The starting file contained 141 screens across multiple generations of the product. Current flows sat beside older versions. Several screens were filed under the wrong product area. Some frames were named for one function while displaying another. Investment, withdrawal, and rollover journeys overlapped. Necessary states and accidental duplicates were difficult to distinguish.

This was more than a file-hygiene problem. If a designer or engineer cannot identify the canonical journey, the ambiguity can reach the product:

- The wrong screen may be implemented
- A state may be omitted because it appears redundant
- A user may reach a success or failure screen without a clear next step
- Similar actions may behave differently across investment, withdrawal, and rollover flows
- Compliance and recovery paths may be treated as secondary rather than integral

The first task was therefore to establish what the product actually was.

## Auditing the whole product

I reviewed the file as a connected system rather than evaluating isolated screens.

The audit covered:

- Screen inventory and ownership
- Duplicate and near-duplicate flows
- Naming and hierarchy
- Inbound and outbound navigation
- Conditional entry points
- Empty, loading, success, and failure states
- Review and confirmation patterns
- Card and information hierarchy
- Error recovery
- Visual consistency
- Developer handoff readability

The initial structural audit identified 141 screens, including roughly 30 duplicate or near-duplicate screens, 10 severely mislabeled screens, 8 misplaced screens, 6 orphan screens, and 4 exact duplicate pairs.

That inventory replaced assumption with evidence. It allowed each screen to be classified as current, necessary variation, superseded work, misplaced work, or accidental duplication.

## Rebuilding the information architecture

I reorganised the product around eight clear domains:

1. Splash and onboarding
2. Account creation
3. Login, recovery, identity verification, and biometrics
4. Home and dashboard
5. Marketplace and investment
6. Portfolio, deposits, withdrawals, and rollovers
7. Account, bank accounts, and notifications
8. System states, legal, and compliance

This structure made product ownership visible. Sign-up screens were consolidated into the account-creation journey. Portfolio and deposit states were separated from marketplace discovery. Account operations were grouped with linked bank accounts and notification preferences. Legal and failure states became a defined product area rather than loose appendices.

The screen-naming system was also standardised around:

> AREA — FUNCTION — STATE

Names such as `Home — Dashboard — Active`, `Investment — Payment Processing`, and `Auth — SignUp — OTP — Error` make a screen's role legible without opening it.

## Reducing the file without reducing the product

The goal was not to make the file smaller for its own sake. It was to remove ambiguity while preserving meaningful product states.

After cleanup:

- Total screens reduced from **141 to 115**
- **26 screens** were removed because they were duplicated, obsolete, empty, or superseded
- Exact duplicate pairs reduced from **4 to 0**
- Near-duplicate pairs reduced from **6 to 0**
- Orphan screens reduced from **6 to 0**
- Misplaced screens reduced from **8 to 0**
- Naming-convention adherence increased from roughly **40% to 100%**
- More than **182 generic wrapper names** were replaced with contextual names
- Reusable component sets were moved out of the product-flow page and into the style library

The result was a leaner file with the same essential product coverage and a much clearer source of truth.

## Designing the investment journey

The core investment flow needed to make a consequential financial decision feel progressive rather than overwhelming.

The journey was structured around a sequence of focused decisions:

1. Discover an offer
2. Review the institution, rate, tenor, and minimum amount
3. Enter an investment amount
4. Select a tenor
5. Review the investment summary
6. Confirm with a transaction PIN
7. Understand the processing state
8. Receive a clear investment record

Each step answers a different question. Discovery helps the user compare. Product detail explains the offer. Amount and tenor establish the commitment. Review creates a final pause. PIN confirms intent. Processing explains what the system is doing. The receipt gives the user a durable summary of the decision.

This separation prevents the product from compressing education, configuration, consent, and confirmation into one overloaded screen.

## Designing beyond the happy path

Trust in a financial product is tested most when the expected path breaks.

A navigation audit exposed missing or ambiguous routes, incomplete terminal states, and recovery gaps. I treated those findings as design work, not documentation debt.

The expanded state coverage includes:

- Login phone-number entry before OTP
- Incorrect OTP and incorrect PIN states
- Failed identity verification with a stated reason and reference number
- Withdrawal attempts when no bank account is linked
- Bank-account verification failure
- Rollover failure
- Network errors
- Transaction failure
- Session expiry
- Server maintenance
- Insufficient funds
- Empty marketplace, portfolio, notification, bank-account, and transaction states

Recovery actions are contextual. A user can retry, use another account, add a bank account, return to the portfolio, recover a PIN, or contact support depending on the failure.

The product does not simply announce that something failed. It explains what remains safe, what caused the problem where that information is available, and what the user can do next.

## Making processing states useful

Coupon contains several operations that cannot resolve instantly, including investment payments, withdrawals, rollovers, bank verification, and identity checks.

These states originally used several unrelated visual and interaction patterns. I established a shared processing model built around:

- A clear operation name
- Visible progress or steps
- Plain-language status
- A distinction between completed and pending work
- A defined success destination
- A failure or timeout path where necessary

The content changes by operation, but the behaviour remains familiar. This reduces the amount a user has to relearn during high-attention financial moments.

## Unifying review, information, and status patterns

The audit found six card patterns, four processing treatments, five information-banner styles, and multiple error-icon treatments.

I used the newer investment flow as the reference standard and defined a smaller visual grammar:

- Clean key-value summary cards for review and confirmation
- Consistent institution and offer cards
- Shared status and badge treatments
- One informational-note pattern with informational and warning variants
- One processing pattern adapted to each operation
- One success structure with confirmation, summary, and next actions
- One error structure with reason, reference, recovery, and support

This work made consistency functional. A familiar pattern tells the user what kind of decision they are making and what will happen next.

## Designing the portfolio after investment

The experience does not end when an investment is confirmed.

Coupon also supports the lifecycle of a deposit:

- Active and matured deposits
- Earnings overview
- Deposit details
- Interest history
- Statements
- Auto-rollover settings
- Early withdrawal
- Scheduled withdrawal
- Withdrawal review and confirmation
- Rollover with or without a top-up
- Processing, success, and failure states

This lifecycle perspective was important because marketplace discovery and portfolio management have different jobs. The marketplace helps a person choose. The portfolio helps them understand, monitor, and act on an existing commitment.

Separating those contexts allowed the navigation and information hierarchy to reflect the user's current intention.

## What I designed

My work across Coupon covered:

- Product-wide UX and structural audits
- An eight-domain product information architecture
- Onboarding, sign-up, login, and account recovery
- KYC and biometric states
- Marketplace discovery, search, filtering, bank profiles, and comparison
- Investment amount, tenor, review, PIN, processing, and receipt flows
- Portfolio, deposit, earnings, statement, and maturity experiences
- Withdrawal and rollover journeys
- Linked bank-account management
- Notification and preference settings
- Empty, loading, success, error, and compliance states
- Reusable review, processing, status, and information patterns
- Naming, hierarchy, and developer-handoff cleanup

## Outcome

Coupon moved from a broad but difficult-to-read design file into a coherent product system.

The cleaned file contains 115 purposeful screens across eight product domains, with no verified duplicate pairs, no orphan screens, no misplaced screens, and full adherence to the new naming convention.

The deeper result is not the reduction in screen count. It is the removal of product ambiguity. The current architecture makes it easier to identify the canonical journey, understand state relationships, trace navigation, and see where a user recovers when a financial operation does not go as planned.

No adoption, revenue, or customer-impact claim is included because those outcomes have not been verified.

## What this project demonstrates

Coupon demonstrates my ability to enter a complex product, establish what is true, and turn that understanding into a more dependable system.

The work required:

- Product archaeology
- Information architecture
- Journey and state modelling
- Fintech and compliance awareness
- Error and recovery design
- Visual-pattern consolidation
- Cross-flow consistency
- Detailed developer handoff

The strongest result was not an individual screen. It was a product that became easier to reason about, safer to extend, and clearer to build.

## Reflection

Financial products often try to create trust through polished dashboards and confident language. Those things help, but trust is ultimately structural.

A person needs to know what they are agreeing to, what the system is doing, what changed after an action, and what happens when the operation fails.

Coupon reinforced that product clarity begins before the interface. It begins with a coherent model of the journeys, states, dependencies, and recovery paths that the interface must reveal.

## Short project-card version

### Coupon

Turning a 141-screen fixed-deposit product into a coherent investment system across discovery, KYC, investing, portfolios, withdrawals, rollovers, and recovery states.

**Signal:** Product architecture, fintech UX, system cleanup, and error recovery.

## Compact homepage version

Coupon helps people discover and manage fixed-deposit investments across Nigerian financial institutions.

I audited and restructured 141 screens into a coherent 115-screen product system, then strengthened the journeys across investment, KYC, portfolios, withdrawals, rollovers, and failure recovery.

## Resume-length version

Designed and audited Coupon's mobile fixed-deposit experience across eight product domains, including marketplace discovery, KYC, investments, portfolios, withdrawals, and rollovers. Restructured 141 screens into a verified 115-screen system, removing 26 obsolete or duplicate screens and eliminating orphaned, misplaced, and duplicate states.

## Portfolio placement recommendation

Coupon is now strong enough to publish as a focused supporting case study.

It should not replace Skydd or LOQD as a flagship. Its distinct role is to prove that I can audit a mature, messy product surface, make high-stakes financial journeys coherent, and improve the system behind the screens.

Recommended public hierarchy:

1. Skydd
2. LOQD
3. Meelow
4. Coupon
5. Juju Games

## Case-study page character

Coupon should feel analytical, precise, and evidence-led.

Do not present it as a generic fintech gallery. Structure the page around the transformation from ambiguity to coherence:

1. Open with the 141 → 115 transformation
2. Show the eight-domain product map
3. Contrast competing or duplicated flows with the canonical architecture
4. Walk through the investment journey as the product spine
5. Use failure and recovery states as the trust argument
6. End with the verified cleanup results and what became easier to build

This gives Coupon a visual and editorial identity that is different from the other projects:

- Skydd is expansion
- LOQD is trust across a physical service
- Meelow is consent and relationship logic
- Coupon is coherence under financial complexity
- Juju Games is builder history
