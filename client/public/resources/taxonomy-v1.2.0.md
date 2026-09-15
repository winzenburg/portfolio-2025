# UX / Product / UI / Front-End Architecture Competency Taxonomy (v1.2.0)
176 discrete skills in 14 domains. Refined 2026-09-15 from Ryan Winzenburg's taxonomy of 2026-09-10. See CHANGELOG.md for what changed.

**Depth:** O = deep specialist (expected to set the standard) · P = independent practitioner · L = working literacy (can review and make trade-offs) · — = outside normal scope.
**Lead:** the one role that is accountable, breaks ties, and signs off. Several roles can be O; only one leads.
**Evidence scale for audits:** 0 unexposed · 1 assisted · 2 independent · 3 sets the standard · 4 evolves the discipline. Rough mapping: L ≈ 1–2, P ≈ 2–3, O ≈ 3–4.

## Role boundaries
| Discipline | Primary accountability | Typical outputs | Must not be reduced to |
|---|---|---|---|
| **UI Design** | Visual hierarchy, visual language, stateful components, legible presentation | High-fidelity screens, component specs, visual QA, responsive variants | "Making it pretty" or operating Figma |
| **UX Design** | Evidence about users, information structure, task success, interaction behavior, usability | Research plans, journey maps, IA, flows, wireframes, test findings | Wireframing or interview facilitation alone |
| **Product Design** | End-to-end product outcomes balancing customer needs, business goals, and technical reality | Problem framing, concepts, prototypes, specs, outcome reviews | UX plus UI as sequential handoffs |
| **Front-End Architecture** | The client-side technical system: composition, data, state, runtime quality, accessibility implementation, change resilience | ADRs, component APIs, platform conventions, performance budgets, technical roadmaps | Coding isolated screens or choosing a framework |

A **skill** is an observable capability that produces a repeatable outcome. Tools (Figma, React, Storybook, Cursor, Grok) are environments, not skills. Traits ("strategic", "detail-oriented") only count when shown through concrete behavior.

## 1. Product framing, business, and systems thinking (PB) → `competency-product-framing`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| PB-01 | Problem framing | Converts an ambiguous request into a bounded problem statement with constraints and desired change. | O | P | L | P | Product |
| PB-02 | Outcome definition | States customer, business, and operational outcomes separately from feature output. | O | P | L | P | Product |
| PB-03 | Assumption mapping | Makes value, usability, feasibility, and viability assumptions explicit and testable. | O | O | L | P | Product |
| PB-04 | Opportunity sizing | Uses qualitative and quantitative evidence to judge materiality of a problem. | O | P | L | L | Product |
| PB-05 | Value-proposition design | Articulates audience, job, differentiated benefit, and proof. | O | P | L | L | Product |
| PB-06 | Jobs-to-be-done analysis | Identifies functional, social, and emotional jobs plus switching triggers. | P | O | L | L | UX |
| PB-07 | Domain-model comprehension | Understands the entities, rules, vocabulary, and exceptions of a customer domain. | O | O | P | O | Product |
| PB-08 | Systems mapping | Maps actors, dependencies, feedback loops, and operational handoffs around the experience. | O | P | L | O | Product |
| PB-09 | Product strategy translation | Converts a strategy into experience principles, bets, and decision criteria. | O | P | L | P | Product |
| PB-10 | Prioritization | Applies a transparent method to sequence work under capacity and risk constraints. | O | L | L | P | Product |
| PB-11 | Experiment design | Specifies a falsifiable hypothesis, population, treatment, measure, and decision threshold. | O | P | L | P | Product |
| PB-12 | Trade-off articulation | Explains customer, business, design, technical, legal, and operational consequences of a choice. | O | P | P | O | Product |

