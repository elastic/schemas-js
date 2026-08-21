/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices, ShardsOperationResponseBase, long } from './_types.js'

/**
 * Force a merge.
 *
 * Perform the force merge operation on the shards of one or more indices.
 * For data streams, the API forces a merge on the shards of the stream's backing indices.
 *
 * Merging reduces the number of segments in each shard by merging some of them together and also frees up the space used by deleted documents.
 * Merging normally happens automatically, but sometimes it is useful to trigger a merge manually.
 *
 * WARNING: We recommend force merging only a read-only index (meaning the index is no longer receiving writes).
 * When documents are updated or deleted, the old version is not immediately removed but instead soft-deleted and marked with a "tombstone".
 * These soft-deleted documents are automatically cleaned up during regular segment merges.
 * But force merge can cause very large (greater than 5 GB) segments to be produced, which are not eligible for regular merges.
 * So the number of soft-deleted documents can then grow rapidly, resulting in higher disk usage and worse search performance.
 * If you regularly force merge an index receiving writes, this can also make snapshots more expensive, since the new documents can't be backed up incrementally.
 *
 * **Blocks during a force merge**
 *
 * Calls to this API block until the merge is complete (unless request contains `wait_for_completion=false`).
 * If the client connection is lost before completion then the force merge process will continue in the background.
 * Any new requests to force merge the same indices will also block until the ongoing force merge is complete.
 *
 * **Running force merge asynchronously**
 *
 * If the request contains `wait_for_completion=false`, Elasticsearch performs some preflight checks, launches the request, and returns a task you can use to get the status of the task.
 * However, you can not cancel this task as the force merge task is not cancelable.
 * Elasticsearch creates a record of this task as a document at `_tasks/<task_id>`.
 *
 * **Force merging multiple indices**
 *
 * You can force merge multiple indices with a single request by targeting:
 *
 * * One or more data streams that contain multiple backing indices
 * * Multiple indices
 * * One or more aliases
 * * All data streams and indices in a cluster
 *
 * Each targeted shard is force-merged separately using the `force_merge` threadpool.
 * The `force_merge` threadpool has a fixed size of `max(1, allocatedProcessors / 8)` per node, which means multiple shards on a node may be force-merged in parallel.
 * If you expand the `force_merge` threadpool on a node then it will force merge its shards with more parallelism.
 *
 * Force merge makes the storage for the shard being merged temporarily increase, as it may require free space up to triple its size in case `max_num_segments parameter` is set to `1`, to rewrite all segments into a new one.
 *
 * **Data streams and time-based indices**
 *
 * Force-merging is useful for managing a data stream's older backing indices and other time-based indices, particularly after a rollover.
 * In these cases, each index only receives indexing traffic for a certain period of time.
 * Once an index receive no more writes, its shards can be force-merged to a single segment.
 * This can be a good idea because single-segment shards can sometimes use simpler and more efficient data structures to perform searches.
 * For example:
 *
 * ```
 * POST /.ds-my-data-stream-2099.03.07-000001/_forcemerge?max_num_segments=1
 * ```
 */
export const IndicesForcemergeRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether to expand wildcard expression to concrete indices that are open, closed or both.').optional().meta({ found_in: 'query' }),
  flush: z.boolean().describe('Specify whether the index should be flushed after performing the operation').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  max_num_segments: z.lazy(() => long).describe('The number of segments the index should be merged into (default: dynamic)').optional().meta({ found_in: 'query' }),
  only_expunge_deletes: z.boolean().describe('Specify whether the operation should only expunge deleted documents').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('Should the request wait until the force merge is completed').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesForcemergeRequest' })
export type IndicesForcemergeRequest = z.infer<typeof IndicesForcemergeRequest>

export const IndicesForcemergeForceMergeResponseBody = z.object({
  ...ShardsOperationResponseBase.shape,
  task: z.string().describe('task contains a task id returned when wait_for_completion=false, you can use the task_id to get the status of the task at _tasks/<task_id>').optional()
}).meta({ id: 'IndicesForcemergeForceMergeResponseBody' })
export type IndicesForcemergeForceMergeResponseBody = z.infer<typeof IndicesForcemergeForceMergeResponseBody>

export const IndicesForcemergeResponse = IndicesForcemergeForceMergeResponseBody.meta({ id: 'IndicesForcemergeResponse' })
export type IndicesForcemergeResponse = z.infer<typeof IndicesForcemergeResponse>
