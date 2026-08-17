/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const AutoscalingAutoscalingPolicy = z.object({
  roles: z.array(z.string()),
  deciders: z.record(z.string(), z.any()).describe('Decider settings.')
}).meta({ id: 'AutoscalingAutoscalingPolicy' })
export type AutoscalingAutoscalingPolicy = z.infer<typeof AutoscalingAutoscalingPolicy>