## 2. User research and evidence synthesis (RE) → `competency-user-research`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| RE-01 | Research planning | Selects a method, participant profile, sample, timeline, and decision it will inform. | P | O | L | L | UX |
| RE-02 | Stakeholder interview design | Extracts context, constraints, incentives, and unresolved decisions without treating opinion as evidence. | O | O | L | P | Product |
| RE-03 | Generative interview moderation | Elicits past behavior, context, language, and unmet needs without leading participants. | P | O | L | — | UX |
| RE-04 | Contextual inquiry | Observes work in situ and documents tools, workarounds, interruptions, and environmental constraints. | P | O | L | L | UX |
| RE-05 | Task analysis | Decomposes a user goal into actions, decisions, inputs, variations, and failure points. | P | O | P | P | UX |
| RE-06 | Survey design | Creates unbiased questions, response structures, and sampling logic appropriate to the decision. | P | P | L | L | UX |
| RE-07 | Quantitative behavior analysis | Uses event, funnel, cohort, and segmentation data without confusing correlation and cause. | P | P | L | P | Product |
| RE-08 | Diary-study design | Captures longitudinal behavior, reflections, and changes in context. | L | P | — | — | UX |
| RE-09 | Usability-test moderation | Runs task-based sessions, probes behavior, and avoids coaching participants. | P | O | P | L | UX |
| RE-10 | Research synthesis | Clusters observations into findings, confidence levels, tensions, and implications. | P | O | L | L | UX |
| RE-11 | Insight communication | Communicates evidence through concise narratives, artifacts, clips, and direct implications. | O | O | P | L | UX |
| RE-12 | Research-repository stewardship | Makes evidence findable, traceable, current, and reusable across teams. | P | P | L | L | UX |

## 3. Information architecture and interaction design (IA) → `competency-ia-interaction`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| IA-01 | Content inventory | Enumerates current content, data, formats, owners, status, and duplication. | P | O | P | P | UX |
| IA-02 | Taxonomy design | Creates clear categories, labels, relationships, and inclusion rules for information. | P | O | P | P | UX |
| IA-03 | Navigation design | Organizes global, local, contextual, and utility navigation around user goals. | P | O | P | P | UX |
| IA-04 | Findability design | Designs search, browse, filters, sort, facets, and zero-result recovery. | P | O | P | P | UX |
| IA-05 | User-flow design | Defines a coherent sequence from entry through completion, exception, and follow-up. | O | O | P | P | UX |
| IA-06 | Task-flow optimization | Removes avoidable steps, decisions, memory demands, and context switches. | O | O | P | P | UX |
| IA-07 | Interaction-state design | Specifies default, loading, empty, error, success, permission, disabled, and destructive states. | O | O | O | O | UX |
| IA-08 | Form design | Designs field grouping, validation, dependencies, defaults, input modes, and recovery. | P | O | P | O | UX |
| IA-09 | Error-prevention design | Uses constraints, progressive disclosure, sensible defaults, confirmation, and undo. | P | O | P | O | UX |
| IA-10 | Feedback and status design | Makes system status, latency, progress, and outcome legible at the point of need. | P | O | O | O | UX |
| IA-11 | Interaction-pattern selection | Selects patterns that match user intent, risk, frequency, device, and platform conventions. | O | O | O | P | UX |
| IA-12 | Service-blueprint translation | Translates an existing service blueprint into screen-level states, handoffs, and failure handling the product must support. | P | P | L | P | UX |
| IA-13 | Platform-convention fluency | Applies iOS, Android, and web conventions for navigation, gestures, controls, and system settings; deviates only with a stated reason. | P | O | O | P | UX |

## 5. Content design, service design, and AI interaction design (CX) → `competency-content-service-ai`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| CX-01 | UX writing | Produces concise, task-oriented labels, instructions, status, and error content. | P | O | P | L | UX |
| CX-02 | Content hierarchy | Determines what users need now, later, or never; structures for scanning and action. | P | O | P | L | UX |
| CX-03 | Terminology governance | Maintains a controlled vocabulary that matches user language and domain semantics. | P | O | P | P | UX |
| CX-04 | Error-message design | States the problem, cause when useful, recovery action, and durable support path. | P | O | P | P | UX |
| CX-05 | Empty-state design | Gives clear orientation, value, next action, and legitimate reason when no action exists. | P | O | O | P | UX |
| CX-06 | Notification design | Sets event triggers, audience, channel, timing, priority, fatigue protections, and user preferences; defines delivery requirements for engineering. | P | O | P | P | UX |
| CX-07 | Onboarding design | Designs progressive learning, setup, activation, and return paths without forcing needless tours. | O | O | P | P | Product |
| CX-08 | Conversational interaction design | Defines turn-taking, intent repair, confirmation, memory boundaries, and exit paths. | P | O | P | P | UX |
| CX-09 | AI uncertainty communication | Represents confidence, source/provenance, limitations, and recommended verification in AI outputs. | O | O | P | O | Product |
| CX-10 | Human-in-the-loop workflow design | Assigns automation, review, escalation, override, and accountability to the right actor. | O | P | L | O | Product |
| CX-11 | Service-design orchestration | Creates the cross-channel service blueprint spanning people, processes, policies, and technology, including backstage failure modes. | P | P | L | P | Product |
| CX-12 | Localization-ready design | Anticipates language expansion, bidirectionality, locale formats, cultural conventions, and translation workflow. | P | P | P | O | FE Arch |
| CX-13 | AI evaluation design | Defines task-representative eval sets, quality rubrics, failure taxonomies, and release thresholds for AI-generated output; reruns them on every model or prompt change. | O | P | L | O | Product |

