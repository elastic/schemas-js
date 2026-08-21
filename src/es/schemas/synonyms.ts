/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'
import { IndicesReloadSearchAnalyzersReloadResult } from './indices.reload_search_analyzers.js'
import { SynonymsSynonymString } from './synonyms.put_synonym_rule.js'

export const SynonymsSynonymRuleRead = z.object({
  id: z.lazy(() => Id).describe('The identifier for the synonym rule. If you do not specify a synonym rule ID when you create a rule, an identifier is created automatically by Elasticsearch.'),
  synonyms: z.lazy(() => SynonymsSynonymString).describe('The synonyms that conform the synonym rule in Solr format.')
}).meta({ id: 'SynonymsSynonymRuleRead' })
export type SynonymsSynonymRuleRead = z.infer<typeof SynonymsSynonymRuleRead>

export const SynonymsSynonymsUpdateResult = z.object({
  result: z.lazy(() => Result).describe('The update operation result.'),
  reload_analyzers_details: IndicesReloadSearchAnalyzersReloadResult.describe('Updating synonyms in a synonym set can reload the associated analyzers in case refresh is set to true. This information is the analyzers reloading result.').optional()
}).meta({ id: 'SynonymsSynonymsUpdateResult' })
export type SynonymsSynonymsUpdateResult = z.infer<typeof SynonymsSynonymsUpdateResult>
