# Discrete Skills Taxonomy for UI, Product Design, UX Design, and Front-End Architecture

**Prepared for Ryan Winzenburg**  
**Date:** September 10, 2026  
**Scope:** Digital product teams building web applications, SaaS platforms, and operational software.

## Executive answer

The four disciplines share a common product-making core, but they are not interchangeable roles. **UI Design** owns visual clarity and component expression. **UX Design** owns understanding people and shaping usable flows. **Product Design** integrates customer value, business value, and delivery constraints across the product lifecycle. **Front-End Architecture** owns the technical system that makes the experience reliable, performant, accessible, and evolvable.

The taxonomy below contains **156 atomic competencies**, organized into 13 domains. It is deliberately broader than a job-description checklist. A senior individual contributor should be deeply capable in the shared core and in one or two specialisms; a staff-level product designer or front-end architect should understand the interfaces between all domains. No credible role requires one person to be the top expert in every item.

> **Depth legend:** **O** = accountable owner / deep specialist; **P** = independent practitioner; **L** = working literacy sufficient to collaborate, review, and make sound trade-offs; **—** = normally outside role scope. The ratings describe a mature senior-role baseline, not an entry-level hiring screen.

### Role boundary map

| Discipline | Primary accountability | Typical outputs | Must not be reduced to |
|---|---|---|---|
| **UI Design** | Visual hierarchy, visual language, stateful components, expressive and legible interface presentation | High-fidelity screens, component specifications, visual QA, responsive variants | “Making it pretty” or operating Figma |
| **UX Design** | Evidence about users, information structure, task success, interaction behavior, and usability | Research plans, journey maps, IA, flows, wireframes, test findings | Wireframing or interview facilitation alone |
| **Product Design** | Coherent end-to-end product outcomes that balance customer needs, business goals, and technical reality | Problem framing, concepts, prototypes, specifications, outcome reviews | UX plus UI as sequential handoffs |
| **Front-End Architecture** | The client-side technical system: composition, data, state, runtime quality, accessibility implementation, and change resilience | Architecture decisions, component APIs, platform conventions, performance budgets, technical roadmaps | Coding isolated screens or choosing a framework |

### The important distinction: skills, tools, and traits

A **skill** is an observable capability that produces a repeatable outcome. Figma, React, Storybook, Jira, and AI coding agents are tools or environments; proficiency matters, but it is not the underlying skill. “Creative,” “strategic,” and “detail-oriented” are traits or descriptors; they become useful only when expressed through concrete behavior such as visual hierarchy, opportunity framing, or defect detection.

For example, **component API design** is a skill. React is one implementation environment. **Usability-test moderation** is a skill. Zoom is only a delivery mechanism. **Token governance** is a skill. Figma Variables and Style Dictionary are implementation options.

## Competency model: 156 discrete skills

The ratings below indicate where a capability should be owned versus understood. Product Design is interpreted as the end-to-end product designer role. Product-management capabilities are included where they are required for senior product-design judgment, not to suggest that designers must replace a product manager.

### 1. Product framing, business, and systems thinking

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| PB-01 | Problem framing | Converts an ambiguous request into a bounded problem statement with constraints and desired change. | O | P | L | P |
| PB-02 | Outcome definition | States customer, business, and operational outcomes separately from feature output. | O | P | L | P |
| PB-03 | Assumption mapping | Makes value, usability, feasibility, and viability assumptions explicit and testable. | O | O | L | P |
| PB-04 | Opportunity sizing | Uses qualitative and quantitative evidence to judge materiality of a problem. | O | P | L | L |
| PB-05 | Value-proposition design | Articulates audience, job, differentiated benefit, and proof. | O | P | L | L |
| PB-06 | Jobs-to-be-done analysis | Identifies functional, social, and emotional jobs plus switching triggers. | P | O | L | L |
| PB-07 | Domain-model comprehension | Understands the entities, rules, vocabulary, and exceptions of a customer domain. | O | O | P | O |
| PB-08 | Systems mapping | Maps actors, dependencies, feedback loops, and operational handoffs around the experience. | O | P | L | O |
| PB-09 | Product strategy translation | Converts a strategy into experience principles, bets, and decision criteria. | O | P | L | P |
| PB-10 | Prioritization | Applies a transparent method to sequence work under capacity and risk constraints. | O | L | L | P |
| PB-11 | Experiment design | Specifies a falsifiable hypothesis, population, treatment, measure, and decision threshold. | O | P | L | P |
| PB-12 | Trade-off articulation | Explains customer, business, design, technical, legal, and operational consequences of a choice. | O | P | P | O |

