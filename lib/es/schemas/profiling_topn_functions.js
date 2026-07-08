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
/** Extracts a list of topN functions from Universal Profiling. */
export const ProfilingTopnFunctionsRequest = z.object({
    ...RequestBase.shape,
    conditions: z.any().meta({ found_in: 'body' })
}).meta({ id: 'ProfilingTopnFunctionsRequest' });
export const ProfilingTopnFunctionsResponse = z.any().meta({ id: 'ProfilingTopnFunctionsResponse' });
//# sourceMappingURL=profiling_topn_functions.js.map