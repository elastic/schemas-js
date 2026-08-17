/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, Id, integer } from './_types.js'
import { MlDataframeAnalysisAnalyzedFields, MlDataframeAnalysisContainer, MlDataframeAnalyticsDestination, MlDataframeAnalyticsSource } from './ml.js'

export const MlDataframeAnalyticsFieldSelection = z.object({
  is_included: z.boolean().describe('Whether the field is selected to be included in the analysis.'),
  is_required: z.boolean().describe('Whether the field is required.'),
  feature_type: z.string().describe('The feature type of this field for the analysis. May be categorical or numerical.').optional(),
  mapping_types: z.array(z.string()).describe('The mapping types of the field.'),
  name: z.lazy(() => Field).describe('The field name.'),
  reason: z.string().describe('The reason a field is not selected to be included in the analysis.').optional()
}).meta({ id: 'MlDataframeAnalyticsFieldSelection' })
export type MlDataframeAnalyticsFieldSelection = z.infer<typeof MlDataframeAnalyticsFieldSelection>

export const MlDataframeAnalyticsMemoryEstimation = z.object({
  expected_memory_with_disk: z.string().describe('Estimated memory usage under the assumption that overflowing to disk is allowed during data frame analytics. expected_memory_with_disk is usually smaller than expected_memory_without_disk as using disk allows to limit the main memory needed to perform data frame analytics.'),
  expected_memory_without_disk: z.string().describe('Estimated memory usage under the assumption that the whole data frame analytics should happen in memory (i.e. without overflowing to disk).')
}).meta({ id: 'MlDataframeAnalyticsMemoryEstimation' })
export type MlDataframeAnalyticsMemoryEstimation = z.infer<typeof MlDataframeAnalyticsMemoryEstimation>

/**
 * Explain data frame analytics config.
 *
 * This API provides explanations for a data frame analytics config that either
 * exists already or one that has not been created yet. The following
 * explanations are provided:
 * * which fields are included or not in the analysis and why,
 * * how much memory is estimated to be required. The estimate can be used when deciding the appropriate value for model_memory_limit setting later on.
 * If you have object fields or fields that are excluded via source filtering, they are not included in the explanation.
 */
export const MlExplainDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').optional().meta({ found_in: 'path' }),
  source: MlDataframeAnalyticsSource.describe('The configuration of how to source the analysis data. It requires an index. Optionally, query and _source may be specified.').optional().meta({ found_in: 'body' }),
  dest: MlDataframeAnalyticsDestination.describe('The destination configuration, consisting of index and optionally results_field (ml by default).').optional().meta({ found_in: 'body' }),
  analysis: MlDataframeAnalysisContainer.describe('The analysis configuration, which contains the information necessary to perform one of the following types of analysis: classification, outlier detection, or regression.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description of the job.').optional().meta({ found_in: 'body' }),
  model_memory_limit: z.string().describe('The approximate maximum amount of memory resources that are permitted for analytical processing. If your `elasticsearch.yml` file contains an `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create data frame analytics jobs that have `model_memory_limit` values greater than that setting.').optional().meta({ found_in: 'body' }),
  max_num_threads: z.lazy(() => integer).describe('The maximum number of threads to be used by the analysis. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself.').optional().meta({ found_in: 'body' }),
  analyzed_fields: z.union([MlDataframeAnalysisAnalyzedFields, z.array(z.string())]).describe('Specify includes and/or excludes patterns to select which fields will be included in the analysis. The patterns specified in excludes are applied last, therefore excludes takes precedence. In other words, if the same field is specified in both includes and excludes, then the field will not be included in the analysis.').optional().meta({ found_in: 'body' }),
  allow_lazy_start: z.boolean().describe('Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlExplainDataFrameAnalyticsRequest' })
export type MlExplainDataFrameAnalyticsRequest = z.infer<typeof MlExplainDataFrameAnalyticsRequest>

export const MlExplainDataFrameAnalyticsResponse = z.object({
  field_selection: z.array(MlDataframeAnalyticsFieldSelection).describe('An array of objects that explain selection for each field, sorted by the field names.'),
  memory_estimation: MlDataframeAnalyticsMemoryEstimation.describe('An array of objects that explain selection for each field, sorted by the field names.')
}).meta({ id: 'MlExplainDataFrameAnalyticsResponse' })
export type MlExplainDataFrameAnalyticsResponse = z.infer<typeof MlExplainDataFrameAnalyticsResponse>