### 2. User research and evidence synthesis

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| RE-01 | Research planning | Selects a method, participant profile, sample, timeline, and decision it will inform. | P | O | L | L |
| RE-02 | Stakeholder interview design | Extracts context, constraints, incentives, and unresolved decisions without treating opinion as evidence. | O | P | L | P |
| RE-03 | Generative interview moderation | Elicits past behavior, context, language, and unmet needs without leading participants. | P | O | L | — |
| RE-04 | Contextual inquiry | Observes work in situ and documents tools, workarounds, interruptions, and environmental constraints. | P | O | L | L |
| RE-05 | Task analysis | Decomposes a user goal into actions, decisions, inputs, variations, and failure points. | P | O | P | P |
| RE-06 | Survey design | Creates unbiased questions, response structures, and sampling logic appropriate to the decision. | P | P | L | L |
| RE-07 | Quantitative behavior analysis | Uses event, funnel, cohort, and segmentation data without confusing correlation and cause. | P | P | L | P |
| RE-08 | Diary-study design | Captures longitudinal behavior, reflections, and changes in context. | L | P | — | — |
| RE-09 | Usability-test moderation | Runs task-based sessions, probes behavior, and avoids coaching participants. | P | O | P | L |
| RE-10 | Research synthesis | Clusters observations into findings, confidence levels, tensions, and implications. | P | O | L | L |
| RE-11 | Insight communication | Communicates evidence through concise narratives, artifacts, clips, and direct implications. | O | O | P | L |
| RE-12 | Research-repository stewardship | Makes evidence findable, traceable, current, and reusable across teams. | P | P | L | L |

### 3. Information architecture and interaction design

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| IA-01 | Content inventory | Enumerates current content, data, formats, owners, status, and duplication. | P | O | P | P |
| IA-02 | Taxonomy design | Creates clear categories, labels, relationships, and inclusion rules for information. | P | O | P | P |
| IA-03 | Navigation design | Organizes global, local, contextual, and utility navigation around user goals. | P | O | P | P |
| IA-04 | Findability design | Designs search, browse, filters, sort, facets, and zero-result recovery. | P | O | P | P |
| IA-05 | User-flow design | Defines a coherent sequence from entry through completion, exception, and follow-up. | O | O | P | P |
| IA-06 | Task-flow optimization | Removes avoidable steps, decisions, memory demands, and context switches. | O | O | P | P |
| IA-07 | Interaction-state design | Specifies default, loading, empty, error, success, permission, disabled, and destructive states. | O | O | O | O |
| IA-08 | Form design | Designs field grouping, validation, dependencies, defaults, input modes, and recovery. | P | O | P | O |
| IA-09 | Error-prevention design | Uses constraints, progressive disclosure, sensible defaults, confirmation, and undo. | P | O | P | O |
| IA-10 | Feedback and status design | Makes system status, latency, progress, and outcome legible at the point of need. | P | O | O | O |
| IA-11 | Interaction-pattern selection | Selects patterns that match user intent, risk, frequency, device, and platform conventions. | O | O | O | P |
| IA-12 | Service-blueprint translation | Connects visible user steps to backstage people, systems, policies, and failure modes. | P | P | L | P |

