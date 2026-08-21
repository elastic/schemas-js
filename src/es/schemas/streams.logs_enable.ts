/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'
import { StreamsStreamType } from './streams.js'

/**
 * Enable a named stream.
 *
 * Turn on the named stream feature for this cluster.
 *
 * NOTE: To protect existing data, this feature can be turned on only if the cluster does not have
 * existing indices or data streams that match the pattern `<name>|<name>.*` for the enabled stream
 * type name. If those indices or data streams exist, a `409 - Conflict` response and error is
 * returned.
 */
export const StreamsLogsEnableRequest = z.object({
  name: StreamsStreamType.describe('The stream type to enable.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'StreamsLogsEnableRequest' })
export type StreamsLogsEnableRequest = z.infer<typeof StreamsLogsEnableRequest>

export const StreamsLogsEnableResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'StreamsLogsEnableResponse' })
export type StreamsLogsEnableResponse = z.infer<typeof StreamsLogsEnableResponse>
