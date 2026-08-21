/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { IndicesIndexState } from './indices.js'
import { TransformDestination, TransformLatest, TransformPivot, TransformRetentionPolicyContainer, TransformSettings, TransformSource, TransformSyncContainer } from './transform.js'

/**
 * Preview a transform.
 *
 * Generates a preview of the results that you will get when you create a transform with the same configuration.
 *
 * It returns a maximum of 100 results. The calculations are based on all the current data in the source index. It also
 * generates a list of mappings and settings for the destination index. These values are determined based on the field
 * types of the source index and the transform aggregations.
 */
export const TransformPreviewTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform to preview. If you specify this path parameter, you cannot provide transform configuration details in the request body.').optional().meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  dest: TransformDestination.describe('The destination for the transform.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('Free text description of the transform.').optional().meta({ found_in: 'body' }),
  frequency: z.lazy(() => Duration).describe('The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h.').optional().meta({ found_in: 'body' }),
  pivot: TransformPivot.describe('The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data.').optional().meta({ found_in: 'body' }),
  source: TransformSource.describe('The source of the data for the transform.').optional().meta({ found_in: 'body' }),
  settings: TransformSettings.describe('Defines optional transform settings.').optional().meta({ found_in: 'body' }),
  sync: TransformSyncContainer.describe('Defines the properties transforms require to run continuously.').optional().meta({ found_in: 'body' }),
  retention_policy: TransformRetentionPolicyContainer.describe('Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index.').optional().meta({ found_in: 'body' }),
  latest: TransformLatest.describe('The latest method transforms the data by finding the latest document for each unique key.').optional().meta({ found_in: 'body' })
}).meta({ id: 'TransformPreviewTransformRequest' })
export type TransformPreviewTransformRequest = z.infer<typeof TransformPreviewTransformRequest>

export const TransformPreviewTransformResponse = z.object({
  generated_dest_index: IndicesIndexState,
  preview: z.array(z.any())
}).meta({ id: 'TransformPreviewTransformResponse' })
export type TransformPreviewTransformResponse = z.infer<typeof TransformPreviewTransformResponse>
