/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete an autoscaling policy.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 */
export const AutoscalingDeleteAutoscalingPolicyRequest = z.object({
  name: z.lazy(() => Name).describe('Name of the autoscaling policy').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AutoscalingDeleteAutoscalingPolicyRequest' })
export type AutoscalingDeleteAutoscalingPolicyRequest = z.infer<typeof AutoscalingDeleteAutoscalingPolicyRequest>

export const AutoscalingDeleteAutoscalingPolicyResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'AutoscalingDeleteAutoscalingPolicyResponse' })
export type AutoscalingDeleteAutoscalingPolicyResponse = z.infer<typeof AutoscalingDeleteAutoscalingPolicyResponse>