## 4. UI design and visual systems (UI) → `competency-ui-visual`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| UI-01 | Visual hierarchy | Directs attention using contrast, scale, placement, grouping, and motion. | P | P | O | P | UI |
| UI-02 | Layout composition | Creates balanced, purposeful compositions with grid, alignment, rhythm, and responsive intent. | P | P | O | P | UI |
| UI-03 | Typography systems | Selects type scales, roles, weights, line lengths, and responsive behavior for legibility. | P | P | O | P | UI |
| UI-04 | Color-system design | Establishes semantic color roles, contrast, states, dark-mode behavior, and theming logic. | P | P | O | P | UI |
| UI-05 | Spacing and sizing systems | Defines scalable spatial relationships rather than arbitrary per-screen measurements. | P | P | O | O | UI |
| UI-06 | Iconography direction | Chooses or creates icons with clear metaphor, optical balance, labeling strategy, and accessibility. | L | P | O | P | UI |
| UI-07 | Visual affordance design | Makes controls, hierarchy, interactivity, and action consequence perceptible. | P | O | O | P | UI |
| UI-08 | Responsive visual adaptation | Preserves priority and comprehension across viewports and input modes. | P | P | O | O | UI |
| UI-09 | Data-display design | Chooses tables, charts, cards, maps, and annotations that support comparison and decisions. | P | P | O | P | UI |
| UI-10 | Data-dense interface design | Handles scanning, density, grouping, pinned context, exceptions, and progressive disclosure. | O | O | O | O | Product |
| UI-11 | Brand-to-product translation | Applies brand expression without damaging usability, density, or accessibility. | P | P | O | P | UI |
| UI-12 | Motion and transition design | Specifies motion only where it explains change or marks a brand moment: duration, easing or spring, interruptibility, continuity, reduced-motion behavior, and implementation intent. | P | P | O | P | UI |
| UI-13 | Visual direction | Defines a distinctive, justified aesthetic point of view (type pairing, color mood, imagery and illustration style, composition) and sources imagery with clear licensing; avoids generic defaults. | P | L | O | L | UI |
| UI-14 | Interface polish | Resolves craft details: optical alignment, hover/press/focus states, skeletons, elevation and shadow scale, tabular numerals, type cleanup, and consistent micro-spacing. | L | P | O | O | UI |

## 6. Accessibility, inclusion, and responsible experience design (AX) → `competency-accessibility`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| AX-01 | Accessibility requirements definition | Converts applicable standards, policy, and risk into testable experience requirements. | P | P | P | O | FE Arch |
| AX-02 | Inclusive research recruitment | Includes relevant disability, age, language, literacy, device, and context diversity in research. | P | O | L | L | UX |
| AX-03 | Keyboard interaction design | Defines logical focus order, visible and unobscured focus (WCAG 2.4.7, 2.4.11), shortcuts, no keyboard traps, escape behavior, and reachability. | P | O | P | O | UX |
| AX-04 | Screen-reader interaction design | Specifies meaningful names, roles, states, relationships, announcements, and reading order. | P | O | P | O | UX |
| AX-05 | Semantic HTML application | Chooses native semantic elements before implementing custom widgets or ARIA. | L | P | P | O | FE Arch |
| AX-06 | Color and non-color signaling | Ensures color is not the only carrier of state, priority, category, or error. | P | P | O | P | UI |
| AX-07 | Contrast verification | Tests text (WCAG 1.4.3), non-text controls and focus indicators (1.4.11), and every interactive state against the relevant thresholds. | P | P | O | P | UI |
| AX-08 | Accessible-form design | Provides persistent labels, instructions, error association, validation timing, input purpose, no redundant entry (WCAG 3.3.7), and accessible authentication (3.3.8). | P | O | P | O | UX |
| AX-09 | Accessible-media design | Provides captions, transcripts, audio description considerations, and controllable media behavior. | L | P | P | P | UX |
| AX-10 | Cognitive-accessibility design | Reduces unnecessary complexity, memory load, ambiguity, surprise, and time pressure. | P | O | P | P | UX |
| AX-11 | Touch and mobile accessibility | Accounts for target size (WCAG 2.5.8, 24×24 CSS px minimum), dragging alternatives (2.5.7), motion, orientation, zoom/reflow, device settings, and alternate inputs. | P | P | O | O | UI |
| AX-12 | Accessibility test and remediation | Combines automated checks, keyboard testing, assistive-technology checks, and human judgment into actionable fixes. | P | P | P | O | FE Arch |

