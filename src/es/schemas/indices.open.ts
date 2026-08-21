/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Indices } from './_types.js'

/**
 * Open a closed index.
 *
 * For data streams, the API opens any closed backing indices.
 *
 * A closed index is blocked for read/write operations and does not allow all operations that opened indices allow.
 * It is not possible to index documents or to search for documents in a closed index.
 * This allows closed indices to not have to maintain internal data structures for indexing or searching documents, resulting in a smaller overhead on the cluster.
 *
 * When opening or closing an index, the master is responsible for restarting the index shards to reflect the new state of the index.
 * The shards will then go through the normal recovery process.
 * The data of opened or closed indices is automatically replicated by the cluster to ensure that enough shard copies are safely kept around at all times.
 *
 * You can open and close multiple indices.
 * An error is thrown if the request explicitly refers to a missing index.
 * This behavior can be turned off by using the `ignore_unavailable=true` parameter.
 *
 * By default, you must explicitly name the indices you are opening or closing.
 * To open or close indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`.
 * This setting can also be changed with the cluster update settings API.
 *
 * Closed indices consume a significant amount of disk-space which can cause problems in managed environments.
 * Closing indices can be turned off with the cluster settings API by setting `cluster.indices.close.enable` to `false`.
 *
 * Because opening or closing an index allocates its shards, the `wait_for_active_shards` setting on index creation applies to the `_open` and `_close` index actions as well.
 */
export const IndicesOpenRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). By default, you must explicitly name the indices you using to limit the request. To limit a request using `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to false. You can update this setting in the `elasticsearch.yml` file or using the cluster update settings API.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesOpenRequest' })
export type IndicesOpenRequest = z.infer<typeof IndicesOpenRequest>

export const IndicesOpenResponse = z.object({
  acknowledged: z.boolean(),
  shards_acknowledged: z.boolean()
}).meta({ id: 'IndicesOpenResponse' })
export type IndicesOpenResponse = z.infer<typeof IndicesOpenResponse>
