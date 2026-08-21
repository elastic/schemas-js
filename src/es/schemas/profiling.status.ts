/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'

export const ProfilingStatusProfilingOperationMode = z.enum(['RUNNING', 'STOPPING', 'STOPPED']).meta({ id: 'ProfilingStatusProfilingOperationMode' })
export type ProfilingStatusProfilingOperationMode = z.infer<typeof ProfilingStatusProfilingOperationMode>

/** Returns basic information about the status of Universal Profiling. */
export const ProfilingStatusRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  wait_for_resources_created: z.boolean().describe('Whether to return immediately or wait until resources have been created').optional().meta({ found_in: 'query' })
}).meta({ id: 'ProfilingStatusRequest' })
export type ProfilingStatusRequest = z.infer<typeof ProfilingStatusRequest>

export const ProfilingStatusResponse = z.object({
  operation_mode: ProfilingStatusProfilingOperationMode
}).meta({ id: 'ProfilingStatusResponse' })
export type ProfilingStatusResponse = z.infer<typeof ProfilingStatusResponse>