## 7. Design systems and design operations (DS) → `competency-design-systems`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| DS-01 | System scope definition | Defines the products, platforms, users, adoption goals, and non-goals of a system. | P | P | O | O | UI |
| DS-02 | Component anatomy design | Defines stable parts, slots, behaviors, states, and content rules for a component. | P | P | O | O | UI |
| DS-03 | Component API design | Designs composable, discoverable, constrained component props and events without leaking implementation detail. | L | P | P | O | FE Arch |
| DS-04 | Design-token architecture | Creates primitive, semantic, and component tokens with clear aliasing and theming rules. | P | P | O | O | FE Arch |
| DS-05 | Token naming | Uses names that express purpose, scope, and state rather than present implementation values. | P | P | O | O | UI |
| DS-06 | Pattern-library curation | Distinguishes reusable patterns from one-off solutions and maintains a coherent catalog. | P | P | O | O | UI |
| DS-07 | System documentation | Documents usage, anatomy, do/don't guidance, accessibility, content, code, and change status. | P | P | O | O | UI |
| DS-08 | Contribution-model design | Defines proposal, review, implementation, release, and ownership mechanisms for changes. | P | P | O | O | UI |
| DS-09 | Visual-regression governance | Establishes baselines, diff review, exception criteria, and remediation ownership. | L | L | P | O | FE Arch |
| DS-10 | Cross-platform consistency | Maps intent across web, mobile, email, native, and brand contexts without forcing identical controls. | P | P | O | O | UI |
| DS-11 | System adoption enablement | Builds training, migration support, champions, examples, and measurement to drive use. | P | P | O | P | UI |
| DS-12 | Design-debt management | Identifies, sizes, sequences, and funds inconsistency and maintainability reduction. | O | P | O | O | Product |
| DS-13 | Design-system extraction | Derives tokens, type scale, components, and patterns from an existing product or site into a starter system, limited to owned, client, or licensed sources. | L | P | O | O | UI |

## 8. Prototyping, specification, and design-to-code collaboration (PR) → `competency-prototyping-handoff`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| PR-01 | Low-fidelity prototyping | Uses rough artifacts to test structure, flow, and language before visual polish. | O | O | P | L | UX |
| PR-02 | High-fidelity prototyping | Models visual states, interaction, feedback, and responsive intent at decision-ready fidelity. | O | O | O | P | UI |
| PR-03 | Prototype selection | Chooses paper, clickable, coded, data-backed, or service prototype according to the risk being tested. | O | O | P | P | UX |
| PR-04 | Prototype realism calibration | Includes enough realistic data, latency, content, and errors to avoid false-positive learning. | P | O | P | O | UX |
| PR-05 | Interaction specification | Documents triggers, state transitions, rules, animation, input behavior, and exceptions. | P | O | O | O | UX |
| PR-06 | Responsive specification | Specifies breakpoints or container behavior, reflow, priority changes, and density adjustments. | P | P | O | O | UI |
| PR-07 | Edge-case specification | Defines empty, loading, error, permission, long-content, unusual-data, and degraded-mode behavior. | O | O | O | O | Product |
| PR-08 | Acceptance-criteria writing | Expresses user-visible requirements and observable conditions for completion. | O | P | P | O | Product |
| PR-09 | Design handoff | Supplies intent, system references, state rules, assets, and examples without pretending screenshots are specifications. | P | P | O | O | UI |
| PR-10 | Engineer-design pairing | Resolves ambiguity live, compares alternatives, and protects outcome while adapting implementation. | O | O | P | O | FE Arch |
| PR-11 | Design QA | Detects and prioritizes deviations across function, layout, content, states, accessibility, and responsiveness. | P | P | O | O | UI |
| PR-12 | Implementation feedback incorporation | Updates design artifacts after discovery of real platform constraints or new learning. | O | O | O | O | Product |
| PR-13 | Rendered-UI verification | Checks the built UI in a real browser across viewports, themes, and states with screenshots; fixes, re-verifies, and submits changes for review. | L | P | O | O | FE Arch |

