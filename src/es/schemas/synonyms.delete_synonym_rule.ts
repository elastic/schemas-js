/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { SynonymsSynonymsUpdateResult } from './synonyms.js'

/**
 * Delete a synonym rule.
 *
 * Delete a synonym rule from a synonym set.
 */
export const SynonymsDeleteSynonymRuleRequest = z.object({
  set_id: z.lazy(() => Id).describe('The ID of the synonym set to update.').meta({ found_in: 'path' }),
  rule_id: z.lazy(() => Id).describe('The ID of the synonym rule to delete.').meta({ found_in: 'path' })
}).meta({ id: 'SynonymsDeleteSynonymRuleRequest' })
export type SynonymsDeleteSynonymRuleRequest = z.infer<typeof SynonymsDeleteSynonymRuleRequest>

export const SynonymsDeleteSynonymRuleResponse = z.lazy(() => SynonymsSynonymsUpdateResult).meta({ id: 'SynonymsDeleteSynonymRuleResponse' })
export type SynonymsDeleteSynonymRuleResponse = z.infer<typeof SynonymsDeleteSynonymRuleResponse>
