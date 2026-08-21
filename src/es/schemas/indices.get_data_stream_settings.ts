/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Indices } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

export const IndicesGetDataStreamSettingsDataStreamSettings = z.object({
  name: z.string().describe('The name of the data stream.'),
  settings: z.lazy(() => IndicesIndexSettings).describe('The settings specific to this data stream'),
  effective_settings: z.lazy(() => IndicesIndexSettings).describe('The settings specific to this data stream merged with the settings from its template. These `effective_settings` are the settings that will be used when a new index is created for this data stream.')
}).meta({ id: 'IndicesGetDataStreamSettingsDataStreamSettings' })
export type IndicesGetDataStreamSettingsDataStreamSettings = z.infer<typeof IndicesGetDataStreamSettingsDataStreamSettings>

/**
 * Get data stream settings.
 *
 * Get setting information for one or more data streams.
 */
export const IndicesGetDataStreamSettingsRequest = z.object({
  name: z.lazy(() => Indices).describe('A comma-separated list of data streams or data stream patterns. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataStreamSettingsRequest' })
export type IndicesGetDataStreamSettingsRequest = z.infer<typeof IndicesGetDataStreamSettingsRequest>

export const IndicesGetDataStreamSettingsResponse = z.object({
  data_streams: z.array(IndicesGetDataStreamSettingsDataStreamSettings)
}).meta({ id: 'IndicesGetDataStreamSettingsResponse' })
export type IndicesGetDataStreamSettingsResponse = z.infer<typeof IndicesGetDataStreamSettingsResponse>
