/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, integer } from './_types.js'

/**
 * Force buffered data to be processed.
 *
 * The flush jobs API is only applicable when sending data for analysis using
 * the post data API. Depending on the content of the buffer, then it might
 * additionally calculate new results. Both flush and close operations are
 * similar, however the flush is more efficient if you are expecting to send
 * more data for analysis. When flushing, the job remains open and is available
 * to continue analyzing data. A close operation additionally prunes and
 * persists the model state to disk and the job must be opened again before
 * analyzing further data.
 * @deprecated Forcing any buffered data to be processed is deprecated, in a future major version a datafeed will be required.
 */
export const MlFlushJobRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  advance_time: z.lazy(() => DateTime).describe('Refer to the description for the `advance_time` query parameter.').optional().meta({ found_in: 'body' }),
  calc_interim: z.boolean().describe('Refer to the description for the `calc_interim` query parameter.').optional().meta({ found_in: 'body' }),
  end: z.lazy(() => DateTime).describe('Refer to the description for the `end` query parameter.').optional().meta({ found_in: 'body' }),
  skip_time: z.lazy(() => DateTime).describe('Refer to the description for the `skip_time` query parameter.').optional().meta({ found_in: 'body' }),
  start: z.lazy(() => DateTime).describe('Refer to the description for the `start` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlFlushJobRequest' })
export type MlFlushJobRequest = z.infer<typeof MlFlushJobRequest>

export const MlFlushJobResponse = z.object({
  flushed: z.boolean(),
  last_finalized_bucket_end: z.lazy(() => integer).describe('Provides the timestamp (in milliseconds since the epoch) of the end of the last bucket that was processed.').optional()
}).meta({ id: 'MlFlushJobResponse' })
export type MlFlushJobResponse = z.infer<typeof MlFlushJobResponse>
