/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/** Stop a trained model deployment. */
export const MlStopTrainedModelDeploymentRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  id: z.lazy(() => Id).describe('If provided, must be the same identifier as in the path.').optional().meta({ found_in: 'body' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: contains wildcard expressions and there are no deployments that match; contains the  `_all` string or no identifiers and there are no matches; or contains wildcard expressions and there are only partial matches. By default, it returns an empty array when there are no matches and the subset of results when there are partial matches. If `false`, the request returns a 404 status code when there are no matches or only partial matches.').optional().meta({ found_in: 'body' }),
  force: z.boolean().describe('Forcefully stops the deployment, even if it is used by ingest pipelines. You can\'t use these pipelines until you restart the model deployment.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStopTrainedModelDeploymentRequest' })
export type MlStopTrainedModelDeploymentRequest = z.infer<typeof MlStopTrainedModelDeploymentRequest>

export const MlStopTrainedModelDeploymentResponse = z.object({
  stopped: z.boolean()
}).meta({ id: 'MlStopTrainedModelDeploymentResponse' })
export type MlStopTrainedModelDeploymentResponse = z.infer<typeof MlStopTrainedModelDeploymentResponse>
