/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Name, Names, VersionNumber, integer } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesAlias } from './indices.js'

export const IndicesTemplateMapping = z.object({
  aliases: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesAlias)),
  index_patterns: z.array(z.lazy(() => Name)),
  mappings: z.lazy(() => MappingTypeMapping),
  order: z.lazy(() => integer),
  settings: z.record(z.string(), z.any()),
  version: z.lazy(() => VersionNumber).optional()
}).meta({ id: 'IndicesTemplateMapping' })
export type IndicesTemplateMapping = z.infer<typeof IndicesTemplateMapping>

/**
 * Get legacy index templates.
 *
 * Get information about one or more index templates.
 *
 * IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
 * @deprecated
 */
export const IndicesGetTemplateRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list of index template names used to limit the request. Wildcard (`*`) expressions are supported. To return all index templates, omit this parameter or use a value of `_all` or `*`.').optional().meta({ found_in: 'path' }),
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetTemplateRequest' })
export type IndicesGetTemplateRequest = z.infer<typeof IndicesGetTemplateRequest>

export const IndicesGetTemplateResponse = z.record(z.string(), IndicesTemplateMapping).meta({ id: 'IndicesGetTemplateResponse' })
export type IndicesGetTemplateResponse = z.infer<typeof IndicesGetTemplateResponse>
