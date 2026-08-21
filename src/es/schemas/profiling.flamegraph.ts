/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Returns basic information about the status of Universal Profiling. */
export const ProfilingFlamegraphRequest = z.object({
  conditions: z.any().optional().meta({ found_in: 'body' })
}).meta({ id: 'ProfilingFlamegraphRequest' })
export type ProfilingFlamegraphRequest = z.infer<typeof ProfilingFlamegraphRequest>

export const ProfilingFlamegraphResponse = z.any().meta({ id: 'ProfilingFlamegraphResponse' })
export type ProfilingFlamegraphResponse = z.infer<typeof ProfilingFlamegraphResponse>
