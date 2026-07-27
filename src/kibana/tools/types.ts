/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type { ApiRegistry, ApiRegistryMeta } from '../../registry.ts'

import type { JsonSchemaObject } from '../../json-schema.ts'

/** Valid HTTP methods for Kibana API requests. */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD'

/**
 * Declarative description of a single Kibana API endpoint.
 */
export interface KbApiDefinition {
  /** kebab-case command name (e.g. `"get"`, `"create"`) */
  name: string
  /** Kibana namespace (e.g. `"data-views"`, `"alerting"`) -- determines the parent group in the command tree. */
  namespace: string
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
  /** When 'ndjson', the success response is newline-delimited JSON (parsed into an array). */
  responseType?: 'ndjson'
  /** Marks an operation as destructive (delete, update, etc.). */
  destructive: boolean
}
