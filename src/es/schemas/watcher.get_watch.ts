/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Name, SequenceNumber, VersionNumber, integer } from './_types.js'
import { WatcherWatch, WatcherWatchStatus } from './watcher.js'

/** Get a watch. */
export const WatcherGetWatchRequest = z.object({
  id: z.lazy(() => Name).describe('The watch identifier.').meta({ found_in: 'path' })
}).meta({ id: 'WatcherGetWatchRequest' })
export type WatcherGetWatchRequest = z.infer<typeof WatcherGetWatchRequest>

export const WatcherGetWatchResponse = z.object({
  found: z.boolean(),
  _id: z.lazy(() => Id),
  status: WatcherWatchStatus.optional(),
  watch: WatcherWatch.optional(),
  _primary_term: z.lazy(() => integer).optional(),
  _seq_no: z.lazy(() => SequenceNumber).optional(),
  _version: z.lazy(() => VersionNumber).optional()
}).meta({ id: 'WatcherGetWatchResponse' })
export type WatcherGetWatchResponse = z.infer<typeof WatcherGetWatchResponse>
