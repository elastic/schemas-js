/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, byte, float, integer, long } from './_types.js'
import { InferenceReasoningDetail } from './inference.non_streaming_chat_completion.js'
import { InferenceRegionPolicy } from './inference.put_region_policy.js'

export const InferenceEmbeddingContentType = z.enum(['text', 'image', 'audio', 'video', 'pdf']).meta({ id: 'InferenceEmbeddingContentType' })
export type InferenceEmbeddingContentType = z.infer<typeof InferenceEmbeddingContentType>

export const InferenceEmbeddingContentFormat = z.enum(['text', 'base64', 'url']).meta({ id: 'InferenceEmbeddingContentFormat' })
export type InferenceEmbeddingContentFormat = z.infer<typeof InferenceEmbeddingContentFormat>

export const InferenceAdaptiveAllocations = z.object({
  enabled: z.boolean().describe('Turn on `adaptive_allocations`.').optional(),
  max_number_of_allocations: z.lazy(() => integer).describe('The maximum number of allocations to scale to. If set, it must be greater than or equal to `min_number_of_allocations`.').optional(),
  min_number_of_allocations: z.lazy(() => integer).describe('The minimum number of allocations to scale to. If set, it must be greater than or equal to 0. If not defined, the deployment scales to 0.').optional()
}).meta({ id: 'InferenceAdaptiveAllocations' })
export type InferenceAdaptiveAllocations = z.infer<typeof InferenceAdaptiveAllocations>

/** This setting helps to minimize the number of rate limit errors returned from the service. */
export const InferenceRateLimitSetting = z.object({
  requests_per_minute: z.lazy(() => integer).describe('The number of requests allowed per minute. By default, the number of requests allowed per minute is set by each service as follows: * `alibabacloud-ai-search` service: `1000` * `amazonbedrock` service: `240` * `anthropic` service: `50` * `azureaistudio` service: `240` * `azureopenai` service and task type `text_embedding`: `1440` * `azureopenai` service and task types `completion` or `chat_completion`: `120` * `cohere` service: `10000` * `contextualai` service: `1000` * `elastic` service and task type `chat_completion`: `240` * `fireworksai` service: `6000` * `googleaistudio` service: `360` * `googlevertexai` service: `30000` * `hugging_face` service: `3000` * `jinaai` service: `2000` * `llama` service: `3000` * `mistral` service: `240` * `openai` service and task type `text_embedding`: `3000` * `openai` service and task type `completion`: `500` * `openshift_ai` service: `3000` * `voyageai` service: `2000` * `watsonxai` service: `120`').optional()
}).meta({ id: 'InferenceRateLimitSetting' })
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>

export const InferenceCohereTruncateType = z.enum(['END', 'NONE', 'START']).meta({ id: 'InferenceCohereTruncateType' })
export type InferenceCohereTruncateType = z.infer<typeof InferenceCohereTruncateType>

/** The completion result object */
export const InferenceCompletionResult = z.object({
  result: z.string()
}).meta({ id: 'InferenceCompletionResult' })
export type InferenceCompletionResult = z.infer<typeof InferenceCompletionResult>

/** The completion tool function definition. */
export const InferenceCompletionToolFunction = z.object({
  description: z.string().describe('A description of what the function does. This is used by the model to choose when and how to call the function.').optional(),
  name: z.string().describe('The name of the function.'),
  parameters: z.any().describe('The parameters the functional accepts. This should be formatted as a JSON object.').optional(),
  strict: z.boolean().describe('Whether to enable schema adherence when generating the function call.').optional()
}).meta({ id: 'InferenceCompletionToolFunction' })
export type InferenceCompletionToolFunction = z.infer<typeof InferenceCompletionToolFunction>

/** A list of tools that the model can call. */
export const InferenceCompletionTool = z.object({
  type: z.string().describe('The type of tool.'),
  function: InferenceCompletionToolFunction.describe('The function definition.')
}).meta({ id: 'InferenceCompletionTool' })
export type InferenceCompletionTool = z.infer<typeof InferenceCompletionTool>

