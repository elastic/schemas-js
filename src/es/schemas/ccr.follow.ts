/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, IndexName, integer, long } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

/**
 * Create a follower.
 *
 * Create a cross-cluster replication follower index that follows a specific leader index.
 * When the API returns, the follower index exists and cross-cluster replication starts replicating operations from the leader index to the follower index.
 */
export const CcrFollowRequest = z.object({
  index: z.lazy(() => IndexName).describe('The name of the follower index.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  data_stream_name: z.string().describe('If the leader index is part of a data stream, the name to which the local data stream for the followed index should be renamed.').optional().meta({ found_in: 'body' }),
  leader_index: z.lazy(() => IndexName).describe('The name of the index in the leader cluster to follow.').meta({ found_in: 'body' }),
  max_outstanding_read_requests: z.lazy(() => long).describe('The maximum number of outstanding reads requests from the remote cluster.').optional().meta({ found_in: 'body' }),
  max_outstanding_write_requests: z.lazy(() => integer).describe('The maximum number of outstanding write requests on the follower.').optional().meta({ found_in: 'body' }),
  max_read_request_operation_count: z.lazy(() => integer).describe('The maximum number of operations to pull per read from the remote cluster.').optional().meta({ found_in: 'body' }),
  max_read_request_size: z.lazy(() => ByteSize).describe('The maximum size in bytes of per read of a batch of operations pulled from the remote cluster.').optional().meta({ found_in: 'body' }),
  max_retry_delay: z.lazy(() => Duration).describe('The maximum time to wait before retrying an operation that failed exceptionally. An exponential backoff strategy is employed when retrying.').optional().meta({ found_in: 'body' }),
  max_write_buffer_count: z.lazy(() => integer).describe('The maximum number of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the number of queued operations goes below the limit.').optional().meta({ found_in: 'body' }),
  max_write_buffer_size: z.lazy(() => ByteSize).describe('The maximum total bytes of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the total bytes of queued operations goes below the limit.').optional().meta({ found_in: 'body' }),
  max_write_request_operation_count: z.lazy(() => integer).describe('The maximum number of operations per bulk write request executed on the follower.').optional().meta({ found_in: 'body' }),
  max_write_request_size: z.lazy(() => ByteSize).describe('The maximum total bytes of operations per bulk write request executed on the follower.').optional().meta({ found_in: 'body' }),
  read_poll_timeout: z.lazy(() => Duration).describe('The maximum time to wait for new operations on the remote cluster when the follower index is synchronized with the leader index. When the timeout has elapsed, the poll for operations will return to the follower so that it can update some statistics. Then the follower will immediately attempt to read from the leader again.').optional().meta({ found_in: 'body' }),
  remote_cluster: z.string().describe('The remote cluster containing the leader index.').meta({ found_in: 'body' }),
  settings: z.lazy(() => IndicesIndexSettings).describe('Settings to override from the leader index.').optional().meta({ found_in: 'body' })
}).meta({ id: 'CcrFollowRequest' })
export type CcrFollowRequest = z.infer<typeof CcrFollowRequest>

export const CcrFollowResponse = z.object({
  follow_index_created: z.boolean(),
  follow_index_shards_acked: z.boolean(),
  index_following_started: z.boolean()
}).meta({ id: 'CcrFollowResponse' })
export type CcrFollowResponse = z.infer<typeof CcrFollowResponse>
