/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, EpochTime, Id, long } from './_types.js'

/**
 * Send data to an anomaly detection job for analysis.
 *
 * IMPORTANT: For each job, data can be accepted from only a single connection at a time.
 * It is not currently possible to post data to multiple jobs using wildcards or a comma-separated list.
 * @deprecated Posting data directly to anomaly detection jobs is deprecated, in a future major version a datafeed will be required.
 */
export const MlPostDataRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job. The job must have a state of open to receive and process the data.').meta({ found_in: 'path' }),
  reset_end: z.lazy(() => DateTime).describe('Specifies the end of the bucket resetting range.').optional().meta({ found_in: 'query' }),
  reset_start: z.lazy(() => DateTime).describe('Specifies the start of the bucket resetting range.').optional().meta({ found_in: 'query' }),
  data: z.array(z.any()).optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPostDataRequest' })
export type MlPostDataRequest = z.infer<typeof MlPostDataRequest>

export const MlPostDataResponse = z.object({
  job_id: z.lazy(() => Id),
  processed_record_count: z.lazy(() => long),
  processed_field_count: z.lazy(() => long),
  input_bytes: z.lazy(() => long),
  input_field_count: z.lazy(() => long),
  invalid_date_count: z.lazy(() => long),
  missing_field_count: z.lazy(() => long),
  out_of_order_timestamp_count: z.lazy(() => long),
  empty_bucket_count: z.lazy(() => long),
  sparse_bucket_count: z.lazy(() => long),
  bucket_count: z.lazy(() => long),
  earliest_record_timestamp: z.lazy(() => EpochTime).optional(),
  latest_record_timestamp: z.lazy(() => EpochTime).optional(),
  last_data_time: z.lazy(() => EpochTime).optional(),
  latest_empty_bucket_timestamp: z.lazy(() => EpochTime).optional(),
  latest_sparse_bucket_timestamp: z.lazy(() => EpochTime).optional(),
  input_record_count: z.lazy(() => long),
  log_time: z.lazy(() => EpochTime).optional()
}).meta({ id: 'MlPostDataResponse' })
export type MlPostDataResponse = z.infer<typeof MlPostDataResponse>