/** The tool choice function. */
export const InferenceCompletionToolChoiceFunction = z.object({
  name: z.string().describe('The name of the function to call.')
}).meta({ id: 'InferenceCompletionToolChoiceFunction' })
export type InferenceCompletionToolChoiceFunction = z.infer<typeof InferenceCompletionToolChoiceFunction>

/** Controls which tool is called by the model. */
export const InferenceCompletionToolChoice = z.object({
  type: z.string().describe('The type of the tool.'),
  function: InferenceCompletionToolChoiceFunction.describe('The tool choice function.')
}).meta({ id: 'InferenceCompletionToolChoice' })
export type InferenceCompletionToolChoice = z.infer<typeof InferenceCompletionToolChoice>

export const InferenceCompletionToolType = z.union([z.string(), InferenceCompletionToolChoice]).meta({ id: 'InferenceCompletionToolType' })
export type InferenceCompletionToolType = z.infer<typeof InferenceCompletionToolType>

export const InferenceContentType = z.enum(['text', 'image_url', 'file']).meta({ id: 'InferenceContentType' })
export type InferenceContentType = z.infer<typeof InferenceContentType>

export const InferenceImageUrlDetail = z.enum(['auto', 'low', 'high']).meta({ id: 'InferenceImageUrlDetail' })
export type InferenceImageUrlDetail = z.infer<typeof InferenceImageUrlDetail>

export const InferenceImageUrl = z.object({
  url: z.string().describe('The base64 encoded image data as a data URI'),
  detail: InferenceImageUrlDetail.describe('Specifies the detail level of the image').optional()
}).meta({ id: 'InferenceImageUrl' })
export type InferenceImageUrl = z.infer<typeof InferenceImageUrl>

export const InferenceFileContent = z.object({
  file_data: z.string().describe('The base64 encoded file data'),
  filename: z.string().describe('The name of the file')
}).meta({ id: 'InferenceFileContent' })
export type InferenceFileContent = z.infer<typeof InferenceFileContent>

/** An object style representation of a single portion of a conversation. */
export const InferenceContentObject = z.object({
  type: InferenceContentType.describe('The type of content. Must be one of `text`, `image_url` or `file`. Not all services/models support content types other than "text"'),
  text: z.string().describe('The text content. Only applicable for the `text` type'),
  image_url: InferenceImageUrl.describe('The image content. Only applicable for the `image_url` type'),
  file: InferenceFileContent.describe('The file content. Only applicable for the `file` type')
}).meta({ id: 'InferenceContentObject' })
export type InferenceContentObject = z.infer<typeof InferenceContentObject>

/**
 * Dense Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export const InferenceDenseByteVector = z.array(z.lazy(() => byte)).meta({ id: 'InferenceDenseByteVector' })
export type InferenceDenseByteVector = z.infer<typeof InferenceDenseByteVector>

/** The dense embedding result object for byte representation */
export const InferenceDenseEmbeddingByteResult = z.object({
  embedding: InferenceDenseByteVector
}).meta({ id: 'InferenceDenseEmbeddingByteResult' })
export type InferenceDenseEmbeddingByteResult = z.infer<typeof InferenceDenseEmbeddingByteResult>

/**
 * Dense Embedding results are represented as Dense Vectors
 * of floats.
 */
export const InferenceDenseVector = z.array(z.lazy(() => float)).meta({ id: 'InferenceDenseVector' })
export type InferenceDenseVector = z.infer<typeof InferenceDenseVector>

/** The dense embedding result object for float representation */
export const InferenceDenseEmbeddingResult = z.object({
  embedding: InferenceDenseVector
}).meta({ id: 'InferenceDenseEmbeddingResult' })
export type InferenceDenseEmbeddingResult = z.infer<typeof InferenceDenseEmbeddingResult>

