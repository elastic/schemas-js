/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { SynonymsSynonymsUpdateResult } from './synonyms.js'

export const SynonymsSynonymString = z.string().meta({ id: 'SynonymsSynonymString' })
export type SynonymsSynonymString = z.infer<typeof SynonymsSynonymString>

/**
 * Create or update a synonym rule.
 *
 * Create or update a synonym rule in a synonym set.
 *
 * If any of the synonym rules included is invalid, the API returns an error.
 *
 * When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
 */
export const SynonymsPutSynonymRuleRequest = z.object({
  set_id: z.lazy(() => Id).describe('The ID of the synonym set.').meta({ found_in: 'path' }),
  rule_id: z.lazy(() => Id).describe('The ID of the synonym rule to be updated or created.').meta({ found_in: 'path' }),
  synonyms: z.lazy(() => SynonymsSynonymString).describe('The synonym rule information definition, which must be in Solr format.').meta({ found_in: 'body' })
}).meta({ id: 'SynonymsPutSynonymRuleRequest' })
export type SynonymsPutSynonymRuleRequest = z.infer<typeof SynonymsPutSynonymRuleRequest>

export const SynonymsPutSynonymRuleResponse = z.lazy(() => SynonymsSynonymsUpdateResult).meta({ id: 'SynonymsPutSynonymRuleResponse' })
export type SynonymsPutSynonymRuleResponse = z.infer<typeof SynonymsPutSynonymRuleResponse>
