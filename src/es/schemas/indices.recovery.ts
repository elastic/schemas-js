/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, DateTime, Duration, DurationValue, EpochTime, ExpandWildcards, Host, Id, IndexName, Indices, Ip, Name, Percentage, TransportAddress, Uuid, VersionString, long } from './_types.js'

export const IndicesRecoveryFileDetails = z.object({
  length: z.lazy(() => long),
  name: z.string(),
  recovered: z.lazy(() => long)
}).meta({ id: 'IndicesRecoveryFileDetails' })
export type IndicesRecoveryFileDetails = z.infer<typeof IndicesRecoveryFileDetails>

export const IndicesRecoveryRecoveryBytes = z.object({
  percent: z.lazy(() => Percentage),
  recovered: z.lazy(() => ByteSize).optional(),
  recovered_in_bytes: z.lazy(() => ByteSize),
  recovered_from_snapshot: z.lazy(() => ByteSize).optional(),
  recovered_from_snapshot_in_bytes: z.lazy(() => ByteSize).optional(),
  reused: z.lazy(() => ByteSize).optional(),
  reused_in_bytes: z.lazy(() => ByteSize),
  total: z.lazy(() => ByteSize).optional(),
  total_in_bytes: z.lazy(() => ByteSize)
}).meta({ id: 'IndicesRecoveryRecoveryBytes' })
export type IndicesRecoveryRecoveryBytes = z.infer<typeof IndicesRecoveryRecoveryBytes>

export const IndicesRecoveryRecoveryFiles = z.object({
  details: z.array(IndicesRecoveryFileDetails).optional(),
  percent: z.lazy(() => Percentage),
  recovered: z.lazy(() => long),
  reused: z.lazy(() => long),
  total: z.lazy(() => long)
}).meta({ id: 'IndicesRecoveryRecoveryFiles' })
export type IndicesRecoveryRecoveryFiles = z.infer<typeof IndicesRecoveryRecoveryFiles>

export const IndicesRecoveryRecoveryIndexStatus = z.object({
  bytes: IndicesRecoveryRecoveryBytes.optional(),
  files: IndicesRecoveryRecoveryFiles,
  size: IndicesRecoveryRecoveryBytes,
  source_throttle_time: z.lazy(() => Duration).optional(),
  source_throttle_time_in_millis: z.lazy(() => DurationValue),
  target_throttle_time: z.lazy(() => Duration).optional(),
  target_throttle_time_in_millis: z.lazy(() => DurationValue),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'IndicesRecoveryRecoveryIndexStatus' })
export type IndicesRecoveryRecoveryIndexStatus = z.infer<typeof IndicesRecoveryRecoveryIndexStatus>

export const IndicesRecoveryRecoveryOrigin = z.object({
  hostname: z.string().optional(),
  host: z.lazy(() => Host).optional(),
  transport_address: z.lazy(() => TransportAddress).optional(),
  id: z.lazy(() => Id).optional(),
  ip: z.lazy(() => Ip).optional(),
  name: z.lazy(() => Name).optional(),
  bootstrap_new_history_uuid: z.boolean().optional(),
  repository: z.lazy(() => Name).optional(),
  snapshot: z.lazy(() => Name).optional(),
  version: z.lazy(() => VersionString).optional(),
  restoreUUID: z.lazy(() => Uuid).optional(),
  index: z.lazy(() => IndexName).optional()
}).meta({ id: 'IndicesRecoveryRecoveryOrigin' })
export type IndicesRecoveryRecoveryOrigin = z.infer<typeof IndicesRecoveryRecoveryOrigin>

export const IndicesRecoveryRecoveryPriority = z.enum(['UNASSIGNED_NEW_PRIMARY', 'UNASSIGNED_UNEXPECTED', 'UNASSIGNED_EXPECTED', 'RELOCATION_CAN_REMAIN_NO', 'RELOCATION_CAN_REMAIN_NOT_PREFERRED', 'RELOCATE_REBALANCING', 'UNKNOWN']).meta({ id: 'IndicesRecoveryRecoveryPriority' })
export type IndicesRecoveryRecoveryPriority = z.infer<typeof IndicesRecoveryRecoveryPriority>

export const IndicesRecoveryRecoveryStage = z.enum(['INIT', 'INDEX', 'VERIFY_INDEX', 'TRANSLOG', 'FINALIZE', 'DONE']).meta({ id: 'IndicesRecoveryRecoveryStage' })
export type IndicesRecoveryRecoveryStage = z.infer<typeof IndicesRecoveryRecoveryStage>

export const IndicesRecoveryRecoveryStartStatus = z.object({
  check_index_time: z.lazy(() => Duration).optional(),
  check_index_time_in_millis: z.lazy(() => DurationValue),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'IndicesRecoveryRecoveryStartStatus' })
