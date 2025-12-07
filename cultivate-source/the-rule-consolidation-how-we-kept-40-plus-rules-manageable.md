---
title: "The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power"
description: "Most systems collapse under their own complexity. Here's how we prevented that with a unified taxonomy and single foreman orchestrator."
publishedAt: "2025-12-02T00:00:00.000Z"
category: "Product Creation"
tags: "systems, governance, process, scalability"
---

# The Rule Consolidation: How We Kept 40+ Rules Manageable Without Losing Power

## Most systems collapse under their own complexity. Here's how we prevented that.

After building out our comprehensive product creation system, we hit a wall: we had over 40 rules scattered across discovery, validation, build, and scale phases. Multiple rules covered the same ground. Agents didn't know which rule was canonical. The orchestrator was getting confused. We were drowning in our own governance.

Sound familiar? Whether you're building a multi-agent AI system, a complex software platform, or just trying to maintain consistent processes across a growing team, you've probably experienced this. Systems that start elegant and focused inevitably accumulate cruft, duplication, and contradictions as they scale.

But here's the thing: **we didn't simplify by cutting capabilities**. We consolidated without losing a single feature, validation gate, or quality check. And we documented the process so thoroughly that future additions won't reintroduce chaos.

In this article, I'll walk you through exactly how we consolidated 40+ rules into a manageable, hierarchical taxonomy—and the systems we built to keep it that way.

## The Complexity Crisis

Let me paint the picture of where we were six months ago:

- **Duplicate rules everywhere**: We had separate rules for "Cursor agent responsibilities" in both the 003 series and 028 series. Data moat guidance appeared in three different files (003, 170, 180). AI tool integration instructions were scattered across 050, 060, 070, 080, and then duplicated again in the 300s for the discovery pack.

- **Unclear ownership**: When an agent needed to know "how do I integrate ChatGPT?", which rule should it consult? The orchestrator couldn't tell, and neither could we.

- **Numbering collisions**: We had two different rules both labeled 198. Renumbering one meant updating references across dozens of files.

- **Hub implementation chaos**: Six separate rules (132, 133, 134, 136, 137, 200) all covered aspects of the Hub UI. Want to know how document discovery works? Good luck finding which file has the canonical answer.

The system was powerful—it enforced quality gates, captured institutional knowledge, and guided our multi-agent workflow. But it was becoming unmaintainable.

## The Breakthrough: Taxonomy + Foreman + Matrix

The solution came from three interlocking concepts:

### 1. Four-Tier Taxonomy

We reorganized all rules into four clear tiers:

**Core Guardrails (000–099)**: Always-on constraints that gate every phase. Things like idea criteria, testing requirements, accessibility standards, and document quality. These rules never get ignored—they're the foundational quality bar.

**Stack & Integrations (100–199)**: Technology conventions that activate only when a specific agent is working. Next.js patterns, Drizzle schema rules, Supabase integration, tRPC conventions. If you're not the Engineering Architect or Implementer, you can ignore this tier.

**Playbooks (200–260)**: Step-by-step workflows with explicit handoffs. The insight validation playbook, new feature playbook, accessibility audit playbook, multi-tenancy playbook. These are "how-to guides" that orchestrate multiple agents in sequence.

**Discovery Pack (300–340)**: Templates, prompts, and AI orchestration specific to the heat filter phase. Only loaded when the Discovery pod is active.

This taxonomy gave us a mental model: "Is this a universal constraint? A specialist's tool? A workflow? Or a discovery template?" Every rule now had a clear home.

### 2. Single Foreman Orchestrator

We designated `000-orchestration.mdc` as the single "foreman" that manages the entire workflow. Instead of each agent figuring out which rules apply, the foreman:

- References the rule-agent matrix to see who owns what
- Enforces mandatory outputs at each phase gate
- Calls specialist agents with links to their canonical rules
- Keeps a conversational, high-level view without restating playbook details

This gave us one place to understand the end-to-end flow. Every other rule is a specialist's handbook that the foreman calls when needed.

### 3. Rule-Agent Matrix (Single Source of Truth)

The matrix (`docs/rules/rule-agent-matrix.md`) became our rosetta stone. It's a simple table:

