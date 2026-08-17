/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer } from './_types.js'

/**
 * Get all synonym sets.
 *
 * Get a summary of all defined synonym sets.
 */
export const SynonymsGetSynonymsSetsRequest = z.object({
  from: z.lazy(() => integer).describe('The starting offset for synonyms sets to retrieve.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of synonyms sets to retrieve.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SynonymsGetSynonymsSetsRequest' })
export type SynonymsGetSynonymsSetsRequest = z.infer<typeof SynonymsGetSynonymsSetsRequest>

export const SynonymsGetSynonymsSetsSynonymsSetItem = z.object({
  synonyms_set: z.lazy(() => Id).describe('Synonyms set identifier'),
  count: z.lazy(() => integer).describe('Number of synonym rules that the synonym set contains')
}).meta({ id: 'SynonymsGetSynonymsSetsSynonymsSetItem' })
export type SynonymsGetSynonymsSetsSynonymsSetItem = z.infer<typeof SynonymsGetSynonymsSetsSynonymsSetItem>

export const SynonymsGetSynonymsSetsResponse = z.object({
  count: z.lazy(() => integer).describe('The total number of synonyms sets defined.'),
  results: z.array(SynonymsGetSynonymsSetsSynonymsSetItem).describe('The identifier and total number of defined synonym rules for each synonyms set.')
}).meta({ id: 'SynonymsGetSynonymsSetsResponse' })
export type SynonymsGetSynonymsSetsResponse = z.infer<typeof SynonymsGetSynonymsSetsResponse>
