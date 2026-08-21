/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'
import { WatcherActivationStatus } from './watcher.js'

/**
 * Deactivate a watch.
 *
 * A watch can be either active or inactive.
 */
export const WatcherDeactivateWatchRequest = z.object({
  watch_id: z.lazy(() => Name).describe('The watch identifier.').meta({ found_in: 'path' })
}).meta({ id: 'WatcherDeactivateWatchRequest' })
export type WatcherDeactivateWatchRequest = z.infer<typeof WatcherDeactivateWatchRequest>

export const WatcherDeactivateWatchResponse = z.object({
  status: WatcherActivationStatus
}).meta({ id: 'WatcherDeactivateWatchResponse' })
export type WatcherDeactivateWatchResponse = z.infer<typeof WatcherDeactivateWatchResponse>
