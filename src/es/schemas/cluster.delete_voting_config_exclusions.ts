/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'

/**
 * Clear cluster voting config exclusions.
 *
 * Remove master-eligible nodes from the voting configuration exclusion list.
 */
export const ClusterDeleteVotingConfigExclusionsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  wait_for_removal: z.boolean().describe('Specifies whether to wait for all excluded nodes to be removed from the cluster before clearing the voting configuration exclusions list. Defaults to true, meaning that all excluded nodes must be removed from the cluster before this API takes any action. If set to false then the voting configuration exclusions list is cleared even if some excluded nodes are still in the cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterDeleteVotingConfigExclusionsRequest' })
export type ClusterDeleteVotingConfigExclusionsRequest = z.infer<typeof ClusterDeleteVotingConfigExclusionsRequest>

export const ClusterDeleteVotingConfigExclusionsResponse = z.boolean().meta({ id: 'ClusterDeleteVotingConfigExclusionsResponse' })
export type ClusterDeleteVotingConfigExclusionsResponse = z.infer<typeof ClusterDeleteVotingConfigExclusionsResponse>
