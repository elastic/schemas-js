/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer } from './_types.js'
import { MlAdaptiveAllocationsSettings, MlTrainedModelAssignment } from './ml.js'

/** Update a trained model deployment. */
export const MlUpdateTrainedModelDeploymentRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model. Currently, only PyTorch models are supported.').meta({ found_in: 'path' }),
  number_of_allocations: z.lazy(() => integer).describe('The number of model allocations on each node where the model is deployed. All allocations on a node share the same copy of the model in memory but use a separate set of threads to evaluate the model. Increasing this value generally increases the throughput. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads. If adaptive_allocations is enabled, do not set this value, because it’s automatically set.').optional().meta({ found_in: 'body' }),
  adaptive_allocations: z.lazy(() => MlAdaptiveAllocationsSettings).describe('Adaptive allocations configuration. When enabled, the number of allocations is set based on the current load. If adaptive_allocations is enabled, do not set the number of allocations manually.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateTrainedModelDeploymentRequest' })
export type MlUpdateTrainedModelDeploymentRequest = z.infer<typeof MlUpdateTrainedModelDeploymentRequest>

export const MlUpdateTrainedModelDeploymentResponse = z.object({
  assignment: z.lazy(() => MlTrainedModelAssignment)
}).meta({ id: 'MlUpdateTrainedModelDeploymentResponse' })
export type MlUpdateTrainedModelDeploymentResponse = z.infer<typeof MlUpdateTrainedModelDeploymentResponse>
