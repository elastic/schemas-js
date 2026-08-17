/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceEndpoint, InferenceInferenceEndpointInfo, InferenceTaskType } from './inference.js'

/**
 * Create an inference endpoint.
 *
 * IMPORTANT: The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Mistral, Azure OpenAI, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face.
 * For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models.
 * However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 *
 * The following integrations are available through the inference API. You can find the available task types next to the integration name:
 * * AI21 (`chat_completion`, `completion`)
 * * AlibabaCloud AI Search (`completion`, `rerank`, `sparse_embedding`, `text_embedding`)
 * * Amazon Bedrock (`chat_completion`, `completion`, `text_embedding`)
 * * Amazon SageMaker (`chat_completion`, `completion`, `rerank`, `sparse_embedding`, `text_embedding`)
 * * Anthropic (`chat_completion`, `completion`)
 * * Azure AI Studio (`completion`, `rerank`, `text_embedding`)
 * * Azure OpenAI (`chat_completion`, `completion`, `text_embedding`)
 * * Cohere (`completion`, `rerank`, `text_embedding`)
 * * DeepSeek (`chat_completion`, `completion`)
 * * Elasticsearch (`rerank`, `sparse_embedding`, `text_embedding` - this service is for built-in models and models uploaded through Eland)
 * * ELSER (`sparse_embedding`)
 * * Fireworks AI (`chat_completion`, `completion`, `text_embedding`)
 * * Google AI Studio (`completion`, `text_embedding`)
 * * Google Vertex AI (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * Groq (`chat_completion`)
 * * Hugging Face (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * JinaAI (`embedding`, `rerank`, `text_embedding`)
 * * Llama (`chat_completion`, `completion`, `text_embedding`)
 * * Mistral (`chat_completion`, `completion`, `text_embedding`)
 * * Nvidia (`chat_completion`, `completion`, `text_embedding`, `rerank`)
 * * OpenAI (`chat_completion`, `completion`, `text_embedding`)
 * * OpenShift AI (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 * * VoyageAI (`rerank`, `text_embedding`)
 * * Watsonx (`chat_completion`, `completion`, `rerank`, `text_embedding`)
 */
export const InferencePutRequest = z.object({
  task_type: InferenceTaskType.describe('The task type. Refer to the integration list in the API description for the available task types.').optional().meta({ found_in: 'path' }),
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created. The default depends on the task type: 120s for `completion` and `chat_completion`, and 30s for all other task types.').optional().meta({ found_in: 'query' }),
  inference_config: InferenceInferenceEndpoint.optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutRequest' })
export type InferencePutRequest = z.infer<typeof InferencePutRequest>

export const InferencePutResponse = InferenceInferenceEndpointInfo.meta({ id: 'InferencePutResponse' })
export type InferencePutResponse = z.infer<typeof InferencePutResponse>
