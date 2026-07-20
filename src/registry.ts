/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ApiRegistryMeta {
  readonly id: string
  readonly name: string
  readonly namespace: string | null
  readonly description: string
  readonly namespaceFile: string
}

export interface ApiRequest {
  readonly method: string
  readonly path: string
  readonly querystring?: Record<string, unknown>
  readonly body?: unknown
  readonly bulkBody?: unknown
  readonly multipartFields?: Record<string, string>
}

export interface ApiRegistryDefinition {
  readonly name: string
  readonly namespace?: string | null
  readonly description: string
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD'
  readonly path: string
  readonly input?: Record<string, unknown>
  readonly bodyFormat?: 'json' | 'ndjson'
  readonly responseType?: 'json' | 'text' | 'ndjson'
}

export interface LoadedApi {
  readonly definition: ApiRegistryDefinition
  buildRequest: (input: Record<string, unknown>) => ApiRequest
}

export interface ApiRegistry {
  readonly manifest: readonly ApiRegistryMeta[]
  loadApi(id: string): Promise<LoadedApi>
}

export class UnknownApiError extends Error {
  readonly id: string
  constructor (id: string) {
    super(`Unknown API: ${id}`)
    this.id = id
    this.name = 'UnknownApiError'
  }
}

export function buildRequest (
  definition: ApiRegistryDefinition,
  input: Record<string, unknown>
): ApiRequest {
  let path = definition.path
  const querystring: Record<string, unknown> = {}
  const body: Record<string, unknown> = {}

  const props = (definition.input?.properties ?? {}) as Record<string, Record<string, unknown>>

  for (const [key, value] of Object.entries(input)) {
    if (value === undefined) continue
    const propSchema = props[key]
    const foundIn = propSchema?.['x-found-in']

    if (foundIn === 'path') {
      path = path.replace(`{${key}}`, encodeURIComponent(String(value)))
    } else if (foundIn === 'query') {
      querystring[key] = value
    } else if (foundIn === 'body') {
      body[key] = value
    } else {
      querystring[key] = value
    }
  }

  const result: {
    method: string
    path: string
    querystring?: Record<string, unknown>
    body?: unknown
    bulkBody?: unknown
  } = { method: definition.method, path }

  if (Object.keys(querystring).length > 0) result.querystring = querystring

  if (definition.bodyFormat === 'ndjson') {
    if (Object.keys(body).length > 0) result.bulkBody = body
  } else if (Object.keys(body).length > 0) {
    result.body = body
  }

  return result
}

export function createRegistry (
  manifest: readonly ApiRegistryMeta[],
  loader: (namespaceFile: string) => Promise<ApiRegistryDefinition[]>
): ApiRegistry {
  return {
    manifest,
    async loadApi (id: string): Promise<LoadedApi> {
      const meta = manifest.find((m) => m.id === id)
      if (meta == null) throw new UnknownApiError(id)

      const definitions = await loader(meta.namespaceFile)
      const definition = definitions.find((d) => {
        const defId = d.namespace != null ? `${d.namespace}.${d.name}` : d.name
        const metaId = meta.namespace != null ? `${meta.namespace}.${meta.name}` : meta.name
        return defId === metaId
      })
      if (definition == null) throw new UnknownApiError(id)

      return {
        definition,
        buildRequest: (input: Record<string, unknown>): ApiRequest =>
          buildRequest(definition, input),
      }
    },
  }
}
