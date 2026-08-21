/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'

/**
 * Get the status of streams.
 *
 * Get the current status for all types of streams.
 */
export const StreamsStatusRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'StreamsStatusRequest' })
export type StreamsStatusRequest = z.infer<typeof StreamsStatusRequest>

export const StreamsStatusStreamStatus = z.object({
  enabled: z.boolean().describe('If true, the stream feature is enabled.')
}).meta({ id: 'StreamsStatusStreamStatus' })
export type StreamsStatusStreamStatus = z.infer<typeof StreamsStatusStreamStatus>

export const StreamsStatusResponse = z.object({
  logs: StreamsStatusStreamStatus,
  'logs.otel': StreamsStatusStreamStatus,
  'logs.ecs': StreamsStatusStreamStatus
}).meta({ id: 'StreamsStatusResponse' })
export type StreamsStatusResponse = z.infer<typeof StreamsStatusResponse>
