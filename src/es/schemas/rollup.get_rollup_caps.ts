/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Field, Id, IndexName, TimeZone } from './_types.js'

/**
 * Get the rollup job capabilities.
 *
 * Get the capabilities of any rollup jobs that have been configured for a specific index or index pattern.
 *
 * This API is useful because a rollup job is often configured to rollup only a subset of fields from the source index.
 * Furthermore, only certain aggregations can be configured for various fields, leading to a limited subset of functionality depending on that configuration.
 * This API enables you to inspect an index and determine:
 *
 * 1. Does this index have associated rollup data somewhere in the cluster?
 * 2. If yes to the first question, what fields were rolled up, what aggregations can be performed, and where does the data live?
 * @deprecated
 */
export const RollupGetRollupCapsRequest = z.object({
  id: z.lazy(() => Id).describe('Index, indices or index-pattern to return rollup capabilities for. `_all` may be used to fetch rollup capabilities from all jobs.').optional().meta({ found_in: 'path' })
}).meta({ id: 'RollupGetRollupCapsRequest' })
export type RollupGetRollupCapsRequest = z.infer<typeof RollupGetRollupCapsRequest>

export const RollupGetRollupCapsRollupFieldSummary = z.object({
  agg: z.string(),
  calendar_interval: z.lazy(() => Duration).optional(),
  time_zone: z.lazy(() => TimeZone).optional()
}).meta({ id: 'RollupGetRollupCapsRollupFieldSummary' })
export type RollupGetRollupCapsRollupFieldSummary = z.infer<typeof RollupGetRollupCapsRollupFieldSummary>

export const RollupGetRollupCapsRollupCapabilitySummary = z.object({
  fields: z.record(z.lazy(() => Field), z.array(RollupGetRollupCapsRollupFieldSummary)),
  index_pattern: z.string(),
  job_id: z.string(),
  rollup_index: z.string()
}).meta({ id: 'RollupGetRollupCapsRollupCapabilitySummary' })
export type RollupGetRollupCapsRollupCapabilitySummary = z.infer<typeof RollupGetRollupCapsRollupCapabilitySummary>

export const RollupGetRollupCapsRollupCapabilities = z.object({
  rollup_jobs: z.array(RollupGetRollupCapsRollupCapabilitySummary).describe('There can be multiple, independent jobs configured for a single index or index pattern. Each of these jobs may have different configurations, so the API returns a list of all the various configurations available.')
}).meta({ id: 'RollupGetRollupCapsRollupCapabilities' })
export type RollupGetRollupCapsRollupCapabilities = z.infer<typeof RollupGetRollupCapsRollupCapabilities>

export const RollupGetRollupCapsResponse = z.record(z.lazy(() => IndexName), RollupGetRollupCapsRollupCapabilities).meta({ id: 'RollupGetRollupCapsResponse' })
export type RollupGetRollupCapsResponse = z.infer<typeof RollupGetRollupCapsResponse>
