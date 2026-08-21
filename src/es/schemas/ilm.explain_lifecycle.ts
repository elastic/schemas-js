/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, DateTime, Duration, DurationLarge, EmptyObject, EpochTime, IndexName, Name, VersionNumber, integer, long } from './_types.js'

export const IlmAllocateAction = z.object({
  number_of_replicas: z.lazy(() => integer).optional(),
  total_shards_per_node: z.lazy(() => integer).optional(),
  include: z.record(z.string(), z.string()).optional(),
  exclude: z.record(z.string(), z.string()).optional(),
  require: z.record(z.string(), z.string()).optional()
}).meta({ id: 'IlmAllocateAction' })
export type IlmAllocateAction = z.infer<typeof IlmAllocateAction>

export const IlmDeleteAction = z.object({
  delete_searchable_snapshot: z.boolean().optional()
}).meta({ id: 'IlmDeleteAction' })
export type IlmDeleteAction = z.infer<typeof IlmDeleteAction>

export const IlmDownsampleAction = z.object({
  fixed_interval: z.lazy(() => DurationLarge),
  wait_timeout: z.lazy(() => Duration).optional()
}).meta({ id: 'IlmDownsampleAction' })
export type IlmDownsampleAction = z.infer<typeof IlmDownsampleAction>

export const IlmForceMergeAction = z.object({
  max_num_segments: z.lazy(() => integer),
  index_codec: z.string().optional()
}).meta({ id: 'IlmForceMergeAction' })
export type IlmForceMergeAction = z.infer<typeof IlmForceMergeAction>

export const IlmMigrateAction = z.object({
  enabled: z.boolean().optional()
}).meta({ id: 'IlmMigrateAction' })
export type IlmMigrateAction = z.infer<typeof IlmMigrateAction>

export const IlmRolloverAction = z.object({
  max_size: z.lazy(() => ByteSize).describe('The `max_size` condition has been deprecated in 9.3.0 and `max_primary_shard_size` should be used instead').optional(),
  max_primary_shard_size: z.lazy(() => ByteSize).optional(),
  max_age: z.lazy(() => Duration).optional(),
  max_docs: z.lazy(() => long).optional(),
  max_primary_shard_docs: z.lazy(() => long).optional(),
  min_size: z.lazy(() => ByteSize).optional(),
  min_primary_shard_size: z.lazy(() => ByteSize).optional(),
  min_age: z.lazy(() => Duration).optional(),
  min_docs: z.lazy(() => long).optional(),
  min_primary_shard_docs: z.lazy(() => long).optional()
}).meta({ id: 'IlmRolloverAction' })
export type IlmRolloverAction = z.infer<typeof IlmRolloverAction>

export const IlmSetPriorityAction = z.object({
  priority: z.lazy(() => integer).optional()
}).meta({ id: 'IlmSetPriorityAction' })
export type IlmSetPriorityAction = z.infer<typeof IlmSetPriorityAction>

export const IlmSearchableSnapshotAction = z.object({
  snapshot_repository: z.string(),
  force_merge_index: z.boolean().optional()
}).meta({ id: 'IlmSearchableSnapshotAction' })
export type IlmSearchableSnapshotAction = z.infer<typeof IlmSearchableSnapshotAction>

export const IlmShrinkAction = z.object({
  number_of_shards: z.lazy(() => integer).optional(),
  max_primary_shard_size: z.lazy(() => ByteSize).optional(),
  allow_write_after_shrink: z.boolean().optional()
}).meta({ id: 'IlmShrinkAction' })
export type IlmShrinkAction = z.infer<typeof IlmShrinkAction>

export const IlmWaitForSnapshotAction = z.object({
  policy: z.string()
}).meta({ id: 'IlmWaitForSnapshotAction' })
export type IlmWaitForSnapshotAction = z.infer<typeof IlmWaitForSnapshotAction>

export const IlmActions = z.object({
  allocate: IlmAllocateAction.describe('Phases allowed: warm, cold.').optional(),
  delete: IlmDeleteAction.describe('Phases allowed: delete.').optional(),
  downsample: IlmDownsampleAction.describe('Phases allowed: hot, warm, cold.').optional(),
  freeze: z.lazy(() => EmptyObject).describe('The freeze action is a noop in 8.x').optional(),
  forcemerge: IlmForceMergeAction.describe('Phases allowed: hot, warm.').optional(),
  migrate: IlmMigrateAction.describe('Phases allowed: warm, cold.').optional(),
  readonly: z.lazy(() => EmptyObject).describe('Phases allowed: hot, warm, cold.').optional(),
  rollover: IlmRolloverAction.describe('Phases allowed: hot.').optional(),
  set_priority: IlmSetPriorityAction.describe('Phases allowed: hot, warm, cold.').optional(),
  searchable_snapshot: IlmSearchableSnapshotAction.describe('Phases allowed: hot, cold, frozen.').optional(),
  shrink: IlmShrinkAction.describe('Phases allowed: hot, warm.').optional(),
  unfollow: z.lazy(() => EmptyObject).describe('Phases allowed: hot, warm, cold, frozen.').optional(),
  wait_for_snapshot: IlmWaitForSnapshotAction.describe('Phases allowed: delete.').optional()
}).meta({ id: 'IlmActions' })
export type IlmActions = z.infer<typeof IlmActions>

