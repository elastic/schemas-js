/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer, long } from './_types.js'

export const QueryRulesListRulesetsQueryRulesetListItem = z.object({
  ruleset_id: z.lazy(() => Id).describe('A unique identifier for the ruleset.'),
  rule_total_count: z.lazy(() => integer).describe('The number of rules associated with the ruleset.'),
  rule_criteria_types_counts: z.record(z.string(), z.lazy(() => integer)).describe('A map of criteria type (for example, `exact`) to the number of rules of that type. NOTE: The counts in `rule_criteria_types_counts` may be larger than the value of `rule_total_count` because a rule may have multiple criteria.'),
  rule_type_counts: z.record(z.string(), z.lazy(() => integer)).describe('A map of rule type (for example, `pinned`) to the number of rules of that type.')
}).meta({ id: 'QueryRulesListRulesetsQueryRulesetListItem' })
export type QueryRulesListRulesetsQueryRulesetListItem = z.infer<typeof QueryRulesListRulesetsQueryRulesetListItem>

/**
 * Get all query rulesets.
 *
 * Get summarized information about the query rulesets.
 */
export const QueryRulesListRulesetsRequest = z.object({
  from: z.lazy(() => integer).describe('The offset from the first result to fetch.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of results to retrieve.').optional().meta({ found_in: 'query' })
}).meta({ id: 'QueryRulesListRulesetsRequest' })
export type QueryRulesListRulesetsRequest = z.infer<typeof QueryRulesListRulesetsRequest>

export const QueryRulesListRulesetsResponse = z.object({
  count: z.lazy(() => long),
  results: z.array(QueryRulesListRulesetsQueryRulesetListItem)
}).meta({ id: 'QueryRulesListRulesetsResponse' })
export type QueryRulesListRulesetsResponse = z.infer<typeof QueryRulesListRulesetsResponse>
