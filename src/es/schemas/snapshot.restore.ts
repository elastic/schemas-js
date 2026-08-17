/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Indices, Name, ShardStatistics } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

/**
 * Restore a snapshot.
 *
 * Restore a snapshot of a cluster or data streams and indices.
 *
 * You can restore a snapshot only to a running cluster with an elected master node.
 * The snapshot repository must be registered and available to the cluster.
 * The snapshot and cluster versions must be compatible.
 *
 * To restore a snapshot, the cluster's global metadata must be writable. Ensure there are't any cluster blocks that prevent writes. The restore operation ignores index blocks.
 *
 * Before you restore a data stream, ensure the cluster contains a matching index template with data streams enabled. To check, use the index management feature in Kibana or the get index template API:
 *
 * ```
 * GET _index_template/*?filter_path=index_templates.name,index_templates.index_template.index_patterns,index_templates.index_template.data_stream
 * ```
 *
 * If no such template exists, you can create one or restore a cluster state that contains one. Without a matching index template, a data stream can't roll over or create backing indices.
 *
 * If your snapshot contains data from App Search or Workplace Search, you must restore the Enterprise Search encryption key before you restore the snapshot.
 */
export const SnapshotRestoreRequest = z.object({
  repository: z.lazy(() => Name).describe('The name of the repository to restore a snapshot from.').meta({ found_in: 'path' }),
  snapshot: z.lazy(() => Name).describe('The name of the snapshot to restore.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request returns a response when the restore operation completes. The operation is complete when it finishes all attempts to recover primary shards for restored indices. This applies even if one or more of the recovery attempts fail. If `false`, the request returns a response when the restore operation initializes.').optional().meta({ found_in: 'query' }),
  feature_states: z.array(z.string()).describe('The feature states to restore. If `include_global_state` is `true`, the request restores all feature states in the snapshot by default. If `include_global_state` is `false`, the request restores no feature states by default. Note that specifying an empty array will result in the default behavior. To restore no feature states, regardless of the `include_global_state` value, specify an array containing only the value `none` (`["none"]`).').optional().meta({ found_in: 'body' }),
  ignore_index_settings: z.array(z.string()).describe('The index settings to not restore from the snapshot. You can\'t use this option to ignore `index.number_of_shards`. For data streams, this option applies only to restored backing indices. New backing indices are configured using the data stream\'s matching index template.').optional().meta({ found_in: 'body' }),
  ignore_unavailable: z.boolean().describe('If `true`, the request ignores any index or data stream in indices that\'s missing from the snapshot. If `false`, the request returns an error for any missing index or data stream.').optional().meta({ found_in: 'body' }),
  include_aliases: z.boolean().describe('If `true`, the request restores aliases for any restored data streams and indices. If `false`, the request doesn’t restore aliases.').optional().meta({ found_in: 'body' }),
  include_global_state: z.boolean().describe('If `true`, restore the cluster state. The cluster state includes: * Persistent cluster settings * Index templates * Legacy index templates * Ingest pipelines * Index lifecycle management (ILM) policies * Stored scripts * For snapshots taken after 7.12.0, feature states If `include_global_state` is `true`, the restore operation merges the legacy index templates in your cluster with the templates contained in the snapshot, replacing any existing ones whose name matches one in the snapshot. It completely removes all persistent settings, non-legacy index templates, ingest pipelines, and ILM lifecycle policies that exist in your cluster and replaces them with the corresponding items from the snapshot. Use the `feature_states` parameter to configure how feature states are restored. If `include_global_state` is `true` and a snapshot was created without a global state then the restore request will fail.').optional().meta({ found_in: 'body' }),
  index_settings: z.lazy(() => IndicesIndexSettings).describe('Index settings to add or change in restored indices, including backing indices. You can\'t use this option to change `index.number_of_shards`. For data streams, this option applies only to restored backing indices. New backing indices are configured using the data stream\'s matching index template.').optional().meta({ found_in: 'body' }),
  indices: z.lazy(() => Indices).describe('A comma-separated list of indices and data streams to restore. It supports a multi-target syntax. The default behavior is all regular indices and regular data streams in the snapshot. You can\'t use this parameter to restore system indices or system data streams. Use `feature_states` instead.').optional().meta({ found_in: 'body' }),
  partial: z.boolean().describe('If `false`, the entire restore operation will fail if one or more indices included in the snapshot do not have all primary shards available. If true, it allows restoring a partial snapshot of indices with unavailable shards. Only shards that were successfully included in the snapshot will be restored. All missing shards will be recreated as empty.').optional().meta({ found_in: 'body' }),
  rename_pattern: z.string().describe('A rename pattern to apply to restored data streams and indices. Data streams and indices matching the rename pattern will be renamed according to `rename_replacement`. The rename pattern is applied as defined by the regular expression that supports referencing the original text, according to the `appendReplacement` logic.').optional().meta({ found_in: 'body' }),
  rename_replacement: z.string().describe('The rename replacement string that is used with the `rename_pattern`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SnapshotRestoreRequest' })
export type SnapshotRestoreRequest = z.infer<typeof SnapshotRestoreRequest>

export const SnapshotRestoreSnapshotRestore = z.object({
  indices: z.array(z.lazy(() => IndexName)),
  snapshot: z.string(),
  shards: z.lazy(() => ShardStatistics)
}).meta({ id: 'SnapshotRestoreSnapshotRestore' })
export type SnapshotRestoreSnapshotRestore = z.infer<typeof SnapshotRestoreSnapshotRestore>

export const SnapshotRestoreResponse = z.object({
  accepted: z.boolean().optional(),
  snapshot: SnapshotRestoreSnapshotRestore.optional()
}).meta({ id: 'SnapshotRestoreResponse' })
export type SnapshotRestoreResponse = z.infer<typeof SnapshotRestoreResponse>