### 4. UI design and visual systems

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| UI-01 | Visual hierarchy | Directs attention using contrast, scale, placement, grouping, and motion. | P | P | O | P |
| UI-02 | Layout composition | Creates balanced, purposeful compositions with grid, alignment, rhythm, and responsive intent. | P | P | O | P |
| UI-03 | Typography systems | Selects type scales, roles, weights, line lengths, and responsive behavior for legibility. | P | P | O | P |
| UI-04 | Color-system design | Establishes semantic color roles, contrast, states, dark-mode behavior, and theming logic. | P | P | O | P |
| UI-05 | Spacing and sizing systems | Defines scalable spatial relationships rather than arbitrary per-screen measurements. | P | P | O | O |
| UI-06 | Iconography direction | Chooses or creates icons with clear metaphor, optical balance, labeling strategy, and accessibility. | L | P | O | P |
| UI-07 | Visual affordance design | Makes controls, hierarchy, interactivity, and action consequence perceptible. | P | O | O | P |
| UI-08 | Responsive visual adaptation | Preserves priority and comprehension across viewports and input modes. | P | P | O | O |
| UI-09 | Data-display design | Chooses tables, charts, cards, maps, and annotations that support comparison and decisions. | P | P | O | P |
| UI-10 | Data-dense interface design | Handles scanning, density, grouping, pinned context, exceptions, and progressive disclosure. | O | O | O | O |
| UI-11 | Brand-to-product translation | Applies brand expression without damaging usability, density, or accessibility. | P | P | O | P |
| UI-12 | Motion and transition design | Specifies purposeful duration, easing, continuity, feedback, reduced-motion behavior, and implementation intent. | P | P | O | P |

### 5. Content design, service design, and AI interaction design

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| CX-01 | UX writing | Produces concise, task-oriented labels, instructions, status, and error content. | P | O | P | L |
| CX-02 | Content hierarchy | Determines what users need now, later, or never; structures for scanning and action. | P | O | P | L |
| CX-03 | Terminology governance | Maintains a controlled vocabulary that matches user language and domain semantics. | P | O | P | P |
| CX-04 | Error-message design | States the problem, cause when useful, recovery action, and durable support path. | P | O | P | P |
| CX-05 | Empty-state design | Gives clear orientation, value, next action, and legitimate reason when no action exists. | P | O | O | P |
| CX-06 | Notification design | Sets event triggers, audience, channel, timing, priority, fatigue protections, and preferences. | P | P | P | O |
| CX-07 | Onboarding design | Designs progressive learning, setup, activation, and return paths without forcing needless tours. | O | O | P | P |
| CX-08 | Conversational interaction design | Defines turn-taking, intent repair, confirmation, memory boundaries, and exit paths. | P | O | P | P |
| CX-09 | AI uncertainty communication | Represents confidence, source/provenance, limitations, and recommended verification in AI outputs. | O | O | P | O |
| CX-10 | Human-in-the-loop workflow design | Assigns automation, review, escalation, override, and accountability to the right actor. | O | P | L | O |
| CX-11 | Service-design orchestration | Designs the cross-channel experience across people, processes, policies, and technology. | P | P | L | P |
| CX-12 | Localization-ready design | Anticipates language expansion, bidirectionality, locale formats, cultural conventions, and translation workflow. | P | P | P | O |

### 6. Accessibility, inclusion, and responsible experience design

