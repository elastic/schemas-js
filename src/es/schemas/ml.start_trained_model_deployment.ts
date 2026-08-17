/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, Id, integer } from './_types.js'
import { MlAdaptiveAllocationsSettings, MlTrainedModelAssignment } from './ml.js'

export const MlDeploymentAllocationState = z.enum(['started', 'starting', 'fully_allocated']).meta({ id: 'MlDeploymentAllocationState' })
export type MlDeploymentAllocationState = z.infer<typeof MlDeploymentAllocationState>

export const MlTrainingPriority = z.enum(['normal', 'low']).meta({ id: 'MlTrainingPriority' })
export type MlTrainingPriority = z.infer<typeof MlTrainingPriority>

/**
 * Start a trained model deployment.
 *
 * It allocates the model to every machine learning node.
 */
export const MlStartTrainedModelDeploymentRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model. Currently, only PyTorch models are supported.').meta({ found_in: 'path' }),
  cache_size: z.lazy(() => ByteSize).describe('The inference cache size (in memory outside the JVM heap) per node for the model. The default value is the same size as the `model_size_bytes`. To disable the cache, `0b` can be provided.').optional().meta({ found_in: 'query' }),
  number_of_allocations: z.lazy(() => integer).describe('The number of model allocations on each node where the model is deployed. All allocations on a node share the same copy of the model in memory but use a separate set of threads to evaluate the model. Increasing this value generally increases the throughput. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads. If adaptive_allocations is enabled, do not set this value, because it’s automatically set.').optional().meta({ found_in: 'query' }),
  priority: z.lazy(() => MlTrainingPriority).describe('The deployment priority').optional().meta({ found_in: 'query' }),
  queue_capacity: z.lazy(() => integer).describe('Specifies the number of inference requests that are allowed in the queue. After the number of requests exceeds this value, new requests are rejected with a 429 error.').optional().meta({ found_in: 'query' }),
  threads_per_allocation: z.lazy(() => integer).describe('Sets the number of threads used by each model allocation during inference. This generally increases the inference speed. The inference process is a compute-bound process; any number greater than the number of available hardware threads on the machine does not increase the inference speed. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the model to deploy.').optional().meta({ found_in: 'query' }),
  wait_for: z.lazy(() => MlDeploymentAllocationState).describe('Specifies the allocation status to wait for before returning.').optional().meta({ found_in: 'query' }),
  adaptive_allocations: z.lazy(() => MlAdaptiveAllocationsSettings).describe('Adaptive allocations configuration. When enabled, the number of allocations is set based on the current load. If adaptive_allocations is enabled, do not set the number of allocations manually.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStartTrainedModelDeploymentRequest' })
export type MlStartTrainedModelDeploymentRequest = z.infer<typeof MlStartTrainedModelDeploymentRequest>

export const MlStartTrainedModelDeploymentResponse = z.object({
  assignment: z.lazy(() => MlTrainedModelAssignment)
}).meta({ id: 'MlStartTrainedModelDeploymentResponse' })
export type MlStartTrainedModelDeploymentResponse = z.infer<typeof MlStartTrainedModelDeploymentResponse>
