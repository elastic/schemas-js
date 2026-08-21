/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Stop the watch service.
 *
 * Stop the Watcher service if it is running.
 */
export const WatcherStopRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'WatcherStopRequest' })
export type WatcherStopRequest = z.infer<typeof WatcherStopRequest>

export const WatcherStopResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'WatcherStopResponse' })
export type WatcherStopResponse = z.infer<typeof WatcherStopResponse>