WCAG 2.2 is organized around the four principles **perceivable, operable, understandable, and robust**, with testable success criteria at Levels A, AA, and AAA.[1] Accessibility is therefore a design and architecture responsibility, not a final QA step. Semantic HTML provides native keyboard and assistive-technology behavior that custom controls must otherwise recreate.[2]

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| AX-01 | Accessibility requirements definition | Converts applicable standards, policy, and risk into testable experience requirements. | P | P | P | O |
| AX-02 | Inclusive research recruitment | Includes relevant disability, age, language, literacy, device, and context diversity in research. | P | O | L | L |
| AX-03 | Keyboard interaction design | Defines logical focus order, visible focus, shortcuts, traps, escape behavior, and reachability. | P | O | P | O |
| AX-04 | Screen-reader interaction design | Specifies meaningful names, roles, states, relationships, announcements, and reading order. | P | O | P | O |
| AX-05 | Semantic HTML application | Chooses native semantic elements before implementing custom widgets or ARIA. | L | P | P | O |
| AX-06 | Color and non-color signaling | Ensures color is not the only carrier of state, priority, category, or error. | P | P | O | P |
| AX-07 | Contrast verification | Tests text, non-text controls, focus indicators, and states against relevant thresholds. | P | P | O | P |
| AX-08 | Accessible-form design | Provides persistent labels, instructions, error association, validation timing, and input purpose. | P | O | P | O |
| AX-09 | Accessible-media design | Provides captions, transcripts, audio description considerations, and controllable media behavior. | L | P | P | P |
| AX-10 | Cognitive-accessibility design | Reduces unnecessary complexity, memory load, ambiguity, surprise, and time pressure. | P | O | P | P |
| AX-11 | Touch and mobile accessibility | Accounts for target size, motion, orientation, zoom, device settings, and alternate inputs. | P | P | O | O |
| AX-12 | Accessibility test and remediation | Combines automated checks, keyboard testing, assistive-technology checks, and human judgment into actionable fixes. | P | P | P | O |

### 7. Design systems and design operations

Design tokens are a platform-agnostic method for expressing named design decisions across disciplines and tools; their value is a shared vocabulary and maintainable design-development flow, not merely centralizing hex values.[3]

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| DS-01 | System scope definition | Defines the products, platforms, users, adoption goals, and non-goals of a system. | P | P | O | O |
| DS-02 | Component anatomy design | Defines stable parts, slots, behaviors, states, and content rules for a component. | P | P | O | O |
| DS-03 | Component API design | Designs composable, discoverable, constrained component props and events without leaking implementation detail. | L | P | P | O |
| DS-04 | Design-token architecture | Creates primitive, semantic, and component tokens with clear aliasing and theming rules. | P | P | O | O |
| DS-05 | Token naming | Uses names that express purpose, scope, and state rather than present implementation values. | P | P | O | O |
| DS-06 | Pattern-library curation | Distinguishes reusable patterns from one-off solutions and maintains a coherent catalog. | P | P | O | O |
| DS-07 | System documentation | Documents usage, anatomy, do/don't guidance, accessibility, content, code, and change status. | P | P | O | O |
| DS-08 | Contribution-model design | Defines proposal, review, implementation, release, and ownership mechanisms for changes. | P | P | O | O |
| DS-09 | Visual-regression governance | Establishes baselines, diff review, exception criteria, and remediation ownership. | L | L | P | O |
| DS-10 | Cross-platform consistency | Maps intent across web, mobile, email, native, and brand contexts without forcing identical controls. | P | P | O | O |
| DS-11 | System adoption enablement | Builds training, migration support, champions, examples, and measurement to drive use. | P | P | O | P |
| DS-12 | Design-debt management | Identifies, sizes, sequences, and funds inconsistency and maintainability reduction. | O | P | O | O |

### 8. Prototyping, specification, and design-to-code collaboration

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| PR-01 | Low-fidelity prototyping | Uses rough artifacts to test structure, flow, and language before visual polish. | O | O | P | L |
| PR-02 | High-fidelity prototyping | Models visual states, interaction, feedback, and responsive intent at decision-ready fidelity. | O | O | O | P |
| PR-03 | Prototype selection | Chooses paper, clickable, coded, data-backed, or service prototype according to the risk being tested. | O | O | P | P |
| PR-04 | Prototype realism calibration | Includes enough realistic data, latency, content, and errors to avoid false-positive learning. | P | O | P | O |
| PR-05 | Interaction specification | Documents triggers, state transitions, rules, animation, input behavior, and exceptions. | P | O | O | O |
| PR-06 | Responsive specification | Specifies breakpoints or container behavior, reflow, priority changes, and density adjustments. | P | P | O | O |
| PR-07 | Edge-case specification | Defines empty, loading, error, permission, long-content, unusual-data, and degraded-mode behavior. | O | O | O | O |
| PR-08 | Acceptance-criteria writing | Expresses user-visible requirements and observable conditions for completion. | O | P | P | O |
| PR-09 | Design handoff | Supplies intent, system references, state rules, assets, and examples without pretending screenshots are specifications. | P | P | O | O |
| PR-10 | Engineer-design pairing | Resolves ambiguity live, compares alternatives, and protects outcome while adapting implementation. | O | O | P | O |
| PR-11 | Design QA | Detects and prioritizes deviations across function, layout, content, states, accessibility, and responsiveness. | P | P | O | O |
| PR-12 | Implementation feedback incorporation | Updates design artifacts after discovery of real platform constraints or new learning. | O | O | O | O |

