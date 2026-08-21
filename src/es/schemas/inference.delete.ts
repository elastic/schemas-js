/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { InferenceTaskType } from './inference.js'

/** Acknowledged response. For dry_run, contains the list of pipelines which reference the inference endpoint */
export const InferenceDeleteInferenceEndpointResult = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.'),
  pipelines: z.array(z.string())
}).meta({ id: 'InferenceDeleteInferenceEndpointResult' })
export type InferenceDeleteInferenceEndpointResult = z.infer<typeof InferenceDeleteInferenceEndpointResult>

/**
 * Delete an inference endpoint.
 *
 * This API requires the manage_inference cluster privilege (the built-in `inference_admin` role grants this privilege).
 */
export const InferenceDeleteRequest = z.object({
  task_type: InferenceTaskType.describe('The task type').optional().meta({ found_in: 'path' }),
  inference_id: z.lazy(() => Id).describe('The inference identifier.').meta({ found_in: 'path' }),
  dry_run: z.boolean().describe('When true, checks the semantic_text fields and inference processors that reference the endpoint and returns them in a list, but does not delete the endpoint.').optional().meta({ found_in: 'query' }),
  force: z.boolean().describe('When true, the inference endpoint is forcefully deleted even if it is still being used by ingest processors or semantic text fields.').optional().meta({ found_in: 'query' })
}).meta({ id: 'InferenceDeleteRequest' })
export type InferenceDeleteRequest = z.infer<typeof InferenceDeleteRequest>

export const InferenceDeleteResponse = InferenceDeleteInferenceEndpointResult.meta({ id: 'InferenceDeleteResponse' })
export type InferenceDeleteResponse = z.infer<typeof InferenceDeleteResponse>
