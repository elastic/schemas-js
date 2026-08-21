/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices } from './_types.js'

/**
 * Clear the cache.
 *
 * Clear indices and data streams from the shared cache for partially mounted indices.
 */
export const SearchableSnapshotsClearCacheRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams, indices, and aliases to clear from the cache. It supports wildcards (`*`).').optional().meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether to expand wildcard expression to concrete indices that are open, closed or both').optional().meta({ found_in: 'query' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SearchableSnapshotsClearCacheRequest' })
export type SearchableSnapshotsClearCacheRequest = z.infer<typeof SearchableSnapshotsClearCacheRequest>

export const SearchableSnapshotsClearCacheResponse = z.any().meta({ id: 'SearchableSnapshotsClearCacheResponse' })
export type SearchableSnapshotsClearCacheResponse = z.infer<typeof SearchableSnapshotsClearCacheResponse>
