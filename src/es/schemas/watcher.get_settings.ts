/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

/**
 * Get Watcher index settings.
 *
 * Get settings for the Watcher internal index (`.watches`).
 * Only a subset of settings are shown, for example `index.auto_expand_replicas` and `index.number_of_replicas`.
 */
export const WatcherGetSettingsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'WatcherGetSettingsRequest' })
export type WatcherGetSettingsRequest = z.infer<typeof WatcherGetSettingsRequest>

export const WatcherGetSettingsResponse = z.object({
  index: z.lazy(() => IndicesIndexSettings)
}).meta({ id: 'WatcherGetSettingsResponse' })
export type WatcherGetSettingsResponse = z.infer<typeof WatcherGetSettingsResponse>
