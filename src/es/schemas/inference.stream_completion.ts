/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, StreamResult } from './_types.js'
import { InferenceTaskSettings } from './inference.js'

/**
 * Perform streaming completion inference on the service.
 *
 * Get real-time responses for completion tasks by delivering answers incrementally, reducing response times during computation.
 * This API works only with the completion task type.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege). You must use a client that supports streaming.
 */
export const InferenceStreamCompletionRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: z.union([z.string(), z.array(z.string())]).describe('The text on which you want to perform the inference task. It can be a single string or an array. NOTE: Inference endpoints for the completion task type currently only support a single string as input.').meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceStreamCompletionRequest' })
export type InferenceStreamCompletionRequest = z.infer<typeof InferenceStreamCompletionRequest>

export const InferenceStreamCompletionResponse = StreamResult.meta({ id: 'InferenceStreamCompletionResponse' })
export type InferenceStreamCompletionResponse = z.infer<typeof InferenceStreamCompletionResponse>