### 9. Front-end foundations and browser-platform fluency

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| FE-01 | HTML document structure | Builds a correct document outline, landmarks, metadata, forms, and content hierarchy. | L | P | P | O |
| FE-02 | CSS cascade reasoning | Predicts inheritance, specificity, layers, scope, and resulting style behavior. | L | L | P | O |
| FE-03 | Modern layout implementation | Uses Grid, Flexbox, intrinsic sizing, container-aware behavior, and logical properties appropriately. | L | P | P | O |
| FE-04 | Responsive implementation | Implements fluid layouts, appropriate breakpoints, media features, and viewport behavior. | L | P | P | O |
| FE-05 | JavaScript and TypeScript fluency | Uses types, data transformation, async patterns, modules, and error handling safely. | L | L | L | O |
| FE-06 | DOM and event-model reasoning | Handles propagation, delegation, focus, input, pointer, keyboard, and lifecycle interactions correctly. | L | P | P | O |
| FE-07 | Browser API selection | Chooses browser capabilities such as storage, observers, workers, history, clipboard, and media APIs responsibly. | — | L | L | O |
| FE-08 | Semantic component implementation | Prefers native elements and exposes accessible semantics when custom behavior is necessary. | L | P | P | O |
| FE-09 | Client-side routing | Implements route structure, deep links, parameters, guards, navigation state, and recovery. | L | L | L | O |
| FE-10 | Framework lifecycle knowledge | Understands rendering, effects, hydration, reactivity, suspense, and cleanup in the chosen stack. | — | L | L | O |
| FE-11 | Package and dependency literacy | Evaluates package purpose, quality, license, maintenance, bundle cost, and security posture. | — | L | L | O |
| FE-12 | Build-tool fluency | Configures development, test, build, lint, formatting, environment, and deployment workflows. | — | L | L | O |

### 10. Front-end architecture and application systems

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| AR-01 | Application decomposition | Separates pages, features, domains, shared UI, utilities, and platform layers with clear boundaries. | L | L | L | O |
| AR-02 | Component-composition strategy | Chooses local versus shared components and controls abstraction before reuse becomes accidental coupling. | L | P | P | O |
| AR-03 | State-model design | Defines server, client, URL, form, cache, and transient UI state with a single clear owner. | L | P | L | O |
| AR-04 | Data-fetching architecture | Handles caching, invalidation, loading, errors, retry, pagination, optimistic updates, and consistency. | L | L | L | O |
| AR-05 | API contract collaboration | Designs client needs, payload shapes, versioning, error semantics, and backwards-compatibility with API teams. | P | L | L | O |
| AR-06 | Rendering-strategy selection | Chooses client, server, static, streaming, or hybrid rendering based on latency, SEO, personalization, and operations. | L | L | L | O |
| AR-07 | Authentication and authorization UX implementation | Implements identity, session, role, permission, expiry, reauthentication, and access-denied states safely. | P | P | P | O |
| AR-08 | Feature-flag architecture | Supports targeted rollout, kill switches, experiment assignment, configuration, and flag cleanup. | P | L | L | O |
| AR-09 | Error-boundary and recovery architecture | Contains failures, preserves useful context, supports retry, and avoids blank-screen failure modes. | L | P | P | O |
| AR-10 | Codebase modularity | Keeps code independently understandable, testable, deployable, and changeable as product complexity grows. | — | L | L | O |
| AR-11 | Architectural decision records | Captures context, alternatives, decision, consequences, and revisit triggers for consequential choices. | L | L | L | O |
| AR-12 | Technical roadmapping | Sequences platform investments, migrations, risk reduction, and capability building against product strategy. | P | L | L | O |

