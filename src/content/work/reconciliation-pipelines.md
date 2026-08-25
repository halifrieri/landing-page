---
title: "Reconciliation at Koi"
blurb: "End-to-end pipelines on AWS Bedrock that parse, normalize and validate high-variance financial documents at >98% accuracy."
org: "Koi"
role: "Founding Engineer"
period: "2024 — present"
stack: ["AWS Bedrock", "Python", "Temporal", "PostgreSQL", "OCR/ETL"]
outcome: ">98% accuracy"
order: 1
---

## Context

Financial reconciliation is a matching problem wearing a document problem's clothing. The
underlying question is simple — does this statement agree with that ledger — but the inputs
arrive as PDFs, scans and exports that no two counterparties format the same way.

At Koi I architected the pipelines that turn that mess into structured, trustworthy data:
parsing, normalization and validation of high-variance financial documents, end to end, on
AWS Bedrock.

<!-- TODO — replace the paragraph above with the real story. Worth answering:
     · What did the business actually need this to unblock?
     · Who was doing this work before the pipeline existed, and how long did it take them?
     · What made these documents "high-variance" in practice? Name the formats. -->

## Constraints

- **Variance is the product.** Every counterparty formats statements differently, and the
  format changes without warning. Anything that assumed a fixed schema would break in a week.
- **Financial data has no acceptable silent-failure mode.** A wrong number that looks right is
  far more expensive than a document the pipeline refuses to process.
- **Founding-team scale.** The design had to be operable by a very small team, which ruled out
  anything that needed a dedicated on-call rotation to stay upright.

<!-- TODO — the real constraints are more interesting than the generic ones.
     Regulatory requirements? Latency or volume targets? Customer commitments? -->

## What I built

A staged pipeline where each step is independently retryable and independently inspectable:

1. **Ingest & classify** — identify what a document is before deciding how to read it.
2. **Extract** — OCR and LLM-based parsing via Bedrock, producing structured candidates
   rather than final answers.
3. **Normalize** — map counterparty-specific vocabulary onto a single internal schema.
4. **Validate** — check the extraction against invariants that must hold for the numbers to
   be real, and route anything that fails to a human instead of guessing.
5. **Reconcile** — match the normalized records and surface the exceptions.

Orchestration runs on Temporal, so a document that fails at step four resumes at step four
rather than replaying an expensive extraction from the beginning.

<!-- TODO — this is the section that earns the page. Consider adding:
     · A small architecture diagram (inline SVG renders fine in this markdown).
     · Which Bedrock models, and why those.
     · How the validation layer actually works — that's the interesting part.
     · What "human in the loop" means concretely here. -->

## Decisions

**LLM extraction over a template library.** Templates are more accurate on documents you have
already seen and useless on documents you have not. Given that new counterparty formats were a
constant, generalization mattered more than per-document precision — provided extraction was
paired with validation strong enough to catch what generalization got wrong.

**Validation as a separate stage, not a flag on the extractor.** Keeping the check independent
of the thing being checked means a model change cannot quietly weaken the guardrail.

**Bedrock over calling a model provider directly.** Data residency and access control sat
inside the AWS boundary we were already securing for SOC 2, rather than alongside it.

<!-- TODO — what did you choose *against*, and what did it cost you?
     The tradeoffs you rejected say as much as the ones you took. -->

## Outcome

Better than 98% accuracy on high-variance financial documents, with the remainder routed to
review rather than silently accepted.

<!-- TODO — accuracy is the engineering number. What's the business number?
     Hours saved, volume handled, headcount not hired, deals unblocked? -->
