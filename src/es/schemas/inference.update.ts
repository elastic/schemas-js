/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceEndpoint, InferenceInferenceEndpointInfo, InferenceTaskType } from './inference.js'

/**
 * Update an inference endpoint.
 *
 * Modify `task_settings`, secrets (within `service_settings`), or `num_allocations` for an inference endpoint, depending on the specific endpoint service and `task_type`.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models.
 * However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 */
export const InferenceUpdateRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  task_type: InferenceTaskType.describe('The type of inference task that the model performs.').optional().meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be updated. The default depends on the task type: 120s for `completion` and `chat_completion`, and 30s for all other task types.').optional().meta({ found_in: 'query' }),
  inference_config: InferenceInferenceEndpoint.optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceUpdateRequest' })
export type InferenceUpdateRequest = z.infer<typeof InferenceUpdateRequest>

export const InferenceUpdateResponse = InferenceInferenceEndpointInfo.meta({ id: 'InferenceUpdateResponse' })
export type InferenceUpdateResponse = z.infer<typeof InferenceUpdateResponse>
