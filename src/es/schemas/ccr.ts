/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, DurationValue, ErrorCause, IndexName, SequenceNumber, VersionNumber, integer, long } from './_types.js'

export const CcrReadException = z.object({
  exception: z.lazy(() => ErrorCause).describe('The exception that caused the read to fail.'),
  from_seq_no: z.lazy(() => SequenceNumber).describe('The starting sequence number of the batch requested from the leader.'),
  retries: z.lazy(() => integer).describe('The number of times the batch has been retried.')
}).meta({ id: 'CcrReadException' })
export type CcrReadException = z.infer<typeof CcrReadException>

export const CcrShardStats = z.object({
  bytes_read: z.lazy(() => long).describe('The total of transferred bytes read from the leader. This is only an estimate and does not account for compression if enabled.'),
  failed_read_requests: z.lazy(() => long).describe('The number of failed reads.'),
  failed_write_requests: z.lazy(() => long).describe('The number of failed bulk write requests on the follower.'),
  fatal_exception: z.lazy(() => ErrorCause).optional(),
  follower_aliases_version: z.lazy(() => VersionNumber).describe('The index aliases version the follower is synced up to.'),
  follower_global_checkpoint: z.lazy(() => long).describe('The current global checkpoint on the follower. The difference between the `leader_global_checkpoint` and the `follower_global_checkpoint` is an indication of how much the follower is lagging the leader.'),
  follower_index: z.string().describe('The name of the follower index.'),
  follower_mapping_version: z.lazy(() => VersionNumber).describe('The mapping version the follower is synced up to.'),
  follower_max_seq_no: z.lazy(() => SequenceNumber).describe('The current maximum sequence number on the follower.'),
  follower_settings_version: z.lazy(() => VersionNumber).describe('The index settings version the follower is synced up to.'),
  last_requested_seq_no: z.lazy(() => SequenceNumber).describe('The starting sequence number of the last batch of operations requested from the leader.'),
  leader_global_checkpoint: z.lazy(() => long).describe('The current global checkpoint on the leader known to the follower task.'),
  leader_index: z.string().describe('The name of the index in the leader cluster being followed.'),
  leader_max_seq_no: z.lazy(() => SequenceNumber).describe('The current maximum sequence number on the leader known to the follower task.'),
  operations_read: z.lazy(() => long).describe('The total number of operations read from the leader.'),
  operations_written: z.lazy(() => long).describe('The number of operations written on the follower.'),
  outstanding_read_requests: z.lazy(() => integer).describe('The number of active read requests from the follower.'),
  outstanding_write_requests: z.lazy(() => integer).describe('The number of active bulk write requests on the follower.'),
  read_exceptions: z.array(CcrReadException).describe('An array of objects representing failed reads.'),
  remote_cluster: z.string().describe('The remote cluster containing the leader index.'),
  shard_id: z.lazy(() => integer).describe('The numerical shard ID, with values from 0 to one less than the number of replicas.'),
  successful_read_requests: z.lazy(() => long).describe('The number of successful fetches.'),
  successful_write_requests: z.lazy(() => long).describe('The number of bulk write requests run on the follower.'),
  time_since_last_read: z.lazy(() => Duration).optional(),
  time_since_last_read_millis: z.lazy(() => DurationValue).describe('The number of milliseconds since a read request was sent to the leader. When the follower is caught up to the leader, this number will increase up to the configured `read_poll_timeout` at which point another read request will be sent to the leader.'),
  total_read_remote_exec_time: z.lazy(() => Duration).optional(),
  total_read_remote_exec_time_millis: z.lazy(() => DurationValue).describe('The total time reads spent running on the remote cluster.'),
  total_read_time: z.lazy(() => Duration).optional(),
  total_read_time_millis: z.lazy(() => DurationValue).describe('The total time reads were outstanding, measured from the time a read was sent to the leader to the time a reply was returned to the follower.'),
  total_write_time: z.lazy(() => Duration).optional(),
  total_write_time_millis: z.lazy(() => DurationValue).describe('The total time spent writing on the follower.'),
  write_buffer_operation_count: z.lazy(() => long).describe('The number of write operations queued on the follower.'),
  write_buffer_size_in_bytes: z.lazy(() => ByteSize).describe('The total number of bytes of operations currently queued for writing.')
}).meta({ id: 'CcrShardStats' })
export type CcrShardStats = z.infer<typeof CcrShardStats>

export const CcrFollowIndexStats = z.object({
  index: z.lazy(() => IndexName).describe('The name of the follower index.'),
  shards: z.array(CcrShardStats).describe('An array of shard-level following task statistics.')
}).meta({ id: 'CcrFollowIndexStats' })
export type CcrFollowIndexStats = z.infer<typeof CcrFollowIndexStats>
