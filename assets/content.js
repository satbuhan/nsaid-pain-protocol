/* =========================================================================
   Content data for the interactive dexketoprofen-vs-ibuprofen protocol for
   acute pain. Every clinical claim below is paraphrased from the cited
   source, not copied from it. Reference numbers match REFERENCES below and
   the printed list in index.html.

   Reference 1 is the authors' own systematic review (39 PubMed records
   screened 2006–2026; 8 studies included, 5 RCTs / 523 patients; Cochrane
   RoB 2; GRADE; MCID-anchored Cohen's d) whose algorithm is reproduced,
   unchanged, on this page. Every other reference below was independently
   located and verified against a primary source (a trial report, a
   systematic review, a regulatory communication, or a society position
   paper) rather than taken on trust from any secondary summary.
   ========================================================================= */

const REFERENCES = [
  {
    id: 1,
    kind: "Systematic review — source of this algorithm",
    text: "Karcıoğlu Ö. Dexketoprofen versus ibuprofen in the management of acute pain: a systematic review. Manuscript in preparation. 39 PubMed records screened (2006–2026); 8 studies included (5 RCTs, 523 patients); Cochrane RoB 2 risk-of-bias assessment; GRADE certainty rating (low for efficacy, very low for safety); clinical significance by MCID-anchored Cohen's d (|d| < 0.40 ≈ below 10 mm VAS). This page's algorithm is reproduced, unchanged, from that review's synthesis.",
    url: null
  },
  {
    id: 2,
    kind: "Randomized trial (multi-arm; dexketoprofen and ibuprofen arms extracted for this comparison)",
    text: "Moore RA, Gay-Escoda C, Figueiredo R, et al. Dexketoprofen/tramadol: randomised double-blind trial and confirmation of empirical theory of combination analgesics in acute pain. J Headache Pain. 2015;16:60.",
    url: "https://doi.org/10.1186/s10194-015-0541-5"
  },
  {
    id: 3,
    kind: "Randomized trial",
    text: "Dogan C, Yilmaz A, Kemanci A, et al. Comparative evaluation of the effectiveness of intravenous paracetamol, dexketoprofen and ibuprofen in acute low back pain. Am J Emerg Med. 2022.",
    url: "https://doi.org/10.1016/j.ajem.2022.04.017"
  },
  {
    id: 4,
    kind: "Randomized trial",
    text: "Dönmez S, Sener A, Isik N, et al. Comparison of analgesic efficacy of ibuprofen and dexketoprofen in pain management of long bone fractures: a prospective, randomized, double-blind study. Eur J Trauma Emerg Surg. 2024.",
    url: "https://doi.org/10.1007/s00068-024-02515-w"
  },
  {
    id: 5,
    kind: "Randomized trial",
    text: "Soyalp C, Yayik AM, Oksüz E, Yüzkat N. Efficacy of preemptive intravenous ibuprofen and dexketoprofen on postoperative opioid consumption in laparoscopic cholecystectomy: randomized controlled study. PLoS One. 2025;20(9).",
    url: "https://doi.org/10.1371/journal.pone.0318059"
  },
  {
    id: 6,
    kind: "Randomized trial (3-arm; dexketoprofen and ibuprofen arms extracted for this comparison)",
    text: "Sarcan E, Erdem AB, Yazla M, Celikel E. Comparison of analgesic treatments used for ankle sprains in the emergency department. Ulus Travma Acil Cerrahi Derg. 2026;32(9):1091–1099.",
    url: "https://doi.org/10.14744/tjtes.2026.94069"
  },
  {
    id: 7,
    kind: "Methodology — MCID anchor",
    text: "Kelly AM. The minimum clinically significant difference in visual analogue scale pain score does not differ with severity of pain. Emerg Med J. 2001;18(3):205.",
    url: "https://emj.bmj.com/content/18/3/205"
  },
  {
    id: 8,
    kind: "Systematic review and meta-analysis",
    text: "Alam SM, Qasswal M, Ahsan MJ, Walters RW, Chandra S. Selective serotonin reuptake inhibitors increase risk of upper gastrointestinal bleeding when used with NSAIDs: a systematic review and meta-analysis. Sci Rep. 2022;12(1):1–6.",
    url: "https://doi.org/10.1038/s41598-022-18654-2"
  },
  {
    id: 9,
    kind: "Society position paper",
    text: "Kowalski ML, Wardzynska A. NSAIDs Exacerbated Respiratory Disease (N-ERD). World Allergy Organization (updated 2019).",
    url: "https://www.worldallergy.org/component/content/article/nsaids-exacerbated-respiratory-disease-n-erd-kowalski-ml-updated-2019"
  },
  {
    id: 10,
    kind: "Point-of-care reference",
    text: "Risser A, Donovan D, Heintzman J, Page T. NSAID prescribing precautions. Am Fam Physician. 2009;80(12):1371–1378.",
    url: "https://www.aafp.org/pubs/afp/issues/2009/1215/p1371.html"
  },
  {
    id: 11,
    kind: "Systematic review and meta-analysis",
    text: "Kim SH, Kang H, Jun IJ, Park HW, Yoo BH, Lim YH, Kim KM. Effect of perioperative intravenous ibuprofen versus acetaminophen on postoperative opioid consumption and pain after general anesthesia: a systematic review and meta-analysis with trial sequential analysis of randomized controlled trials. Korean J Anesthesiol. 2024;77(4):455–467.",
    url: "https://doi.org/10.4097/kja.24089"
  },
  {
    id: 12,
    kind: "Regulatory communication",
    text: "U.S. Food and Drug Administration. Nonsteroidal Anti-Inflammatory Drugs (NSAIDs): Drug Safety Communication — Avoid Use of NSAIDs in Pregnancy at 20 Weeks or Later. October 2020.",
    url: "https://www.fda.gov/safety/medical-product-safety-information/nonsteroidal-anti-inflammatory-drugs-nsaids-drug-safety-communication-avoid-use-nsaids-pregnancy-20"
  }
];

