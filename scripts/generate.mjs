/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Runs all API generators from elastic-client-generator-js and copies their
 * output into this repo's src/ directories, then lint-fixes each output dir.
 *
 * Usage (local dev):
 *   node scripts/generate.mjs --generator-path /path/to/elastic-client-generator-js
 *
 * Usage (CI — generator repo checked out at GENERATOR_PATH env var):
 *   GENERATOR_PATH=../elastic-client-generator-js node scripts/generate.mjs
 */

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promises as fs } from 'node:fs'
import { spawn } from 'node:child_process'
import { parseArgs } from 'node:util'
import ora from 'ora'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const repoRoot = join(__dirname, '..')
export const srcDir = join(repoRoot, 'src')

const { values: argv } = parseArgs({
  options: {
    'generator-path': { type: 'string' },
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
  return arg
}

function run (cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command "${cmd} ${args.join(' ')}" exited with code ${code}`))
    })
    child.on('error', reject)
  })
}

async function syncDir (src, dest) {
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { recursive: true })
  await Promise.all(
    entries
      .filter(f => f.endsWith('.ts') || !f.includes('.'))
      .map(async (f) => {
        const srcFile = join(src, f)
        const destFile = join(dest, f)
        if (PRESERVE.has(destFile)) return
        const stat = await fs.stat(srcFile).catch(() => null)
        if (!stat || stat.isDirectory()) return
        await fs.mkdir(dirname(destFile), { recursive: true })
        await fs.copyFile(srcFile, destFile)
      })
  )
}

const PRESERVE = new Set([
  join(srcDir, 'index.ts'),
  join(srcDir, 'json-schema.ts'),
  join(srcDir, 'es', 'tools', 'types.ts'),
  join(srcDir, 'kibana', 'tools', 'types.ts'),
  join(srcDir, 'registry.ts'),
])

async function deleteGeneratedTs () {
  const entries = await fs.readdir(srcDir, { recursive: true })
  await Promise.all(
    entries
      .filter(f => f.endsWith('.ts'))
      .map(f => join(srcDir, f))
      .filter(f => !PRESERVE.has(f))
      .map(f => fs.rm(f, { force: true }))
  )
}

// Generators in run order. The 'zod' script calls `npm run clean` internally,
// wiping output/ — so it must come first, before the ab-tools scripts that
// depend on its output.
const generators = [
  {
    name: 'Zod: Elasticsearch',
    npmScript: 'zod',
    outputSubdir: 'es',
    srcSubdir: join('es', 'schemas'),
  },
  {
    name: 'Zod: Cloud',
    npmScript: 'zod-cloud',
    outputSubdir: 'cloud',
    srcSubdir: join('cloud', 'schemas'),
  },
  {
    name: 'Zod: Kibana',
    npmScript: 'zod-kibana',
    outputSubdir: 'kibana',
    srcSubdir: join('kibana', 'schemas'),
  },
  {
    name: 'AB tools: Elasticsearch',
    npmScript: 'ab-tools-es',
    outputSubdir: join('ab-tools', 'es'),
    srcSubdir: join('es', 'tools'),
  },
  {
    name: 'AB tools: Kibana',
    npmScript: 'ab-tools-kibana',
    outputSubdir: join('ab-tools', 'kibana'),
    srcSubdir: join('kibana', 'tools'),
  },
  {
    name: 'JSON Schema: Elasticsearch',
    npmScript: 'json-schema-es',
    outputSubdir: join('json-schema', 'elasticsearch'),
    srcSubdir: join('es', 'json'),
    lint: false,
  },
  {
    name: 'JSON Schema: Kibana',
    npmScript: 'json-schema-kibana',
    outputSubdir: join('json-schema', 'kibana'),
    srcSubdir: join('kibana', 'json'),
    lint: false,
  },
  {
    name: 'JSON Schema: Cloud',
    npmScript: 'json-schema-cloud',
    outputSubdir: join('json-schema', 'cloud'),
    srcSubdir: join('cloud', 'json'),
    lint: false,
  },
]

export default async function generate (generatorPath) {
  const log = ora('Starting codegen').start()

  log.text = `Installing dependencies in ${generatorPath}`
  await run('npm', ['install', '--include=dev'], generatorPath)

  log.text = 'Deleting generated .ts files'
  await deleteGeneratedTs()

  for (const { name, npmScript, outputSubdir, srcSubdir, lint = true } of generators) {
    log.text = `Running ${name} generator`
    await run('npm', ['run', npmScript], generatorPath)

    const dest = join(srcDir, srcSubdir)
    log.text = `Syncing ${name} output → src/${srcSubdir}/`
    await syncDir(join(generatorPath, 'output', outputSubdir), dest)

    if (lint) {
      log.text = `Lint-fixing ${name} output`
      await run('node_modules/.bin/eslint', ['--cache', '--fix', dest], repoRoot)
    }
  }

  log.succeed('Codegen complete. src/ updated.')
}

const isMain = import.meta.url === `file://${process.argv[1]}`
if (isMain) {
  process.on('unhandledRejection', (err) => {
    console.error(err)
    process.exit(1)
  })

  generate(resolveGeneratorPath()).catch((err) => {
    console.error(err)
    process.exit(2)
  })
}
