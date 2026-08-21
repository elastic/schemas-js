/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name } from './_types.js'
import { AutoscalingAutoscalingPolicy } from './autoscaling.js'

/**
 * Get an autoscaling policy.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 */
export const AutoscalingGetAutoscalingPolicyRequest = z.object({
  name: z.lazy(() => Name).describe('Name of the autoscaling policy').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AutoscalingGetAutoscalingPolicyRequest' })
export type AutoscalingGetAutoscalingPolicyRequest = z.infer<typeof AutoscalingGetAutoscalingPolicyRequest>

export const AutoscalingGetAutoscalingPolicyResponse = AutoscalingAutoscalingPolicy.meta({ id: 'AutoscalingGetAutoscalingPolicyResponse' })
export type AutoscalingGetAutoscalingPolicyResponse = z.infer<typeof AutoscalingGetAutoscalingPolicyResponse>
