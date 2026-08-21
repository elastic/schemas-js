/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Start snapshot lifecycle management.
 *
 * Snapshot lifecycle management (SLM) starts automatically when a cluster is formed.
 * Manually starting SLM is necessary only if it has been stopped using the stop SLM API.
 */
export const SlmStartRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmStartRequest' })
export type SlmStartRequest = z.infer<typeof SlmStartRequest>

export const SlmStartResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SlmStartResponse' })
export type SlmStartResponse = z.infer<typeof SlmStartResponse>
