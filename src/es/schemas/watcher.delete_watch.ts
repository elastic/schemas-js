/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Name, VersionNumber } from './_types.js'

/**
 * Delete a watch.
 *
 * When the watch is removed, the document representing the watch in the `.watches` index is gone and it will never be run again.
 *
 * Deleting a watch does not delete any watch execution records related to this watch from the watch history.
 *
 * IMPORTANT: Deleting a watch must be done by using only this API.
 * Do not delete the watch directly from the `.watches` index using the Elasticsearch delete document API
 * When Elasticsearch security features are enabled, make sure no write privileges are granted to anyone for the `.watches` index.
 */
export const WatcherDeleteWatchRequest = z.object({
  id: z.lazy(() => Name).describe('The watch identifier.').meta({ found_in: 'path' })
}).meta({ id: 'WatcherDeleteWatchRequest' })
export type WatcherDeleteWatchRequest = z.infer<typeof WatcherDeleteWatchRequest>

export const WatcherDeleteWatchResponse = z.object({
  found: z.boolean(),
  _id: z.lazy(() => Id),
  _version: z.lazy(() => VersionNumber)
}).meta({ id: 'WatcherDeleteWatchResponse' })
export type WatcherDeleteWatchResponse = z.infer<typeof WatcherDeleteWatchResponse>
