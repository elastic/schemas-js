/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type { ApiRegistry, ApiRegistryMeta } from '../../registry.ts'

import type { JsonSchemaObject } from '../../json-schema.ts'

/**
 * Valid HTTP methods for Elasticsearch API requests.
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD'

export interface EsApiDefinition {
  /** kebab-case command name (e.g. `"health"`, `"create"`, `"put-mapping"`) */
  name: string
  /**
   * ES namespace (e.g. `"cat"`, `"indices"`) -- determines the parent group in the command tree.
   * When omitted, the command is registered as a direct leaf of the `es` group.
   */
  namespace?: string
  /** human-readable description for `--help` text */
  description: string
  /** HTTP method */
  method: HttpMethod
  /** URL path template; path parameters use `{param}` syntax */
  path: string
  /**
   * JSON Schema object describing all accepted parameters.
   * Every top-level property under `properties` must carry an `x-found-in` annotation:
   * - `"path"` → interpolated into the URL path template
   * - `"query"` → sent as a URL querystring parameter
   * - `"body"` → included in the request body (default when absent)
   */
  input?: JsonSchemaObject
  /** how to handle the response body; defaults to `"json"` */
  responseType?: 'json' | 'text'
  /** how to serialize the request body; defaults to `"json"` */
  bodyFormat?: 'json' | 'ndjson'
}
