/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Field, Id, Ids, IndexName, TimeZone } from './_types.js'

export const RollupGetRollupIndexCapsRollupJobSummaryField = z.object({
  agg: z.string(),
  time_zone: z.lazy(() => TimeZone).optional(),
  calendar_interval: z.lazy(() => Duration).optional()
}).meta({ id: 'RollupGetRollupIndexCapsRollupJobSummaryField' })
export type RollupGetRollupIndexCapsRollupJobSummaryField = z.infer<typeof RollupGetRollupIndexCapsRollupJobSummaryField>

export const RollupGetRollupIndexCapsRollupJobSummary = z.object({
  fields: z.record(z.lazy(() => Field), z.array(RollupGetRollupIndexCapsRollupJobSummaryField)),
  index_pattern: z.string(),
  job_id: z.lazy(() => Id),
  rollup_index: z.lazy(() => IndexName)
}).meta({ id: 'RollupGetRollupIndexCapsRollupJobSummary' })
export type RollupGetRollupIndexCapsRollupJobSummary = z.infer<typeof RollupGetRollupIndexCapsRollupJobSummary>

export const RollupGetRollupIndexCapsIndexCapabilities = z.object({
  rollup_jobs: z.array(RollupGetRollupIndexCapsRollupJobSummary)
}).meta({ id: 'RollupGetRollupIndexCapsIndexCapabilities' })
export type RollupGetRollupIndexCapsIndexCapabilities = z.infer<typeof RollupGetRollupIndexCapsIndexCapabilities>

/**
 * Get the rollup index capabilities.
 *
 * Get the rollup capabilities of all jobs inside of a rollup index.
 * A single rollup index may store the data for multiple rollup jobs and may have a variety of capabilities depending on those jobs. This API enables you to determine:
 *
 * * What jobs are stored in an index (or indices specified via a pattern)?
 * * What target indices were rolled up, what fields were used in those rollups, and what aggregations can be performed on each job?
 * @deprecated
 */
export const RollupGetRollupIndexCapsRequest = z.object({
  index: z.lazy(() => Ids).describe('Data stream or index to check for rollup capabilities. Wildcard (`*`) expressions are supported.').meta({ found_in: 'path' })
}).meta({ id: 'RollupGetRollupIndexCapsRequest' })
export type RollupGetRollupIndexCapsRequest = z.infer<typeof RollupGetRollupIndexCapsRequest>

export const RollupGetRollupIndexCapsResponse = z.record(z.lazy(() => IndexName), RollupGetRollupIndexCapsIndexCapabilities).meta({ id: 'RollupGetRollupIndexCapsResponse' })
export type RollupGetRollupIndexCapsResponse = z.infer<typeof RollupGetRollupIndexCapsResponse>
