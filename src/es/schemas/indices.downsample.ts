/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationLarge, IndexName } from './_types.js'
import { IndicesSamplingMethod } from './indices.put_data_lifecycle.js'

export const IndicesDownsampleConfig = z.object({
  fixed_interval: z.lazy(() => DurationLarge).describe('The interval at which to aggregate the original time series index.'),
  sampling_method: z.lazy(() => IndicesSamplingMethod).describe('The sampling method used to reduce the documents; it can be either `aggregate` or `last_value`. Defaults to `aggregate`.').optional()
}).meta({ id: 'IndicesDownsampleConfig' })
export type IndicesDownsampleConfig = z.infer<typeof IndicesDownsampleConfig>

/**
 * Downsample an index.
 *
 * Downsamples a time series (TSDS) index and reduces its size by keeping the last value or by pre-aggregating metrics:
 *
 * - When running in `aggregate` mode, it pre-calculates and stores statistical summaries (`min`, `max`, `sum`, `value_count` and `avg`)
 * for each metric field grouped by a configured time interval and their dimensions.
 * - When running in `last_value` mode, it keeps the last value for each metric in the configured interval and their dimensions.
 *
 * For example, a TSDS index that contains metrics sampled every 10 seconds can be downsampled to an hourly index.
 * All documents within an hour interval are summarized and stored as a single document in the downsample index.
 *
 * NOTE: Only indices in a time series data stream are supported.
 * Neither field nor document level security can be defined on the source index.
 * The source index must be read-only (`index.blocks.write: true`).
 */
export const IndicesDownsampleRequest = z.object({
  index: z.lazy(() => IndexName).describe('Name of the time series index to downsample.').meta({ found_in: 'path' }),
  target_index: z.lazy(() => IndexName).describe('Name of the index to create.').meta({ found_in: 'path' }),
  config: IndicesDownsampleConfig.optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesDownsampleRequest' })
export type IndicesDownsampleRequest = z.infer<typeof IndicesDownsampleRequest>

export const IndicesDownsampleResponse = z.any().meta({ id: 'IndicesDownsampleResponse' })
export type IndicesDownsampleResponse = z.infer<typeof IndicesDownsampleResponse>