/** Chunking configuration object */
export const InferenceInferenceChunkingSettings = z.object({
  max_chunk_size: z.lazy(() => integer).describe('The maximum size of a chunk in words. This value cannot be lower than `20` (for `sentence` strategy) or `10` (for `word` strategy). This value should not exceed the window size for the associated model.').optional(),
  overlap: z.lazy(() => integer).describe('The number of overlapping words for chunks. It is applicable only to a `word` chunking strategy. This value cannot be higher than half the `max_chunk_size` value.').optional(),
  sentence_overlap: z.lazy(() => integer).describe('The number of overlapping sentences for chunks. It is applicable only for a `sentence` chunking strategy. It can be either `1` or `0`.').optional(),
  separator_group: z.string().describe('Only applicable to the `recursive` strategy and required when using it. Sets a predefined list of separators in the saved chunking settings based on the selected text type. Values can be `markdown` or `plaintext`. Using this parameter is an alternative to manually specifying a custom `separators` list.').optional(),
  separators: z.array(z.string()).describe('Only applicable to the `recursive` strategy and required when using it. A list of strings used as possible split points when chunking text. Each string can be a plain string or a regular expression (regex) pattern. The system tries each separator in order to split the text, starting from the first item in the list. After splitting, it attempts to recombine smaller pieces into larger chunks that stay within the `max_chunk_size` limit, to reduce the total number of chunks generated.').optional(),
  strategy: z.string().describe('The chunking strategy: `sentence`, `word`, `none` or `recursive`.  * If `strategy` is set to `recursive`, you must also specify: - `max_chunk_size` - either `separators` or`separator_group` Learn more about different chunking strategies in the linked documentation.').optional()
}).meta({ id: 'InferenceInferenceChunkingSettings' })
export type InferenceInferenceChunkingSettings = z.infer<typeof InferenceInferenceChunkingSettings>

export const InferenceServiceSettings = z.any().meta({ id: 'InferenceServiceSettings' })
export type InferenceServiceSettings = z.infer<typeof InferenceServiceSettings>

export const InferenceTaskSettings = z.any().meta({ id: 'InferenceTaskSettings' })
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>

/** Configuration options when storing the inference endpoint */
export const InferenceInferenceEndpoint = z.object({
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `embedding`, `sparse_embedding` and `text_embedding` task types. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional(),
  service: z.string().describe('The service type'),
  service_settings: InferenceServiceSettings.describe('Settings specific to the service'),
  task_settings: InferenceTaskSettings.describe('Task settings specific to the service and task type').optional()
}).meta({ id: 'InferenceInferenceEndpoint' })
export type InferenceInferenceEndpoint = z.infer<typeof InferenceInferenceEndpoint>

export const InferenceTaskType = z.enum(['sparse_embedding', 'text_embedding', 'rerank', 'completion', 'chat_completion', 'embedding']).meta({ id: 'InferenceTaskType' })
export type InferenceTaskType = z.infer<typeof InferenceTaskType>

/** Represents an inference endpoint as returned by the GET API */
export const InferenceInferenceEndpointInfo = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskType.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfo' })
export type InferenceInferenceEndpointInfo = z.infer<typeof InferenceInferenceEndpointInfo>

/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export const InferenceSparseVector = z.record(z.string(), z.lazy(() => float)).meta({ id: 'InferenceSparseVector' })
export type InferenceSparseVector = z.infer<typeof InferenceSparseVector>

export const InferenceSparseEmbeddingResult = z.object({
  is_truncated: z.boolean().describe('Indicates if the text input was truncated in the request sent to the service'),
  embedding: InferenceSparseVector
}).meta({ id: 'InferenceSparseEmbeddingResult' })
export type InferenceSparseEmbeddingResult = z.infer<typeof InferenceSparseEmbeddingResult>

/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export const InferenceRankedDocument = z.object({
  index: z.lazy(() => integer),
  relevance_score: z.lazy(() => float),
  text: z.string().optional()
}).meta({ id: 'InferenceRankedDocument' })
export type InferenceRankedDocument = z.infer<typeof InferenceRankedDocument>

