## Most code is generated

The majority of code in this repo is generated from API specs. Whenever a change is needed to a generated file, the actual fix should be made upstream in the elastic-client-generator-js repo and then codegen should be rerun. The repo is very likely available in an adjacent directory to this repo in most dev environments. **Always** check if `../elastic-client-generator-js` exists and make edits there if it's available, and the changes don't clobber other in-progress work. Otherwise, respond with instructions for what changes must be made there.

## Slow commands

The codebase is quite large, and almost entirely generated, from specs for over 1200 APIs. Commands like the following will often take several minutes to complete:
- `npm run build`
- `npm test`
- `tsc --noEmit`

Avoid running them if you can provide a more targeted command that validates your exact changes, by e.g. providing paths or globs to files that need testing.

If running the full command is unavoidable, **do not** run with `timeout [seconds] [command]` or equivalent. It will almost always run longer than your first guess at a time estimate. Rerunning then takes more time and resources than if you'd not applied a timeout at all, and thus should be avoided.

## Avoiding stuck/OOM builds

- `npm run build` and full-project `tsc` type-checks are heavy (large generated
  `src/` tree). They already run with `--max-old-space-size=8192`; without
  that flag, plain `tsc --noEmit -p tsconfig.json` on this repo can OOM.
- Always run builds/typechecks with a timeout (e.g. the `timeout` param on
  `bash` tool calls, or `timeout 300 npm run build`). Don't run them
  unbounded and wait indefinitely.
- If a build/typecheck hangs or is aborted, don't retry the same full-repo
  command. Prefer faster, narrower checks instead:
  - `npm run test:lint` (eslint, fast) and `npm run test:unit` (vitest, fast)
    catch most issues without a full build.
  - Typecheck a single changed file/module instead of the whole project when
    possible.
  - If a full build/typecheck is genuinely required and still fails/OOMs,
    report that and move on rather than repeating it.
