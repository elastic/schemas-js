/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, Id, integer } from './_types.js'
import { MlDataframeAnalysisAnalyzedFields, MlDataframeAnalysisContainer, MlDataframeAnalyticsSource } from './ml.js'

export const MlPreviewDataFrameAnalyticsDataframePreviewConfig = z.object({
  source: MlDataframeAnalyticsSource,
  analysis: MlDataframeAnalysisContainer,
  model_memory_limit: z.string().optional(),
  max_num_threads: z.lazy(() => integer).optional(),
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).optional()
}).meta({ id: 'MlPreviewDataFrameAnalyticsDataframePreviewConfig' })
export type MlPreviewDataFrameAnalyticsDataframePreviewConfig = z.infer<typeof MlPreviewDataFrameAnalyticsDataframePreviewConfig>

/**
 * Preview features used by data frame analytics.
 *
 * Preview the extracted features used by a data frame analytics config.
 */
export const MlPreviewDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job.').optional().meta({ found_in: 'path' }),
  config: MlPreviewDataFrameAnalyticsDataframePreviewConfig.describe('A data frame analytics config as described in create data frame analytics jobs. Note that `id` and `dest` don’t need to be provided in the context of this API.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPreviewDataFrameAnalyticsRequest' })
export type MlPreviewDataFrameAnalyticsRequest = z.infer<typeof MlPreviewDataFrameAnalyticsRequest>

export const MlPreviewDataFrameAnalyticsResponse = z.object({
  feature_values: z.array(z.record(z.lazy(() => Field), z.string())).describe('An array of objects that contain feature name and value pairs. The features have been processed and indicate what will be sent to the model for training.')
}).meta({ id: 'MlPreviewDataFrameAnalyticsResponse' })
export type MlPreviewDataFrameAnalyticsResponse = z.infer<typeof MlPreviewDataFrameAnalyticsResponse>
