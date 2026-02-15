# How to Write a Bedtime Super-Prompt for Claude Code

## The Core Principle

Quality comes from **specificity in the prompt**, not from grinding through audit loops. Every ambiguity you leave is a coin flip Claude will resolve without you.

## Recommended Structure: Fixed-Depth Pipeline

Instead of an infinite plan-execute-audit loop, use a bounded 4-phase pipeline:

```
Phase 1: Plan the entire site. Read brand assets and CLAUDE.md first.
         Write the full plan to PLAN.md before writing any code.
Phase 2: Build each section, committing after each major piece.
Phase 3: ONE audit pass — check every page for visual consistency,
         broken links, responsive issues, brand compliance. Fix issues.
Phase 4: Final commit + summary of what was built.
```

Cap it at 4 phases. No loop. This avoids:
- **Context compression** — Claude compresses old messages as conversations grow. After enough iterations, audit steps lose earlier context and quality degrades.
- **Diminishing returns** — First pass does 80%. First audit catches real issues. By loop 3+, you're polishing non-issues or introducing new bugs.
- **Credit burn** — Uncapped Opus loops can easily burn $50-100+ overnight with near-zero ROI past the first audit.

## What to Include in Your Prompt

### Must-haves
- **Exact pages** — Home, About, Services, Contact, etc.
- **Content direction** for each section — don't write copy, but give intent ("hero section with tagline about building modern web experiences")
- **Tech stack** — "plain HTML/CSS/JS" or "Next.js + Tailwind" etc.
- **Reference brand assets** — exact file paths, which colors/fonts/lockups to use
- **Design sensibility** — one sentence: "clean, minimal, lots of whitespace" vs "bold, dynamic, dark theme"
- **What NOT to do** — "no stock placeholder images," "no Lorem Ipsum," "no JS frameworks"

### Nice-to-haves
- Specific interactions or animations you want
- Mobile-first or desktop-first preference
- Any reference sites you admire
- Content tone (professional, friendly, technical, etc.)

## Use CLAUDE.md for Persistent Instructions

Create a `CLAUDE.md` in the project root. It gets loaded into every conversation automatically:

```markdown
# Project Instructions
- Always plan before implementing. Write plan to PLAN.md.
- Use brand assets from assets/ — see brand sheet for colors/fonts.
- Mountain blue: #1c3f5a, Text blue: #183550, Dark BG: #1a2332
- Font: Josefin Sans 600, letter-spacing 5px, all caps for brand text
- Commit after completing each major section.
```

## Plan Mode with Bypass-Permissions

Plan mode is **NOT automatic** with bypass-permissions. Bypass only skips tool approval confirmations. You must explicitly say "Plan first before building anything" — or better yet, put it in CLAUDE.md.

## Example Prompt Template

```
Build a website for Sinai Digital, a web development business.
Work in /home/matt/src/sinai-digital/sinai-digital-website/.

Read CLAUDE.md and the brand sheet at assets/sinai-digital-brand-sheet.html first.

Phase 1: Plan the entire site. Write the plan to PLAN.md.
Phase 2: Build each section, committing after each.
Phase 3: Audit once for brand consistency, responsiveness, and polish. Fix issues.
Phase 4: Final commit with summary.

Pages: [list your pages]
Tech: [your stack]
Design: [your aesthetic]
Do NOT: [your constraints]
```

## Anti-Patterns to Avoid

- **Infinite audit loops** — "keep improving until perfect" will run all night
- **Vague instructions** — "make it look professional" means nothing concrete
- **No brand reference** — Claude will guess colors and fonts if you don't specify
- **Too many pages** — 4-6 pages is a sweet spot for one session
- **No commits** — ask for incremental commits so you can roll back if needed
