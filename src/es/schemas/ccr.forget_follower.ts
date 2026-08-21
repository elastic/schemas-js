/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, ShardStatistics, Uuid } from './_types.js'

/**
 * Forget a follower.
 *
 * Remove the cross-cluster replication follower retention leases from the leader.
 *
 * A following index takes out retention leases on its leader index.
 * These leases are used to increase the likelihood that the shards of the leader index retain the history of operations that the shards of the following index need to run replication.
 * When a follower index is converted to a regular index by the unfollow API (either by directly calling the API or by index lifecycle management tasks), these leases are removed.
 * However, removal of the leases can fail, for example when the remote cluster containing the leader index is unavailable.
 * While the leases will eventually expire on their own, their extended existence can cause the leader index to hold more history than necessary and prevent index lifecycle management from performing some operations on the leader index.
 * This API exists to enable manually removing the leases when the unfollow API is unable to do so.
 *
 * NOTE: This API does not stop replication by a following index. If you use this API with a follower index that is still actively following, the following index will add back retention leases on the leader.
 * The only purpose of this API is to handle the case of failure to remove the following retention leases after the unfollow API is invoked.
 */
export const CcrForgetFollowerRequest = z.object({
  index: z.lazy(() => IndexName).describe('Name of the leader index for which specified follower retention leases should be removed').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  follower_cluster: z.string().optional().meta({ found_in: 'body' }),
  follower_index: z.lazy(() => IndexName).optional().meta({ found_in: 'body' }),
  follower_index_uuid: z.lazy(() => Uuid).optional().meta({ found_in: 'body' }),
  leader_remote_cluster: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'CcrForgetFollowerRequest' })
export type CcrForgetFollowerRequest = z.infer<typeof CcrForgetFollowerRequest>

export const CcrForgetFollowerResponse = z.object({
  _shards: z.lazy(() => ShardStatistics)
}).meta({ id: 'CcrForgetFollowerResponse' })
export type CcrForgetFollowerResponse = z.infer<typeof CcrForgetFollowerResponse>
