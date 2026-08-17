/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, DurationValue, EpochTime, Id, Ids, integer, long } from './_types.js'
import { MlAdaptiveAllocationsSettings } from './ml.js'
import { MlDeploymentAllocationState, MlTrainingPriority } from './ml.start_trained_model_deployment.js'

export const MlDeploymentAssignmentState = z.enum(['started', 'starting', 'stopping', 'failed']).meta({ id: 'MlDeploymentAssignmentState' })
export type MlDeploymentAssignmentState = z.infer<typeof MlDeploymentAssignmentState>

export const MlRoutingState = z.enum(['failed', 'started', 'starting', 'stopped', 'stopping']).meta({ id: 'MlRoutingState' })
export type MlRoutingState = z.infer<typeof MlRoutingState>

export const MlTrainedModelAssignmentRoutingStateAndReason = z.object({
  reason: z.string().describe('The reason for the current state. It is usually populated only when the `routing_state` is `failed`.').optional(),
  routing_state: z.lazy(() => MlRoutingState).describe('The current routing state.')
}).meta({ id: 'MlTrainedModelAssignmentRoutingStateAndReason' })
export type MlTrainedModelAssignmentRoutingStateAndReason = z.infer<typeof MlTrainedModelAssignmentRoutingStateAndReason>

export const MlTrainedModelDeploymentAllocationStatus = z.object({
  allocation_count: z.lazy(() => integer).describe('The current number of nodes where the model is allocated.'),
  state: z.lazy(() => MlDeploymentAllocationState).describe('The detailed allocation state related to the nodes.'),
  target_allocation_count: z.lazy(() => integer).describe('The desired number of nodes for model allocation.')
}).meta({ id: 'MlTrainedModelDeploymentAllocationStatus' })
export type MlTrainedModelDeploymentAllocationStatus = z.infer<typeof MlTrainedModelDeploymentAllocationStatus>

export const MlTrainedModelDeploymentNodesStats = z.object({
  average_inference_time_ms: z.lazy(() => DurationValue).describe('The average time for each inference call to complete on this node.').optional(),
  average_inference_time_ms_last_minute: z.lazy(() => DurationValue).optional(),
  average_inference_time_ms_excluding_cache_hits: z.lazy(() => DurationValue).describe('The average time for each inference call to complete on this node, excluding cache').optional(),
  average_inference_process_memory_rss_bytes: z.lazy(() => ByteSize).optional(),
  error_count: z.lazy(() => integer).describe('The number of errors when evaluating the trained model.').optional(),
  inference_count: z.lazy(() => long).describe('The total number of inference calls made against this node for this model.').optional(),
  inference_cache_hit_count: z.lazy(() => long).optional(),
  inference_cache_hit_count_last_minute: z.lazy(() => long).optional(),
  last_access: z.lazy(() => EpochTime).describe('The epoch time stamp of the last inference call for the model on this node.').optional(),
  number_of_allocations: z.lazy(() => integer).describe('The number of allocations assigned to this node.').optional(),
  number_of_pending_requests: z.lazy(() => integer).describe('The number of inference requests queued to be processed.').optional(),
  peak_throughput_per_minute: z.lazy(() => long),
  rejected_execution_count: z.lazy(() => integer).describe('The number of inference requests that were not processed because the queue was full.').optional(),
  routing_state: MlTrainedModelAssignmentRoutingStateAndReason.describe('The current routing state and reason for the current routing state for this allocation.'),
  start_time: z.lazy(() => EpochTime).describe('The epoch timestamp when the allocation started.').optional(),
  threads_per_allocation: z.lazy(() => integer).describe('The number of threads used by each allocation during inference.').optional(),
  throughput_last_minute: z.lazy(() => integer),
  timeout_count: z.lazy(() => integer).describe('The number of inference requests that timed out before being processed.').optional()
}).meta({ id: 'MlTrainedModelDeploymentNodesStats' })
export type MlTrainedModelDeploymentNodesStats = z.infer<typeof MlTrainedModelDeploymentNodesStats>