## 9. Front-end foundations and browser-platform fluency (FE) → `competency-frontend-foundations`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| FE-01 | HTML document structure | Builds a correct document outline, landmarks, metadata, forms, and content hierarchy. | L | P | P | O | FE Arch |
| FE-02 | CSS cascade reasoning | Predicts inheritance, specificity, layers, scope, and resulting style behavior. | L | L | P | O | FE Arch |
| FE-03 | Modern layout implementation | Uses Grid, Flexbox, intrinsic sizing, container-aware behavior, and logical properties appropriately. | L | P | P | O | FE Arch |
| FE-04 | Responsive implementation | Implements fluid layouts, appropriate breakpoints, media features, and viewport behavior. | L | P | P | O | FE Arch |
| FE-05 | JavaScript and TypeScript fluency | Uses types, data transformation, async patterns, modules, and error handling safely. | L | L | L | O | FE Arch |
| FE-06 | DOM and event-model reasoning | Handles propagation, delegation, focus, input, pointer, keyboard, and lifecycle interactions correctly. | L | P | P | O | FE Arch |
| FE-07 | Browser API selection | Chooses browser capabilities such as storage, observers, workers, history, clipboard, and media APIs responsibly. | — | L | L | O | FE Arch |
| FE-08 | Semantic component implementation | Prefers native elements and exposes accessible semantics when custom behavior is necessary. | L | P | P | O | FE Arch |
| FE-09 | Client-side routing | Implements route structure, deep links, parameters, guards, navigation state, and recovery. | L | L | L | O | FE Arch |
| FE-10 | Framework lifecycle knowledge | Understands rendering, effects, hydration, reactivity, suspense, and cleanup in the chosen stack. | — | L | L | O | FE Arch |
| FE-11 | Package and dependency literacy | Evaluates package purpose, quality, license, maintenance, bundle cost, and security posture. | — | L | L | O | FE Arch |
| FE-12 | Build-tool fluency | Configures development, test, build, lint, formatting, environment, and deployment workflows. | — | L | L | O | FE Arch |
| FE-13 | Motion implementation | Implements animation with compositor-friendly properties, interruptible timing, scroll-driven techniques, and reduced-motion support inside performance budgets. | — | L | P | O | FE Arch |
| FE-14 | Immersive graphics | Uses Canvas, SVG, WebGL/3D, and physics libraries only when they serve the experience, with fallbacks, performance limits, and accessible alternatives. | — | L | P | O | FE Arch |

## 10. Front-end architecture and application systems (AR) → `competency-frontend-architecture`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| AR-01 | Application decomposition | Separates pages, features, domains, shared UI, utilities, and platform layers with clear boundaries. | L | L | L | O | FE Arch |
| AR-02 | Component-composition strategy | Chooses local versus shared components and controls abstraction before reuse becomes accidental coupling. | L | P | P | O | FE Arch |
| AR-03 | State-model design | Defines server, client, URL, form, cache, and transient UI state with a single clear owner. | L | P | L | O | FE Arch |
| AR-04 | Data-fetching architecture | Handles caching, invalidation, loading, errors, retry, pagination, optimistic updates, and consistency. | L | L | L | O | FE Arch |
| AR-05 | API contract collaboration | Designs client needs, payload shapes, versioning, error semantics, and backwards-compatibility with API teams. | P | L | L | O | FE Arch |
| AR-06 | Rendering-strategy selection | Chooses client, server, static, streaming, or hybrid rendering based on latency, SEO, personalization, and operations. | L | L | L | O | FE Arch |
| AR-07 | Authentication and authorization UX implementation | Implements identity, session, role, permission, expiry, reauthentication, and access-denied states safely. | P | P | P | O | FE Arch |
| AR-08 | Feature-flag architecture | Supports targeted rollout, kill switches, experiment assignment, configuration, and flag cleanup. | P | L | L | O | FE Arch |
| AR-09 | Error-boundary and recovery architecture | Contains failures, preserves useful context, supports retry, and avoids blank-screen failure modes. | L | P | P | O | FE Arch |
| AR-10 | Codebase modularity | Keeps code independently understandable, testable, deployable, and changeable as product complexity grows. | — | L | L | O | FE Arch |
| AR-11 | Architectural decision records | Captures context, alternatives, decision, consequences, and revisit triggers for consequential choices. | L | L | L | O | FE Arch |
| AR-12 | Technical roadmapping | Sequences platform investments, migrations, risk reduction, and capability building against product strategy. | P | L | L | O | FE Arch |

