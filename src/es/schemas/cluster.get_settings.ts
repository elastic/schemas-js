/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'

/**
 * Get cluster-wide settings.
 *
 * By default, it returns only settings that have been explicitly defined.
 */
export const ClusterGetSettingsRequest = z.object({
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If `true`, also returns the values of all other cluster settings set in the `elasticsearch.yml` file on one of the nodes in your cluster, together with the default values of all other cluster settings on that node. The default value of each setting may depend on the values of other settings on that node. If the nodes in your cluster do not all have the same configuration then the values returned by this API may vary from invocation to invocation and may not reflect the values that Elasticsearch uses in all situations. Use the `GET _nodes/settings` API to fetch the settings for each individual node in your cluster.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterGetSettingsRequest' })
export type ClusterGetSettingsRequest = z.infer<typeof ClusterGetSettingsRequest>

export const ClusterGetSettingsResponse = z.object({
  persistent: z.record(z.string(), z.any()).describe('The settings that persist after the cluster restarts.'),
  transient: z.record(z.string(), z.any()).describe('The settings that do not persist after the cluster restarts.'),
  defaults: z.record(z.string(), z.any()).describe('The default setting values.').optional()
}).meta({ id: 'ClusterGetSettingsResponse' })
export type ClusterGetSettingsResponse = z.infer<typeof ClusterGetSettingsResponse>
