/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { FeaturesFeature } from './features.js'

/**
 * Reset the features.
 *
 * Clear all of the state information stored in system indices by Elasticsearch features, including the security and machine learning indices.
 *
 * WARNING: Intended for development and testing use only. Do not reset features on a production cluster.
 *
 * Return a cluster to the same state as a new installation by resetting the feature state for all Elasticsearch features.
 * This deletes all state information stored in system indices.
 *
 * The response code is HTTP 200 if the state is successfully reset for all features.
 * It is HTTP 500 if the reset operation failed for any feature.
 *
 * Note that select features might provide a way to reset particular system indices.
 * Using this API resets all features, both those that are built-in and implemented as plugins.
 *
 * To list the features that will be affected, use the get features API.
 *
 * IMPORTANT: The features installed on the node you submit this request to are the features that will be reset. Run on the master node if you have any doubts about which plugins are installed on individual nodes.
 */
export const FeaturesResetFeaturesRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'FeaturesResetFeaturesRequest' })
export type FeaturesResetFeaturesRequest = z.infer<typeof FeaturesResetFeaturesRequest>

export const FeaturesResetFeaturesResponse = z.object({
  features: z.array(FeaturesFeature)
}).meta({ id: 'FeaturesResetFeaturesResponse' })
export type FeaturesResetFeaturesResponse = z.infer<typeof FeaturesResetFeaturesResponse>
