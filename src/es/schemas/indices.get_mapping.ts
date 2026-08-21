/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, IndexName, Indices } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'

export const IndicesGetMappingIndexMappingRecord = z.object({
  item: z.lazy(() => MappingTypeMapping).optional(),
  mappings: z.lazy(() => MappingTypeMapping)
}).meta({ id: 'IndicesGetMappingIndexMappingRecord' })
export type IndicesGetMappingIndexMappingRecord = z.infer<typeof IndicesGetMappingIndexMappingRecord>

/**
 * Get mapping definitions.
 *
 * For data streams, the API retrieves mappings for the stream’s backing indices.
 */
export const IndicesGetMappingRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetMappingRequest' })
export type IndicesGetMappingRequest = z.infer<typeof IndicesGetMappingRequest>

export const IndicesGetMappingResponse = z.record(z.lazy(() => IndexName), IndicesGetMappingIndexMappingRecord).meta({ id: 'IndicesGetMappingResponse' })
export type IndicesGetMappingResponse = z.infer<typeof IndicesGetMappingResponse>