## 11. Quality engineering, performance, reliability, privacy, and security (QL) → `competency-quality-reliability`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| QL-01 | Unit-test design | Tests important logic and behavior with isolated, maintainable cases. | — | L | L | O | FE Arch |
| QL-02 | Integration-test design | Verifies components, state, data, and services working together at meaningful seams. | L | L | L | O | FE Arch |
| QL-03 | End-to-end test design | Automates critical user journeys with stable fixtures, assertions, and failure diagnostics. | P | P | L | O | FE Arch |
| QL-04 | Accessibility-test automation | Integrates automated scanning while recognizing where manual evaluation is required. | L | P | P | O | FE Arch |
| QL-05 | Cross-browser and device testing | Selects and validates browsers, OS, viewport, input, and assistive-technology coverage by risk. | L | P | P | O | FE Arch |
| QL-06 | Performance measurement | Reads and diagnoses field and lab performance data (Core Web Vitals: LCP, INP, CLS), traces, bundle composition, and runtime bottlenecks. | L | L | L | O | FE Arch |
| QL-07 | Performance-budget management | Defines and enforces thresholds for script and style payload, images and fonts, rendering, interaction, and animation cost. | L | L | L | O | FE Arch |
| QL-08 | Resilience and offline design | Handles intermittent connectivity, retries, queues, persistence, stale data, and graceful degradation. | P | P | L | O | FE Arch |
| QL-09 | Observability instrumentation | Produces meaningful logs, errors, traces, user context, and dashboards while protecting privacy. | L | L | L | O | FE Arch |
| QL-10 | Client-side security | Prevents common client exposure through secure rendering, dependency hygiene, token handling, and safe browser APIs. | L | L | L | O | FE Arch |
| QL-11 | Privacy-by-design implementation | Minimizes collection, supports consent and retention requirements, and avoids exposing sensitive data in telemetry. | P | P | L | O | FE Arch |
| QL-12 | Incident participation | Triages defects, communicates impact, mitigates safely, runs blameless review, and prevents recurrence. | P | L | L | O | FE Arch |

## 12. Measurement, optimization, and operational learning (ME) → `competency-measurement`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| ME-01 | North-star and input metric selection | Defines a meaningful outcome metric and controllable leading indicators. | O | P | L | P | Product |
| ME-02 | Measurement-plan design | Maps events, properties, identity, consent, campaign attribution (UTM), funnel stages, ownership, and QA to a question. | O | P | L | O | Product |
| ME-03 | Event-schema design | Uses consistent event names, properties, versioning, data types, and semantics across product surfaces. | P | P | L | O | FE Arch |
| ME-04 | Instrumentation implementation | Implements analytics events correctly without degrading performance or privacy. | L | L | L | O | FE Arch |
| ME-05 | Funnel analysis | Locates loss, delay, and variation through a multi-step journey. | O | P | L | P | Product |
| ME-06 | Cohort analysis | Compares behavior by acquisition, tenure, role, plan, device, or exposure period. | P | P | — | P | Product |
| ME-07 | Segmentation | Finds materially different needs or outcomes across meaningful populations without overfitting. | P | O | L | P | UX |
| ME-08 | Experiment analysis | Interprets experiment results, validity limits, novelty effects, and decision implications. | O | P | L | P | Product |
| ME-09 | Qual-quant triangulation | Uses behavioral data and human evidence together to explain what happened and why. | O | O | L | P | UX |
| ME-10 | Product-health reporting | Communicates adoption, success, quality, risk, and learning to the right audience. | O | P | L | P | Product |
| ME-11 | Continuous-discovery operating rhythm | Establishes recurring evidence collection, synthesis, decision, and follow-up loops. | O | O | L | P | Product |
| ME-12 | Value-realization review | Assesses whether a released change created expected value and what must change next. | O | P | L | P | Product |

