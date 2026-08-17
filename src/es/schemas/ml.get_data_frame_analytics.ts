/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Id, Metadata, VersionString, integer } from './_types.js'
import { MlDataframeAnalysisAnalyzedFields, MlDataframeAnalysisContainer, MlDataframeAnalyticsAuthorization, MlDataframeAnalyticsDestination, MlDataframeAnalyticsSource } from './ml.js'

export const MlDataframeAnalyticsSummary = z.object({
  allow_lazy_start: z.boolean().optional(),
  analysis: MlDataframeAnalysisContainer,
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).optional(),
  authorization: MlDataframeAnalyticsAuthorization.describe('The security privileges that the job uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the job, this property is omitted.').optional(),
  create_time: z.lazy(() => EpochTime).optional(),
  description: z.string().optional(),
  dest: MlDataframeAnalyticsDestination,
  id: z.lazy(() => Id),
  max_num_threads: z.lazy(() => integer).optional(),
  model_memory_limit: z.string().optional(),
  source: MlDataframeAnalyticsSource,
  version: z.lazy(() => VersionString).optional(),
  _meta: z.lazy(() => Metadata).optional()
}).meta({ id: 'MlDataframeAnalyticsSummary' })
export type MlDataframeAnalyticsSummary = z.infer<typeof MlDataframeAnalyticsSummary>

/**
 * Get data frame analytics job configuration info.
 *
 * You can get information for multiple data frame analytics jobs in a single
 * API request by using a comma-separated list of data frame analytics jobs or a
 * wildcard expression.
 */
export const MlGetDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. If you do not specify this option, the API returns information for the first hundred data frame analytics jobs.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no data frame analytics jobs that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value returns an empty data_frame_analytics array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a 404 status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of data frame analytics jobs.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of data frame analytics jobs to obtain.').optional().meta({ found_in: 'query' }),
  exclude_generated: z.boolean().describe('Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetDataFrameAnalyticsRequest' })
export type MlGetDataFrameAnalyticsRequest = z.infer<typeof MlGetDataFrameAnalyticsRequest>

export const MlGetDataFrameAnalyticsResponse = z.object({
  count: z.lazy(() => integer),
  data_frame_analytics: z.array(MlDataframeAnalyticsSummary).describe('An array of data frame analytics job resources, which are sorted by the id value in ascending order.')
}).meta({ id: 'MlGetDataFrameAnalyticsResponse' })
export type MlGetDataFrameAnalyticsResponse = z.infer<typeof MlGetDataFrameAnalyticsResponse>
