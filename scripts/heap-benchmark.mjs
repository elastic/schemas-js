/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Measures heap retained by importing a sample of Zod schemas.
// Requires a completed build; imports resolve through package.json `exports`.
// Usage: npm run build && node --expose-gc scripts/heap-benchmark.mjs
// Compare revisions: run on each revision and diff the `retained` numbers.

// ponytail: fixed module list, not CLI args; edit here if the sample needs to change.
const MODULES = [
  '@elastic/schemas/es/schemas/search.js',
  '@elastic/schemas/es/schemas/_types.aggregations.js',
  '@elastic/schemas/es/schemas/_types.query_dsl.js',
  '@elastic/schemas/es/schemas/indices.js',
  '@elastic/schemas/kibana/schemas/_index.js',
]

async function settle () {
  for (let i = 0; i < 3; i++) {
    global.gc()
    await new Promise(resolve => setTimeout(resolve, 50))
  }
}

if (typeof global.gc !== 'function') {
  console.error('error: run with --expose-gc')
  process.exit(1)
}

await settle()
const before = process.memoryUsage()

const loaded = []
for (const mod of MODULES) {
  loaded.push(await import(mod))
}

await settle()
const after = process.memoryUsage()

// keep imports alive across measurement
if (loaded.length !== MODULES.length) throw new Error('unreachable')

const mb = bytes => (bytes / 1024 / 1024).toFixed(2)
console.log(JSON.stringify({
  node: process.version,
  modules: MODULES.length,
  exports: loaded.reduce((n, m) => n + Object.keys(m).length, 0),
  retainedHeapMB: Number(mb(after.heapUsed - before.heapUsed)),
  retainedExternalMB: Number(mb(after.external - before.external)),
  heapUsedMB: Number(mb(after.heapUsed)),
  rssMB: Number(mb(after.rss)),
}, null, 2))
