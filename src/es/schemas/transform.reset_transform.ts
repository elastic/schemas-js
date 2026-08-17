/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/**
 * Reset a transform.
 *
 * Before you can reset it, you must stop it; alternatively, use the `force` query parameter.
 * If the destination index was created by the transform, it is deleted.
 */
export const TransformResetTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  force: z.boolean().describe('If this value is `true`, the transform is reset regardless of its current state. If it\'s `false`, the transform must be stopped before it can be reset.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformResetTransformRequest' })
export type TransformResetTransformRequest = z.infer<typeof TransformResetTransformRequest>

export const TransformResetTransformResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'TransformResetTransformResponse' })
export type TransformResetTransformResponse = z.infer<typeof TransformResetTransformResponse>
