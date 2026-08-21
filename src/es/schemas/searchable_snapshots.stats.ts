/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Indices } from './_types.js'

export const SearchableSnapshotsStatsLevel = z.enum(['cluster', 'indices', 'shards']).meta({ id: 'SearchableSnapshotsStatsLevel' })
export type SearchableSnapshotsStatsLevel = z.infer<typeof SearchableSnapshotsStatsLevel>

/** Get searchable snapshot statistics. */
export const SearchableSnapshotsStatsRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams and indices to retrieve statistics for.').optional().meta({ found_in: 'path' }),
  level: SearchableSnapshotsStatsLevel.describe('Return stats aggregated at cluster, index or shard level').optional().meta({ found_in: 'query' })
}).meta({ id: 'SearchableSnapshotsStatsRequest' })
export type SearchableSnapshotsStatsRequest = z.infer<typeof SearchableSnapshotsStatsRequest>

export const SearchableSnapshotsStatsResponse = z.object({
  stats: z.any(),
  total: z.any()
}).meta({ id: 'SearchableSnapshotsStatsResponse' })
export type SearchableSnapshotsStatsResponse = z.infer<typeof SearchableSnapshotsStatsResponse>
