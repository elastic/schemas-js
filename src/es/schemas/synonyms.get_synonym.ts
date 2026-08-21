/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer } from './_types.js'
import { SynonymsSynonymRuleRead } from './synonyms.js'

/** Get a synonym set. */
export const SynonymsGetSynonymRequest = z.object({
  id: z.lazy(() => Id).describe('The synonyms set identifier to retrieve.').meta({ found_in: 'path' }),
  from: z.lazy(() => integer).describe('The starting offset for synonym rules to retrieve.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The max number of synonym rules to retrieve.').optional().meta({ found_in: 'query' }),
  search_after: z.string().describe('The synonym rule ID to use as a cursor for pagination. The next page of results will start after this rule ID. This parameter cannot be used with `from`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SynonymsGetSynonymRequest' })
export type SynonymsGetSynonymRequest = z.infer<typeof SynonymsGetSynonymRequest>

export const SynonymsGetSynonymResponse = z.object({
  count: z.lazy(() => integer).describe('The total number of synonyms rules that the synonyms set contains.'),
  synonyms_set: z.array(SynonymsSynonymRuleRead).describe('Synonym rule details.')
}).meta({ id: 'SynonymsGetSynonymResponse' })
export type SynonymsGetSynonymResponse = z.infer<typeof SynonymsGetSynonymResponse>
