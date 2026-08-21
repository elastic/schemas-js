/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices, ShardStatistics } from './_types.js'

export const IndicesReloadSearchAnalyzersReloadDetails = z.object({
  index: z.string(),
  reloaded_analyzers: z.array(z.string()),
  reloaded_node_ids: z.array(z.string())
}).meta({ id: 'IndicesReloadSearchAnalyzersReloadDetails' })
export type IndicesReloadSearchAnalyzersReloadDetails = z.infer<typeof IndicesReloadSearchAnalyzersReloadDetails>

export const IndicesReloadSearchAnalyzersReloadResult = z.object({
  reload_details: z.array(IndicesReloadSearchAnalyzersReloadDetails),
  _shards: z.lazy(() => ShardStatistics)
}).meta({ id: 'IndicesReloadSearchAnalyzersReloadResult' })
export type IndicesReloadSearchAnalyzersReloadResult = z.infer<typeof IndicesReloadSearchAnalyzersReloadResult>

/**
 * Reload search analyzers.
 *
 * Reload an index's search analyzers and their resources.
 * For data streams, the API reloads search analyzers and resources for the stream's backing indices.
 *
 * IMPORTANT: After reloading the search analyzers you should clear the request cache to make sure it doesn't contain responses derived from the previous versions of the analyzer.
 *
 * You can use the reload search analyzers API to pick up changes to synonym files used in the `synonym_graph` or `synonym` token filter of a search analyzer.
 * To be eligible, the token filter must have an `updateable` flag of `true` and only be used in search analyzers.
 *
 * NOTE: This API does not perform a reload for each shard of an index.
 * Instead, it performs a reload for each node containing index shards.
 * As a result, the total shard count returned by the API can differ from the number of index shards.
 * Because reloading affects every node with an index shard, it is important to update the synonym file on every data node in the cluster--including nodes that don't contain a shard replica--before using this API.
 * This ensures the synonym file is updated everywhere in the cluster in case shards are relocated in the future.
 */
export const IndicesReloadSearchAnalyzersRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of index names to reload analyzers for').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether to expand wildcard expression to concrete indices that are open, closed or both.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  resource: z.string().describe('Changed resource to reload analyzers from if applicable').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesReloadSearchAnalyzersRequest' })
export type IndicesReloadSearchAnalyzersRequest = z.infer<typeof IndicesReloadSearchAnalyzersRequest>

export const IndicesReloadSearchAnalyzersResponse = IndicesReloadSearchAnalyzersReloadResult.meta({ id: 'IndicesReloadSearchAnalyzersResponse' })
export type IndicesReloadSearchAnalyzersResponse = z.infer<typeof IndicesReloadSearchAnalyzersResponse>
