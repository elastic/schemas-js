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
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const AutoscalingAutoscalingPolicy = z.object({
    roles: z.array(z.string()),
    deciders: z.record(z.string(), z.any()).describe('Decider settings.')
}).meta({ id: 'AutoscalingAutoscalingPolicy' });
/**
 * Get an autoscaling policy.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 */
export const AutoscalingGetAutoscalingPolicyRequest = z.object({
    ...RequestBase.shape,
    name: Name.describe('Name of the autoscaling policy').meta({ found_in: 'path' }),
    master_timeout: Duration.describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AutoscalingGetAutoscalingPolicyRequest' });
export const AutoscalingGetAutoscalingPolicyResponse = AutoscalingAutoscalingPolicy.meta({ id: 'AutoscalingGetAutoscalingPolicyResponse' });
//# sourceMappingURL=autoscaling_get_autoscaling_policy.js.map