export const MlTrainedModelDeploymentStats = z.object({
  adaptive_allocations: z.lazy(() => MlAdaptiveAllocationsSettings).optional(),
  allocation_status: MlTrainedModelDeploymentAllocationStatus.describe('The detailed allocation status for the deployment.').optional(),
  cache_size: z.lazy(() => ByteSize).optional(),
  deployment_id: z.lazy(() => Id).describe('The unique identifier for the trained model deployment.'),
  error_count: z.lazy(() => integer).describe('The sum of `error_count` for all nodes in the deployment.').optional(),
  inference_count: z.lazy(() => integer).describe('The sum of `inference_count` for all nodes in the deployment.').optional(),
  model_id: z.lazy(() => Id).describe('The unique identifier for the trained model.'),
  nodes: z.array(MlTrainedModelDeploymentNodesStats).describe('The deployment stats for each node that currently has the model allocated. In serverless, stats are reported for a single unnamed virtual node.'),
  number_of_allocations: z.lazy(() => integer).describe('The number of allocations requested.').optional(),
  peak_throughput_per_minute: z.lazy(() => long),
  priority: z.lazy(() => MlTrainingPriority),
  queue_capacity: z.lazy(() => integer).describe('The number of inference requests that can be queued before new requests are rejected.').optional(),
  rejected_execution_count: z.lazy(() => integer).describe('The sum of `rejected_execution_count` for all nodes in the deployment. Individual nodes reject an inference request if the inference queue is full. The queue size is controlled by the `queue_capacity` setting in the start trained model deployment API.').optional(),
  reason: z.string().describe('The reason for the current deployment state. Usually only populated when the model is not deployed to a node.').optional(),
  start_time: z.lazy(() => EpochTime).describe('The epoch timestamp when the deployment started.'),
  state: z.lazy(() => MlDeploymentAssignmentState).describe('The overall state of the deployment.').optional(),
  threads_per_allocation: z.lazy(() => integer).describe('The number of threads used be each allocation during inference.').optional(),
  timeout_count: z.lazy(() => integer).describe('The sum of `timeout_count` for all nodes in the deployment.').optional()
}).meta({ id: 'MlTrainedModelDeploymentStats' })
export type MlTrainedModelDeploymentStats = z.infer<typeof MlTrainedModelDeploymentStats>

export const MlTrainedModelInferenceStats = z.object({
  cache_miss_count: z.lazy(() => integer).describe('The number of times the model was loaded for inference and was not retrieved from the cache. If this number is close to the `inference_count`, the cache is not being appropriately used. This can be solved by increasing the cache size or its time-to-live (TTL). Refer to general machine learning settings for the appropriate settings.'),
  failure_count: z.lazy(() => integer).describe('The number of failures when using the model for inference.'),
  inference_count: z.lazy(() => integer).describe('The total number of times the model has been called for inference. This is across all inference contexts, including all pipelines.'),
  missing_all_fields_count: z.lazy(() => integer).describe('The number of inference calls where all the training features for the model were missing.'),
  timestamp: z.lazy(() => EpochTime).describe('The time when the statistics were last updated.')
}).meta({ id: 'MlTrainedModelInferenceStats' })
export type MlTrainedModelInferenceStats = z.infer<typeof MlTrainedModelInferenceStats>

export const MlTrainedModelSizeStats = z.object({
  model_size_bytes: z.lazy(() => ByteSize).describe('The size of the model in bytes.'),
  required_native_memory_bytes: z.lazy(() => ByteSize).describe('The amount of memory required to load the model in bytes.')
}).meta({ id: 'MlTrainedModelSizeStats' })
export type MlTrainedModelSizeStats = z.infer<typeof MlTrainedModelSizeStats>

export const MlTrainedModelStats = z.object({
  deployment_stats: MlTrainedModelDeploymentStats.describe('A collection of deployment stats, which is present when the models are deployed.').optional(),
  inference_stats: MlTrainedModelInferenceStats.describe('A collection of inference stats fields.').optional(),
  ingest: z.record(z.string(), z.any()).describe('A collection of ingest stats for the model across all nodes. The values are summations of the individual node statistics. The format matches the ingest section in the nodes stats API.').optional(),
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.'),
  model_size_stats: MlTrainedModelSizeStats.describe('A collection of model size stats.'),
  pipeline_count: z.lazy(() => integer).describe('The number of ingest pipelines that currently refer to the model.')
}).meta({ id: 'MlTrainedModelStats' })
export type MlTrainedModelStats = z.infer<typeof MlTrainedModelStats>

/**
 * Get trained models usage info.
 *
 * You can get usage information for multiple trained
 * models in a single API request by using a comma-separated list of model IDs or a wildcard expression.
 */
export const MlGetTrainedModelsStatsRequest = z.object({
  model_id: z.lazy(() => Ids).describe('The unique identifier of the trained model or a model alias. It can be a comma-separated list or a wildcard expression.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: - Contains wildcard expressions and there are no models that match. - Contains the _all string or no identifiers and there are no matches. - Contains wildcard expressions and there are only partial matches. If true, it returns an empty array when there are no matches and the subset of results when there are partial matches.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of models.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of models to obtain.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetTrainedModelsStatsRequest' })
export type MlGetTrainedModelsStatsRequest = z.infer<typeof MlGetTrainedModelsStatsRequest>

export const MlGetTrainedModelsStatsResponse = z.object({
  count: z.lazy(() => integer).describe('The total number of trained model statistics that matched the requested ID patterns. Could be higher than the number of items in the trained_model_stats array as the size of the array is restricted by the supplied size parameter.'),
  trained_model_stats: z.array(MlTrainedModelStats).describe('An array of trained model statistics, which are sorted by the model_id value in ascending order.')
}).meta({ id: 'MlGetTrainedModelsStatsResponse' })
export type MlGetTrainedModelsStatsResponse = z.infer<typeof MlGetTrainedModelsStatsResponse>