const NODES = [
  {
    id: "trigger",
    type: "terminal",
    label: "Adult with acute pain (ED, perioperative, dental or primary care) in whom a non-steroidal anti-inflammatory drug (NSAID) is considered",
    meaning:
      "The algorithm opens wherever an NSAID is genuinely on the table as an option — not only in the emergency department, but equally in a perioperative setting, a dental surgery, or primary care. The evidence behind this page spans exactly that range of settings: dental extraction pain, acute low back pain, long-bone fractures, laparoscopic cholecystectomy, and ankle sprain.",
    rationale:
      "Starting from the clinical context rather than from a single care setting keeps the algorithm usable across the full range of acute-pain presentations the underlying systematic review actually covers, rather than artificially narrowing it to one department.",
    refs: [1]
  },
  {
    id: "contraindication_check",
    type: "decision",
    label: "Contraindication to NSAIDs?",
    meaning:
      "This is the first and most consequential branch point: before any question of which NSAID or what dose, the algorithm checks whether an NSAID belongs in this patient's treatment at all. The criteria in the adjacent box are absolute contraindications, not relative cautions — a single one being present routes straight to a non-NSAID pathway.",
    rationale:
      "Checking this before any dosing or route decision keeps the rest of the algorithm — which is entirely about choosing and dosing an NSAID — from ever being reached in a patient for whom that choice was never appropriate in the first place.",
    refs: [1, 10]
  },
  {
    id: "contraindications_info",
    type: "process",
    label: "CONTRAINDICATIONS",
    sub: "• NSAID hypersensitivity or N-ERD\n• Active GI bleeding or peptic ulcer\n• AKI, eGFR <30 or hypovolaemia\n• Severe heart failure\n• Third trimester of pregnancy\n• Peri-CABG period",
    meaning:
      "Each item here is a state where an NSAID's mechanism — COX inhibition — causes direct, predictable harm rather than a statistically elevated risk. NSAID hypersensitivity or N-ERD can precipitate acute bronchospasm within about two hours of exposure, pharmacologically rather than through a classic allergic mechanism, and cross-reacts with ibuprofen in 60–100% of affected patients. Active GI bleeding or peptic ulcer disease is a direct extension of the same COX-1 inhibition that causes NSAID-associated ulceration in the first place. AKI, an eGFR below 30 mL/min/1.73 m², or hypovolaemia are states in which renal prostaglandins are doing compensatory work to maintain glomerular filtration — work an NSAID directly removes. Severe heart failure can be worsened by the sodium and fluid retention NSAIDs cause. Third-trimester pregnancy carries the FDA's strongest warning: from 30 weeks, NSAID use risks premature closure of the fetal ductus arteriosus. The peri-CABG period is excluded because of a specific, trial-demonstrated cardiovascular hazard with NSAIDs in that setting.",
    rationale:
      "These are stated as absolute exclusions, not items to weigh against benefit, because in each case the mechanism of harm is the same mechanism the drug is being given for — there is no dose or short-course adjustment that avoids it.",
    refs: [9, 10, 12]
  },
  {
    id: "avoid_nsaids",
    type: "terminal",
    tone: "alarm",
    label: "AVOID NSAIDs",
    sub: "Paracetamol, local/regional anaesthesia; titrated opioid if pain remains severe",
    meaning:
      "This is the non-NSAID pathway, not a doorway back into the algorithm — once a contraindication is identified, the rest of this page (which is entirely about choosing between two NSAIDs) no longer applies to this patient. Paracetamol and local or regional anaesthetic techniques are first-line; a titrated opioid is reserved for pain that remains severe despite those measures, rather than used as a routine substitute for the NSAID that was withheld.",
    rationale:
      "Naming paracetamol and regional techniques before opioid analgesia keeps this branch consistent with ordinary multimodal-analgesia practice: an NSAID contraindication is a reason to avoid that one drug class, not a reason to escalate directly to an opioid.",
    refs: [1]
  },
  {
    id: "high_risk_check",
    type: "decision",
    label: "High-risk features?",
    meaning:
      "For a patient with no absolute contraindication, the next question is whether they carry a risk factor that should shape how an NSAID is used — not whether one should be used at all. This is a softer line than the first decision: none of the features in the adjacent box rules out an NSAID outright, but each raises the chance of a complication enough to change dose, duration, or co-prescription.",
    rationale:
      "Separating \"should an NSAID be used\" from \"how cautiously\" keeps the first decision clean (a true yes/no on safety) while still giving the algorithm a place to route patients who need a more conservative course without excluding them from treatment altogether.",
    refs: [1, 10]
  },
  {
    id: "high_risk_info",
    type: "process",
    label: "HIGH-RISK FEATURES",
    sub: "• Age ≥65 years\n• eGFR 30–59 mL/min/1.73 m²\n• Cardiovascular disease\n• Anticoagulant, antiplatelet, SSRI\n• Previous GI bleeding\n• Child or pregnancy <20 weeks",
    meaning:
      "Each of these raises a specific, well-characterised risk rather than functioning as a generic \"be careful\" flag. Age 65 or older and an eGFR of 30–59 both sit on the same renal-reserve continuum as the AKI/eGFR <30 contraindication, just short of the absolute cut-off. Cardiovascular disease is relevant because NSAIDs raise blood pressure and can precipitate fluid retention. Anticoagulants, antiplatelet agents, and SSRIs each independently raise bleeding risk when combined with an NSAID — the SSRI combination specifically raises the odds of upper GI bleeding by about 75% compared with an NSAID alone. Previous GI bleeding is the single strongest predictor of a repeat event. Pregnancy under 20 weeks sits just inside the FDA's own cut-off (NSAID avoidance is recommended from 20 weeks), so it is flagged here as a feature to reassess as the pregnancy progresses, not yet a contraindication.",
    rationale:
      "Listing anticoagulants, antiplatelets, and SSRIs together reflects that all three raise bleeding risk through different mechanisms (clotting factor inhibition, platelet function, and gastric mucosal effects respectively) that are additive with an NSAID's own COX-1 effect on the stomach lining — the shared downstream risk, not a shared drug class, is why they are grouped.",
    refs: [8, 10, 12]
  },
  {
    id: "dose_adjust",
    type: "process",
    label: "Lowest effective dose, ≤3 days",
    sub: "Add PPI if GI risk; avoid IV ibuprofen 800 mg; check renal function. Child/pregnancy: prefer ibuprofen",
    meaning:
      "This box modifies how the NSAID is used rather than which one is chosen — that choice still comes later, at the route-and-drug decision. Limiting the course to the lowest effective dose for three days or fewer reduces cumulative renal and GI exposure. A PPI is added when GI risk is present (prior ulcer, anticoagulant or antiplatelet use, or age-related risk), consistent with standard prescribing guidance. Avoiding IV ibuprofen 800 mg in this group reflects the review's own finding that the step up from 400 mg to 800 mg buys only a small, sub-MCID improvement in pain relief for a correspondingly larger drug exposure in patients already flagged as higher-risk. Renal function is checked because several of the high-risk features (age, reduced eGFR, cardiovascular disease) compound each other's effect on the kidney. Ibuprofen is preferred over dexketoprofen specifically in children and in pregnancy because it has the larger safety and dosing experience in both populations.",
    rationale:
      "None of these adjustments removes the patient from NSAID therapy — they narrow the dose, duration, and monitoring around it, which is the entire point of separating this decision from the first, absolute contraindication check.",
    refs: [1, 10]
  },
  {
    id: "route_check",
    type: "decision",
    label: "Oral route feasible?",
    meaning:
      "Having established that an NSAID is appropriate (with or without the precautions above), the next fork is practical rather than pharmacological: can this patient take an oral dose right now? A patient who is nil by mouth, vomiting, or awaiting a procedure cannot use the oral pathway regardless of which drug would otherwise be preferred.",
    rationale:
      "Asking this before naming a specific drug and dose keeps the two route-specific boxes below genuinely parallel — oral and parenteral are presented as two complete, self-contained regimens rather than a single drug choice with a route attached as an afterthought.",
    refs: [1]
  },
  {
    id: "oral_route",
    type: "process",
    label: "ORAL",
    sub: "Dexketoprofen 25 mg OR fast-acting ibuprofen 200–400 mg\nEquivalent efficacy (d −0.24, below MCID)",
    meaning:
      "At oral doses, the review's own pooled estimate — drawn from the dexketoprofen and ibuprofen 400 mg arms of a dental-pain trial — put the between-drug effect at Cohen's d ≈ −0.24, slightly favouring dexketoprofen numerically but well inside the band the review treats as not clinically meaningful (|d| < 0.40, roughly under 10 mm on a 100 mm VAS). \"Fast-acting\" ibuprofen refers to salt or solubilised formulations (e.g. ibuprofen lysine or sodium) with faster absorption than standard tablets, relevant because oral onset speed is one of the few genuine practical differences between the two drugs at this route.",
    rationale:
      "Naming both drugs as options rather than recommending one keeps this box consistent with the review's overall conclusion: oral dexketoprofen 25 mg and oral ibuprofen are clinically equivalent choices, so the decision comes down to what is already stocked, tolerated, or preferred, not to a meaningful efficacy difference.",
    refs: [1, 2]
  },
  {
    id: "parenteral_route",
    type: "process",
    label: "PARENTERAL",
    sub: "Dexketoprofen 50 mg IV OR ibuprofen 400 mg IV (800 mg adds ≈6 mm VAS, below MCID)\nMigraine/renal colic: larger DKP trial base\nPerioperative: stronger IBU opioid-sparing data",
    meaning:
      "The IV comparison pools four trials (dexketoprofen 50 mg vs ibuprofen 400 mg across low back pain, long-bone fractures, laparoscopic cholecystectomy, and ankle sprain) with low heterogeneity (I² 0%), and the result still falls short of the MCID band even though its confidence interval sits slightly higher than the oral comparison's. The parenthetical — \"800 mg adds ≈6 mm VAS, below MCID\" — reflects that stepping ibuprofen up from 400 mg to 800 mg IV produced a measurable but sub-threshold improvement in at least one of the pooled trials (the fractures trial found a statistically significant difference favouring the 800 mg dose at 60 and 120 minutes), which is why it is framed as \"not equipotent\" with the 400 mg dose rather than as a simple dose-response the algorithm recommends using routinely. The two context-specific notes route a tie-breaker toward whichever drug has the stronger evidence base for that specific indication: a larger dexketoprofen trial base for migraine and renal colic (indications not directly covered by the five pooled RCTs behind this algorithm, but reflecting dexketoprofen's broader use in those settings), and stronger ibuprofen opioid-sparing data perioperatively, where a meta-analysis of IV ibuprofen found it reduced 24-hour postoperative opioid consumption by a mean of 6 mg morphine-equivalent compared with IV paracetamol.",
    rationale:
      "Giving two narrow, indication-specific tie-breakers rather than a single default acknowledges that \"equivalent on average\" does not mean equivalent in every clinical context the pooled trials happen to cover — migraine, renal colic, and perioperative opioid-sparing are each areas where one drug's evidence base is simply deeper than the other's, independent of the pooled analgesia comparison.",
    refs: [1, 3, 4, 5, 6, 11]
  },
  {
    id: "reassess",
    type: "process",
    label: "Reassess at 30–60 min — meaningful relief = VAS fall ≥10 mm or NRS fall ≥1.3, or residual VAS ≤33 mm",
    meaning:
      "Both route pathways converge here: whichever drug was chosen, the same reassessment window and the same definition of meaningful relief apply. The 30–60 minute window matches the onset profile of both drugs at both routes. The VAS fall ≥10 mm threshold is the review's own MCID anchor, drawn from Kelly's empirical finding that patients perceive roughly a 12 mm change on a 100 mm VAS as clinically significant; the NRS ≥1.3 and residual VAS ≤33 mm criteria are alternative, validated ways of capturing the same \"meaningfully better\" judgement when a different pain scale was used.",
    rationale:
      "Defining \"meaningful relief\" numerically, rather than leaving it to unstructured clinical impression, is what makes the next decision reproducible — the algorithm needs a clear answer to \"did this work\" before it can say what happens next.",
    refs: [1, 7]
  },
  {
    id: "relief_check",
    type: "decision",
    label: "Meaningful relief?",
    meaning:
      "This is the only point in the algorithm that loops back on the treatment decision already made — not by changing drug class, but by deciding whether to continue the same course or add to it. A clear, affirmative answer against the numeric criteria above, not a vague sense of improvement, is what this decision is meant to capture.",
    rationale:
      "Placing this decision after a fixed reassessment window, rather than leaving reassessment open-ended, prevents both premature escalation (switching drugs before the first one has had time to work) and silent undertreatment (never formally revisiting a patient who is still in pain).",
    refs: [1]
  },
  {
    id: "continue_nsaid",
    type: "terminal",
    label: "Continue the same NSAID, short course; discharge advice and safety-netting",
    meaning:
      "A patient who has met the meaningful-relief threshold continues on the drug and route already chosen — there is no reason, on this evidence, to switch to the other NSAID once one is working. \"Short course\" ties back to the three-day ceiling already named for high-risk patients, and is reasonable practice generally given that the trials behind this algorithm studied short-term, acute-pain use, not maintenance therapy.",
    rationale:
      "Ending on discharge advice and safety-netting — rather than simply \"continue\" — keeps this box from reading as a one-time decision; the patient needs to know what a worsening course would look like after they leave clinical observation.",
    refs: [1]
  },
  {
    id: "no_switch",
    type: "terminal",
    tone: "alarm",
    label: "Do NOT switch to another NSAID",
    sub: "Add paracetamol; consider regional block or titrated opioid; re-evaluate",
    meaning:
      "This is the direct consequence of the review's own central finding: since dexketoprofen and ibuprofen perform equivalently at the group level, a patient who did not respond to one has no strong pharmacological reason to respond to the other — the evidence behind this page gives no basis for an NSAID-to-NSAID switch. The instruction is therefore to add a different analgesic class (paracetamol, a regional block, or a titrated opioid) rather than trial the second NSAID, and to re-evaluate the patient rather than assume the pain is simply refractory to analgesia in general.",
    rationale:
      "This box is stated as an explicit \"do not\" — the same way the absolute contraindications above are — because switching within a drug class that this review found clinically equivalent is a plausible but evidence-unsupported instinct, and naming it directly closes off a pathway the algorithm would otherwise leave ambiguous.",
    refs: [1]
  }
];

