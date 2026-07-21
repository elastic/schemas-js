/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { buildRequest, createRegistry } from '../src/registry.ts'
import { UnknownApiError } from '../src/registry.ts'
import type { ApiRegistryDefinition, ApiRegistryMeta } from '../src/registry.ts'

// ─────────────────────────────────────────────────────────────────────────────
// buildRequest

const searchDef: ApiRegistryDefinition = {
  name: 'search',
  namespace: undefined,
  description: 'Search documents',
  method: 'POST',
  path: '/{index}/_search',
  input: {
    type: 'object',
    properties: {
      index: { type: 'string', 'x-found-in': 'path' },
      q: { type: 'string', 'x-found-in': 'query' },
      size: { type: 'number', 'x-found-in': 'query' },
      query: { type: 'object', 'x-found-in': 'body' },
    },
  },
}

const bulkDef: ApiRegistryDefinition = {
  name: 'bulk',
  description: 'Bulk indexing',
  method: 'POST',
  path: '/_bulk',
  bodyFormat: 'ndjson',
  input: {
    type: 'object',
    properties: {
      operations: { type: 'array', 'x-found-in': 'body' },
    },
  },
}

describe('buildRequest', () => {
  it('interpolates path params', () => {
    expect(buildRequest(searchDef, { index: 'my-index', query: { match_all: {} } }).path).toBe('/my-index/_search')
  })

  it('puts query params in querystring', () => {
    expect(buildRequest(searchDef, { index: 'logs', q: 'error', size: 10 }).querystring).toEqual({ q: 'error', size: 10 })
  })

  it('puts body params in body', () => {
    expect(buildRequest(searchDef, { index: 'logs', query: { term: { status: 'active' } } }).body).toEqual({ query: { term: { status: 'active' } } })
  })

  it('encodes path param values', () => {
    expect(buildRequest(searchDef, { index: 'my index' }).path).toBe('/my%20index/_search')
  })

  it('skips undefined values', () => {
    expect(buildRequest(searchDef, { index: 'logs', q: undefined }).querystring).toBeUndefined()
  })

  it('does not include empty querystring', () => {
    expect(buildRequest(searchDef, { index: 'logs', query: {} }).querystring).toBeUndefined()
  })

  it('puts ndjson body in bulkBody', () => {
    const req = buildRequest(bulkDef, { operations: ['line1', 'line2'] })
    expect(req.bulkBody).toEqual({ operations: ['line1', 'line2'] })
    expect(req.body).toBeUndefined()
  })

  it('uses querystring for unannotated params', () => {
    const def: ApiRegistryDefinition = { name: 'test', description: 'Test', method: 'GET', path: '/_test' }
    expect(buildRequest(def, { unknown: 'value' }).querystring).toEqual({ unknown: 'value' })
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// createRegistry

const manifest: readonly ApiRegistryMeta[] = [
  { id: 'indices.create', name: 'create', namespace: 'indices', description: 'Create index', namespaceFile: 'indices_create' },
  { id: 'search', name: 'search', namespace: null, description: 'Search', namespaceFile: 'search' },
  { id: 'query-rules.delete_rule', name: 'delete-rule', namespace: 'query-rules', description: 'Delete a query rule', namespaceFile: 'query_rules_delete_rule' },
]

const indicesCreateDef: ApiRegistryDefinition = {
  name: 'create', namespace: 'indices', description: 'Create index', method: 'PUT', path: '/{index}',
  input: { type: 'object', properties: { index: { type: 'string', 'x-found-in': 'path' } } },
}
const searchApiDef: ApiRegistryDefinition = { name: 'search', description: 'Search', method: 'POST', path: '/_search' }
const deleteRuleDef: ApiRegistryDefinition = { name: 'delete-rule', namespace: 'query-rules', description: 'Delete a query rule', method: 'DELETE', path: '/_query_rules/{ruleset_id}/_rule/{rule_id}' }

const loader = async (namespaceFile: string): Promise<ApiRegistryDefinition[]> => {
  if (namespaceFile === 'indices_create') return [indicesCreateDef]
  if (namespaceFile === 'search') return [searchApiDef]
  if (namespaceFile === 'query_rules_delete_rule') return [deleteRuleDef]
  return []
}

describe('createRegistry', () => {
  it('exposes manifest', () => {
    const registry = createRegistry(manifest, loader)
    expect(registry.manifest.length).toBe(3)
    expect(registry.manifest[0]!.id).toBe('indices.create')
  })

  it('loadApi resolves a namespaced API', async () => {
    const registry = createRegistry(manifest, loader)
    const loaded = await registry.loadApi('indices.create')
    expect(loaded.definition.name).toBe('create')
    expect(loaded.definition.namespace).toBe('indices')
  })

  it('loadApi returns a working buildRequest', async () => {
    const registry = createRegistry(manifest, loader)
    const loaded = await registry.loadApi('indices.create')
    const req = loaded.buildRequest({ index: 'my-index' })
    expect(req.path).toBe('/my-index')
    expect(req.method).toBe('PUT')
  })

  it('loadApi resolves a root-level API', async () => {
    const registry = createRegistry(manifest, loader)
    const loaded = await registry.loadApi('search')
    expect(loaded.definition.name).toBe('search')
  })

  it('loadApi throws UnknownApiError for unknown id', async () => {
    const registry = createRegistry(manifest, loader)
    const err = await registry.loadApi('nonexistent').catch(e => e)
    expect(err).toBeInstanceOf(UnknownApiError)
    expect((err as UnknownApiError).id).toBe('nonexistent')
  })

  it('loadApi resolves multi-word API where id is snake_case but definition name is kebab-case', async () => {
    const registry = createRegistry(manifest, loader)
    const loaded = await registry.loadApi('query-rules.delete_rule')
    expect(loaded.definition.name).toBe('delete-rule')
    expect(loaded.definition.namespace).toBe('query-rules')
  })
})
