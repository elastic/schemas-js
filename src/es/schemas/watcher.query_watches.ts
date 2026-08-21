/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, SequenceNumber, Sort, SortResults, integer } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { WatcherWatch, WatcherWatchStatus } from './watcher.js'

export const WatcherQueryWatch = z.object({
  _id: z.lazy(() => Id),
  status: WatcherWatchStatus.optional(),
  watch: WatcherWatch.optional(),
  _primary_term: z.lazy(() => integer).optional(),
  _seq_no: z.lazy(() => SequenceNumber).optional()
}).meta({ id: 'WatcherQueryWatch' })
export type WatcherQueryWatch = z.infer<typeof WatcherQueryWatch>

/**
 * Query watches.
 *
 * Get all registered watches in a paginated manner and optionally filter watches by a query.
 *
 * Note that only the `_id` and `metadata.*` fields are queryable or sortable.
 */
export const WatcherQueryWatchesRequest = z.object({
  from: z.lazy(() => integer).describe('The offset from the first result to fetch. It must be non-negative.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return. It must be non-negative.').optional().meta({ found_in: 'body' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('A query that filters the watches to be returned.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('One or more fields used to sort the search results.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('Retrieve the next page of hits using a set of sort values from the previous page.').optional().meta({ found_in: 'body' })
}).meta({ id: 'WatcherQueryWatchesRequest' })
export type WatcherQueryWatchesRequest = z.infer<typeof WatcherQueryWatchesRequest>

export const WatcherQueryWatchesResponse = z.object({
  count: z.lazy(() => integer).describe('The total number of watches found.'),
  watches: z.array(WatcherQueryWatch).describe('A list of watches based on the `from`, `size`, or `search_after` request body parameters.')
}).meta({ id: 'WatcherQueryWatchesResponse' })
export type WatcherQueryWatchesResponse = z.infer<typeof WatcherQueryWatchesResponse>
