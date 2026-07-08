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
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
/**
 * Get all synonym sets.
 *
 * Get a summary of all defined synonym sets.
 */
export const SynonymsGetSynonymsSetsRequest = z.object({
    ...RequestBase.shape,
    from: integer.describe('The starting offset for synonyms sets to retrieve.').optional().meta({ found_in: 'query' }),
    size: integer.describe('The maximum number of synonyms sets to retrieve.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SynonymsGetSynonymsSetsRequest' });
export const SynonymsGetSynonymsSetsSynonymsSetItem = z.object({
    synonyms_set: Id.describe('Synonyms set identifier'),
    count: integer.describe('Number of synonym rules that the synonym set contains')
}).meta({ id: 'SynonymsGetSynonymsSetsSynonymsSetItem' });
export const SynonymsGetSynonymsSetsResponse = z.object({
    count: integer.describe('The total number of synonyms sets defined.'),
    results: z.array(SynonymsGetSynonymsSetsSynonymsSetItem).describe('The identifier and total number of defined synonym rules for each synonyms set.')
}).meta({ id: 'SynonymsGetSynonymsSetsResponse' });
//# sourceMappingURL=synonyms_get_synonyms_sets.js.map