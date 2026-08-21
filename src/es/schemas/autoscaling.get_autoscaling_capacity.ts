/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, NodeName, integer } from './_types.js'

export const AutoscalingGetAutoscalingCapacityAutoscalingResources = z.object({
  storage: z.lazy(() => integer),
  memory: z.lazy(() => integer)
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingResources' })
export type AutoscalingGetAutoscalingCapacityAutoscalingResources = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingResources>

export const AutoscalingGetAutoscalingCapacityAutoscalingCapacity = z.object({
  node: AutoscalingGetAutoscalingCapacityAutoscalingResources,
  total: AutoscalingGetAutoscalingCapacityAutoscalingResources
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingCapacity' })
export type AutoscalingGetAutoscalingCapacityAutoscalingCapacity = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingCapacity>

export const AutoscalingGetAutoscalingCapacityAutoscalingDecider = z.object({
  required_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
  reason_summary: z.string().optional(),
  reason_details: z.any().optional()
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingDecider' })
export type AutoscalingGetAutoscalingCapacityAutoscalingDecider = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingDecider>

export const AutoscalingGetAutoscalingCapacityAutoscalingNode = z.object({
  name: NodeName
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingNode' })
export type AutoscalingGetAutoscalingCapacityAutoscalingNode = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingNode>

export const AutoscalingGetAutoscalingCapacityAutoscalingDeciders = z.object({
  required_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
  current_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
  current_nodes: z.array(AutoscalingGetAutoscalingCapacityAutoscalingNode),
  deciders: z.record(z.string(), AutoscalingGetAutoscalingCapacityAutoscalingDecider)
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingDeciders' })
export type AutoscalingGetAutoscalingCapacityAutoscalingDeciders = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingDeciders>

/**
 * Get the autoscaling capacity.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * This API gets the current autoscaling capacity based on the configured autoscaling policy.
 * It will return information to size the cluster appropriately to the current workload.
 *
 * The `required_capacity` is calculated as the maximum of the `required_capacity` result of all individual deciders that are enabled for the policy.
 *
 * The operator should verify that the `current_nodes` match the operator’s knowledge of the cluster to avoid making autoscaling decisions based on stale or incomplete information.
 *
 * The response contains decider-specific information you can use to diagnose how and why autoscaling determined a certain capacity was required.
 * This information is provided for diagnosis only.
 * Do not use this information to make autoscaling decisions.
 */
export const AutoscalingGetAutoscalingCapacityRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AutoscalingGetAutoscalingCapacityRequest' })
export type AutoscalingGetAutoscalingCapacityRequest = z.infer<typeof AutoscalingGetAutoscalingCapacityRequest>

export const AutoscalingGetAutoscalingCapacityResponse = z.object({
  policies: z.record(z.string(), AutoscalingGetAutoscalingCapacityAutoscalingDeciders)
}).meta({ id: 'AutoscalingGetAutoscalingCapacityResponse' })
export type AutoscalingGetAutoscalingCapacityResponse = z.infer<typeof AutoscalingGetAutoscalingCapacityResponse>
