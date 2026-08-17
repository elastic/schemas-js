/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, integer } from './_types.js'

/**
 * Update Watcher index settings.
 *
 * Update settings for the Watcher internal index (`.watches`).
 * Only a subset of settings can be modified.
 * This includes `index.auto_expand_replicas`, `index.number_of_replicas`, `index.routing.allocation.exclude.*`,
 * `index.routing.allocation.include.*` and `index.routing.allocation.require.*`.
 * Modification of `index.routing.allocation.include._tier_preference` is an exception and is not allowed as the
 * Watcher shards must always be in the `data_content` tier.
 */
export const WatcherUpdateSettingsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  'index.auto_expand_replicas': z.string().optional(),
  'index.number_of_replicas': z.lazy(() => integer).optional()
}).meta({ id: 'WatcherUpdateSettingsRequest' })
export type WatcherUpdateSettingsRequest = z.infer<typeof WatcherUpdateSettingsRequest>

export const WatcherUpdateSettingsResponse = z.object({
  acknowledged: z.boolean()
}).meta({ id: 'WatcherUpdateSettingsResponse' })
export type WatcherUpdateSettingsResponse = z.infer<typeof WatcherUpdateSettingsResponse>