export const InferenceMessageContent = z.union([z.string(), z.array(InferenceContentObject)]).meta({ id: 'InferenceMessageContent' })
export type InferenceMessageContent = z.infer<typeof InferenceMessageContent>

/** The function that the model called. */
export const InferenceToolCallFunction = z.object({
  arguments: z.string().describe('The arguments to call the function with in JSON format.'),
  name: z.string().describe('The name of the function to call.')
}).meta({ id: 'InferenceToolCallFunction' })
export type InferenceToolCallFunction = z.infer<typeof InferenceToolCallFunction>

/** A tool call generated by the model. */
export const InferenceToolCall = z.object({
  id: z.lazy(() => Id).describe('The identifier of the tool call.'),
  function: InferenceToolCallFunction.describe('The function that the model called.'),
  type: z.string().describe('The type of the tool call.')
}).meta({ id: 'InferenceToolCall' })
export type InferenceToolCall = z.infer<typeof InferenceToolCall>

/** An object representing part of the conversation. */
export const InferenceMessage = z.object({
  content: InferenceMessageContent.describe('The content of the message. String example: ``` {    "content": "Some string" } ``` Text example: ``` {   "content": [       {        "text": "Some text",        "type": "text"       }    ] } ``` Image example: ``` {   "content": [       {        "image_url": {          "url": "data:image/jpeg;base64,..."        },        "type": "image_url"       }    ] } ``` File example: ``` {   "content": [       {        "file": {          "file_data": "data:application/pdf;base64,...",          "filename": "somePDF"        },        "type": "file"       }    ] } ```').optional(),
  role: z.string().describe('The role of the message author. Valid values are `user`, `assistant`, `system`, and `tool`.'),
  tool_call_id: z.lazy(() => Id).describe('Only for `tool` role messages. The tool call that this message is responding to.').optional(),
  tool_calls: z.array(InferenceToolCall).describe('Only for `assistant` role messages. The tool calls generated by the model. If it\'s specified, the `content` field is optional. Example: ``` {   "tool_calls": [       {           "id": "call_KcAjWtAww20AihPHphUh46Gd",           "type": "function",           "function": {               "name": "get_current_weather",               "arguments": "{"location":"Boston, MA"}"           }       }   ] } ```').optional(),
  reasoning: z.string().describe('Only for `assistant` role messages. The reasoning details generated by the model as plaintext. Currently supported only for `elastic` provider.').optional(),
  reasoning_details: z.array(z.lazy(() => InferenceReasoningDetail)).describe('Only for `assistant` role messages. The reasoning details generated by the model as structured data. Currently supported only for `elastic` provider.').optional()
}).meta({ id: 'InferenceMessage' })
export type InferenceMessage = z.infer<typeof InferenceMessage>

export const InferenceReasoningEffort = z.enum(['xhigh', 'high', 'medium', 'low', 'minimal', 'none']).meta({ id: 'InferenceReasoningEffort' })
export type InferenceReasoningEffort = z.infer<typeof InferenceReasoningEffort>

export const InferenceReasoningSummary = z.enum(['auto', 'concise', 'detailed']).meta({ id: 'InferenceReasoningSummary' })
export type InferenceReasoningSummary = z.infer<typeof InferenceReasoningSummary>

/**
 * The reasoning configuration to use for the completion request.
 * Currently supported only for `elastic` provider.
 */
