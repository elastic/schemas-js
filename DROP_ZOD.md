# Plan: drop Zod from the Elasticsearch tools runtime

## Goal

Remove Zod from the runtime import graph of `@elastic/schemas/es/tools/apis/*`, and remove duplicated schema content from `@elastic/schemas/(kibana|cloud)/tools/apis/*` by reading in the static .json files already generated in `@elastic/schemas/(es|kibana|cloud)/json/*`

Target end state:
- `src/(es|kibana|cloud)/tools/apis/*` import the static JSON schemas already generated in `src/(es|kibana|cloud)/json/*` to populate each API's `input` property
- static JSON schema files in `src/(es|kibana|cloud)/json/*` are updated to include any missing metadata, properties, etc (e.g. x-found-in) if it is only available via Zod schemas
- the `input` property of each `*ApiDefinition` object is changed to an async function so thta JSON schemas are lazily loaded only when needed

## Approach

- make changes necessary to `../elastic-client-generator-js/json-schema|ab-tools)/` to ensure these updates are not lost when code is regenerated.
- rerun `scripts/generate.mjs` to validate the code generation changes work
- validate that the target end state is met, iterating until complete
- strip any code that is now dead
- add or update unit tests to validate the new expectations are met
