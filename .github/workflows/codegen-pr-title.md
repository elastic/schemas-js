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
  copilot-requests: write
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

Read the PR changes. The diff is almost always over GitHub's 300-file limit, so do not request the full diff: page through the changed files instead (`get_pull_request_files`), then read the patches of the files that matter. Files under `src/es/`, `src/cloud/`, `src/kibana/`, and `src/serverless/` are generated API schemas. Within each, `schemas/` holds the Zod schemas, `json/` and `tools/` mirror them per API, and `_index.ts` files only re-export. Describe each API change once, from its `schemas/` file, and never list `json/`, `tools/`, or `_index.ts` files separately.

Write one conventional commit message per distinct change. Name the API (e.g. `data_recovery.get_recovery`) or the specific field, and say what changed in terms a library user cares about (new, removed, renamed, now optional/nullable, unknown keys now preserved). Group related APIs into one message, scope each message by area (`es`, `kibana`, `cloud`, `serverless`), and never write a message that only says "regenerate" or "update schemas". Classify each message using the most severe category that applies:

- **Breaking** (`feat!:`): an API, parameter, or metadata type was removed or renamed, or a parameter became required or narrower. (**IMPORTANT:** do not use breaking changes **UNLESS** the package version is 1.0.0 or higher. Pre-1.0 commits should use normal `feat:` prefix.)
- **Feature** (`feat:`): a new API, or a new type of metadata added to APIs.
- **Fix** (`fix:`): corrected definitions or added missing metadata on existing APIs/params.
- Anything else: `chore:`.

Update the PR:

The PR title should be replaced in its entirety with the most severe conventional commit message (a single line, no body). The PR description should consist of every other conventional commit message, most severe first, with a blank line between each and nothing else: no heading, no list markers, no summary prose. If the only change is an automated no-op or formatting, use `chore: regenerate API schemas` as the title and leave the description empty.
