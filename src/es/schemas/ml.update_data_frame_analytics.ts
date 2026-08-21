/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, VersionString, integer, long } from './_types.js'
import { MlDataframeAnalysisAnalyzedFields, MlDataframeAnalysisContainer, MlDataframeAnalyticsAuthorization, MlDataframeAnalyticsDestination, MlDataframeAnalyticsSource } from './ml.js'

/** Update a data frame analytics job. */
export const MlUpdateDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  description: z.string().describe('A description of the job.').optional().meta({ found_in: 'body' }),
  model_memory_limit: z.string().describe('The approximate maximum amount of memory resources that are permitted for analytical processing. If your `elasticsearch.yml` file contains an `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create data frame analytics jobs that have `model_memory_limit` values greater than that setting.').optional().meta({ found_in: 'body' }),
  max_num_threads: z.lazy(() => integer).describe('The maximum number of threads to be used by the analysis. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself.').optional().meta({ found_in: 'body' }),
  allow_lazy_start: z.boolean().describe('Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateDataFrameAnalyticsRequest' })
export type MlUpdateDataFrameAnalyticsRequest = z.infer<typeof MlUpdateDataFrameAnalyticsRequest>

export const MlUpdateDataFrameAnalyticsResponse = z.object({
  authorization: MlDataframeAnalyticsAuthorization.optional(),
  allow_lazy_start: z.boolean(),
  analysis: MlDataframeAnalysisContainer,
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).optional(),
  create_time: z.lazy(() => long),
  description: z.string().optional(),
  dest: MlDataframeAnalyticsDestination,
  id: z.lazy(() => Id),
  max_num_threads: z.lazy(() => integer),
  model_memory_limit: z.string(),
  source: MlDataframeAnalyticsSource,
  version: z.lazy(() => VersionString)
}).meta({ id: 'MlUpdateDataFrameAnalyticsResponse' })
export type MlUpdateDataFrameAnalyticsResponse = z.infer<typeof MlUpdateDataFrameAnalyticsResponse>
