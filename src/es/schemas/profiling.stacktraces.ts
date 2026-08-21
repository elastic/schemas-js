/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Extracts raw stacktrace information from Universal Profiling. */
export const ProfilingStacktracesRequest = z.object({
  conditions: z.any().optional().meta({ found_in: 'body' })
}).meta({ id: 'ProfilingStacktracesRequest' })
export type ProfilingStacktracesRequest = z.infer<typeof ProfilingStacktracesRequest>

export const ProfilingStacktracesResponse = z.any().meta({ id: 'ProfilingStacktracesResponse' })
export type ProfilingStacktracesResponse = z.infer<typeof ProfilingStacktracesResponse>
