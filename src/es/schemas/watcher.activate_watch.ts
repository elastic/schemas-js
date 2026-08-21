/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'
import { WatcherActivationStatus } from './watcher.js'

/**
 * Activate a watch.
 *
 * A watch can be either active or inactive.
 */
export const WatcherActivateWatchRequest = z.object({
  watch_id: z.lazy(() => Name).describe('The watch identifier.').meta({ found_in: 'path' })
}).meta({ id: 'WatcherActivateWatchRequest' })
export type WatcherActivateWatchRequest = z.infer<typeof WatcherActivateWatchRequest>

export const WatcherActivateWatchResponse = z.object({
  status: WatcherActivationStatus
}).meta({ id: 'WatcherActivateWatchResponse' })
export type WatcherActivateWatchResponse = z.infer<typeof WatcherActivateWatchResponse>
