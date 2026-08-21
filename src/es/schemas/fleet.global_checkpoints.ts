/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexAlias, IndexName } from './_types.js'
import { FleetCheckpoint } from './fleet.js'

/**
 * Get global checkpoints.
 *
 * Get the current global checkpoints for an index.
 * This API is designed for internal use by the Fleet server project.
 */
export const FleetGlobalCheckpointsRequest = z.object({
  index: z.union([z.lazy(() => IndexName), IndexAlias]).describe('A single index or index alias that resolves to a single index.').meta({ found_in: 'path' }),
  wait_for_advance: z.boolean().describe('A boolean value which controls whether to wait (until the timeout) for the global checkpoints to advance past the provided `checkpoints`.').optional().meta({ found_in: 'query' }),
  wait_for_index: z.boolean().describe('A boolean value which controls whether to wait (until the timeout) for the target index to exist and all primary shards be active. Can only be true when `wait_for_advance` is true.').optional().meta({ found_in: 'query' }),
  checkpoints: z.array(FleetCheckpoint).describe('A comma separated list of previous global checkpoints. When used in combination with `wait_for_advance`, the API will only return once the global checkpoints advances past the checkpoints. Providing an empty list will cause Elasticsearch to immediately return the current global checkpoints.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a global checkpoints to advance past `checkpoints`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'FleetGlobalCheckpointsRequest' })
export type FleetGlobalCheckpointsRequest = z.infer<typeof FleetGlobalCheckpointsRequest>

export const FleetGlobalCheckpointsResponse = z.object({
  global_checkpoints: z.array(FleetCheckpoint),
  timed_out: z.boolean()
}).meta({ id: 'FleetGlobalCheckpointsResponse' })
export type FleetGlobalCheckpointsResponse = z.infer<typeof FleetGlobalCheckpointsResponse>
