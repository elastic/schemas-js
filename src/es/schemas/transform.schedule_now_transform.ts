/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/**
 * Schedule a transform to start now.
 *
 * Instantly run a transform to process data.
 * If you run this API, the transform will process the new data instantly,
 * without waiting for the configured frequency interval. After the API is called,
 * the transform will be processed again at `now + frequency` unless the API
 * is called again in the meantime.
 */
export const TransformScheduleNowTransformRequest = z.object({
  transform_id: z.lazy(() => Id).describe('Identifier for the transform.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Controls the time to wait for the scheduling to take place').optional().meta({ found_in: 'query' }),
  defer: z.boolean().describe('When true, defers the scheduling by the transform\'s configured sync delay instead of triggering immediately. The transform will process new data after the delay elapses rather than right away.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformScheduleNowTransformRequest' })
export type TransformScheduleNowTransformRequest = z.infer<typeof TransformScheduleNowTransformRequest>

export const TransformScheduleNowTransformResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'TransformScheduleNowTransformResponse' })
export type TransformScheduleNowTransformResponse = z.infer<typeof TransformScheduleNowTransformResponse>