export const IlmPhase = z.object({
  actions: IlmActions.optional(),
  min_age: z.lazy(() => Duration).optional()
}).meta({ id: 'IlmPhase' })
export type IlmPhase = z.infer<typeof IlmPhase>

export const IlmExplainLifecycleLifecycleExplainPhaseExecution = z.object({
  phase_definition: IlmPhase.optional(),
  policy: z.lazy(() => Name),
  version: z.lazy(() => VersionNumber),
  modified_date_in_millis: z.lazy(() => EpochTime)
}).meta({ id: 'IlmExplainLifecycleLifecycleExplainPhaseExecution' })
export type IlmExplainLifecycleLifecycleExplainPhaseExecution = z.infer<typeof IlmExplainLifecycleLifecycleExplainPhaseExecution>

export const IlmExplainLifecycleLifecycleExplainManaged = z.object({
  action: z.lazy(() => Name).optional(),
  action_time: z.lazy(() => DateTime).optional(),
  action_time_millis: z.lazy(() => EpochTime).optional(),
  age: z.lazy(() => Duration).optional(),
  failed_step: z.lazy(() => Name).optional(),
  failed_step_retry_count: z.lazy(() => integer).optional(),
  index: z.lazy(() => IndexName),
  index_creation_date: z.lazy(() => DateTime).optional(),
  index_creation_date_millis: z.lazy(() => EpochTime).optional(),
  is_auto_retryable_error: z.boolean().optional(),
  lifecycle_date: z.lazy(() => DateTime).optional(),
  lifecycle_date_millis: z.lazy(() => EpochTime).optional(),
  managed: z.literal(true),
  phase: z.lazy(() => Name).optional(),
  phase_time: z.lazy(() => DateTime).optional(),
  phase_time_millis: z.lazy(() => EpochTime).optional(),
  policy: z.lazy(() => Name).optional(),
  previous_step_info: z.record(z.string(), z.any()).optional(),
  repository_name: z.string().optional(),
  snapshot_name: z.string().optional(),
  shrink_index_name: z.string().optional(),
  step: z.lazy(() => Name).optional(),
  step_info: z.record(z.string(), z.any()).optional(),
  step_time: z.lazy(() => DateTime).optional(),
  step_time_millis: z.lazy(() => EpochTime).optional(),
  phase_execution: IlmExplainLifecycleLifecycleExplainPhaseExecution.optional(),
  time_since_index_creation: z.lazy(() => Duration).optional(),
  skip: z.boolean()
}).meta({ id: 'IlmExplainLifecycleLifecycleExplainManaged' })
export type IlmExplainLifecycleLifecycleExplainManaged = z.infer<typeof IlmExplainLifecycleLifecycleExplainManaged>

export const IlmExplainLifecycleLifecycleExplainUnmanaged = z.object({
  index: z.lazy(() => IndexName),
  managed: z.literal(false)
}).meta({ id: 'IlmExplainLifecycleLifecycleExplainUnmanaged' })
export type IlmExplainLifecycleLifecycleExplainUnmanaged = z.infer<typeof IlmExplainLifecycleLifecycleExplainUnmanaged>

export const IlmExplainLifecycleLifecycleExplain = z.union([IlmExplainLifecycleLifecycleExplainManaged, IlmExplainLifecycleLifecycleExplainUnmanaged]).meta({ id: 'IlmExplainLifecycleLifecycleExplain' })
export type IlmExplainLifecycleLifecycleExplain = z.infer<typeof IlmExplainLifecycleLifecycleExplain>

/**
 * Explain the lifecycle state.
 *
 * Get the current lifecycle status for one or more indices.
 * For data streams, the API retrieves the current lifecycle status for the stream's backing indices.
 *
 * The response indicates when the index entered each lifecycle state, provides the definition of the running phase, and information about any failures.
 */
export const IlmExplainLifecycleRequest = z.object({
  index: z.lazy(() => IndexName).describe('Comma-separated list of data streams, indices, and aliases to target. Supports wildcards (`*`). To target all data streams and indices, use `*` or `_all`.').meta({ found_in: 'path' }),
  only_errors: z.boolean().describe('Filters the returned indices to only indices that are managed by ILM and are in an error state, either due to an encountering an error while executing the policy, or attempting to use a policy that does not exist.').optional().meta({ found_in: 'query' }),
  only_managed: z.boolean().describe('Filters the returned indices to only indices that are managed by ILM.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IlmExplainLifecycleRequest' })
export type IlmExplainLifecycleRequest = z.infer<typeof IlmExplainLifecycleRequest>

export const IlmExplainLifecycleResponse = z.object({
  indices: z.record(z.lazy(() => IndexName), IlmExplainLifecycleLifecycleExplain)
}).meta({ id: 'IlmExplainLifecycleResponse' })
export type IlmExplainLifecycleResponse = z.infer<typeof IlmExplainLifecycleResponse>
