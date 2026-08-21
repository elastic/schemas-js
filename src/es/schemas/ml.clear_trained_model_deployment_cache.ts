/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Clear trained model deployment cache.
 *
 * Cache will be cleared on all nodes where the trained model is assigned.
 * A trained model deployment may have an inference cache enabled.
 * As requests are handled by each allocated node, their responses may be cached on that individual node.
 * Calling this API clears the caches without restarting the deployment.
 */
export const MlClearTrainedModelDeploymentCacheRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' })
}).meta({ id: 'MlClearTrainedModelDeploymentCacheRequest' })
export type MlClearTrainedModelDeploymentCacheRequest = z.infer<typeof MlClearTrainedModelDeploymentCacheRequest>

export const MlClearTrainedModelDeploymentCacheResponse = z.object({
  cleared: z.boolean()
}).meta({ id: 'MlClearTrainedModelDeploymentCacheResponse' })
export type MlClearTrainedModelDeploymentCacheResponse = z.infer<typeof MlClearTrainedModelDeploymentCacheResponse>
