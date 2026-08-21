/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id, Metadata } from './_types.js'
import { TransformDestination, TransformLatest, TransformPivot, TransformRetentionPolicyContainer, TransformSettings, TransformSource, TransformSyncContainer } from './transform.js'

/**
 * Create a transform.
 *
 * Creates a transform.
 *
 * A transform copies data from source indices, transforms it, and persists it into an entity-centric destination index. You can also think of the destination index as a two-dimensional tabular data structure (known as
 * a data frame). The ID for each document in the data frame is generated from a hash of the entity, so there is a
 * unique row per entity.
 *
 * You must choose either the latest or pivot method for your transform; you cannot use both in a single transform. If
 * you choose to use the pivot method for your transform, the entities are defined by the set of `group_by` fields in
 * the pivot object. If you choose to use the latest method, the entities are defined by the `unique_key` field values
 * in the latest object.
 *
 * You must have `create_index`, `index`, and `read` privileges on the destination index and `read` and
 * `view_index_metadata` privileges on the source indices. When Elasticsearch security features are enabled, the
 * transform remembers which roles the user that created it had at the time of creation and uses those same roles. If
 * those roles do not have the required privileges on the source and destination indices, the transform fails when it
 * attempts unauthorized operations.
 *
 * NOTE: You must use Kibana or this API to create a transform. Do not add a transform directly into any
 * `.transform-internal*` indices using the Elasticsearch index API. If Elasticsearch security features are enabled, do
 * not give users any privileges on `.transform-internal*` indices. If you used transforms prior to 7.5, also do not
 * give users any privileges on `.data-frame-internal*` indices.
 */
export const TransformPutTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  defer_validation: z.boolean().describe('When the transform is created, a series of validations occur to ensure its success. For example, there is a check for the existence of the source indices and a check that the destination index is not part of the source index pattern. You can use this parameter to skip the checks, for example when the source index does not exist until after the transform is created. The validations are always run when you start the transform, however, with the exception of privilege checks.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  dest: TransformDestination.describe('The destination for the transform.').meta({ found_in: 'body' }),
  description: z.string().describe('Free text description of the transform.').optional().meta({ found_in: 'body' }),
  frequency: z.lazy(() => Duration).describe('The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is `1s` and the maximum is `1h`.').optional().meta({ found_in: 'body' }),
  latest: TransformLatest.describe('The latest method transforms the data by finding the latest document for each unique key.').optional().meta({ found_in: 'body' }),
  _meta: z.lazy(() => Metadata).describe('Defines optional transform metadata.').optional().meta({ found_in: 'body' }),
  pivot: TransformPivot.describe('The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data.').optional().meta({ found_in: 'body' }),
  retention_policy: TransformRetentionPolicyContainer.describe('Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index.').optional().meta({ found_in: 'body' }),
  settings: TransformSettings.describe('Defines optional transform settings.').optional().meta({ found_in: 'body' }),
  source: TransformSource.describe('The source of the data for the transform.').meta({ found_in: 'body' }),
  sync: TransformSyncContainer.describe('Defines the properties transforms require to run continuously.').optional().meta({ found_in: 'body' })
}).meta({ id: 'TransformPutTransformRequest' })
export type TransformPutTransformRequest = z.infer<typeof TransformPutTransformRequest>

export const TransformPutTransformResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'TransformPutTransformResponse' })
export type TransformPutTransformResponse = z.infer<typeof TransformPutTransformResponse>