export const InferenceReasoning = z.object({
  effort: InferenceReasoningEffort.describe('The level of effort the model should put into reasoning. This is a hint that guides the model in how much effort to put into reasoning, with `xhigh` being the most effort and `none` being no effort.').optional(),
  enabled: z.boolean().describe('Whether to enable reasoning with default settings. This is a shortcut for enabling reasoning without having to specify the other parameters. If `enabled` is set to `true`, then reasoning at the `medium` effort level is enabled. Ignored if `effort` is specified, in which case that parameter will control the reasoning process instead.').optional(),
  exclude: z.boolean().describe('Whether to exclude reasoning information from the response. If `true`, the response will not include any reasoning details.').optional(),
  summary: InferenceReasoningSummary.describe('The level of detail included in the reasoning summary returned in the response. This is a hint on how much detail to include in the summary of the reasoning that is returned in the response, with `auto` being the default level of detail, `concise` being less detail, and `detailed` being more detail.').optional()
}).meta({ id: 'InferenceReasoning' })
export type InferenceReasoning = z.infer<typeof InferenceReasoning>

/** The stored region policy document. */
export const InferenceRegionPolicyDoc = z.object({
  region_policy: z.lazy(() => InferenceRegionPolicy),
  created_at: z.lazy(() => DateTime).describe('The date and time the region policy was created.'),
  created_by: z.string().describe('The user who created the region policy.').optional(),
  updated_at: z.lazy(() => DateTime).describe('The date and time the region policy was last updated.').optional(),
  updated_by: z.string().describe('The user who last updated the region policy.').optional()
}).meta({ id: 'InferenceRegionPolicyDoc' })
export type InferenceRegionPolicyDoc = z.infer<typeof InferenceRegionPolicyDoc>

export const InferenceRequestChatCompletion = z.object({
  messages: z.array(InferenceMessage).describe('A list of objects representing the conversation. Requests should generally only add new messages from the user (role `user`). The other message roles (`assistant`, `system`, or `tool`) should generally only be copied from the response to a previous completion request, such that the messages array is built up throughout a conversation.'),
  model: z.string().describe('The ID of the model to use. By default, the model ID is set to the value included when creating the inference endpoint.').optional(),
  max_completion_tokens: z.lazy(() => long).describe('The upper bound limit for the number of tokens that can be generated for a completion request.').optional(),
  reasoning: InferenceReasoning.describe('The reasoning configuration for the completion request. This controls the model\'s reasoning process in one of two ways: * By specifying the model’s reasoning effort level with the `effort` field. * By enabling reasoning with default settings by setting `enabled` field to `true`. It also includes optional settings to control: * The level of detail in the summary returned in the response with the `summary` field. * Whether reasoning details are included in the response at all with the `exclude` field. Example (effort): ``` {    "reasoning": {        "effort": "high",        "summary": "concise",        "exclude": false    } } ``` Example (enabled): ``` {    "reasoning": {        "enabled": true,        "summary": "concise",        "exclude": false    } } ``` Currently supported only for `elastic` provider.').optional(),
  stop: z.array(z.string()).describe('A sequence of strings to control when the model should stop generating additional tokens.').optional(),
  temperature: z.lazy(() => float).describe('The sampling temperature to use.').optional(),
  tool_choice: InferenceCompletionToolType.describe('Controls which tool is called by the model. String representation: One of `auto`, `none`, or `requrired`. `auto` allows the model to choose between calling tools and generating a message. `none` causes the model to not call any tools. `required` forces the model to call one or more tools. Example (object representation): ``` {   "tool_choice": {       "type": "function",       "function": {           "name": "get_current_weather"       }   } } ```').optional(),
  tools: z.array(InferenceCompletionTool).describe('A list of tools that the model can call. Example: ``` {   "tools": [       {           "type": "function",           "function": {               "name": "get_price_of_item",               "description": "Get the current price of an item",               "parameters": {                   "type": "object",                   "properties": {                       "item": {                           "id": "12345"                       },                       "unit": {                           "type": "currency"                       }                   }               }           }       }   ] } ```').optional(),
  top_p: z.lazy(() => float).describe('Nucleus sampling, an alternative to sampling with temperature.').optional()
}).meta({ id: 'InferenceRequestChatCompletion' })
export type InferenceRequestChatCompletion = z.infer<typeof InferenceRequestChatCompletion>
