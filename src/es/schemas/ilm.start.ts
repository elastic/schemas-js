/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Start the ILM plugin.
 *
 * Start the index lifecycle management plugin if it is currently stopped.
 * ILM is started automatically when the cluster is formed.
 * Restarting ILM is necessary only when it has been stopped using the stop ILM API.
 */
export const IlmStartRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IlmStartRequest' })
export type IlmStartRequest = z.infer<typeof IlmStartRequest>

export const IlmStartResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IlmStartResponse' })
export type IlmStartResponse = z.infer<typeof IlmStartResponse>
