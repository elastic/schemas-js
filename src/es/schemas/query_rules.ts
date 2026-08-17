/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer } from './_types.js'
import { QueryRulesQueryRuleActions, QueryRulesQueryRuleCriteria, QueryRulesQueryRuleType } from './query_rules.put_rule.js'

export const QueryRulesQueryRule = z.object({
  rule_id: z.lazy(() => Id).describe('A unique identifier for the rule.'),
  type: QueryRulesQueryRuleType.describe('The type of rule. `pinned` will identify and pin specific documents to the top of search results. `exclude` will exclude specific documents from search results.'),
  criteria: z.union([QueryRulesQueryRuleCriteria, z.array(QueryRulesQueryRuleCriteria)]).describe('The criteria that must be met for the rule to be applied. If multiple criteria are specified for a rule, all criteria must be met for the rule to be applied.'),
  actions: QueryRulesQueryRuleActions.describe('The actions to take when the rule is matched. The format of this action depends on the rule type.'),
  priority: z.lazy(() => integer).optional()
}).meta({ id: 'QueryRulesQueryRule' })
export type QueryRulesQueryRule = z.infer<typeof QueryRulesQueryRule>
