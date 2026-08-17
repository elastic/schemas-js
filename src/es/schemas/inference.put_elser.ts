/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceAdaptiveAllocations, InferenceInferenceChunkingSettings, InferenceInferenceEndpoint } from './inference.js'

export const InferenceElserServiceSettings = z.object({
  adaptive_allocations: InferenceAdaptiveAllocations.describe('Adaptive allocations configuration details. If `enabled` is true, the number of allocations of the model is set based on the current load the process gets. When the load is high, a new model allocation is automatically created, respecting the value of `max_number_of_allocations` if it\'s set. When the load is low, a model allocation is automatically removed, respecting the value of `min_number_of_allocations` if it\'s set. If `enabled` is true, do not set the number of allocations manually.').optional(),
  num_allocations: z.lazy(() => integer).describe('The total number of allocations this model is assigned across machine learning nodes. Increasing this value generally increases the throughput. If adaptive allocations is enabled, do not set this value because it\'s automatically set.'),
  num_threads: z.lazy(() => integer).describe('The number of threads used by each model allocation during inference. Increasing this value generally increases the speed per inference request. The inference process is a compute-bound process; `threads_per_allocations` must not exceed the number of available allocated processors per node. The value must be a power of 2. The maximum value is 32. > info > If you want to optimize your ELSER endpoint for ingest, set the number of threads to 1. If you want to optimize your ELSER endpoint for search, set the number of threads to greater than 1.')
}).meta({ id: 'InferenceElserServiceSettings' })
export type InferenceElserServiceSettings = z.infer<typeof InferenceElserServiceSettings>

export const InferenceElserServiceType = z.enum(['elser']).meta({ id: 'InferenceElserServiceType' })
export type InferenceElserServiceType = z.infer<typeof InferenceElserServiceType>

export const InferenceElserTaskType = z.enum(['sparse_embedding']).meta({ id: 'InferenceElserTaskType' })
export type InferenceElserTaskType = z.infer<typeof InferenceElserTaskType>

export const InferenceTaskTypeELSER = z.enum(['sparse_embedding']).meta({ id: 'InferenceTaskTypeELSER' })
export type InferenceTaskTypeELSER = z.infer<typeof InferenceTaskTypeELSER>

export const InferenceInferenceEndpointInfoELSER = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeELSER.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoELSER' })
export type InferenceInferenceEndpointInfoELSER = z.infer<typeof InferenceInferenceEndpointInfoELSER>

/**
 * Create an ELSER inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `elser` service.
 * You can also deploy ELSER by using the Elasticsearch inference integration.
 *
 * > info
 * > Your Elasticsearch deployment contains a preconfigured ELSER inference endpoint, you only need to create the enpoint using the API if you want to customize the settings.
 *
 * The API request will automatically download and deploy the ELSER model if it isn't already downloaded.
 *
 * > info
 * > You might see a 502 bad gateway error in the response when using the Kibana Console. This error usually just reflects a timeout, while the model downloads in the background. You can check the download progress in the Machine Learning UI. If using the Python client, you can set the timeout parameter to a higher value.
 *
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @deprecated The elser service is deprecated and will be removed in a future release. Use the Elasticsearch inference integration instead, with model_id included in the service_settings.
 */
export const InferencePutElserRequest = z.object({
  task_type: InferenceElserTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  elser_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Note that for ELSER endpoints, the max_chunk_size may not exceed `300`.').optional().meta({ found_in: 'body' }),
  service: InferenceElserServiceType.describe('The type of service supported for the specified task type. In this case, `elser`.').meta({ found_in: 'body' }),
  service_settings: InferenceElserServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `elser` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutElserRequest' })
export type InferencePutElserRequest = z.infer<typeof InferencePutElserRequest>

export const InferencePutElserResponse = InferenceInferenceEndpointInfoELSER.meta({ id: 'InferencePutElserResponse' })
export type InferencePutElserResponse = z.infer<typeof InferencePutElserResponse>
