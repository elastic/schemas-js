/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'

/**
 * Predict future behavior of a time series.
 *
 * Forecasts are not supported for jobs that perform population analysis; an
 * error occurs if you try to create a forecast for a job that has an
 * `over_field_name` in its configuration. Forcasts predict future behavior
 * based on historical data.
 */
export const MlForecastRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job. The job must be open when you create a forecast; otherwise, an error occurs.').meta({ found_in: 'path' }),
  duration: z.lazy(() => Duration).describe('Refer to the description for the `duration` query parameter.').optional().meta({ found_in: 'body' }),
  expires_in: z.lazy(() => Duration).describe('Refer to the description for the `expires_in` query parameter.').optional().meta({ found_in: 'body' }),
  max_model_memory: z.string().describe('Refer to the description for the `max_model_memory` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlForecastRequest' })
export type MlForecastRequest = z.infer<typeof MlForecastRequest>

export const MlForecastResponse = z.object({
  acknowledged: z.boolean(),
  forecast_id: z.lazy(() => Id)
}).meta({ id: 'MlForecastResponse' })
export type MlForecastResponse = z.infer<typeof MlForecastResponse>
