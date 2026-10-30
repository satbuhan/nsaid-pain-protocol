# Dexketoprofen vs Ibuprofen — Selecting an NSAID for Acute Pain

An interactive, referenced walkthrough of the algorithm for choosing
between dexketoprofen and ibuprofen — and how to use either one safely —
in adults with acute pain. Every box and decision point in the diagram can
be selected to reveal, in one place: what the step means, why the protocol
calls for it, the exact dosing as authored, and the sources behind it.

**Live site:** https://satbuhan.github.io/nsaid-pain-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why*,
and a reader outside the authors' own team cannot easily check the
evidence behind a specific number (a dose, a reassessment threshold, a
risk cutoff). This page keeps the original algorithm exactly as authored,
and attaches the clinical reasoning and literature to each box without
cluttering the diagram itself.

The algorithm this page presents is drawn from a systematic review by the
same authors comparing dexketoprofen and ibuprofen for acute pain (39
PubMed records screened 2006–2026; 8 studies included, 5 RCTs / 523
patients; Cochrane RoB 2; GRADE; MCID-anchored Cohen's d — manuscript in
preparation); the supplementary content on this page draws on that
review's evidence base, cross-checked against independent sourcing for
every citation.

## Status

This is a working version, built to be tested on both desktop and mobile.
Two of the trials behind the parenteral-route comparison (Moore 2015,
Sarcan 2026) are multi-arm trials, not pure two-arm dexketoprofen-vs-
ibuprofen studies — their `REFERENCES` entries in `assets/content.js` say
so explicitly, so a reader can see that the dexketoprofen/ibuprofen
comparison was extracted from a subset of that trial's arms rather than
from the whole study. Everything else is paraphrased from a cited source,
listed in the References section at the bottom of the page.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any dose or
threshold against current local protocol before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure
assets/style.css     design (the "paper" masthead/references,
                      the diagram scope + readout panel)
assets/content.js     ← single source of truth for every node's text,
                      dosing, and reference list. Edit this file to change
                      what the page says.
assets/app.js         rendering + interaction (builds the diagram and the
                      connector lines from content.js, handles the
                      click-to-expand panel on desktop and the bottom
                      sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box or decision
diamond from the algorithm (`meaning`, `rationale`, optional `dose` table,
and `refs` pointing at numbered entries in `REFERENCES`). Add or edit a
reference in `REFERENCES` and point to it by `id` from any node. Never
change a node's `label`, `sub`, or `dose` text without the author team's
sign-off — those fields are the algorithm itself. Two nodes
(`contraindications_info`, `high_risk_info`) and two more
(`oral_route`, `parenteral_route`) carry genuinely itemized source text as
literal line breaks inside `sub` — preserve those `\n` characters exactly;
they render as separate lines, not flattened into comma-separated prose,
because that is how the original boxes are drawn.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
