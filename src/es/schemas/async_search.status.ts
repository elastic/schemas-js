/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ClusterStatistics, DateTime, Duration, EpochTime, ErrorCause, Id, ShardStatistics, integer } from './_types.js'

export const AsyncSearchAsyncSearchResponseBase = z.object({
  id: z.lazy(() => Id).optional(),
  is_partial: z.boolean().describe('When the query is no longer running, this property indicates whether the search failed or was successfully completed on all shards. While the query is running, `is_partial` is always set to `true`.'),
  is_running: z.boolean().describe('Indicates whether the search is still running or has completed. > info > If the search failed after some shards returned their results or the node that is coordinating the async search dies, results may be partial even though `is_running` is `false`.'),
  expiration_time: z.lazy(() => DateTime).describe('Indicates when the async search will expire.').optional(),
  expiration_time_in_millis: z.lazy(() => EpochTime),
  start_time: z.lazy(() => DateTime).optional(),
  start_time_in_millis: z.lazy(() => EpochTime),
  completion_time: z.lazy(() => DateTime).describe('Indicates when the async search completed. It is present only when the search has completed.').optional(),
  completion_time_in_millis: z.lazy(() => EpochTime).optional(),
  error: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'AsyncSearchAsyncSearchResponseBase' })
export type AsyncSearchAsyncSearchResponseBase = z.infer<typeof AsyncSearchAsyncSearchResponseBase>

/**
 * Get the async search status.
 *
 * Get the status of a previously submitted async search request given its identifier, without retrieving search results.
 * If the Elasticsearch security features are enabled, the access to the status of a specific async search is restricted to:
 *
 * * The user or API key that submitted the original async search request.
 * * Users that have the `monitor` cluster privilege or greater privileges.
 */
export const AsyncSearchStatusRequest = z.object({
  id: z.lazy(() => Id).describe('A unique identifier for the async search.').meta({ found_in: 'path' }),
  keep_alive: z.lazy(() => Duration).describe('The length of time that the async search needs to be available. Ongoing async searches and any saved search results are deleted after this period.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AsyncSearchStatusRequest' })
export type AsyncSearchStatusRequest = z.infer<typeof AsyncSearchStatusRequest>

export const AsyncSearchStatusStatusResponseBase = z.object({
  ...AsyncSearchAsyncSearchResponseBase.shape,
  _shards: z.lazy(() => ShardStatistics).describe('The number of shards that have run the query so far.'),
  _clusters: z.lazy(() => ClusterStatistics).describe('Metadata about clusters involved in the cross-cluster search. It is not shown for local-only searches.').optional(),
  completion_status: z.lazy(() => integer).describe('If the async search completed, this field shows the status code of the search. For example, `200` indicates that the async search was successfully completed. `503` indicates that the async search was completed with an error.').optional()
}).meta({ id: 'AsyncSearchStatusStatusResponseBase' })
export type AsyncSearchStatusStatusResponseBase = z.infer<typeof AsyncSearchStatusStatusResponseBase>

export const AsyncSearchStatusResponse = AsyncSearchStatusStatusResponseBase.meta({ id: 'AsyncSearchStatusResponse' })
export type AsyncSearchStatusResponse = z.infer<typeof AsyncSearchStatusResponse>
