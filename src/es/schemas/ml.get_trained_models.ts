/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Ids, integer } from './_types.js'
import { MlTrainedModelConfig } from './ml.js'

export const MlInclude = z.enum(['definition', 'feature_importance_baseline', 'hyperparameters', 'total_feature_importance', 'definition_status']).meta({ id: 'MlInclude' })
export type MlInclude = z.infer<typeof MlInclude>

/** Get trained model configuration info. */
export const MlGetTrainedModelsRequest = z.object({
  model_id: z.lazy(() => Ids).describe('The unique identifier of the trained model or a model alias. You can get information for multiple trained models in a single API request by using a comma-separated list of model IDs or a wildcard expression.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: - Contains wildcard expressions and there are no models that match. - Contains the _all string or no identifiers and there are no matches. - Contains wildcard expressions and there are only partial matches. If true, it returns an empty array when there are no matches and the subset of results when there are partial matches.').optional().meta({ found_in: 'query' }),
  decompress_definition: z.boolean().describe('Specifies whether the included model definition should be returned as a JSON map (true) or in a custom compressed format (false).').optional().meta({ found_in: 'query' }),
  exclude_generated: z.boolean().describe('Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of models.').optional().meta({ found_in: 'query' }),
  include: MlInclude.describe('A comma delimited string of optional fields to include in the response body.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of models to obtain.').optional().meta({ found_in: 'query' }),
  tags: z.union([z.string(), z.array(z.string())]).describe('A comma delimited string of tags. A trained model can have many tags, or none. When supplied, only trained models that contain all the supplied tags are returned.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetTrainedModelsRequest' })
export type MlGetTrainedModelsRequest = z.infer<typeof MlGetTrainedModelsRequest>

export const MlGetTrainedModelsResponse = z.object({
  count: z.lazy(() => integer),
  trained_model_configs: z.array(z.lazy(() => MlTrainedModelConfig)).describe('An array of trained model resources, which are sorted by the model_id value in ascending order.')
}).meta({ id: 'MlGetTrainedModelsResponse' })
export type MlGetTrainedModelsResponse = z.infer<typeof MlGetTrainedModelsResponse>
