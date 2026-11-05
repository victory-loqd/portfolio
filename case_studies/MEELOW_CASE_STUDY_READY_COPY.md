# Meelow

## Safety without surveillance

Meelow combines personal safety, location sharing, communication, payments, utilities, cards, and administrative operations in one product ecosystem. My work focused on making its safety model understandable: helping people stay connected to those they trust without turning care into constant surveillance.

**Role:** Product Designer  
**Scope:** Product architecture, information architecture, interaction design, permission modelling, state design, mobile UX, admin UX, prototyping, and component systems

## Overview

Location sharing often looks simple on a map. Underneath the interface, it is a permissions system involving people, relationships, time, precision, consent, and emergency behaviour.

Meelow made that problem more complex by combining safety with chat, wallets, bill payments, airtime, data, electricity, cable, betting, gift cards, virtual cards, education services, and administrative tools.

The product needed to support a broad range of services without allowing the safety experience to become another disconnected feature.

My central design question was:

> How might we help people feel protected by trusted contacts without making them feel watched?

## The tension

People want family and friends to know that they are safe, especially while travelling, commuting, meeting someone, working late, or moving through an unfamiliar place.

They do not always want those people to see their exact location indefinitely.

Traditional location-sharing patterns often collapse several different intentions into one switch: location is either shared or not shared. That approach ignores the questions people actually have:

- Who can see me?
- Whose location can I see?
- Is sharing mutual?
- Is this temporary or ongoing?
- Are they seeing my exact position or only an approximate area?
- What happens if I pause sharing?
- What changes during an emergency?

The design challenge was to turn those rules into something ordinary people could understand and control.

## Circles as a relationship model

Meelow organises trusted contacts into circles such as Family, Friends, Workers, and custom groups.

Circles provide useful context, but they are not automatic permission bundles. Adding someone to a circle does not silently give them permanent access to another person’s location.

Every relationship begins with consent. A person can be invited into a circle, accept or decline, and then control what form of visibility exists between them and other members.

This distinction prevents a familiar label such as “Family” from becoming a substitute for permission.

## Separating relationship from visibility

One of the most important decisions was separating two ideas that location products often combine:

1. Being connected to someone
2. Sharing location with that person

The same two people can have different visibility rights.

For example:

- Ada can see Tobi while Tobi cannot see Ada
- Tobi can share temporarily with Ada
- Ada can share an approximate area rather than a precise position
- Either person can pause sharing without leaving the circle
- A person can belong to several circles with different rules in each

This created an asymmetric relationship model. The interface therefore needed to show direction, not merely connection.

The product uses two clear perspectives:

- **Who can see you**
- **Who you can see**

These views help people understand the current permission state without mentally reconstructing every relationship.

## Designing sharing around intent

Location sharing is not a single behaviour. Meelow supports different intentions through distinct sharing modes.

### Temporary sharing

Useful for a journey, night out, appointment, or specific period. Access ends without requiring the person to remember to switch it off later.

### Until turned off

Useful when the end time is unknown but the person still wants deliberate control over when sharing stops.

### Always-on sharing

Appropriate for trusted, persistent relationships where ongoing visibility is understood and accepted.

### Approximate location

Useful when reassurance matters more than exact tracking. A trusted contact can understand that someone is within an area without seeing a precise point.

### Paused sharing

Allows someone to stop transmitting their location without deleting the relationship or leaving a circle.

These modes make privacy a product behaviour rather than a settings-page promise.

## Making states visible

A consent system fails when people cannot tell what is currently happening.

The interface needed to distinguish between states such as:

- Invitation pending
- Connected but not sharing
- Sharing temporarily
- Sharing until turned off
- Always sharing
- Approximate location active
- Sharing paused
- Location unavailable
- Battery low
- Permission removed
- Emergency sharing active

Each state affects what the sender sees, what the receiver sees, and which actions are available next.

I treated these as system states rather than isolated screen variations. That made it possible to reason through both sides of the relationship and identify contradictions before they reached implementation.

## Designing both sides of an emergency

SOS is not one red button and one confirmation screen. It creates simultaneous experiences for the person requesting help and the people receiving the alert.

The sender needs to understand:

- Whether the alert was triggered
- Who was notified
- What location information was shared
- Whether the alert is still active
- How to cancel an accidental activation
- What to do while waiting for help