| Rule | Type | Lifecycle Phase | Primary Agents | Purpose | Status |
|------|------|----------------|----------------|---------|--------|
| 000-orchestration | Core | All | Orchestrator | Central foreman managing pipeline | Active |
| 118-brand-landscape | Stack | Validation → Build | Brand Strategist | Competitive brand analysis + design system | Active |
| 050-manus-integration | Meta | N/A | (deprecated, see 190) | Pointer to consolidated AI tools rule | Deprecated |

Every rule appears exactly once. Deprecated rules point to their canonical replacement. The matrix shows which agent should care about which rule, and at what phase it applies.

## The Consolidation Process

Here's how we actually executed the consolidation:

### Step 1: Inventory & Mapping

We listed every rule file, noted its purpose, and identified duplicates. This became the "streamlining blueprint" (`docs/rules/streamlining-blueprint.md`). For each cluster of overlapping rules, we decided:

- Which file becomes the canonical source?
- What unique content needs to be merged in?
- What gets deprecated vs. deleted?

### Step 2: Merge & Deprecate

**Example: AI Tool Integration**

We had `050-manus-integration.mdc`, `060-chatgpt-refinement.mdc`, `070-elevenlabs-integration.mdc`, `080-midjourney-canva.mdc`, plus duplicates in the 300s for discovery-specific prompts.

We consolidated all of this into `190-ai-tool-integrations.mdc` with clear sections:

```markdown
# Rule 190: AI Tool Integrations

## Manus.im Integration
- When to use: Narrative clustering, insight synthesis
- API patterns: ...
- Quality gates: ...

## ChatGPT Integration
- When to use: Refinement, persona synthesis
- API patterns: ...
- Quality gates: ...

## ElevenLabs Integration
...
```

Then we replaced the old files with one-line pointers:

```markdown
# Rule 050: Manus Integration (DEPRECATED)
> This rule has been merged into `190-ai-tool-integrations.mdc`. See the Manus section.
```

**Example: Hub Implementation**

Six separate rules about the Hub became one comprehensive `200-hub-implementation.mdc` with subsections:

- Document Discovery
- Workflow Linkage
- Route & Viewer Requirements
- UI Conventions
- API Patterns

Now there's one place to learn how the Hub works, with anchor links for agents who need specific sections.

### Step 3: Renumber Collisions

We had two rules with the 198 prefix. We renumbered:
- `198-ai-prompt-templates.mdc` → `199-ai-prompt-templates.mdc`
- `199-ai-error-handling.mdc` → `201-ai-error-handling.mdc`

Then we updated every reference across the entire codebase (matrix, playbooks, orchestrator, agent prompts).

### Step 4: Update All References

This was the tedious but critical part. We used grep to find every mention of deprecated rule numbers and updated them to the new canonical source:

```bash
# Find all references to the old rule
grep -r "050-manus" .cursor/rules docs

# Update each file to reference 190-ai-tool-integrations instead
```

We updated:
- The orchestrator (`000-orchestration.mdc`)
- The matrix (`docs/rules/rule-agent-matrix.md`)
- All playbooks that referenced the deprecated rules
- Agent roster and documentation
- The main `AGENTS.md` file

### Step 5: Document the System

We created `docs/rules/change-control.md`—a lightweight checklist for adding, merging, or retiring rules in the future:

1. **Before You Edit**: Clarify tier, identify owners, check for duplicates
2. **While Editing**: Use standard format, include sections for lifecycle/agents/deliverables
3. **After Saving**: Update matrix, update agent docs, patch orchestrator, log in blueprint
4. **Acceptance Tests**: Verify no duplicate prefixes, orchestrator links only canonical files

This checklist ensures future additions don't reintroduce the chaos we just cleaned up.

## The Results

After consolidation, here's what we achieved:

**Before**:
- 47 rule files (many duplicated)
- 6 different rules about Hub implementation
- 9 different rules about AI tools
- 3 different rules about data moat/expansion
- Orchestrator had 400+ lines trying to explain everything

**After**:
- 38 active rules + 9 deprecated pointers
- 1 canonical Hub implementation rule (with sections)
- 1 canonical AI tool integration rule (with tool-specific sections)
- 1 moat & expansion strategy rule
- Orchestrator has 200 lines and just links to specialist rules

