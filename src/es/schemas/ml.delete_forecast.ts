/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/**
 * Delete forecasts from a job.
 *
 * By default, forecasts are retained for 14 days. You can specify a
 * different retention period with the `expires_in` parameter in the forecast
 * jobs API. The delete forecast API enables you to delete one or more
 * forecasts before they expire.
 */
export const MlDeleteForecastRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  forecast_id: z.lazy(() => Id).describe('A comma-separated list of forecast identifiers. If you do not specify this optional parameter or if you specify `_all` or `*` the API deletes all forecasts from the job.').optional().meta({ found_in: 'path' }),
  allow_no_forecasts: z.boolean().describe('Specifies whether an error occurs when there are no forecasts. In particular, if this parameter is set to `false` and there are no forecasts associated with the job, attempts to delete all forecasts return an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Specifies the period of time to wait for the completion of the delete operation. When this period of time elapses, the API fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteForecastRequest' })
export type MlDeleteForecastRequest = z.infer<typeof MlDeleteForecastRequest>

export const MlDeleteForecastResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteForecastResponse' })
export type MlDeleteForecastResponse = z.infer<typeof MlDeleteForecastResponse>
