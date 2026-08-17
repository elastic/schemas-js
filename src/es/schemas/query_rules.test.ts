/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer } from './_types.js'

export const QueryRulesTestQueryRulesetMatchedRule = z.object({
  ruleset_id: z.lazy(() => Id).describe('Ruleset unique identifier'),
  rule_id: z.lazy(() => Id).describe('Rule unique identifier within that ruleset')
}).meta({ id: 'QueryRulesTestQueryRulesetMatchedRule' })
export type QueryRulesTestQueryRulesetMatchedRule = z.infer<typeof QueryRulesTestQueryRulesetMatchedRule>

/**
 * Test a query ruleset.
 *
 * Evaluate match criteria against a query ruleset to identify the rules that would match that criteria.
 */
export const QueryRulesTestRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset to be created or updated').meta({ found_in: 'path' }),
  match_criteria: z.record(z.string(), z.any()).describe('The match criteria to apply to rules in the given query ruleset. Match criteria should match the keys defined in the `criteria.metadata` field of the rule.').meta({ found_in: 'body' })
}).meta({ id: 'QueryRulesTestRequest' })
export type QueryRulesTestRequest = z.infer<typeof QueryRulesTestRequest>

export const QueryRulesTestResponse = z.object({
  total_matched_rules: z.lazy(() => integer),
  matched_rules: z.array(QueryRulesTestQueryRulesetMatchedRule)
}).meta({ id: 'QueryRulesTestResponse' })
export type QueryRulesTestResponse = z.infer<typeof QueryRulesTestResponse>
