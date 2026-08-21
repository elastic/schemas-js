/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Fields, Indices, ShardsOperationResponseBase } from './_types.js'

/**
 * Clear the cache.
 *
 * Clear the cache of one or more indices.
 * For data streams, the API clears the caches of the stream's backing indices.
 *
 * By default, the clear cache API clears all caches.
 * To clear only specific caches, use the `fielddata`, `query`, or `request` parameters.
 * To clear the cache only of specific fields, use the `fields` parameter.
 */
export const IndicesClearCacheRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  fielddata: z.boolean().describe('If `true`, clears the fields cache. Use the `fields` parameter to clear the cache of specific fields only.').optional().meta({ found_in: 'query' }),
  fields: z.lazy(() => Fields).describe('Comma-separated list of field names used to limit the `fielddata` parameter.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  query: z.boolean().describe('If `true`, clears the query cache.').optional().meta({ found_in: 'query' }),
  request: z.boolean().describe('If `true`, clears the request cache.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesClearCacheRequest' })
export type IndicesClearCacheRequest = z.infer<typeof IndicesClearCacheRequest>

export const IndicesClearCacheResponse = ShardsOperationResponseBase.meta({ id: 'IndicesClearCacheResponse' })
export type IndicesClearCacheResponse = z.infer<typeof IndicesClearCacheResponse>
