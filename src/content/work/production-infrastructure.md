---
title: "Infrastructure that stays up"
blurb: "Terraform-defined AWS and Azure infrastructure with Temporal orchestration, built for high availability on mission-critical financial services."
org: "Koi"
role: "Founding Engineer"
period: "2024 — present"
stack: ["Terraform", "Temporal", "AWS", "Azure", "GitHub Actions", "Hasura", "PostgreSQL"]
order: 2
---

## Context

Founding-engineer infrastructure has a specific failure mode: it gets built for the company
that exists today and quietly becomes the reason the company that exists in eighteen months
cannot ship. The work here was to build something a small team could operate now and a larger
team could inherit later.

<!-- TODO — what state was the infrastructure in when you arrived?
     Was there anything to inherit, or was this genuinely from zero? -->

## Constraints

- **Mission-critical.** Customers' financial operations depend on these services being
  available, which sets the floor for redundancy and recovery.
- **Two clouds.** AWS for the core platform, Azure where customer or integration requirements
  demanded it — so identity, networking and deployment had to work in both.
- **Small team.** Every piece of infrastructure had to justify its operational cost.

<!-- TODO — availability targets? Recovery objectives? Compliance-driven requirements? -->

## What I built

**Infrastructure as code, all of it.** Terraform defines the AWS and Azure estate — networking,
IAM, compute, data stores. Nothing important exists because someone once clicked a button in a
console, which means environments can be reasoned about, reviewed and rebuilt.

**Temporal for anything that takes longer than a request.** Long-running, multi-step processes
that must survive restarts, retries and partial failure are workflows rather than a chain of
queues and cron jobs stitched together with hope. Failure handling becomes explicit and
inspectable instead of emergent.

**CI/CD on GitHub Actions.** Tests, infrastructure plans and deploys run on every change, so
the path to production is the same path every time.

<!-- TODO — the specifics are what make this credible:
     · Multi-AZ? Multi-region? What's the actual availability posture?
     · How are secrets managed?
     · What does the environment topology look like (dev/staging/prod)?
     · An architecture diagram would carry a lot of weight here. -->

## Decisions

**Temporal over a queue-and-cron architecture.** Queues make the happy path easy and the
failure path invisible. For workflows where a partial failure means a financial document is
half-processed, durable execution with explicit compensation was worth the operational
overhead of running Temporal.

**Terraform from day one, before it was painful.** Adopting IaC early is cheap; retrofitting it
onto a live estate is not. This was a deliberate up-front cost.

<!-- TODO — Temporal self-hosted or Cloud? Why?
     Any decision you'd make differently now, with two years of running it? -->

## Outcome

High availability for mission-critical services, and an estate that can be reviewed, rebuilt
and handed to new engineers — which became the foundation the SOC 2 work was built on.

<!-- TODO — uptime numbers? Deploy frequency? Time-to-recovery?
     Anything measurable beats "high availability". -->