## 14. Growth, conversion, and marketing surfaces (GM) → `competency-growth-conversion`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| GM-01 | Landing-page architecture | Structures a page around one audience, one promise, proof, objections, and one primary action. | O | P | O | P | Product |
| GM-02 | Conversion copywriting | Writes headlines, value propositions, CTAs, and objection handling in customer language; distinct from task-focused UX writing (CX-01). | O | P | L | — | Product |
| GM-03 | Pricing-page design | Presents plans, comparison, billing options, FAQs, and the enterprise path so buyers can choose without a sales call. | O | P | O | L | Product |
| GM-04 | Upgrade and paywall design | Places upgrade moments at points of realized value, previews paid value, and never blocks core work or hides the free path. | O | O | P | P | Product |
| GM-05 | Proof design | Uses real product UI, workflow demos, verifiable metrics, logos, and attributable testimonials as evidence. | O | P | O | P | Product |
| GM-06 | Ethical persuasion design | Applies behavioral principles (clarity, anchoring, social proof, defaults) and rejects deceptive patterns such as fake scarcity, confirmshaming, and hidden costs. | O | O | P | L | Product |
| GM-07 | Conversion experiment program | Maintains a hypothesis backlog, prioritizes tests, and runs experiments on acquisition and upgrade surfaces; analysis per ME-08. | O | P | L | P | Product |
| GM-08 | Search and AI-answer discoverability | Ships semantic structure, metadata, structured data, crawlable rendering, fast media, and citable content for search engines and AI answers (SEO/GEO). | P | P | L | O | FE Arch |
| GM-09 | Brand strategy translation | Turns positioning, voice, and identity rules into site and product guidance, in partnership with brand owners; application in product stays UI-11. | O | P | O | L | Product |
| GM-10 | Launch and early-traction design | Designs first-user channels, activation paths, and feedback loops for zero-to-one products. | O | P | L | L | Product |

## 13. Collaboration, leadership, governance, and professional judgment (LG) → `competency-leadership-governance`

| ID | Skill | Observable evidence | Product | UX | UI | FE Arch | Lead |
|---|---|---|---|---|---|---|---|
| LG-01 | Stakeholder alignment | Identifies decision-makers, incentives, conflict, and needed commitments; creates shared clarity. | O | O | P | O | Product |
| LG-02 | Facilitation | Runs inclusive working sessions that produce decisions, artifacts, owners, and next steps. | O | O | P | O | UX |
| LG-03 | Design critique | Gives and receives evidence-based critique focused on intent, risk, and user outcome rather than taste; can run a structured pressure-test of a plan. | O | O | O | P | UX |
| LG-04 | Technical critique | Evaluates architectural proposals for boundaries, risk, simplicity, cost, and evolvability. | L | L | L | O | FE Arch |
| LG-05 | Narrative communication | Explains a recommendation through context, evidence, decision, trade-off, and next action. | O | O | O | O | Product |
| LG-06 | Executive communication | Compresses complexity into decisions, consequence, confidence, and required support. | O | P | P | O | Product |
| LG-07 | Influence without authority | Builds trust, frames choices, and advances decisions across functions without positional control. | O | O | P | O | Product |
| LG-08 | Conflict resolution | Surfaces disagreement constructively, separates facts from preferences, and closes on a documented decision. | O | O | P | O | Product |
| LG-09 | Estimation and capacity reasoning | Frames scope, uncertainty, sequencing, dependencies, and trade-offs realistically. | P | L | L | O | FE Arch |
| LG-10 | Risk management | Identifies product, usability, accessibility, security, dependency, and delivery risks early. | O | P | P | O | Product |
| LG-11 | Ethical decision-making | Recognizes and blocks deceptive patterns, discrimination, privacy harm, unsafe automation, and conflicts of interest; escalates when needed. | O | O | O | O | Product |
| LG-12 | AI-governance collaboration | Establishes review, auditability, data boundaries, human accountability, and monitoring for AI-enabled experiences. | O | P | L | O | Product |
| LG-13 | AI-augmented delivery practice | Uses AI agents for research, design, and code with explicit specs, verification steps, provenance, and human review before anything ships. | O | P | P | O | Product |
| LG-14 | Prompt and skill authoring | Writes reusable prompts, specs, and agent skills with clear triggers, inputs, steps, quality bars, and evals; retires stale ones. | O | P | P | O | Product |

