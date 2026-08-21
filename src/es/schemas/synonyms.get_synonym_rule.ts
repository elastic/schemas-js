/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { SynonymsSynonymRuleRead } from './synonyms.js'

/**
 * Get a synonym rule.
 *
 * Get a synonym rule from a synonym set.
 */
export const SynonymsGetSynonymRuleRequest = z.object({
  set_id: z.lazy(() => Id).describe('The ID of the synonym set to retrieve the synonym rule from.').meta({ found_in: 'path' }),
  rule_id: z.lazy(() => Id).describe('The ID of the synonym rule to retrieve.').meta({ found_in: 'path' })
}).meta({ id: 'SynonymsGetSynonymRuleRequest' })
export type SynonymsGetSynonymRuleRequest = z.infer<typeof SynonymsGetSynonymRuleRequest>

export const SynonymsGetSynonymRuleResponse = SynonymsSynonymRuleRead.meta({ id: 'SynonymsGetSynonymRuleResponse' })
export type SynonymsGetSynonymRuleResponse = z.infer<typeof SynonymsGetSynonymRuleResponse>
