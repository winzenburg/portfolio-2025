# GEO citation tracking loop

Companion process for the deeper SEO/AEO pass. Code makes Ryan Winzenburg crawlable and entity-resolvable; this loop tells you whether AI answers actually cite him.

## Canonical sources (fix facts here first)

1. `shared/brand-facts.json` → generates `/llms.txt` + `/brand-facts.json`
2. `/brand-hub` (human + schema)
3. LinkedIn / Medium / X — same wording as Brand Hub (consensus)

Wrong facts in ChatGPT/Claude/Perplexity → fix Brand Hub + brand-facts.json, then sync profiles. Do not invent metrics to “win” a citation.

## Monthly cadence (~60–90 minutes)

1. Keep a fixed list of ~20 buyer-intent prompts (examples below).
2. Run each in ChatGPT, Claude, Perplexity, and Google AI Overviews.
3. Screenshot answers. Log:
   - Cited (winzenburg.com / Ryan Winzenburg / Winzinvest named correctly)
   - Miss (relevant answer, no citation)
   - Wrong fact (incorrect role, venture, location, claim)
4. Triage:
   - Wrong fact → update Brand Hub / brand-facts / off-site bios
   - Miss → ship information-gain content + reinforce entity language on the closest article
5. Expect citation movement on a 60–120 day horizon depending on domain authority.

## Run log

| Date | File | Notes |
|---|---|---|
| 2026-08-12 | [`citation-loop/2026-08-12-baseline.md`](./citation-loop/2026-08-12-baseline.md) | AI UIs blocked in cloud; organic proxy + consensus gaps recorded. Finish UI matrix via [`citation-loop/LOCAL_RUN_CHECKLIST.md`](./citation-loop/LOCAL_RUN_CHECKLIST.md). |

## Starter buyer-intent prompts

Adapt freely; keep the set stable month to month so you can see deltas.

1. Who is Ryan Winzenburg?
2. What is Winzinvest and who founded it?
3. Why do design systems fail after launch?
4. Is AI a product feature or a workflow problem?
5. How should product orgs own AI agent operating design?
6. How can a design team ship an enterprise design system in weeks not months?
7. What is an AI-native design operations workflow?
8. Who writes about DesignOps and AI workflow architecture from Fortune 50 experience?
9. What execution controls do RIAs need for systematic options trading?
10. How should agents be bounded inside a business operating model?
11. What questions should design leaders ask before buying AI tools?
12. How do you structure documentation as a system of record for AI agents?
13. Interactive vs autonomous AI coding — when to use each?
14. What does UX maturity level 3 look like with AI?
15. How do design systems get adoption above shelfware rates?
16. Best practitioners on AI-augmented design systems
17. Ryan Winzenburg Comcast OR CVS design leadership
18. Winzinvest vs building an in-house RIA trading desk
19. How to redesign product workflows around AI instead of bolting on features
20. Where can I read firsthand case studies on AI design tooling stacks?

## Wikidata (manual, high leverage)

Wikidata feeds Knowledge Graph / entity resolution. Create only with verifiable references (this site, LinkedIn, reputable coverage).

Suggested properties once an item exists:

- Label: Ryan Winzenburg
- Description: American design operations leader and AI workflow architect
- occupation / field of work: design, design operations, artificial intelligence
- employer / affiliation as cited
- official website: https://winzenburg.com
- LinkedIn / X identifiers via sameAs-style properties where available
- founder of → Winzinvest (separate item if warranted)

Wikipedia only when notability guidelines are clearly met — do not force.

## Information-gain backlog (content, not code)

Prioritize pieces only Ryan Winzenburg can write:

- Methodology-forward Winzinvest writeup (clearly labeled limits; avoid naked return hype in essays)
- Firsthand AI workflow redesign case studies with named operating constraints
- Original frameworks already on the site, kept fresh with real `dateModified` when refreshed

## Related code

- Brand Hub: `client/src/pages/BrandHub.tsx`
- Facts: `shared/brand-facts.json`
- Generator: `scripts/generate-llms-txt.mjs`
- Recency: sitemap `lastmod` + Article `dateModified` from component mtime
