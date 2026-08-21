/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, ByteSize, Duration, IndexPattern, IndexPatterns, Name, integer } from './_types.js'

/**
 * Create or update auto-follow patterns.
 *
 * Create a collection of cross-cluster replication auto-follow patterns for a remote cluster.
 * Newly created indices on the remote cluster that match any of the patterns are automatically configured as follower indices.
 * Indices on the remote cluster that were created before the auto-follow pattern was created will not be auto-followed even if they match the pattern.
 *
 * This API can also be used to update auto-follow patterns.
 * NOTE: Follower indices that were configured automatically before updating an auto-follow pattern will remain unchanged even if they do not match against the new patterns.
 */
export const CcrPutAutoFollowPatternRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the collection of auto-follow patterns.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  remote_cluster: z.string().describe('The remote cluster containing the leader indices to match against.').meta({ found_in: 'body' }),
  follow_index_pattern: IndexPattern.describe('The name of follower index. The template {{leader_index}} can be used to derive the name of the follower index from the name of the leader index. When following a data stream, use {{leader_index}}; CCR does not support changes to the names of a follower data stream’s backing indices.').optional().meta({ found_in: 'body' }),
  leader_index_patterns: IndexPatterns.describe('An array of simple index patterns to match against indices in the remote cluster specified by the remote_cluster field.').optional().meta({ found_in: 'body' }),
  leader_index_exclusion_patterns: IndexPatterns.describe('An array of simple index patterns that can be used to exclude indices from being auto-followed. Indices in the remote cluster whose names are matching one or more leader_index_patterns and one or more leader_index_exclusion_patterns won’t be followed.').optional().meta({ found_in: 'body' }),
  max_outstanding_read_requests: z.lazy(() => integer).describe('The maximum number of outstanding reads requests from the remote cluster.').optional().meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Settings to override from the leader index. Note that certain settings can not be overrode (e.g., index.number_of_shards).').optional().meta({ found_in: 'body' }),
  max_outstanding_write_requests: z.lazy(() => integer).describe('The maximum number of outstanding reads requests from the remote cluster.').optional().meta({ found_in: 'body' }),
  read_poll_timeout: z.lazy(() => Duration).describe('The maximum time to wait for new operations on the remote cluster when the follower index is synchronized with the leader index. When the timeout has elapsed, the poll for operations will return to the follower so that it can update some statistics. Then the follower will immediately attempt to read from the leader again.').optional().meta({ found_in: 'body' }),
  max_read_request_operation_count: z.lazy(() => integer).describe('The maximum number of operations to pull per read from the remote cluster.').optional().meta({ found_in: 'body' }),
  max_read_request_size: z.lazy(() => ByteSize).describe('The maximum size in bytes of per read of a batch of operations pulled from the remote cluster.').optional().meta({ found_in: 'body' }),
  max_retry_delay: z.lazy(() => Duration).describe('The maximum time to wait before retrying an operation that failed exceptionally. An exponential backoff strategy is employed when retrying.').optional().meta({ found_in: 'body' }),
  max_write_buffer_count: z.lazy(() => integer).describe('The maximum number of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the number of queued operations goes below the limit.').optional().meta({ found_in: 'body' }),
  max_write_buffer_size: z.lazy(() => ByteSize).describe('The maximum total bytes of operations that can be queued for writing. When this limit is reached, reads from the remote cluster will be deferred until the total bytes of queued operations goes below the limit.').optional().meta({ found_in: 'body' }),
  max_write_request_operation_count: z.lazy(() => integer).describe('The maximum number of operations per bulk write request executed on the follower.').optional().meta({ found_in: 'body' }),
  max_write_request_size: z.lazy(() => ByteSize).describe('The maximum total bytes of operations per bulk write request executed on the follower.').optional().meta({ found_in: 'body' })
}).meta({ id: 'CcrPutAutoFollowPatternRequest' })
export type CcrPutAutoFollowPatternRequest = z.infer<typeof CcrPutAutoFollowPatternRequest>

export const CcrPutAutoFollowPatternResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrPutAutoFollowPatternResponse' })
export type CcrPutAutoFollowPatternResponse = z.infer<typeof CcrPutAutoFollowPatternResponse>
