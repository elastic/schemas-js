/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata, VersionString, long } from './_types.js'
import { MlTransformAuthorization } from './ml.js'
import { ReindexSource } from './reindex.js'
import { TransformDestination, TransformLatest, TransformPivot, TransformRetentionPolicyContainer, TransformSettings, TransformSource, TransformSyncContainer } from './transform.js'

/**
 * Update a transform.
 *
 * Updates certain properties of a transform.
 *
 * All updated properties except `description` do not take effect until after the transform starts the next checkpoint,
 * thus there is data consistency in each checkpoint. To use this API, you must have `read` and `view_index_metadata`
 * privileges for the source indices. You must also have `index` and `read` privileges for the destination index. When
 * Elasticsearch security features are enabled, the transform remembers which roles the user who updated it had at the
 * time of update and runs with those privileges.
 */
export const TransformUpdateTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform.').meta({ found_in: 'path' }),
  defer_validation: z.boolean().describe('When true, deferrable validations are not run. This behavior may be desired if the source index does not exist until after the transform is created.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  dest: TransformDestination.describe('The destination for the transform.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('Free text description of the transform.').optional().meta({ found_in: 'body' }),
  frequency: z.lazy(() => Duration).describe('The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h.').optional().meta({ found_in: 'body' }),
  _meta: z.lazy(() => Metadata).describe('Defines optional transform metadata.').optional().meta({ found_in: 'body' }),
  source: TransformSource.describe('The source of the data for the transform.').optional().meta({ found_in: 'body' }),
  settings: TransformSettings.describe('Defines optional transform settings.').optional().meta({ found_in: 'body' }),
  sync: TransformSyncContainer.describe('Defines the properties transforms require to run continuously.').optional().meta({ found_in: 'body' }),
  retention_policy: z.union([TransformRetentionPolicyContainer, z.null()]).describe('Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index.').optional().meta({ found_in: 'body' }),
  _force_rekeying: z.boolean().describe('When true, force reminting of the transform\'s internal cloud API key from the caller\'s cloud credential without requiring other configuration changes. Requires a cloud-authenticated caller and an environment that supports cross-project calls. Rejected with 400 otherwise.').optional().meta({ found_in: 'body' })
}).meta({ id: 'TransformUpdateTransformRequest' })
export type TransformUpdateTransformRequest = z.infer<typeof TransformUpdateTransformRequest>

export const TransformUpdateTransformResponse = z.object({
  authorization: MlTransformAuthorization.optional(),
  create_time: z.lazy(() => long),
  description: z.string(),
  dest: TransformDestination,
  frequency: z.lazy(() => Duration).optional(),
  id: z.lazy(() => Id),
  latest: TransformLatest.optional(),
  pivot: TransformPivot.optional(),
  retention_policy: TransformRetentionPolicyContainer.optional(),
  settings: TransformSettings,
  source: ReindexSource,
  sync: TransformSyncContainer.optional(),
  version: z.lazy(() => VersionString),
  _meta: z.lazy(() => Metadata).optional()
}).meta({ id: 'TransformUpdateTransformResponse' })
export type TransformUpdateTransformResponse = z.infer<typeof TransformUpdateTransformResponse>
