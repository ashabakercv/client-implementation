# Launch acceptance checks

| Test | Procedure | Expected result | Launch treatment |
| --- | --- | --- | --- |
| UAT-01 | Sign in as a test learner | Learner sees only the assigned cohort | Required |
| UAT-02 | Sign in as an administrator | Approved administration functions are available | Required |
| UAT-03 | Load the sample enrollment file twice | Duplicates are identified and held for review | Required |
| UAT-04 | Submit a record without a required field | Clear validation message; incomplete record is not accepted | Required |
| UAT-05 | Complete a practice workflow using the job aid | Administrator can complete it and locate escalation guidance | Required |
| UAT-06 | Compare the final dashboard with source counts | Counts reconcile and exceptions are explained | Required |

Record actual results, evidence location, tester and date. An expected result is not a recorded pass. The demo task fixtures exercise the readiness calculation; they do not establish that these platform tests were performed.

## Acceptance decision
The sponsor signs only after required checks pass or an explicitly documented exception is approved. Critical unresolved access or data issues block launch. Include support ownership, known issues, open actions and the first post-launch review date in the handoff.
