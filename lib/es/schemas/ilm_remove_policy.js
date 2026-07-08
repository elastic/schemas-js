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
export const IndexName = z.string().meta({ id: 'IndexName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Remove policies from an index.
 *
 * Remove the assigned lifecycle policies from an index or a data stream's backing indices.
 * It also stops managing the indices.
 */
export const IlmRemovePolicyRequest = z.object({
    ...RequestBase.shape,
    index: IndexName.describe('The name of the index to remove policy on').meta({ found_in: 'path' })
}).meta({ id: 'IlmRemovePolicyRequest' });
export const IlmRemovePolicyResponse = z.object({
    failed_indexes: z.array(IndexName),
    has_failures: z.boolean()
}).meta({ id: 'IlmRemovePolicyResponse' });
//# sourceMappingURL=ilm_remove_policy.js.map