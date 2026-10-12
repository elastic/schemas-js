/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, integer, long } from './_types.js'

/**
 * Get the recovery point objective series.
 *
 * Get, for each bucket in the half-open range `[start, end)`, the maximum age
 * that the newest recoverable state reached during that bucket.
 * This API is intended for internal operator use.
 * The range is divided into at most 1,000 buckets. A bucket has no value if
 * no retained recovery point covers its start.
 */
export const DataRecoveryGetRpoSeriesRequest = z.object({
  start: z.lazy(() => DateTime).describe('The inclusive start of the range, as a date or epoch milliseconds. When omitted, it is seven days before `end`, rounded down to a whole multiple of `bucket_duration`, so that repeated requests with default parameters return the same bucket boundaries.').optional().meta({ found_in: 'query' }),
  end: z.lazy(() => DateTime).describe('The exclusive end of the range, as a date or epoch milliseconds.').optional().meta({ found_in: 'query' }),
  bucket_duration: z.lazy(() => Duration).describe('The duration of each bucket. It must be greater than zero, and the range must divide into at most 1,000 buckets.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DataRecoveryGetRpoSeriesRequest' })
export type DataRecoveryGetRpoSeriesRequest = z.infer<typeof DataRecoveryGetRpoSeriesRequest>

export const DataRecoveryGetRpoSeriesRpoBucket = z.object({
  start: z.lazy(() => DateTime).describe('The inclusive start of the bucket.'),
  end: z.lazy(() => DateTime).describe('The exclusive end of the bucket. The last bucket is clipped to the end of the range.'),
  max_recovery_point_age_millis: z.union([z.lazy(() => long), z.null()]).describe('The greatest age, in milliseconds, that the newest recoverable state reached during the bucket. It is `null` if no retained recovery point covers the start of the bucket or the bucket starts in the future.')
}).meta({ id: 'DataRecoveryGetRpoSeriesRpoBucket' })
export type DataRecoveryGetRpoSeriesRpoBucket = z.infer<typeof DataRecoveryGetRpoSeriesRpoBucket>

export const DataRecoveryGetRpoSeriesResponse = z.object({
  start: z.lazy(() => DateTime).describe('The inclusive start of the range.'),
  end: z.lazy(() => DateTime).describe('The exclusive end of the range.'),
  bucket_duration: z.lazy(() => Duration).describe('The duration of each bucket.'),
  bucket_count: z.lazy(() => integer).describe('The number of buckets in the series.'),
  buckets: z.array(DataRecoveryGetRpoSeriesRpoBucket).describe('The buckets in ascending order by start time.')
}).meta({ id: 'DataRecoveryGetRpoSeriesResponse' })
export type DataRecoveryGetRpoSeriesResponse = z.infer<typeof DataRecoveryGetRpoSeriesResponse>
