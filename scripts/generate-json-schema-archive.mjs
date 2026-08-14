/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Standalone script that produces a single gzip archive containing JSON Schema
 * artifacts for:
 *
 *   - Elasticsearch "stack" for every 9.x minor version branch of
 *     elastic/elasticsearch-specification (e.g. 9.0, 9.1, 9.2, ...)
 *   - Kibana "stack" for that same set of 9.x minor versions, sourced from the
 *     per-branch generated OpenAPI spec in the elastic/kibana repository itself
 *     (oas_docs/output/kibana.yaml on each branch).
 *
 * Serverless is intentionally excluded; this archive only covers versioned
 * (stack) schemas.
 *
 * It relies on the code generators that live in elastic-client-generator-js,
 * so a checkout of that repo must be available (see --generator-path).
 *
 * Usage:
 *   node scripts/generate-json-schema-archive.mjs \
 *     --generator-path /path/to/elastic-client-generator-js \
 *     --versions 9.0,9.1,9.2 \
 *     [--out ./json-schema-archive.tar.gz]
 *
 * GENERATOR_PATH env var may be used instead of --generator-path.
 */

import { mkdir, mkdtemp, cp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { parseArgs } from 'node:util'
import { spawn } from 'node:child_process'

const { values: argv } = parseArgs({
  options: {
    'generator-path': { type: 'string' },
    out: { type: 'string' },
    versions: { type: 'string' },
  },
})

function resolveGeneratorPath () {
  const arg = argv['generator-path'] ?? process.env.GENERATOR_PATH
  if (arg == null) {
    console.error(
      'Error: --generator-path <dir> or GENERATOR_PATH env var is required.\n' +
      'Point it at a checked-out clone of elastic-client-generator-js.'
    )
    process.exit(1)
  }
  return path.resolve(arg)
}

const GENERATOR_PATH = resolveGeneratorPath()
const OUT_FILE = path.resolve(argv.out ?? path.join(process.cwd(), 'json-schema-archive.tar.gz'))
const MINOR_VERSION_RE = /^[89]\.\d+$/

function run (cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command "${cmd} ${args.join(' ')}" exited with code ${code}`))
    })
    child.on('error', reject)
  })
}

/** Parses --versions, rejecting anything that isn't an 8.x or 9.x minor version. */
function parseVersions () {
  const versions = (argv.versions ?? '').split(',').map(v => v.trim()).filter(Boolean)
  if (versions.length === 0) {
    console.error('Error: --versions <8.x|9.x,...> is required.')
    process.exit(1)
  }
  const invalid = versions.filter(v => !MINOR_VERSION_RE.test(v))
  if (invalid.length > 0) {
    console.error(`Error: invalid version(s): ${invalid.join(', ')}. Expected minor versions like 9.0, 9.1.`)
    process.exit(1)
  }
  return versions
}

/** Runs a generator's own `json-schema-*` npm script for one version, then moves its fixed output dir to `dir`. */
async function generateStackVersion (npmScript, outputSubdir, version, dir) {
  const extraArgs = npmScript === 'json-schema-es' ? ['--stack-only'] : []
  await run('npm', ['run', npmScript, '--', '--version', version, ...extraArgs], GENERATOR_PATH)
  await mkdir(path.dirname(dir), { recursive: true })
  const src = path.join(GENERATOR_PATH, 'output', 'json-schema', outputSubdir)
  await cp(src, dir, { recursive: true })
  await rm(src, { recursive: true, force: true })
}

async function main () {
  console.log(`Installing dependencies in ${GENERATOR_PATH}`)
  await run('npm', ['install', '--include=dev'], GENERATOR_PATH)

  const workDir = await mkdtemp(path.join(tmpdir(), 'json-schema-archive-'))

  try {
    const versions = parseVersions()
    console.log(`Generating versions: ${versions.join(', ')}`)

    for (const version of versions) {
      const esVersionDir = path.join(workDir, 'elasticsearch', version)
      console.log(`Generating Elasticsearch ${version} JSON Schema...`)
      await generateStackVersion('json-schema-es', 'elasticsearch', version, esVersionDir)

      const kibanaVersionDir = path.join(workDir, 'kibana', version)
      console.log(`Generating Kibana ${version} JSON Schema...`)
      await generateStackVersion('json-schema-kibana', 'kibana', version, kibanaVersionDir)
    }

    await mkdir(path.dirname(OUT_FILE), { recursive: true })
    console.log(`Archiving + gzipping everything into ${OUT_FILE}...`)
    await run('tar', ['-czf', OUT_FILE, '-C', workDir, '.'], workDir)

    console.log(`Done. Wrote ${OUT_FILE}`)
  } finally {
    await rm(workDir, { recursive: true, force: true })
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
