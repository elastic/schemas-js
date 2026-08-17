/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Extracts a list of topN functions from Universal Profiling. */
export const ProfilingTopnFunctionsRequest = z.object({
  conditions: z.any().optional().meta({ found_in: 'body' })
}).meta({ id: 'ProfilingTopnFunctionsRequest' })
export type ProfilingTopnFunctionsRequest = z.infer<typeof ProfilingTopnFunctionsRequest>

export const ProfilingTopnFunctionsResponse = z.any().meta({ id: 'ProfilingTopnFunctionsResponse' })
export type ProfilingTopnFunctionsResponse = z.infer<typeof ProfilingTopnFunctionsResponse>