export type IndicesRecoveryRecoveryStartStatus = z.infer<typeof IndicesRecoveryRecoveryStartStatus>

export const IndicesRecoveryTranslogStatus = z.object({
  percent: z.lazy(() => Percentage),
  recovered: z.lazy(() => long),
  total: z.lazy(() => long),
  total_on_start: z.lazy(() => long),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'IndicesRecoveryTranslogStatus' })
export type IndicesRecoveryTranslogStatus = z.infer<typeof IndicesRecoveryTranslogStatus>

export const IndicesRecoveryRecoveryType = z.enum(['EMPTY_STORE', 'EXISTING_STORE', 'LOCAL_SHARDS', 'PEER', 'SNAPSHOT']).meta({ id: 'IndicesRecoveryRecoveryType' })
export type IndicesRecoveryRecoveryType = z.infer<typeof IndicesRecoveryRecoveryType>

export const IndicesRecoveryVerifyIndex = z.object({
  check_index_time: z.lazy(() => Duration).optional(),
  check_index_time_in_millis: z.lazy(() => DurationValue),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'IndicesRecoveryVerifyIndex' })
export type IndicesRecoveryVerifyIndex = z.infer<typeof IndicesRecoveryVerifyIndex>

export const IndicesRecoveryShardRecovery = z.object({
  id: z.lazy(() => long),
  index: IndicesRecoveryRecoveryIndexStatus,
  primary: z.boolean(),
  source: IndicesRecoveryRecoveryOrigin,
  stage: IndicesRecoveryRecoveryStage.describe('The recovery stage.'),
  priority: IndicesRecoveryRecoveryPriority.describe('The recovery priority.').optional(),
  start: IndicesRecoveryRecoveryStartStatus.optional(),
  start_time: z.lazy(() => DateTime).optional(),
  start_time_in_millis: z.lazy(() => EpochTime),
  stop_time: z.lazy(() => DateTime).optional(),
  stop_time_in_millis: z.lazy(() => EpochTime).optional(),
  target: IndicesRecoveryRecoveryOrigin,
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue),
  translog: IndicesRecoveryTranslogStatus,
  type: IndicesRecoveryRecoveryType.describe('The recovery source type.'),
  verify_index: IndicesRecoveryVerifyIndex
}).meta({ id: 'IndicesRecoveryShardRecovery' })
export type IndicesRecoveryShardRecovery = z.infer<typeof IndicesRecoveryShardRecovery>

export const IndicesRecoveryRecoveryStatus = z.object({
  shards: z.array(IndicesRecoveryShardRecovery)
}).meta({ id: 'IndicesRecoveryRecoveryStatus' })
export type IndicesRecoveryRecoveryStatus = z.infer<typeof IndicesRecoveryRecoveryStatus>

/**
 * Get index recovery information.
 *
 * Get information about ongoing and completed shard recoveries for one or more indices.
 * For data streams, the API returns information for the stream's backing indices.
 *
 * All recoveries, whether ongoing or complete, are kept in the cluster state and may be reported on at any time.
 *
 * Shard recovery is the process of initializing a shard copy, such as restoring a primary shard from a snapshot or creating a replica shard from a primary shard.
 * When a shard recovery completes, the recovered shard is available for search and indexing.
 *
 * Recovery automatically occurs during the following processes:
 *
 * * When creating an index for the first time.
 * * When a node rejoins the cluster and starts up any missing primary shard copies using the data that it holds in its data path.
 * * Creation of new replica shard copies from the primary.
 * * Relocation of a shard copy to a different node in the same cluster.
 * * A snapshot restore operation.
 * * A clone, shrink, or split operation.
 *
 * You can determine the cause of a shard recovery using the recovery or cat recovery APIs.
 *
 * The index recovery API reports information about completed recoveries only for shard copies that currently exist in the cluster.
 * It only reports the last recovery for each shard copy and does not report historical information about earlier recoveries, nor does it report information about the recoveries of shard copies that no longer exist.
 * This means that if a shard copy completes a recovery and then Elasticsearch relocates it onto a different node then the information about the original recovery will not be shown in the recovery API.
 */
export const IndicesRecoveryRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  active_only: z.boolean().describe('If `true`, the response only includes ongoing shard recoveries.').optional().meta({ found_in: 'query' }),
  detailed: z.boolean().describe('If `true`, the response includes detailed information about shard recoveries.').optional().meta({ found_in: 'query' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesRecoveryRequest' })
export type IndicesRecoveryRequest = z.infer<typeof IndicesRecoveryRequest>

export const IndicesRecoveryResponse = z.record(z.lazy(() => IndexName), IndicesRecoveryRecoveryStatus).meta({ id: 'IndicesRecoveryResponse' })
export type IndicesRecoveryResponse = z.infer<typeof IndicesRecoveryResponse>
