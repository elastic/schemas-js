/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/** Delete a transform. */
export const TransformDeleteTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform.').meta({ found_in: 'path' }),
  force: z.boolean().describe('If this value is false, the transform must be stopped before it can be deleted. If true, the transform is deleted regardless of its current state.').optional().meta({ found_in: 'query' }),
  delete_dest_index: z.boolean().describe('If this value is true, the destination index is deleted together with the transform. If false, the destination index will not be deleted').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformDeleteTransformRequest' })
export type TransformDeleteTransformRequest = z.infer<typeof TransformDeleteTransformRequest>

export const TransformDeleteTransformResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'TransformDeleteTransformResponse' })
export type TransformDeleteTransformResponse = z.infer<typeof TransformDeleteTransformResponse>
