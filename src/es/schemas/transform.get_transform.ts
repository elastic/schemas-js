/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, EpochTime, Id, Metadata, Names, VersionString, integer, long } from './_types.js'
import { MlTransformAuthorization } from './ml.js'
import { TransformDestination, TransformLatest, TransformPivot, TransformRetentionPolicyContainer, TransformSettings, TransformSource, TransformSyncContainer } from './transform.js'

/**
 * Get transforms.
 *
 * Get configuration information for transforms.
 */
export const TransformGetTransformRequest = z.object({
  transform_id: z.lazy(() => Names).describe('Identifier for the transform. It can be a transform identifier or a wildcard expression. You can get information for all transforms by using `_all`, by specifying `*` as the `<transform_id>`, or by omitting the `<transform_id>`.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no transforms that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of transforms.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of transforms to obtain.').optional().meta({ found_in: 'query' }),
  exclude_generated: z.boolean().describe('Excludes fields that were automatically added when creating the transform. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformGetTransformRequest' })
export type TransformGetTransformRequest = z.infer<typeof TransformGetTransformRequest>

export const TransformGetTransformTransformSummary = z.object({
  authorization: MlTransformAuthorization.describe('The security privileges that the transform uses to run its queries. If Elastic Stack security features were disabled at the time of the most recent update to the transform, this property is omitted.').optional(),
  create_time: z.lazy(() => EpochTime).describe('The time the transform was created.').optional(),
  create_time_string: z.lazy(() => DateTime).optional(),
  description: z.string().describe('Free text description of the transform.').optional(),
  dest: TransformDestination.describe('The destination for the transform.'),
  frequency: z.lazy(() => Duration).optional(),
  id: z.lazy(() => Id),
  latest: TransformLatest.optional(),
  pivot: TransformPivot.describe('The pivot method transforms the data by aggregating and grouping it.').optional(),
  retention_policy: TransformRetentionPolicyContainer.optional(),
  settings: TransformSettings.describe('Defines optional transform settings.').optional(),
  source: TransformSource.describe('The source of the data for the transform.'),
  sync: TransformSyncContainer.describe('Defines the properties transforms require to run continuously.').optional(),
  version: z.lazy(() => VersionString).describe('The version of Elasticsearch that existed on the node when the transform was created.').optional(),
  _meta: z.lazy(() => Metadata).optional()
}).meta({ id: 'TransformGetTransformTransformSummary' })
export type TransformGetTransformTransformSummary = z.infer<typeof TransformGetTransformTransformSummary>

export const TransformGetTransformResponse = z.object({
  count: z.lazy(() => long),
  transforms: z.array(TransformGetTransformTransformSummary)
}).meta({ id: 'TransformGetTransformResponse' })
export type TransformGetTransformResponse = z.infer<typeof TransformGetTransformResponse>
