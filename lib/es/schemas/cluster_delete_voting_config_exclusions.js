/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Clear cluster voting config exclusions.
 *
 * Remove master-eligible nodes from the voting configuration exclusion list.
 */
export const ClusterDeleteVotingConfigExclusionsRequest = z.object({
    ...RequestBase.shape,
    master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
    wait_for_removal: z.boolean().describe('Specifies whether to wait for all excluded nodes to be removed from the cluster before clearing the voting configuration exclusions list. Defaults to true, meaning that all excluded nodes must be removed from the cluster before this API takes any action. If set to false then the voting configuration exclusions list is cleared even if some excluded nodes are still in the cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterDeleteVotingConfigExclusionsRequest' });
export const ClusterDeleteVotingConfigExclusionsResponse = z.boolean().meta({ id: 'ClusterDeleteVotingConfigExclusionsResponse' });
//# sourceMappingURL=cluster_delete_voting_config_exclusions.js.map