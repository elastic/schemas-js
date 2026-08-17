/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, LifecycleOperationMode } from './_types.js'

/** Get the snapshot lifecycle management status. */
export const SlmGetStatusRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmGetStatusRequest' })
export type SlmGetStatusRequest = z.infer<typeof SlmGetStatusRequest>

export const SlmGetStatusResponse = z.object({
  operation_mode: LifecycleOperationMode
}).meta({ id: 'SlmGetStatusResponse' })
export type SlmGetStatusResponse = z.infer<typeof SlmGetStatusResponse>
