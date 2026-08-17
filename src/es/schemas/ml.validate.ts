/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id, IndexName, long } from './_types.js'
import { MlAnalysisConfig, MlAnalysisLimits, MlDataDescription, MlModelPlotConfig } from './ml.js'

/** Validate an anomaly detection job. */
export const MlValidateRequest = z.object({
  job_id: z.lazy(() => Id).optional().meta({ found_in: 'body' }),
  analysis_config: MlAnalysisConfig.optional().meta({ found_in: 'body' }),
  analysis_limits: z.lazy(() => MlAnalysisLimits).optional().meta({ found_in: 'body' }),
  data_description: z.lazy(() => MlDataDescription).optional().meta({ found_in: 'body' }),
  description: z.string().optional().meta({ found_in: 'body' }),
  model_plot: z.lazy(() => MlModelPlotConfig).optional().meta({ found_in: 'body' }),
  model_snapshot_id: z.lazy(() => Id).optional().meta({ found_in: 'body' }),
  model_snapshot_retention_days: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  results_index_name: z.lazy(() => IndexName).optional().meta({ found_in: 'body' })
}).meta({ id: 'MlValidateRequest' })
export type MlValidateRequest = z.infer<typeof MlValidateRequest>

export const MlValidateResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlValidateResponse' })
export type MlValidateResponse = z.infer<typeof MlValidateResponse>
