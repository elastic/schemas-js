/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices, ShardsOperationResponseBase } from './_types.js'

/**
 * Flush data streams or indices.
 *
 * Flushing a data stream or index is the process of making sure that any data that is currently only stored in the transaction log is also permanently stored in the Lucene index.
 * When restarting, Elasticsearch replays any unflushed operations from the transaction log into the Lucene index to bring it back into the state that it was in before the restart.
 * Elasticsearch automatically triggers flushes as needed, using heuristics that trade off the size of the unflushed transaction log against the cost of performing each flush.
 *
 * After each operation has been flushed it is permanently stored in the Lucene index.
 * This may mean that there is no need to maintain an additional copy of it in the transaction log.
 * The transaction log is made up of multiple files, called generations, and Elasticsearch will delete any generation files when they are no longer needed, freeing up disk space.
 *
 * It is also possible to trigger a flush on one or more indices using the flush API, although it is rare for users to need to call this API directly.
 * If you call the flush API after indexing some documents then a successful response indicates that Elasticsearch has flushed all the documents that were indexed before the flush API was called.
 */
export const IndicesFlushRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases to flush. Supports wildcards (`*`). To flush all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  force: z.boolean().describe('If `true`, the request forces a flush even if there are no changes to commit to the index.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  wait_if_ongoing: z.boolean().describe('If `true`, the flush operation blocks until execution when another flush operation is running. If `false`, Elasticsearch returns an error if you request a flush when another flush operation is running.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesFlushRequest' })
export type IndicesFlushRequest = z.infer<typeof IndicesFlushRequest>

export const IndicesFlushResponse = ShardsOperationResponseBase.meta({ id: 'IndicesFlushResponse' })
export type IndicesFlushResponse = z.infer<typeof IndicesFlushResponse>
