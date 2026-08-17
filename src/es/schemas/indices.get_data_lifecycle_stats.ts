/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DataStreamName, DurationValue, integer } from './_types.js'

export const IndicesGetDataLifecycleStatsDataStreamStats = z.object({
  backing_indices_in_error: z.lazy(() => integer).describe('The count of the backing indices for the data stream.'),
  backing_indices_in_total: z.lazy(() => integer).describe('The count of the backing indices for the data stream that have encountered an error.'),
  name: z.lazy(() => DataStreamName).describe('The name of the data stream.')
}).meta({ id: 'IndicesGetDataLifecycleStatsDataStreamStats' })
export type IndicesGetDataLifecycleStatsDataStreamStats = z.infer<typeof IndicesGetDataLifecycleStatsDataStreamStats>

/**
 * Get data stream lifecycle stats.
 *
 * Get statistics about the data streams that are managed by a data stream lifecycle.
 */
export const IndicesGetDataLifecycleStatsRequest = z.object({
}).meta({ id: 'IndicesGetDataLifecycleStatsRequest' })
export type IndicesGetDataLifecycleStatsRequest = z.infer<typeof IndicesGetDataLifecycleStatsRequest>

export const IndicesGetDataLifecycleStatsResponse = z.object({
  data_stream_count: z.lazy(() => integer).describe('The count of data streams currently being managed by the data stream lifecycle.'),
  data_streams: z.array(IndicesGetDataLifecycleStatsDataStreamStats).describe('Information about the data streams that are managed by the data stream lifecycle.'),
  last_run_duration_in_millis: z.lazy(() => DurationValue).describe('The duration of the last data stream lifecycle execution.').optional(),
  time_between_starts_in_millis: z.lazy(() => DurationValue).describe('The time that passed between the start of the last two data stream lifecycle executions. This value should amount approximately to `data_streams.lifecycle.poll_interval`.').optional()
}).meta({ id: 'IndicesGetDataLifecycleStatsResponse' })
export type IndicesGetDataLifecycleStatsResponse = z.infer<typeof IndicesGetDataLifecycleStatsResponse>
