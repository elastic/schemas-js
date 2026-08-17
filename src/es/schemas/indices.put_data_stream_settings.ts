/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Indices } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

export const IndicesPutDataStreamSettingsDataStreamSettingsError = z.object({
  index: z.lazy(() => IndexName),
  error: z.string().describe('A message explaining why the settings could not be applied to specific indices.')
}).meta({ id: 'IndicesPutDataStreamSettingsDataStreamSettingsError' })
export type IndicesPutDataStreamSettingsDataStreamSettingsError = z.infer<typeof IndicesPutDataStreamSettingsDataStreamSettingsError>

export const IndicesPutDataStreamSettingsIndexSettingResults = z.object({
  applied_to_data_stream_only: z.array(z.string()).describe('The list of settings that were applied to the data stream but not to backing indices. These will be applied to the write index the next time the data stream is rolled over.'),
  applied_to_data_stream_and_backing_indices: z.array(z.string()).describe('The list of settings that were applied to the data stream and to all of its backing indices. These settings will also be applied to the write index the next time the data stream is rolled over.'),
  errors: z.array(IndicesPutDataStreamSettingsDataStreamSettingsError).optional()
}).meta({ id: 'IndicesPutDataStreamSettingsIndexSettingResults' })
export type IndicesPutDataStreamSettingsIndexSettingResults = z.infer<typeof IndicesPutDataStreamSettingsIndexSettingResults>

/**
 * Update data stream settings.
 *
 * NOTE: Available in 8.19. Not available in earlier versions.
 *
 * This API can be used to override settings on specific data streams. These overrides will take precedence over what
 * is specified in the template that the data stream matches. To prevent your data stream from getting into an invalid state,
 * only certain settings are allowed. If possible, the setting change is applied to all
 * backing indices. Otherwise, it will be applied when the data stream is next rolled over.
 */
export const IndicesPutDataStreamSettingsRequest = z.object({
  name: z.lazy(() => Indices).describe('A comma-separated list of data streams or data stream patterns.').meta({ found_in: 'path' }),
  dry_run: z.boolean().describe('If `true`, the request does not actually change the settings on any data streams or indices. Instead, it simulates changing the settings and reports back to the user what would have happened had these settings actually been applied.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  settings: z.lazy(() => IndicesIndexSettings).optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutDataStreamSettingsRequest' })
export type IndicesPutDataStreamSettingsRequest = z.infer<typeof IndicesPutDataStreamSettingsRequest>

export const IndicesPutDataStreamSettingsUpdatedDataStreamSettings = z.object({
  name: z.lazy(() => IndexName).describe('The data stream name.'),
  applied_to_data_stream: z.boolean().describe('If the settings were successfully applied to the data stream (or would have been, if running in `dry_run` mode), it is `true`. If an error occurred, it is `false`.'),
  error: z.string().describe('A message explaining why the settings could not be applied to the data stream.').optional(),
  settings: z.lazy(() => IndicesIndexSettings).describe('The settings that are specfic to this data stream that will override any settings from the matching index template.'),
  effective_settings: z.lazy(() => IndicesIndexSettings).describe('The settings that are effective on this data stream, taking into account the settings from the matching index template and the settings specific to this data stream.'),
  index_settings_results: IndicesPutDataStreamSettingsIndexSettingResults.describe('Information about whether and where each setting was applied.')
}).meta({ id: 'IndicesPutDataStreamSettingsUpdatedDataStreamSettings' })
export type IndicesPutDataStreamSettingsUpdatedDataStreamSettings = z.infer<typeof IndicesPutDataStreamSettingsUpdatedDataStreamSettings>

export const IndicesPutDataStreamSettingsResponse = z.object({
  data_streams: z.array(IndicesPutDataStreamSettingsUpdatedDataStreamSettings)
}).meta({ id: 'IndicesPutDataStreamSettingsResponse' })
export type IndicesPutDataStreamSettingsResponse = z.infer<typeof IndicesPutDataStreamSettingsResponse>
