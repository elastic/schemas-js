/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices, ShardsOperationResponseBase } from './_types.js'

/**
 * Refresh an index.
 *
 * A refresh makes recent operations performed on one or more indices available for search.
 * For data streams, the API runs the refresh operation on the stream’s backing indices.
 *
 * By default, Elasticsearch periodically refreshes indices every second, but only on indices that have received one search request or more in the last 30 seconds.
 * You can change this default interval with the `index.refresh_interval` setting.
 *
 * In Elastic Cloud Serverless, the default refresh interval is 5 seconds across all indices.
 *
 * Refresh requests are synchronous and do not return a response until the refresh operation completes.
 *
 * Refreshes are resource-intensive.
 * To ensure good cluster performance, it's recommended to wait for Elasticsearch's periodic refresh rather than performing an explicit refresh when possible.
 *
 * If your application workflow indexes documents and then runs a search to retrieve the indexed document, it's recommended to use the index API's `refresh=wait_for` query parameter option.
 * This option ensures the indexing operation waits for a periodic refresh before running the search.
 */
export const IndicesRefreshRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesRefreshRequest' })
export type IndicesRefreshRequest = z.infer<typeof IndicesRefreshRequest>

export const IndicesRefreshResponse = ShardsOperationResponseBase.meta({ id: 'IndicesRefreshResponse' })
export type IndicesRefreshResponse = z.infer<typeof IndicesRefreshResponse>