## Senior role summary
| Capability area | Product Design | UX Design | UI Design | Front-End Architecture |
|---|---|---|---|---|
| Customer and business problem | **Lead** | Co-own | Fluency | Fluency |
| User research and synthesis | Co-own | **Lead** | Fluency | Fluency |
| IA, task flows, interaction states | Co-own | **Lead** | Co-own | Co-own |
| Visual design and interface expression | Co-own | Co-own | **Lead** | Co-own |
| Content, service, and AI workflow | **Lead** | Co-own | Fluency | Co-own |
| Accessibility | Co-own | **Lead design** | Co-own | **Lead implementation** |
| Design system | Co-own | Co-own | **Lead visual layer** | **Lead technical layer** |
| Prototype, specification, design QA | **Lead** (edge cases, acceptance) | Co-own | **Lead** (handoff, QA) | **Lead technical feasibility** |
| Browser/platform and implementation | Fluency | Fluency | Working fluency | **Lead** |
| Application architecture and data/state | Fluency | Fluency | Fluency | **Lead** |
| Quality, performance, resilience, security | Fluency | Fluency | Fluency | **Lead** |
| Measurement and learning | **Lead** | Co-own | Fluency | Co-own |
| Growth, conversion, marketing surfaces | **Lead** | Co-own | Co-own (visual direction) | Co-own (SEO/GEO, performance) |
| Cross-functional leadership | **Lead** | Lead research practice | Lead visual practice | Lead technical practice |

## Spines (profile shapes)
| Spine | Depth target | Why it matters |
|---|---|---|
| Product and customer judgment | Product + UX: 3–4 | Prevents elegant solutions to low-value problems |
| Experience and interface craft | UX + UI: 3–4 | Turns insight into usable, persuasive experiences |
| System thinking | Design systems + FE Arch: 3–4 in one layer, 2–3 in the other | Makes quality repeatable |
| Operational learning | Measurement + delivery + governance: 3–4 | Connects shipped work to outcomes |

Design leader with front-end fluency: Product/UX 4, UI/System 3–4, architecture 2–3. Front-end architect with product instincts: architecture 4, product/experience 2–3, visual 1–2. Show one clear primary spine plus strong adjacencies rather than claiming 4 everywhere.

## Common gaps
| Gap | Why it hurts | Corrective practice |
|---|---|---|
| UI as screen styling | Attractive but incoherent flows | Design states, content priority, responsive rules, accessibility with every screen |
| UX as a research department | Research that changes nothing is theater | Tie every study to a named decision; follow through after release |
| Product design as UX + UI | Ignores value, feasibility, sequencing, outcomes | Frame opportunity, constraints, hypotheses, outcomes before solutions |
| FE architecture as framework choice | Frameworks change; boundaries and ownership endure | Write and revisit ADRs tied to product risk and change cost |
| Design system as component library | Doesn't scale without tokens, docs, contribution, adoption | Run the system as a product with users, roadmap, and metrics |
| Accessibility at the end | Late fixes are costly and miss semantics | Accessibility acceptance criteria in discovery, design, review, and QA |
| AI features without operational controls | Unsafe automation, opaque results, lost trust | Confidence, provenance, evals, override, escalation, audit, rollback |

## Conflict rules
When skills or sources disagree, apply these in order:
1. **Project system wins.** Existing tokens, components, and repo conventions override opinionated presets (spacing rules, shadow values, font picks).
2. **Surface decides expression.** Marketing surfaces can be expressive (UI-13, GM); inside product workflows, legibility, density, and task speed win (UI-10).
3. **Motion must earn its place.** It explains change or marks a brand moment, honors reduced motion, and stays inside performance budgets (UI-12, FE-13, QL-07).
4. **Persuasion, not manipulation.** Behavioral techniques must be true and reversible; deceptive patterns are out (GM-06, LG-11).
5. **Tools are not skills.** Framework, library, and style-preset skills are implementation options under FE/DS skills, never requirements.
6. **Learn from references, don't copy them.** Extract principles and structure; reuse assets, code, or brand only from owned, client, or licensed sources (DS-13).
7. **Agents fix, humans approve.** Automated review-and-fix loops (PR-13) end in human review (LG-13).

## References
1. W3C, Web Content Accessibility Guidelines (WCAG) 2.2 — https://www.w3.org/TR/WCAG22/
2. MDN, HTML: A good basis for accessibility — https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML
3. W3C Design Tokens Community Group, Design Tokens Format Module 2025.10 — https://www.designtokens.org/tr/drafts/format/
4. ISO 9241-210:2019, Human-centred design for interactive systems — https://www.iso.org/standard/77520.html
5. Nielsen Norman Group, 10 Usability Heuristics — https://www.nngroup.com/articles/ten-usability-heuristics/
6. web.dev, Core Web Vitals — https://web.dev/articles/vitals
7. W3C WAI, ARIA Authoring Practices Guide — https://www.w3.org/WAI/ARIA/apg/