### 11. Quality engineering, performance, reliability, privacy, and security

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| QL-01 | Unit-test design | Tests important logic and behavior with isolated, maintainable cases. | — | L | L | O |
| QL-02 | Integration-test design | Verifies components, state, data, and services working together at meaningful seams. | L | L | L | O |
| QL-03 | End-to-end test design | Automates critical user journeys with stable fixtures, assertions, and failure diagnostics. | P | P | L | O |
| QL-04 | Accessibility-test automation | Integrates automated scanning while recognizing where manual evaluation is required. | L | P | P | O |
| QL-05 | Cross-browser and device testing | Selects and validates browsers, OS, viewport, input, and assistive-technology coverage by risk. | L | P | P | O |
| QL-06 | Performance measurement | Reads and diagnoses client performance metrics, traces, bundle composition, and runtime bottlenecks. | L | L | L | O |
| QL-07 | Performance-budget management | Defines and enforces thresholds for payload, rendering, interaction, and resource cost. | L | L | L | O |
| QL-08 | Resilience and offline design | Handles intermittent connectivity, retries, queues, persistence, stale data, and graceful degradation. | P | P | L | O |
| QL-09 | Observability instrumentation | Produces meaningful logs, errors, traces, user context, and dashboards while protecting privacy. | L | L | L | O |
| QL-10 | Client-side security | Prevents common client exposure through secure rendering, dependency hygiene, token handling, and safe browser APIs. | L | L | L | O |
| QL-11 | Privacy-by-design implementation | Minimizes collection, supports consent and retention requirements, and avoids exposing sensitive data in telemetry. | P | P | L | O |
| QL-12 | Incident participation | Triage defects, communicate impact, mitigate safely, learn from failure, and prevent recurrence. | P | L | L | O |

### 12. Measurement, optimization, and operational learning

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| ME-01 | North-star and input metric selection | Defines a meaningful outcome metric and controllable leading indicators. | O | P | L | P |
| ME-02 | Measurement-plan design | Maps events, properties, identity, consent, funnel stages, ownership, and QA to a question. | O | P | L | O |
| ME-03 | Event-schema design | Uses consistent event names, properties, versioning, data types, and semantics across product surfaces. | P | P | L | O |
| ME-04 | Instrumentation implementation | Implements analytics events correctly without degrading performance or privacy. | L | L | L | O |
| ME-05 | Funnel analysis | Locates loss, delay, and variation through a multi-step journey. | O | P | L | P |
| ME-06 | Cohort analysis | Compares behavior by acquisition, tenure, role, plan, device, or exposure period. | P | P | — | P |
| ME-07 | Segmentation | Finds materially different needs or outcomes across meaningful populations without overfitting. | P | O | L | P |
| ME-08 | Experiment analysis | Interprets experiment results, validity limits, novelty effects, and decision implications. | O | P | L | P |
| ME-09 | Qual-quant triangulation | Uses behavioral data and human evidence together to explain what happened and why. | O | O | L | P |
| ME-10 | Product-health reporting | Communicates adoption, success, quality, risk, and learning to the right audience. | O | P | L | P |
| ME-11 | Continuous-discovery operating rhythm | Establishes recurring evidence collection, synthesis, decision, and follow-up loops. | O | O | L | P |
| ME-12 | Value-realization review | Assesses whether a released change created expected value and what must change next. | O | P | L | P |

### 13. Collaboration, leadership, governance, and professional judgment

Human-centred design is an end-to-end lifecycle responsibility, not a single design phase. ISO 9241-210 explicitly frames it as principles and activities for interactive systems across the development lifecycle.[4] Usability heuristics are useful review lenses, but they are broad rules of thumb rather than a substitute for observed user behavior.[5]

