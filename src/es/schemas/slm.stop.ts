/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Stop snapshot lifecycle management.
 *
 * Stop all snapshot lifecycle management (SLM) operations and the SLM plugin.
 * This API is useful when you are performing maintenance on a cluster and need to prevent SLM from performing any actions on your data streams or indices.
 * Stopping SLM does not stop any snapshots that are in progress.
 * You can manually trigger snapshots with the run snapshot lifecycle policy API even if SLM is stopped.
 *
 * The API returns a response as soon as the request is acknowledged, but the plugin might continue to run until in-progress operations complete and it can be safely stopped.
 * Use the get snapshot lifecycle management status API to see if SLM is running.
 */
export const SlmStopRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmStopRequest' })
export type SlmStopRequest = z.infer<typeof SlmStopRequest>

export const SlmStopResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SlmStopResponse' })
export type SlmStopResponse = z.infer<typeof SlmStopResponse>
