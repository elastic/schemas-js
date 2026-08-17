/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceCompletionResult, InferenceTaskSettings } from './inference.js'

/** Defines the completion result. */
export const InferenceCompletionInferenceResult = z.object({
  completion: z.array(InferenceCompletionResult)
}).meta({ id: 'InferenceCompletionInferenceResult' })
export type InferenceCompletionInferenceResult = z.infer<typeof InferenceCompletionInferenceResult>

/**
 * Perform completion inference on the service.
 *
 * Get responses for completion tasks.
 * This API works only with the completion task type.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * This API requires the `monitor_inference` cluster privilege (the built-in `inference_admin` and `inference_user` roles grant this privilege).
 */
export const InferenceCompletionRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: z.union([z.string(), z.array(z.string())]).describe('Inference input. Either a string or an array of strings.').meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceCompletionRequest' })
export type InferenceCompletionRequest = z.infer<typeof InferenceCompletionRequest>

export const InferenceCompletionResponse = InferenceCompletionInferenceResult.meta({ id: 'InferenceCompletionResponse' })
export type InferenceCompletionResponse = z.infer<typeof InferenceCompletionResponse>
