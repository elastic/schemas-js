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
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/** Extracts raw stacktrace information from Universal Profiling. */
export const ProfilingStacktracesRequest = z.object({
    ...RequestBase.shape,
    conditions: z.any().meta({ found_in: 'body' })
}).meta({ id: 'ProfilingStacktracesRequest' });
export const ProfilingStacktracesResponse = z.any().meta({ id: 'ProfilingStacktracesResponse' });
//# sourceMappingURL=profiling_stacktraces.js.map