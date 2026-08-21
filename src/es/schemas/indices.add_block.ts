/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, IndexName, Indices } from './_types.js'
import { IndicesIndicesBlockOptions } from './indices.js'

export const IndicesAddBlockAddIndicesBlockStatus = z.object({
  name: z.lazy(() => IndexName),
  blocked: z.boolean()
}).meta({ id: 'IndicesAddBlockAddIndicesBlockStatus' })
export type IndicesAddBlockAddIndicesBlockStatus = z.infer<typeof IndicesAddBlockAddIndicesBlockStatus>

/**
 * Add an index block.
 *
 * Add an index block to an index.
 * Index blocks limit the operations allowed on an index by blocking specific operation types.
 */
export const IndicesAddBlockRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list or wildcard expression of index names used to limit the request. By default, you must explicitly name the indices you are adding blocks to. To allow the adding of blocks to indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`. You can update this setting in the `elasticsearch.yml` file or by using the cluster update settings API.').meta({ found_in: 'path' }),
  block: IndicesIndicesBlockOptions.describe('The block type to add to the index.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesAddBlockRequest' })
export type IndicesAddBlockRequest = z.infer<typeof IndicesAddBlockRequest>

export const IndicesAddBlockResponse = z.object({
  acknowledged: z.boolean(),
  shards_acknowledged: z.boolean(),
  indices: z.array(IndicesAddBlockAddIndicesBlockStatus)
}).meta({ id: 'IndicesAddBlockResponse' })
export type IndicesAddBlockResponse = z.infer<typeof IndicesAddBlockResponse>
