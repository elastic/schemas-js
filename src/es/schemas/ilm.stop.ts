/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Stop the ILM plugin.
 *
 * Halt all lifecycle management operations and stop the index lifecycle management plugin.
 * This is useful when you are performing maintenance on the cluster and need to prevent ILM from performing any actions on your indices.
 *
 * The API returns as soon as the stop request has been acknowledged, but the plugin might continue to run until in-progress operations complete and the plugin can be safely stopped.
 * Use the get ILM status API to check whether ILM is running.
 */
export const IlmStopRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IlmStopRequest' })
export type IlmStopRequest = z.infer<typeof IlmStopRequest>

export const IlmStopResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IlmStopResponse' })
export type IlmStopResponse = z.infer<typeof IlmStopResponse>