The receiver needs to understand:

- Who needs help
- Where they are or were last seen
- When the alert began
- Whether the location is updating
- The sender’s battery or availability state
- Which actions are appropriate

Designing these two perspectives together prevented the emergency experience from being optimised for only one side.

## Safety within a larger product ecosystem

Meelow extends beyond safety into communication and financial services, including:

- Chat
- Wallets
- Airtime and data
- Electricity and cable payments
- Betting and education payments
- Gift cards
- Virtual cards
- Creator-related services

The design challenge was not to force all of these services into the safety narrative. It was to give the ecosystem a coherent architecture while allowing safety to retain its own interaction rules and emotional tone.

The safety experience needs calm, clarity, and control. Payment and utility journeys prioritise speed, confirmation, and transaction status. Shared navigation and components can connect them, but their critical states cannot be treated as interchangeable.

## Designing the operational system

The consumer application was supported by a broad administrative product.

The admin architecture covered areas such as:

- Dashboard
- Operations
- Finance
- Products
- Support
- System management
- Users
- Transactions
- Payments
- Wallets
- Refunds
- Cards
- Gift cards
- Tickets
- Notifications
- Analytics
- Compliance

This layer made the system more than a collection of mobile screens. Customer states needed operational counterparts so that teams could investigate transactions, manage products, respond to support cases, monitor financial activity, and maintain the service.

## Building reusable foundations

The Figma work includes dedicated areas for components, icons, accessibility, general interface patterns, date and time, food, hands, and AI-related assets, alongside active review and admin work.

That structure supported a large product surface with repeated needs:

- Navigation
- Cards and lists
- Transaction states
- Forms and validation
- Status presentation
- Search and filtering
- Maps and contact representations
- Permission controls
- Notifications
- Empty, loading, success, and failure states

Accessibility was treated as part of the product system rather than a final visual check. This matters particularly in safety and emergency contexts, where comprehension and action clarity are essential.

## What I designed

My work covered:

- Circle and trusted-contact architecture
- Consent-first invitations
- Asymmetric location relationships
- “Who can see you” and “Who you can see” views
- Temporary, ongoing, approximate, and paused sharing
- Map and contact states
- Battery and location-availability states
- Sender and receiver SOS experiences
- Broader consumer-product architecture
- Wallet, utility, card, and service journeys
- Administrative information architecture
- Reusable interface and accessibility foundations

## Outcome

The work transformed location sharing from a binary feature into a legible permission system.

Instead of assuming that every trusted relationship should be mutual and permanent, the model supports different levels of access, different durations, different precision, and different expectations between people.

It also established a broader architecture capable of supporting safety, communication, financial services, customer support, and administrative operations within one ecosystem.

No adoption or commercial-impact claim is included here because implementation status and measured outcomes have not been verified.

## What this project demonstrates

Meelow demonstrates my ability to reason through products where complexity lives in rules and relationships rather than individual screens.

The work required:

- Permission modelling
- State design
- Information architecture
- Two-sided interaction logic
- Privacy decisions
- Emergency behaviour
- Consumer and admin-system thinking
- Consistency across a broad service ecosystem

The strongest result was not a particular interface. It was a model that made a complicated set of relationships explainable.

## Reflection

Safety products can easily become invasive when protection is treated as permission to observe someone continuously.

Meelow reinforced that consent is not a single onboarding action. It has to remain visible and adjustable throughout the product. People need to understand who has access, in which direction, for how long, and with what level of precision.

Designing those rules before polishing the screens made the experience safer, clearer, and more respectful.

## Short project-card version

### Meelow

Designing a consent-first safety and location-sharing system across circles, asymmetric relationships, temporary access, approximate location, paused states, and SOS.

**Signal:** Systems thinking, state design, and complex interaction logic.

## Compact homepage version

Meelow asked a difficult question: how can people help trusted contacts feel safe without making them feel watched?

I designed the permission and state model behind circles, directional visibility, temporary and ongoing sharing, approximate location, paused access, and emergency alerts.

## Resume-length version

Designed Meelow’s consent-first safety and location-sharing system across circles, asymmetric relationships, temporary and ongoing access, precise and approximate location, paused states, and two-sided SOS experiences. Extended the architecture across chat, wallets, utility payments, cards, support, and administrative operations.

