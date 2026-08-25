---
title: "Zero to SOC 2 Type 2"
blurb: "Led an early-stage company through SOC 2 Type 2 — secure AWS and Azure architecture, automated vulnerability remediation, and data privacy standards that held up under audit."
org: "Koi"
role: "Founding Engineer"
period: "2024 — present"
stack: ["AWS Inspector", "Vanta", "IAM", "VPC / WAF", "Azure APIM", "CloudWatch"]
outcome: "SOC 2 Type 2"
order: 3
---

## Context

Enterprise finance customers do not sign with a vendor that cannot answer a security
questionnaire. SOC 2 Type 2 was not a compliance checkbox — it was the precondition for the
deals the company was trying to close.

Type 2 is the harder half of that. Type 1 asks whether controls are designed correctly on a
given day; Type 2 asks whether they actually operated, continuously, across an observation
window. You cannot cram for it.

<!-- TODO — worth naming:
     · What triggered the push — a specific deal, a customer requirement, a board ask?
     · How long was the observation window, and when did you certify?
     · Who else was involved, and what did you own personally? -->

## Constraints

- **Continuous evidence, not a snapshot.** Every control had to produce a durable audit trail
  for the full observation period.
- **No dedicated security team.** The controls had to be automated, because there was nobody
  whose full-time job was to perform them by hand.
- **Sensitive financial data.** The privacy and encryption standards had to be real, not
  paperwork — this was customer money moving through the system.

## What I built

**Secure-by-default cloud architecture.** Network segmentation, least-privilege IAM, WAF at
the edge, encryption in transit and at rest, and audit logging across both the AWS and Azure
estates — implemented in Terraform, so the control *is* the infrastructure definition rather
than a document describing it.

**Automated vulnerability remediation.** AWS Inspector for continuous scanning, wired into a
remediation workflow so findings became tracked, time-bound work instead of a report nobody
read.

**Vanta for continuous control monitoring.** Evidence collection runs continuously against
live infrastructure, so audit readiness is a steady state rather than a quarterly fire drill.

**Data governance for sensitive datasets.** Classification, access controls and retention
standards for financial data, with access grants that expire.

<!-- TODO — the most convincing detail here is the automation:
     · What does the remediation workflow actually do end to end?
     · How are access reviews handled?
     · What broke during the audit, and how did you fix it? Auditors love that story
       and so do engineering leaders — it shows the controls were real. -->

## Decisions

**Controls as infrastructure code, not policy documents.** A control that lives in Terraform
is enforced on every apply. A control that lives in a Notion page is enforced when someone
remembers. For a team this size, the difference is whether compliance survives a busy quarter.

**Automate evidence collection before the observation window opens.** The expensive version of
Type 2 is reconstructing a year of evidence at the end. Instrumenting first made the audit an
export rather than an excavation.

<!-- TODO — what would you tell another founding engineer facing this?
     That advice is genuinely valuable and very few people can give it. -->

## Outcome

The company went from early-stage to **SOC 2 Type 2** certified, with security controls that
run automatically rather than depending on anyone remembering to run them.

<!-- TODO — what did certification unlock commercially?
     "Unblocked enterprise deals" is good; a named tier of customer is better. -->
