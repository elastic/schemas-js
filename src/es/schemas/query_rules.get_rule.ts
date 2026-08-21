/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { QueryRulesQueryRule } from './query_rules.js'

/**
 * Get a query rule.
 *
 * Get details about a query rule within a query ruleset.
 */
export const QueryRulesGetRuleRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset containing the rule to retrieve').meta({ found_in: 'path' }),
  rule_id: z.lazy(() => Id).describe('The unique identifier of the query rule within the specified ruleset to retrieve').meta({ found_in: 'path' })
}).meta({ id: 'QueryRulesGetRuleRequest' })
export type QueryRulesGetRuleRequest = z.infer<typeof QueryRulesGetRuleRequest>

export const QueryRulesGetRuleResponse = QueryRulesQueryRule.meta({ id: 'QueryRulesGetRuleResponse' })
export type QueryRulesGetRuleResponse = z.infer<typeof QueryRulesGetRuleResponse>
