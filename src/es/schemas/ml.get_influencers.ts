/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, DurationValue, EpochTime, Field, Id, double, integer, long } from './_types.js'
import { MlPage } from './ml.js'

export const MlInfluencer = z.object({
  bucket_span: z.lazy(() => DurationValue).describe('The length of the bucket in seconds. This value matches the bucket span that is specified in the job.'),
  influencer_score: z.lazy(() => double).describe('A normalized score between 0-100, which is based on the probability of the influencer in this bucket aggregated across detectors. Unlike `initial_influencer_score`, this value is updated by a re-normalization process as new data is analyzed.'),
  influencer_field_name: z.lazy(() => Field).describe('The field name of the influencer.'),
  influencer_field_value: z.string().describe('The entity that influenced, contributed to, or was to blame for the anomaly.'),
  initial_influencer_score: z.lazy(() => double).describe('A normalized score between 0-100, which is based on the probability of the influencer aggregated across detectors. This is the initial value that was calculated at the time the bucket was processed.'),
  is_interim: z.boolean().describe('If true, this is an interim result. In other words, the results are calculated based on partial input data.'),
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.'),
  probability: z.lazy(() => double).describe('The probability that the influencer has this behavior, in the range 0 to 1. This value can be held to a high precision of over 300 decimal places, so the `influencer_score` is provided as a human-readable and friendly interpretation of this value.'),
  result_type: z.string().describe('Internal. This value is always set to `influencer`.'),
  timestamp: z.lazy(() => EpochTime).describe('The start time of the bucket for which these results were calculated.'),
  foo: z.string().describe('Additional influencer properties are added, depending on the fields being analyzed. For example, if it’s analyzing `user_name` as an influencer, a field `user_name` is added to the result document. This information enables you to filter the anomaly results more easily.').optional()
}).meta({ id: 'MlInfluencer' })
export type MlInfluencer = z.infer<typeof MlInfluencer>

/**
 * Get anomaly detection job results for influencers.
 *
 * Influencers are the entities that have contributed to, or are to blame for,
 * the anomalies. Influencer results are available only if an
 * `influencer_field_name` is specified in the job configuration.
 */
export const MlGetInfluencersRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  desc: z.boolean().describe('If true, the results are sorted in descending order.').optional().meta({ found_in: 'query' }),
  end: z.lazy(() => DateTime).describe('Returns influencers with timestamps earlier than this time. The default value means it is unset and results are not limited to specific timestamps.').optional().meta({ found_in: 'query' }),
  exclude_interim: z.boolean().describe('If true, the output excludes interim results. By default, interim results are included.').optional().meta({ found_in: 'query' }),
  influencer_score: z.lazy(() => double).describe('Returns influencers with anomaly scores greater than or equal to this value.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of influencers.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of influencers to obtain.').optional().meta({ found_in: 'query' }),
  sort: z.lazy(() => Field).describe('Specifies the sort field for the requested influencers. By default, the influencers are sorted by the `influencer_score` value.').optional().meta({ found_in: 'query' }),
  start: z.lazy(() => DateTime).describe('Returns influencers with timestamps after this time. The default value means it is unset and results are not limited to specific timestamps.').optional().meta({ found_in: 'query' }),
  page: MlPage.describe('Configures pagination. This parameter has the `from` and `size` properties.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlGetInfluencersRequest' })
export type MlGetInfluencersRequest = z.infer<typeof MlGetInfluencersRequest>

export const MlGetInfluencersResponse = z.object({
  count: z.lazy(() => long),
  influencers: z.array(MlInfluencer).describe('Array of influencer objects')
}).meta({ id: 'MlGetInfluencersResponse' })
export type MlGetInfluencersResponse = z.infer<typeof MlGetInfluencersResponse>
