# Agent notes

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
