/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete a policy.
 *
 * Delete a snapshot lifecycle policy definition.
 * This operation prevents any future snapshots from being taken but does not cancel in-progress snapshots or remove previously-taken snapshots.
 */
export const SlmDeleteLifecycleRequest = z.object({
  policy_id: z.lazy(() => Name).describe('The id of the snapshot lifecycle policy to remove').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmDeleteLifecycleRequest' })
export type SlmDeleteLifecycleRequest = z.infer<typeof SlmDeleteLifecycleRequest>

export const SlmDeleteLifecycleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SlmDeleteLifecycleResponse' })
export type SlmDeleteLifecycleResponse = z.infer<typeof SlmDeleteLifecycleResponse>
