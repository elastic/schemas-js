/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names } from './_types.js'
import { WatcherWatchStatus } from './watcher.js'

/**
 * Acknowledge a watch.
 *
 * Acknowledging a watch enables you to manually throttle the execution of the watch's actions.
 *
 * The acknowledgement state of an action is stored in the `status.actions.<id>.ack.state` structure.
 *
 * IMPORTANT: If the specified watch is currently being executed, this API will return an error
 * The reason for this behavior is to prevent overwriting the watch status from a watch execution.
 *
 * Acknowledging an action throttles further executions of that action until its `ack.state` is reset to `awaits_successful_execution`.
 * This happens when the condition of the watch is not met (the condition evaluates to false).
 * To demonstrate how throttling works in practice and how it can be configured for individual actions within a watch, refer to External documentation.
 */
export const WatcherAckWatchRequest = z.object({
  watch_id: z.lazy(() => Name).describe('The watch identifier.').meta({ found_in: 'path' }),
  action_id: z.lazy(() => Names).describe('A comma-separated list of the action identifiers to acknowledge. If you omit this parameter, all of the actions of the watch are acknowledged.').optional().meta({ found_in: 'path' })
}).meta({ id: 'WatcherAckWatchRequest' })
export type WatcherAckWatchRequest = z.infer<typeof WatcherAckWatchRequest>

export const WatcherAckWatchResponse = z.object({
  status: WatcherWatchStatus
}).meta({ id: 'WatcherAckWatchResponse' })
export type WatcherAckWatchResponse = z.infer<typeof WatcherAckWatchResponse>
