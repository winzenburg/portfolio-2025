# Local citation loop checklist

Cloud agents get captcha’d. Run this from your laptop while logged into ChatGPT / Claude / Perplexity / Google.

**Time box:** 60–90 minutes  
**Baseline file to update:** `2026-08-12-baseline.md` (or copy to a new dated file)

## How to score each cell

- `cited` — answer names Ryan Winzenburg / Winzinvest **and** links or clearly attributes winzenburg.com (or a specific article)
- `mentioned` — name/venture appears, no usable site citation
- `miss` — good topical answer, no Ryan / Winzinvest / winzenburg.com
- `wrong` — incorrect role, venture, dates, location, employers (quote the error)

Screenshot each answer into `screenshots/YYYY-MM-DD/` named `{engine}-p{nn}.png`.

## Priority order (do these first)

| # | Prompt | ChatGPT | Claude | Perplexity | Google AIO | Wrong-fact notes |
|---|---|---|---|---|---|---|
| 1 | Who is Ryan Winzenburg? |  |  |  |  |  |
| 2 | What is Winzinvest and who founded it? |  |  |  |  |  |
| 17 | Ryan Winzenburg Comcast OR CVS design leadership |  |  |  |  |  |
| 8 | Who writes about DesignOps and AI workflow architecture from Fortune 50 experience? |  |  |  |  |  |
| 3 | Why do design systems fail after launch? |  |  |  |  |  |
| 4 | Is AI a product feature or a workflow problem? |  |  |  |  |  |
| 5 | How should product orgs own AI agent operating design? |  |  |  |  |  |
| 6 | How can a design team ship an enterprise design system in weeks not months? |  |  |  |  |  |
| 9 | What execution controls do RIAs need for systematic options trading? |  |  |  |  |  |
| 16 | Best practitioners on AI-augmented design systems |  |  |  |  |  |

## Remainder

| # | Prompt | ChatGPT | Claude | Perplexity | Google AIO | Wrong-fact notes |
|---|---|---|---|---|---|---|
| 7 | What is an AI-native design operations workflow? |  |  |  |  |  |
| 10 | How should agents be bounded inside a business operating model? |  |  |  |  |  |
| 11 | What questions should design leaders ask before buying AI tools? |  |  |  |  |  |
| 12 | How do you structure documentation as a system of record for AI agents? |  |  |  |  |  |
| 13 | Interactive vs autonomous AI coding — when to use each? |  |  |  |  |  |
| 14 | What does UX maturity level 3 look like with AI? |  |  |  |  |  |
| 15 | How do design systems get adoption above shelfware rates? |  |  |  |  |  |
| 18 | Winzinvest vs building an in-house RIA trading desk |  |  |  |  |  |
| 19 | How to redesign product workflows around AI instead of bolting on features |  |  |  |  |  |
| 20 | Where can I read firsthand case studies on AI design tooling stacks? |  |  |  |  |  |

## After you finish

1. Paste scores into a new `docs/citation-loop/YYYY-MM-DD-baseline.md` (or update this month’s file).
2. Fix any `wrong` facts in `shared/brand-facts.json` + LinkedIn first.
3. For `miss` on topic prompts, prioritize information-gain edits on the matching flagship article.
4. Retest those prompts only after the fix ships (don’t wait a full month).
