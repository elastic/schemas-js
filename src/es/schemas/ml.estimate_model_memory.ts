/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, long } from './_types.js'
import { MlAnalysisConfig } from './ml.js'

/**
 * Estimate job model memory usage.
 *
 * Make an estimation of the memory usage for an anomaly detection job model.
 * The estimate is based on analysis configuration details for the job and cardinality
 * estimates for the fields it references.
 */
export const MlEstimateModelMemoryRequest = z.object({
  analysis_config: MlAnalysisConfig.describe('For a list of the properties that you can specify in the `analysis_config` component of the body of this API.').optional().meta({ found_in: 'body' }),
  max_bucket_cardinality: z.record(z.lazy(() => Field), z.lazy(() => long)).describe('Estimates of the highest cardinality in a single bucket that is observed for influencer fields over the time period that the job analyzes data. To produce a good answer, values must be provided for all influencer fields. Providing values for fields that are not listed as `influencers` has no effect on the estimation.').optional().meta({ found_in: 'body' }),
  overall_cardinality: z.record(z.lazy(() => Field), z.lazy(() => long)).describe('Estimates of the cardinality that is observed for fields over the whole time period that the job analyzes data. To produce a good answer, values must be provided for fields referenced in the `by_field_name`, `over_field_name` and `partition_field_name` of any detectors. Providing values for other fields has no effect on the estimation. It can be omitted from the request if no detectors have a `by_field_name`, `over_field_name` or `partition_field_name`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlEstimateModelMemoryRequest' })
export type MlEstimateModelMemoryRequest = z.infer<typeof MlEstimateModelMemoryRequest>

export const MlEstimateModelMemoryResponse = z.object({
  model_memory_estimate: z.string()
}).meta({ id: 'MlEstimateModelMemoryResponse' })
export type MlEstimateModelMemoryResponse = z.infer<typeof MlEstimateModelMemoryResponse>
