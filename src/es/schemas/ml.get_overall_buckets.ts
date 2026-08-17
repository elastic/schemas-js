/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, EpochTime, Id, double, integer, long } from './_types.js'

export const MlOverallBucketJob = z.object({
  job_id: z.lazy(() => Id),
  max_anomaly_score: z.lazy(() => double)
}).meta({ id: 'MlOverallBucketJob' })
export type MlOverallBucketJob = z.infer<typeof MlOverallBucketJob>

export const MlOverallBucket = z.object({
  bucket_span: z.lazy(() => DurationValue).describe('The length of the bucket in seconds. Matches the job with the longest bucket_span value.'),
  is_interim: z.boolean().describe('If true, this is an interim result. In other words, the results are calculated based on partial input data.'),
  jobs: z.array(MlOverallBucketJob).describe('An array of objects that contain the max_anomaly_score per job_id.'),
  overall_score: z.lazy(() => double).describe('The top_n average of the maximum bucket anomaly_score per job.'),
  result_type: z.string().describe('Internal. This is always set to overall_bucket.'),
  timestamp: z.lazy(() => EpochTime).describe('The start time of the bucket for which these results were calculated.'),
  timestamp_string: z.lazy(() => DateTime).describe('The start time of the bucket for which these results were calculated.').optional()
}).meta({ id: 'MlOverallBucket' })
export type MlOverallBucket = z.infer<typeof MlOverallBucket>

/**
 * Get overall bucket results.
 *
 * Retrievs overall bucket results that summarize the bucket results of
 * multiple anomaly detection jobs.
 *
 * The `overall_score` is calculated by combining the scores of all the
 * buckets within the overall bucket span. First, the maximum
 * `anomaly_score` per anomaly detection job in the overall bucket is
 * calculated. Then the `top_n` of those scores are averaged to result in
 * the `overall_score`. This means that you can fine-tune the
 * `overall_score` so that it is more or less sensitive to the number of
 * jobs that detect an anomaly at the same time. For example, if you set
 * `top_n` to `1`, the `overall_score` is the maximum bucket score in the
 * overall bucket. Alternatively, if you set `top_n` to the number of jobs,
 * the `overall_score` is high only when all jobs detect anomalies in that
 * overall bucket. If you set the `bucket_span` parameter (to a value
 * greater than its default), the `overall_score` is the maximum
 * `overall_score` of the overall buckets that have a span equal to the
 * jobs' largest bucket span.
 */
export const MlGetOverallBucketsRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job. It can be a job identifier, a group name, a comma-separated list of jobs or groups, or a wildcard expression. You can summarize the bucket results for all anomaly detection jobs by using `_all` or by specifying `*` as the `<job_id>`.').meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Refer to the description for the `allow_no_match` query parameter.').optional().meta({ found_in: 'body' }),
  bucket_span: z.lazy(() => Duration).describe('Refer to the description for the `bucket_span` query parameter.').optional().meta({ found_in: 'body' }),
  end: z.lazy(() => DateTime).describe('Refer to the description for the `end` query parameter.').optional().meta({ found_in: 'body' }),
  exclude_interim: z.boolean().describe('Refer to the description for the `exclude_interim` query parameter.').optional().meta({ found_in: 'body' }),
  overall_score: z.lazy(() => double).describe('Refer to the description for the `overall_score` query parameter.').optional().meta({ found_in: 'body' }),
  start: z.lazy(() => DateTime).describe('Refer to the description for the `start` query parameter.').optional().meta({ found_in: 'body' }),
  top_n: z.lazy(() => integer).describe('Refer to the description for the `top_n` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlGetOverallBucketsRequest' })
export type MlGetOverallBucketsRequest = z.infer<typeof MlGetOverallBucketsRequest>

export const MlGetOverallBucketsResponse = z.object({
  count: z.lazy(() => long),
  overall_buckets: z.array(MlOverallBucket).describe('Array of overall bucket objects')
}).meta({ id: 'MlGetOverallBucketsResponse' })
export type MlGetOverallBucketsResponse = z.infer<typeof MlGetOverallBucketsResponse>