| ID | Discrete skill | Observable evidence | Product | UX | UI | Front-end Arch. |
|---|---|---|---|---|---|---|
| LG-01 | Stakeholder alignment | Identifies decision-makers, incentives, conflict, and needed commitments; creates shared clarity. | O | O | P | O |
| LG-02 | Facilitation | Runs inclusive working sessions that produce decisions, artifacts, owners, and next steps. | O | O | P | O |
| LG-03 | Design critique | Gives and receives evidence-based critique focused on intent, risk, and user outcome rather than taste. | O | O | O | P |
| LG-04 | Technical critique | Evaluates architectural proposals for boundaries, risk, simplicity, cost, and evolvability. | L | L | L | O |
| LG-05 | Narrative communication | Explains a recommendation through context, evidence, decision, trade-off, and next action. | O | O | O | O |
| LG-06 | Executive communication | Compresses complexity into decisions, consequence, confidence, and required support. | O | P | P | O |
| LG-07 | Influence without authority | Builds trust, frames choices, and advances decisions across functions without positional control. | O | O | P | O |
| LG-08 | Conflict resolution | Surfaces disagreement constructively, separates facts from preferences, and closes on a documented decision. | O | O | P | O |
| LG-09 | Estimation and capacity reasoning | Frames scope, uncertainty, sequencing, dependencies, and trade-offs realistically. | P | L | L | O |
| LG-10 | Risk management | Identifies product, usability, accessibility, security, dependency, and delivery risks early. | O | P | P | O |
| LG-11 | Ethical decision-making | Recognizes manipulation, discrimination, privacy harm, unsafe automation, and conflicts of interest. | O | O | O | O |
| LG-12 | AI-governance collaboration | Establishes review, auditability, data boundaries, human accountability, and monitoring for AI-enabled experiences. | O | P | L | O |

## What each senior role must be able to do

The table below is the practical hiring and career-planning version of the taxonomy. “Lead” means the role should set direction and be trusted to make the call. “Co-own” means the role must work directly in the skill and help decide; “fluency” means it must be understood well enough to review and collaborate.

| Capability area | Product Design | UX Design | UI Design | Front-End Architecture |
|---|---|---|---|---|
| Customer and business problem | **Lead** | Co-own | Fluency | Fluency |
| User research and synthesis | Co-own | **Lead** | Fluency | Fluency |
| IA, task flows, and interaction states | **Lead** | **Lead** | Co-own | Co-own |
| Visual design and interface expression | **Lead** | Co-own | **Lead** | Co-own |
| Content, service, and AI workflow | **Lead** | Co-own | Fluency | Co-own |
| Accessibility | Co-own | Co-own | Co-own | **Lead implementation** |
| Design system | Co-own | Co-own | **Lead visual layer** | **Lead technical layer** |
| Prototype, specification, and design QA | **Lead** | **Lead** | **Lead** | **Lead technical feasibility** |
| Browser/platform and implementation | Fluency | Fluency | Working fluency | **Lead** |
| Application architecture and data/state | Fluency | Fluency | Fluency | **Lead** |
| Quality, performance, resilience, security | Fluency | Fluency | Fluency | **Lead** |
| Product measurement and learning | **Lead** | Co-own | Fluency | Co-own |
| Cross-functional leadership | **Lead** | **Lead research practice** | Lead visual practice | **Lead technical practice** |

## How to use this as a career or team rubric

### 1. Assess depth, not checkbox coverage

For every applicable skill, score current evidence as **0 = unexposed**, **1 = assisted**, **2 = independent**, **3 = sets standard**, or **4 = evolves the discipline**. Require examples: an artifact, the decision it enabled, a constraint encountered, the result, and what changed afterward. A polished mockup or a GitHub contribution by itself is not enough evidence of senior capability.

### 2. Build four “spines,” not four shallow personas

A high-leverage individual at the intersection of these roles typically needs the following shape:

