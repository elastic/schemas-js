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
export const NodeName = z.string().meta({ id: 'NodeName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
export const AutoscalingGetAutoscalingCapacityAutoscalingResources = z.object({
    storage: integer,
    memory: integer
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingResources' });
export const AutoscalingGetAutoscalingCapacityAutoscalingCapacity = z.object({
    node: AutoscalingGetAutoscalingCapacityAutoscalingResources,
    total: AutoscalingGetAutoscalingCapacityAutoscalingResources
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingCapacity' });
export const AutoscalingGetAutoscalingCapacityAutoscalingDecider = z.object({
    required_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
    reason_summary: z.string().optional(),
    reason_details: z.any().optional()
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingDecider' });
export const AutoscalingGetAutoscalingCapacityAutoscalingNode = z.object({
    name: NodeName
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingNode' });
export const AutoscalingGetAutoscalingCapacityAutoscalingDeciders = z.object({
    required_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
    current_capacity: AutoscalingGetAutoscalingCapacityAutoscalingCapacity,
    current_nodes: z.array(AutoscalingGetAutoscalingCapacityAutoscalingNode),
    deciders: z.record(z.string(), AutoscalingGetAutoscalingCapacityAutoscalingDecider)
}).meta({ id: 'AutoscalingGetAutoscalingCapacityAutoscalingDeciders' });
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
    ...RequestBase.shape,
    master_timeout: Duration.describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AutoscalingGetAutoscalingCapacityRequest' });
export const AutoscalingGetAutoscalingCapacityResponse = z.object({
    policies: z.record(z.string(), AutoscalingGetAutoscalingCapacityAutoscalingDeciders)
}).meta({ id: 'AutoscalingGetAutoscalingCapacityResponse' });
//# sourceMappingURL=autoscaling_get_autoscaling_capacity.js.map