**Key Wins**:
- ✅ Zero capability loss—every check, gate, and process preserved
- ✅ Clear ownership—matrix shows which agent uses which rule
- ✅ Single source of truth for each concern
- ✅ Orchestrator stays high-level and conversational
- ✅ Future additions follow documented change-control process

## Real-World Application: How You Can Do This

Whether you're managing a multi-agent AI system, a complex codebase with sprawling documentation, or a team with scattered process docs, here's how to apply these principles:

### 1. Create Your Taxonomy

Group your rules/docs/processes into tiers based on how they're used:

- **Universal constraints** (apply to everyone, always)
- **Specialist tools** (apply to specific roles/agents)
- **Workflows** (multi-step processes with handoffs)
- **Templates** (reusable starting points)

### 2. Designate a "Foreman" Document

Create one top-level document that orchestrates everything else. It should:

- Explain the high-level flow
- Reference (but not repeat) specialist rules
- Enforce phase gates and mandatory outputs
- Be readable by a human in 5-10 minutes

### 3. Build Your Matrix

Create a single table that maps every rule to:

- Its tier/type
- Which phase it applies to
- Who owns it
- What it does
- Current status (active/deprecated)

This becomes your navigation system.

### 4. Consolidate Ruthlessly

Find overlapping rules and merge them. Use sections/anchors to preserve findability. Replace old files with pointers to the new canonical source.

### 5. Document the Change Process

Write down how to add/modify/retire rules in the future. Make it a checklist, not a philosophy doc. Include:

- How to check for duplicates before creating
- What sections every rule must have
- Which other docs need updating when you change a rule
- Acceptance criteria before merging

### 6. Enforce at Pull Request Time

If you have code review or doc review, add a check: "Does this change update the matrix? Does it follow the change-control checklist?" Make consolidation a habit, not a one-time cleanup.

## Trade-Offs and Limitations

This approach isn't free—here are the costs:

**Upfront Investment**: The initial consolidation took about 40 hours of focused work. Inventorying, mapping, merging, updating references, testing. It's not trivial.

**Requires Discipline**: The system only works if people follow the change-control checklist. One careless addition can start the duplication cycle again.

**Anchors & Sections Add Complexity**: Having one big file with sections (like `190-ai-tool-integrations.mdc`) means agents need to know which section to read. We rely on anchor links like `190-ai-tool-integrations.mdc#manus`.

**Not Suitable for Unstructured Knowledge**: This works because our rules are systematic and have clear ownership. If your docs are more exploratory or narrative, a wiki or graph-based system might fit better.

**Regular Maintenance**: The matrix and blueprint need periodic review. Every 3-6 months, we audit for new duplication or rules that should be merged.

## Takeaways

Here's what you need to remember about rule consolidation:

1. **Taxonomy First**: Organize rules into clear tiers (universal constraints, specialist tools, workflows, templates). This gives you a mental model for where things belong.

2. **Single Foreman**: Designate one orchestrator document that manages the flow and calls specialist rules. Don't let it restate details—link and delegate.

3. **Matrix as Rosetta Stone**: Build a single table mapping every rule to its tier, phase, owner, and status. This becomes your navigation and prevents duplication.

4. **Consolidate Without Losing Power**: Merge overlapping rules into canonical sources with sections. Use pointers for deprecated files. Preserve every capability.

5. **Document the Change Process**: Create a change-control checklist that future contributors must follow. Make it easy to do the right thing.

6. **Regular Audits**: Every 3-6 months, review for new duplication. Consolidation is a practice, not a one-time project.

## What's Next?

The consolidation unlocked our next phase: confidently adding new rules without fear of chaos. Since consolidating, we've added:

- Brand system blueprint rule (118)
- Dev quality assistant rule (125)
- Supabase MCP rule (096)
- Gamification playbook (205B)
- Micro-interactions playbook (211)
- Personalization playbook (212)

Each one followed the change-control checklist, got assigned to the right tier, and linked properly in the matrix. The system scaled.

**Most systems collapse under their own complexity. Ours got stronger.**

If you're managing any complex system of rules, processes, or documentation, I hope this framework helps you consolidate without losing power. The key is taxonomy + foreman + matrix + discipline.

What if your governance system could scale indefinitely without becoming unmaintainable? That's the promise of systematic consolidation.

