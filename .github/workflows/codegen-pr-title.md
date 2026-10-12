---
description: Set a conventional commit title and summary on the codegen PR based on its diff
on:
  workflow_run:
    workflows: [Codegen]
    types: [completed]
    branches: [main]
if: ${{ github.event.workflow_run.conclusion == 'success' }}
permissions:
  contents: read
  pull-requests: read
tools:
  github:
    toolsets: [pull_requests, repos]
safe-outputs:
  update-pull-request:
    title: true
    body: true
---

# Describe the codegen PR

Find the open pull request in ${{ github.repository }} whose head branch is `codegen/update` **and whose head repository is `${{ github.repository }}`**. If none exists, stop.

Read the PR diff. Files under `src/es/`, `src/cloud/`, and `src/kibana/` are generated API schemas. Classify the change using the most severe category that applies:

- **Breaking** (`feat!:`): an API, parameter, or metadata type was removed or renamed, or a parameter became required or narrower. (**IMPORTANT:** do not use breaking changes **UNLESS** the package version is 1.0.0 or higher. Pre-1.0 commits should use normal `feat:` prefix.)
- **Feature** (`feat:`): a new API, or a new type of metadata added to APIs.
- **Fix** (`fix:`): corrected definitions or added missing metadata on existing APIs/params.
- Anything else: `chore:`.

Update the PR:

The PR title should be replaced in its entirety with the first conventional commit message. The PR description should consist of the remaining conventional commit messages, with two newlines in between each.
