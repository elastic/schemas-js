/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, StreamResult } from './_types.js'
import { InferenceRequestChatCompletion } from './inference.js'

/**
 * Perform streaming chat completion inference on the service.
 *
 * The chat completion inference API enables real-time responses for chat completion tasks by delivering answers incrementally, reducing response times during computation.
 * It only works with the `chat_completion` task type.
 *
 * NOTE: The `chat_completion` task type supports both streaming and non-streaming.
 * The Chat completion inference API and the Stream inference API differ in their response structure and capabilities.
 * The Chat completion inference API provides more comprehensive customization options through more fields and function calling support.
 * To determine whether a given inference service supports this task type, please see the page for that service.
 */
export const InferenceChatCompletionUnifiedRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  chat_completion_request: z.lazy(() => InferenceRequestChatCompletion).optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceChatCompletionUnifiedRequest' })
export type InferenceChatCompletionUnifiedRequest = z.infer<typeof InferenceChatCompletionUnifiedRequest>

export const InferenceChatCompletionUnifiedResponse = StreamResult.meta({ id: 'InferenceChatCompletionUnifiedResponse' })
export type InferenceChatCompletionUnifiedResponse = z.infer<typeof InferenceChatCompletionUnifiedResponse>
