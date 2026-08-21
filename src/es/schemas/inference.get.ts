/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { InferenceInferenceEndpointInfo, InferenceTaskType } from './inference.js'

/**
 * Get an inference endpoint.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege).
 */
export const InferenceGetRequest = z.object({
  task_type: InferenceTaskType.describe('The task type of the endpoint to return').optional().meta({ found_in: 'path' }),
  inference_id: z.lazy(() => Id).describe('The inference Id of the endpoint to return. Using `_all` or `*` will return all endpoints with the specified `task_type` if one is specified, or all endpoints for all task types if no `task_type` is specified').optional().meta({ found_in: 'path' })
}).meta({ id: 'InferenceGetRequest' })
export type InferenceGetRequest = z.infer<typeof InferenceGetRequest>

export const InferenceGetResponse = z.object({
  endpoints: z.array(InferenceInferenceEndpointInfo)
}).meta({ id: 'InferenceGetResponse' })
export type InferenceGetResponse = z.infer<typeof InferenceGetResponse>
