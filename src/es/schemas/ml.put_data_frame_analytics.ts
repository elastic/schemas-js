/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, HttpHeaders, Id, Metadata, VersionString, integer } from './_types.js'
import { MlDataframeAnalysisAnalyzedFields, MlDataframeAnalysisContainer, MlDataframeAnalyticsAuthorization, MlDataframeAnalyticsDestination, MlDataframeAnalyticsSource } from './ml.js'

/**
 * Create a data frame analytics job.
 *
 * This API creates a data frame analytics job that performs an analysis on the
 * source indices and stores the outcome in a destination index.
 * By default, the query used in the source configuration is `{"match_all": {}}`.
 *
 * If the destination index does not exist, it is created automatically when you start the job.
 *
 * If you supply only a subset of the regression or classification parameters, hyperparameter optimization occurs. It determines a value for each of the undefined parameters.
 */
export const MlPutDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  allow_lazy_start: z.boolean().describe('Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node. If set to `false` and a machine learning node with capacity to run the job cannot be immediately found, the API returns an error. If set to `true`, the API does not return an error; the job waits in the `starting` state until sufficient machine learning node capacity is available. This behavior is also affected by the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting.').optional().meta({ found_in: 'body' }),
  analysis: MlDataframeAnalysisContainer.describe('The analysis configuration, which contains the information necessary to perform one of the following types of analysis: classification, outlier detection, or regression.').meta({ found_in: 'body' }),
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).describe('Specifies `includes` and/or `excludes` patterns to select which fields will be included in the analysis. The patterns specified in `excludes` are applied last, therefore `excludes` takes precedence. In other words, if the same field is specified in both `includes` and `excludes`, then the field will not be included in the analysis. If `analyzed_fields` is not set, only the relevant fields will be included. For example, all the numeric fields for outlier detection. The supported fields vary for each type of analysis. Outlier detection requires numeric or `boolean` data to analyze. The algorithms don’t support missing values therefore fields that have data types other than numeric or boolean are ignored. Documents where included fields contain missing values, null values, or an array are also ignored. Therefore the `dest` index may contain documents that don’t have an outlier score. Regression supports fields that are numeric, `boolean`, `text`, `keyword`, and `ip` data types. It is also tolerant of missing values. Fields that are supported are included in the analysis, other fields are ignored. Documents where included fields contain an array with two or more values are also ignored. Documents in the `dest` index that don’t contain a results field are not included in the regression analysis. Classification supports fields that are numeric, `boolean`, `text`, `keyword`, and `ip` data types. It is also tolerant of missing values. Fields that are supported are included in the analysis, other fields are ignored. Documents where included fields contain an array with two or more values are also ignored. Documents in the `dest` index that don’t contain a results field are not included in the classification analysis. Classification analysis can be improved by mapping ordinal variable values to a single number. For example, in case of age ranges, you can model the values as `0-14 = 0`, `15-24 = 1`, `25-34 = 2`, and so on.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description of the job.').optional().meta({ found_in: 'body' }),
  dest: MlDataframeAnalyticsDestination.describe('The destination configuration.').meta({ found_in: 'body' }),
  max_num_threads: z.lazy(() => integer).describe('The maximum number of threads to be used by the analysis. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself.').optional().meta({ found_in: 'body' }),
  _meta: z.lazy(() => Metadata).optional().meta({ found_in: 'body' }),
  model_memory_limit: z.string().describe('The approximate maximum amount of memory resources that are permitted for analytical processing. If your `elasticsearch.yml` file contains an `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create data frame analytics jobs that have `model_memory_limit` values greater than that setting.').optional().meta({ found_in: 'body' }),
  source: MlDataframeAnalyticsSource.describe('The configuration of how to source the analysis data.').meta({ found_in: 'body' }),
  headers: HttpHeaders.optional().meta({ found_in: 'body' }),
  version: z.lazy(() => VersionString).optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutDataFrameAnalyticsRequest' })
export type MlPutDataFrameAnalyticsRequest = z.infer<typeof MlPutDataFrameAnalyticsRequest>

export const MlPutDataFrameAnalyticsResponse = z.object({
  authorization: MlDataframeAnalyticsAuthorization.optional(),
  allow_lazy_start: z.boolean(),
  analysis: MlDataframeAnalysisContainer,
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).optional(),
  create_time: z.lazy(() => EpochTime),
  description: z.string().optional(),
  dest: MlDataframeAnalyticsDestination,
  id: z.lazy(() => Id),
  max_num_threads: z.lazy(() => integer),
  _meta: z.lazy(() => Metadata).optional(),
  model_memory_limit: z.string(),
  source: MlDataframeAnalyticsSource,
  version: z.lazy(() => VersionString)
}).meta({ id: 'MlPutDataFrameAnalyticsResponse' })
export type MlPutDataFrameAnalyticsResponse = z.infer<typeof MlPutDataFrameAnalyticsResponse>
