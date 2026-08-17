/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Start the watch service.
 *
 * Start the Watcher service if it is not already running.
 */
export const WatcherStartRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'WatcherStartRequest' })
export type WatcherStartRequest = z.infer<typeof WatcherStartRequest>

export const WatcherStartResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'WatcherStartResponse' })
export type WatcherStartResponse = z.infer<typeof WatcherStartResponse>