| Spine | Depth target | Why it matters |
|---|---|---|
| **Product and customer judgment** | Product Design + UX: 3–4 | Prevents elegant solutions to low-value problems. |
| **Experience and interface craft** | UX + UI: 3–4 | Turns insight into comprehensible, usable, and persuasive experiences. |
| **System thinking** | Design systems + Front-end Architecture: 3–4 in one layer, 2–3 in the adjacent layer | Prevents one-off screens and makes quality repeatable. |
| **Operational learning** | Measurement + delivery + governance: 3–4 | Connects shipped work to outcomes, reliability, and iteration. |

For a **design leader with front-end fluency**, the strongest profile is generally Product/UX at 4, UI/System Design at 3–4, and architecture at 2–3. For a **front-end architect with strong product instincts**, flip the depth: architecture/platform at 4, product/experience at 2–3, and visual craft at 1–2. Trying to market both as equal 4s is usually less credible than showing a clear primary spine plus unusually strong adjacencies.

### 3. Use one integrated case study per competency cluster

The most persuasive portfolio or leadership narrative does not create 156 separate claims. It demonstrates clusters. A data-dense B2B workflow redesign, for example, can prove domain modeling, task analysis, IA, form design, visual hierarchy, accessibility, state design, component APIs, analytics instrumentation, and outcome review. The story should show the chain: **evidence → decision → implementation constraints → shipped behavior → measured outcome**.

## Priority sequence for someone bridging design and front-end architecture

If the objective is to operate credibly at the intersection of product management, UX, UI, AI automation, and operations, sequence capability-building in this order:

1. **Master product framing, discovery, task flows, and stateful interaction design.** These skills determine whether the team is solving the right problem and whether the workflow can actually be completed.
2. **Become exceptionally strong in data-dense UI, accessibility, and design systems.** This is the high-value intersection for enterprise B2B products and produces leverage across teams.
3. **Gain implementation fluency in semantic HTML, modern CSS, TypeScript, state, data fetching, testing, performance, and observability.** The goal is not to replace engineering; it is to make architectural conversations and design decisions technically real.
4. **Develop AI interaction and human-in-the-loop workflow design.** Focus on uncertainty, override, provenance, evaluation, escalation, and operational accountability rather than generic chatbot patterns.
5. **Close the loop with instrumentation and operating rhythms.** A thought leader in this space should demonstrate how design quality, automation quality, product outcomes, and operational metrics reinforce one another.

## Common gaps to avoid

| Gap | Why it damages senior credibility | Corrective practice |
|---|---|---|
| Treating UI design as screen styling | Produces attractive but incoherent flows and fragile visual decisions. | Design states, content priority, responsive rules, and accessibility with every screen. |
| Treating UX as a research department | Research that does not change a decision becomes theater. | Attach every study to a named decision and follow through after release. |
| Treating product design as UX + UI | Ignores value, feasibility, sequencing, and measurable outcomes. | Frame opportunities, constraints, hypotheses, and outcomes before solution exploration. |
| Treating front-end architecture as framework choice | Frameworks change; boundaries, state ownership, reliability, and system evolution endure. | Write and revisit architecture decisions tied to product risk and change cost. |
| Treating design systems as a component library | Components without token, contribution, documentation, adoption, and governance models do not scale. | Run the system as a product with users, roadmap, service levels, and adoption metrics. |
| Adding accessibility at the end | Late fixes are costly and routinely miss interaction and semantic problems. | Make accessibility acceptance criteria part of discovery, design, code review, and QA. |
| Building AI features without operational controls | Can create unsafe automation, opaque results, costly errors, and loss of user trust. | Design transparent confidence, verification, override, escalation, audit, and rollback paths. |

## References

[1]: https://www.w3.org/TR/WCAG22/ "Web Content Accessibility Guidelines (WCAG) 2.2"
[2]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML "HTML: A good basis for accessibility"
[3]: https://www.designtokens.org/tr/drafts/format/ "Design Tokens Format Module 2025.10"
[4]: https://www.iso.org/standard/77520.html "ISO 9241-210:2019 Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems"
[5]: https://www.nngroup.com/articles/ten-usability-heuristics/ "10 Usability Heuristics for User Interface Design"
