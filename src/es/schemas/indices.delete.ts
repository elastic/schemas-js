/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Indices, IndicesResponseBase } from './_types.js'

/**
 * Delete indices.
 *
 * Deleting an index deletes its documents, shards, and metadata.
 * It does not delete related Kibana components, such as data views, visualizations, or dashboards.
 *
 * You cannot delete the current write index of a data stream.
 * To delete the index, you must roll over the data stream so a new write index is created.
 * You can then use the delete index API to delete the previous write index.
 */
export const IndicesDeleteRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of indices to delete. You cannot specify index aliases. By default, this parameter does not support wildcards (`*`) or `_all`. To use wildcards or `_all`, set the `action.destructive_requires_name` cluster setting to `false`.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteRequest' })
export type IndicesDeleteRequest = z.infer<typeof IndicesDeleteRequest>

export const IndicesDeleteResponse = z.lazy(() => IndicesResponseBase).meta({ id: 'IndicesDeleteResponse' })
export type IndicesDeleteResponse = z.infer<typeof IndicesDeleteResponse>
