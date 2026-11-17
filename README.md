# Client implementation

A client launch with clear owners, dependencies and a defensible go-live decision.

**[Open the interactive project](https://ashabakercv.github.io/projects/client-implementation/demo/)**

## Scenario
Harbor Learning, a fictional education software client, is moving from signed agreement to an initial launch. Several teams own different pieces, and completion percentages alone can hide a blocking task.

## Design decision
Use mandatory launch gates alongside weighted task completion. A completed training task cannot compensate for an unresolved critical data or access issue.

## Explore the work
- [Launch Plan](docs/launch-plan.md)
- [Uat Checklist](docs/uat-checklist.md)
- [Status Update](docs/status-update.md)
- [Fictional source data](data/fixtures.json)
- [Functional logic](src/model.mjs)
- [Functional checks](tests/model.test.mjs)

## Run locally
Use Node.js 22 or later to run `npm test`. No dependency installation is required. To view the demo, serve this repository over local HTTP with any static server and open `/demo/`. For example: `python3 -m http.server 8000` followed by `http://localhost:8000/demo/`.

## Scope and limitations
This is a browser-based demonstration with synthetic tasks. It is not connected to Salesforce or a live client environment.

## Contribution and provenance
This is an AI-assisted personal portfolio demonstration prepared for Asha Baker. The scenario, source records and sample responses are fictional. It is separate from employer deliverables and does not imply a production deployment, client outcome or prior employment in software engineering. Professional experience is described on the portfolio home page. Asha can use the documentation and source files to review, adapt and explain the implementation.

## Tools and relevant work
Project planning / UAT / Stakeholder communication. Relevant areas: Implementation, Operations.

## Version history
Version 1.0 introduces the documented scenario, browser demonstration, source data and functional checks. Subsequent changes should record the user need, change made and verification performed. GitHub Actions results should be described as passing only after a real workflow run succeeds.

## Reuse
The code and documentation are available for portfolio review. No license granting reuse has been selected; contact the owner for permission.
