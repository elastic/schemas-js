/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, float, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAmazonBedrockServiceSettings = z.object({
  access_key: z.string().describe('A valid AWS access key that has permissions to use Amazon Bedrock and access to models for inference requests.'),
  model: z.string().describe('The base model ID or an ARN to a custom model based on a foundational model. The base model IDs can be found in the Amazon Bedrock documentation. Note that the model ID must be available for the provider chosen and your IAM user must have access to the model.'),
  provider: z.string().describe('The model provider for your deployment. Note that some providers may support only certain task types. Supported providers include: * `amazontitan` - available for `text_embedding` and `completion` task types * `anthropic` - available for `chat_completion` and `completion` task types * `ai21labs` - available for `chat_completion` and `completion` task types * `cohere` - available for `chat_completion`, `completion` and `text_embedding` task types * `meta` - available for `chat_completion` and `completion` task types * `mistral` - available for `chat_completion` and `completion` task types').optional(),
  region: z.string().describe('The region that your model or ARN is deployed in. The list of available regions per model can be found in the Amazon Bedrock documentation.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Amazon Bedrock. By default, the `amazonbedrock` service sets the number of requests allowed per minute to 240.').optional(),
  secret_key: z.string().describe('A valid AWS secret key that is paired with the `access_key`. For informationg about creating and managing access and secret keys, refer to the AWS documentation.')
}).meta({ id: 'InferenceAmazonBedrockServiceSettings' })
export type InferenceAmazonBedrockServiceSettings = z.infer<typeof InferenceAmazonBedrockServiceSettings>

export const InferenceAmazonBedrockServiceType = z.enum(['amazonbedrock']).meta({ id: 'InferenceAmazonBedrockServiceType' })
export type InferenceAmazonBedrockServiceType = z.infer<typeof InferenceAmazonBedrockServiceType>

export const InferenceAmazonBedrockTaskSettings = z.object({
  max_new_tokens: z.lazy(() => integer).describe('For `chat_completion` and `completion` tasks, it sets the maximum number for the output tokens to be generated.').optional(),
  temperature: z.lazy(() => float).describe('For `chat_completion` and `completion` tasks, it is a number between 0.0 and 1.0 that controls the apparent creativity of the results. At temperature 0.0 the model is most deterministic, at temperature 1.0 most random. It should not be used if `top_p` or `top_k` is specified.').optional(),
  top_k: z.lazy(() => float).describe('For `chat_completion` and `completion` tasks, it limits samples to the top-K most likely words, balancing coherence and variability. It is only available for anthropic, cohere, and mistral providers. It is an alternative to `temperature`; it should not be used if `temperature` is specified.').optional(),
  top_p: z.lazy(() => float).describe('For `chat_completion` and `completion` tasks, it is a number in the range of 0.0 to 1.0, to eliminate low-probability tokens. Top-p uses nucleus sampling to select top tokens whose sum of likelihoods does not exceed a certain value, ensuring both variety and coherence. It is an alternative to `temperature`; it should not be used if `temperature` is specified.').optional()
}).meta({ id: 'InferenceAmazonBedrockTaskSettings' })
export type InferenceAmazonBedrockTaskSettings = z.infer<typeof InferenceAmazonBedrockTaskSettings>

export const InferenceAmazonBedrockTaskType = z.enum(['chat_completion', 'completion', 'text_embedding']).meta({ id: 'InferenceAmazonBedrockTaskType' })
export type InferenceAmazonBedrockTaskType = z.infer<typeof InferenceAmazonBedrockTaskType>

export const InferenceTaskTypeAmazonBedrock = z.enum(['chat_completion', 'completion', 'text_embedding']).meta({ id: 'InferenceTaskTypeAmazonBedrock' })
export type InferenceTaskTypeAmazonBedrock = z.infer<typeof InferenceTaskTypeAmazonBedrock>

export const InferenceInferenceEndpointInfoAmazonBedrock = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAmazonBedrock.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAmazonBedrock' })
export type InferenceInferenceEndpointInfoAmazonBedrock = z.infer<typeof InferenceInferenceEndpointInfoAmazonBedrock>

/**
 * Create an Amazon Bedrock inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `amazonbedrock` service.
 *
 * >info
 * > You need to provide the access and secret keys only once, during the inference model creation. The get inference API does not retrieve your access or secret keys. After creating the inference model, you cannot change the associated key pairs. If you want to use a different access and secret key pair, delete the inference model and recreate it with the same name and the updated keys.
 */
export const InferencePutAmazonbedrockRequest = z.object({
  task_type: InferenceAmazonBedrockTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  amazonbedrock_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `chat_completion` and `completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceAmazonBedrockServiceType.describe('The type of service supported for the specified task type. In this case, `amazonbedrock`.').meta({ found_in: 'body' }),
  service_settings: InferenceAmazonBedrockServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `amazonbedrock` service.').meta({ found_in: 'body' }),
  task_settings: InferenceAmazonBedrockTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAmazonbedrockRequest' })
export type InferencePutAmazonbedrockRequest = z.infer<typeof InferencePutAmazonbedrockRequest>

export const InferencePutAmazonbedrockResponse = InferenceInferenceEndpointInfoAmazonBedrock.meta({ id: 'InferencePutAmazonbedrockResponse' })
export type InferencePutAmazonbedrockResponse = z.infer<typeof InferencePutAmazonbedrockResponse>
