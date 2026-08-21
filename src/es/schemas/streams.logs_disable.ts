/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'
import { StreamsStreamType } from './streams.js'

/**
 * Disable a named stream.
 *
 * Turn off the named stream feature for this cluster.
 */
export const StreamsLogsDisableRequest = z.object({
  name: StreamsStreamType.describe('The stream type to disable.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'StreamsLogsDisableRequest' })
export type StreamsLogsDisableRequest = z.infer<typeof StreamsLogsDisableRequest>

export const StreamsLogsDisableResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'StreamsLogsDisableResponse' })
export type StreamsLogsDisableResponse = z.infer<typeof StreamsLogsDisableResponse>