const GLOSSARY = [
  { match: "N-ERD", full: "NSAID-exacerbated respiratory disease", def: "A pharmacological (not allergic) reaction to NSAIDs causing acute bronchospasm, often with nasal symptoms, within about two hours of exposure — classically seen alongside chronic rhinosinusitis with nasal polyps and asthma. Ibuprofen cross-reacts in an estimated 60–100% of affected patients." },
  { match: "AKI", full: "acute kidney injury", def: "A sudden drop in kidney function. NSAIDs remove a compensatory renal-prostaglandin mechanism, so AKI (or a low eGFR, or hypovolaemia) is a reason to avoid them rather than merely dose-reduce." },
  { match: "eGFR", full: "estimated glomerular filtration rate", def: "A calculated estimate of kidney filtering capacity (mL/min/1.73 m²). Below 30 is an absolute NSAID contraindication here; 30–59 is treated as a high-risk feature requiring caution rather than avoidance." },
  { match: "CABG", full: "coronary artery bypass grafting", def: "Open-heart bypass surgery. NSAIDs carry a specific, trial-demonstrated cardiovascular hazard when used in the peri-operative period around CABG, independent of the drug's general cardiovascular risk." },
  { match: "SSRI", full: "selective serotonin reuptake inhibitor", def: "An antidepressant class that itself impairs platelet aggregation. Combined with an NSAID, this raises the odds of upper GI bleeding by roughly 75% compared with the NSAID alone." },
  { match: "PPI", full: "proton pump inhibitor", def: "An acid-suppressing drug added alongside an NSAID in patients with GI risk factors (prior ulcer, anticoagulant/antiplatelet use, age) to reduce the chance of NSAID-associated ulceration." },
  { match: "MCID", full: "minimal clinically important difference", def: "The smallest change in a pain score a patient would perceive as meaningful. This page anchors it to roughly 10 mm on a 100 mm visual analogue scale — a slightly conservative rounding of Kelly's empirically measured ≈12 mm minimum clinically significant difference." },
  { match: "VAS", full: "visual analogue scale", def: "A 100 mm line patients mark to rate pain intensity, from \"no pain\" to \"worst pain imaginable\". The standard continuous pain-intensity measure the between-drug effect sizes on this page are anchored to." },
  { match: "NRS", full: "numerical rating scale", def: "An 11-point (0–10) verbal or written pain-intensity scale, used interchangeably with the VAS in some of the trials behind this page. A fall of ≥1.3 points is treated as equivalent to a ≥10 mm VAS fall." }
];
