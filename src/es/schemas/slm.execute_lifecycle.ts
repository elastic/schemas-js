/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name } from './_types.js'

/**
 * Run a policy.
 *
 * Immediately create a snapshot according to the snapshot lifecycle policy without waiting for the scheduled time.
 * The snapshot policy is normally applied according to its schedule, but you might want to manually run a policy before performing an upgrade or other maintenance.
 */
export const SlmExecuteLifecycleRequest = z.object({
  policy_id: z.lazy(() => Name).describe('The id of the snapshot lifecycle policy to be executed').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmExecuteLifecycleRequest' })
export type SlmExecuteLifecycleRequest = z.infer<typeof SlmExecuteLifecycleRequest>

export const SlmExecuteLifecycleResponse = z.object({
  snapshot_name: z.lazy(() => Name)
}).meta({ id: 'SlmExecuteLifecycleResponse' })
export type SlmExecuteLifecycleResponse = z.infer<typeof SlmExecuteLifecycleResponse>
