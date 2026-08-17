/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { QueryRulesQueryRule } from './query_rules.js'

export const QueryRulesQueryRuleset = z.object({
  ruleset_id: z.lazy(() => Id).describe('A unique identifier for the ruleset.'),
  rules: z.array(QueryRulesQueryRule).describe('Rules associated with the query ruleset.')
}).meta({ id: 'QueryRulesQueryRuleset' })
export type QueryRulesQueryRuleset = z.infer<typeof QueryRulesQueryRuleset>

/**
 * Get a query ruleset.
 *
 * Get details about a query ruleset.
 */
export const QueryRulesGetRulesetRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset').meta({ found_in: 'path' })
}).meta({ id: 'QueryRulesGetRulesetRequest' })
export type QueryRulesGetRulesetRequest = z.infer<typeof QueryRulesGetRulesetRequest>

export const QueryRulesGetRulesetResponse = QueryRulesQueryRuleset.meta({ id: 'QueryRulesGetRulesetResponse' })
export type QueryRulesGetRulesetResponse = z.infer<typeof QueryRulesGetRulesetResponse>
