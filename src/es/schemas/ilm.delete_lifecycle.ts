/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete a lifecycle policy.
 *
 * You cannot delete policies that are currently in use. If the policy is being used to manage any indices, the request fails and returns an error.
 */
export const IlmDeleteLifecycleRequest = z.object({
  name: z.lazy(() => Name).describe('Identifier for the policy.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IlmDeleteLifecycleRequest' })
export type IlmDeleteLifecycleRequest = z.infer<typeof IlmDeleteLifecycleRequest>

export const IlmDeleteLifecycleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IlmDeleteLifecycleResponse' })
export type IlmDeleteLifecycleResponse = z.infer<typeof IlmDeleteLifecycleResponse>
