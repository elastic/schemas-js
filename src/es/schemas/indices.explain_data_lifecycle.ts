/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, EpochTime, IndexName, Indices } from './_types.js'
import { IndicesDataStreamLifecycleWithRollover } from './indices.js'

export const IndicesExplainDataLifecycleDataStreamLifecycleExplain = z.object({
  index: z.lazy(() => IndexName),
  managed_by_lifecycle: z.boolean(),
  index_creation_date_millis: z.lazy(() => EpochTime).optional(),
  time_since_index_creation: z.lazy(() => Duration).optional(),
  rollover_date_millis: z.lazy(() => EpochTime).optional(),
  time_since_rollover: z.lazy(() => Duration).optional(),
  lifecycle: z.lazy(() => IndicesDataStreamLifecycleWithRollover).optional(),
  generation_time: z.lazy(() => Duration).optional(),
  error: z.string().optional()
}).meta({ id: 'IndicesExplainDataLifecycleDataStreamLifecycleExplain' })
export type IndicesExplainDataLifecycleDataStreamLifecycleExplain = z.infer<typeof IndicesExplainDataLifecycleDataStreamLifecycleExplain>

/**
 * Get the status for a data stream lifecycle.
 *
 * Get information about an index or data stream's current data stream lifecycle status, such as time since index creation, time since rollover, the lifecycle configuration managing the index, or any errors encountered during lifecycle execution.
 */
export const IndicesExplainDataLifecycleRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of index names to explain').meta({ found_in: 'path' }),
  include_defaults: z.boolean().describe('Indicates if the API should return the default values the system uses for the index\'s lifecycle').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesExplainDataLifecycleRequest' })
export type IndicesExplainDataLifecycleRequest = z.infer<typeof IndicesExplainDataLifecycleRequest>

export const IndicesExplainDataLifecycleResponse = z.object({
  indices: z.record(z.lazy(() => IndexName), IndicesExplainDataLifecycleDataStreamLifecycleExplain)
}).meta({ id: 'IndicesExplainDataLifecycleResponse' })
export type IndicesExplainDataLifecycleResponse = z.infer<typeof IndicesExplainDataLifecycleResponse>
