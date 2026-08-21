/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'
import { IndicesReloadSearchAnalyzersReloadResult } from './indices.reload_search_analyzers.js'
import { SynonymsSynonymString } from './synonyms.put_synonym_rule.js'

export const SynonymsSynonymRule = z.object({
  id: z.lazy(() => Id).describe('The identifier for the synonym rule. If you do not specify a synonym rule ID when you create a rule, an identifier is created automatically by Elasticsearch.').optional(),
  synonyms: z.lazy(() => SynonymsSynonymString).describe('The synonyms that conform the synonym rule in Solr format.')
}).meta({ id: 'SynonymsSynonymRule' })
export type SynonymsSynonymRule = z.infer<typeof SynonymsSynonymRule>

/**
 * Create or update a synonym set.
 *
 * Synonym sets are limited to a maximum of 100,000 synonym rules per set by default.
 * This limit is configurable using the `synonyms.max_synonym_rules` cluster setting.
 *
 * When an existing synonyms set is updated, the search analyzers that use the synonyms set are reloaded automatically for all indices.
 * This is equivalent to invoking the reload search analyzers API for all indices that use the synonyms set.
 *
 * For practical examples of how to create or update a synonyms set, refer to the External documentation.
 */
export const SynonymsPutSynonymRequest = z.object({
  id: z.lazy(() => Id).describe('The ID of the synonyms set to be created or updated.').meta({ found_in: 'path' }),
  append: z.boolean().describe('If `true`, the provided synonym rules are appended to the existing set, with matching IDs overwriting existing rules. If `false`, the entire synonyms set is replaced with the new synonym rules definitions.').optional().meta({ found_in: 'query' }),
  synonyms_set: z.union([SynonymsSynonymRule, z.array(SynonymsSynonymRule)]).describe('The synonym rules definitions for the synonyms set.').meta({ found_in: 'body' })
}).meta({ id: 'SynonymsPutSynonymRequest' })
export type SynonymsPutSynonymRequest = z.infer<typeof SynonymsPutSynonymRequest>

export const SynonymsPutSynonymResponse = z.object({
  result: z.lazy(() => Result).describe('The update operation result.'),
  reload_analyzers_details: IndicesReloadSearchAnalyzersReloadResult.describe('Updating a synonyms set can reload the associated analyzers in case refresh is set to true. This information is the analyzers reloading result.').optional()
}).meta({ id: 'SynonymsPutSynonymResponse' })
export type SynonymsPutSynonymResponse = z.infer<typeof SynonymsPutSynonymResponse>
