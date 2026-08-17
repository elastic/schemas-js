/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, DurationValue, EpochTime, Field, Id, double, integer, long } from './_types.js'
import { MlPage } from './ml.js'

export const MlBucketInfluencer = z.object({
  anomaly_score: z.lazy(() => double).describe('A normalized score between 0-100, which is calculated for each bucket influencer. This score might be updated as newer data is analyzed.'),
  bucket_span: z.lazy(() => DurationValue).describe('The length of the bucket in seconds. This value matches the bucket span that is specified in the job.'),
  influencer_field_name: z.lazy(() => Field).describe('The field name of the influencer.'),
  initial_anomaly_score: z.lazy(() => double).describe('The score between 0-100 for each bucket influencer. This score is the initial value that was calculated at the time the bucket was processed.'),
  is_interim: z.boolean().describe('If true, this is an interim result. In other words, the results are calculated based on partial input data.'),
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.'),
  probability: z.lazy(() => double).describe('The probability that the bucket has this behavior, in the range 0 to 1. This value can be held to a high precision of over 300 decimal places, so the `anomaly_score` is provided as a human-readable and friendly interpretation of this.'),
  raw_anomaly_score: z.lazy(() => double).describe('Internal.'),
  result_type: z.string().describe('Internal. This value is always set to `bucket_influencer`.'),
  timestamp: z.lazy(() => EpochTime).describe('The start time of the bucket for which these results were calculated.'),
  timestamp_string: z.lazy(() => DateTime).describe('The start time of the bucket for which these results were calculated.').optional()
}).meta({ id: 'MlBucketInfluencer' })
export type MlBucketInfluencer = z.infer<typeof MlBucketInfluencer>

export const MlBucketSummary = z.object({
  anomaly_score: z.lazy(() => double).describe('The maximum anomaly score, between 0-100, for any of the bucket influencers. This is an overall, rate-limited score for the job. All the anomaly records in the bucket contribute to this score. This value might be updated as new data is analyzed.'),
  bucket_influencers: z.array(MlBucketInfluencer),
  bucket_span: z.lazy(() => DurationValue).describe('The length of the bucket in seconds. This value matches the bucket span that is specified in the job.'),
  event_count: z.lazy(() => long).describe('The number of input data records processed in this bucket.'),
  initial_anomaly_score: z.lazy(() => double).describe('The maximum anomaly score for any of the bucket influencers. This is the initial value that was calculated at the time the bucket was processed.'),
  is_interim: z.boolean().describe('If true, this is an interim result. In other words, the results are calculated based on partial input data.'),
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.'),
  processing_time_ms: z.lazy(() => DurationValue).describe('The amount of time, in milliseconds, that it took to analyze the bucket contents and calculate results.'),
  result_type: z.string().describe('Internal. This value is always set to bucket.'),
  timestamp: z.lazy(() => EpochTime).describe('The start time of the bucket. This timestamp uniquely identifies the bucket. Events that occur exactly at the timestamp of the bucket are included in the results for the bucket.'),
  timestamp_string: z.lazy(() => DateTime).describe('The start time of the bucket. This timestamp uniquely identifies the bucket. Events that occur exactly at the timestamp of the bucket are included in the results for the bucket.').optional()
}).meta({ id: 'MlBucketSummary' })
export type MlBucketSummary = z.infer<typeof MlBucketSummary>

/**
 * Get anomaly detection job results for buckets.
 *
 * The API presents a chronological view of the records, grouped by bucket.
 */
export const MlGetBucketsRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  timestamp: z.lazy(() => DateTime).describe('The timestamp of a single bucket result. If you do not specify this parameter, the API returns information about all buckets.').optional().meta({ found_in: 'path' }),
  from: z.lazy(() => integer).describe('Skips the specified number of buckets.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of buckets to obtain.').optional().meta({ found_in: 'query' }),
  anomaly_score: z.lazy(() => double).describe('Refer to the description for the `anomaly_score` query parameter.').optional().meta({ found_in: 'body' }),
  desc: z.boolean().describe('Refer to the description for the `desc` query parameter.').optional().meta({ found_in: 'body' }),
  end: z.lazy(() => DateTime).describe('Refer to the description for the `end` query parameter.').optional().meta({ found_in: 'body' }),
  exclude_interim: z.boolean().describe('Refer to the description for the `exclude_interim` query parameter.').optional().meta({ found_in: 'body' }),
  expand: z.boolean().describe('Refer to the description for the `expand` query parameter.').optional().meta({ found_in: 'body' }),
  page: MlPage.optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Field).describe('Refer to the desription for the `sort` query parameter.').optional().meta({ found_in: 'body' }),
  start: z.lazy(() => DateTime).describe('Refer to the description for the `start` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlGetBucketsRequest' })
export type MlGetBucketsRequest = z.infer<typeof MlGetBucketsRequest>

export const MlGetBucketsResponse = z.object({
  buckets: z.array(MlBucketSummary),
  count: z.lazy(() => long)
}).meta({ id: 'MlGetBucketsResponse' })
export type MlGetBucketsResponse = z.infer<typeof MlGetBucketsResponse>
