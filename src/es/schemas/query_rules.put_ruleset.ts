/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'
import { QueryRulesQueryRule } from './query_rules.js'

/**
 * Create or update a query ruleset.
 *
 * There is a limit of 100 rules per ruleset.
 * This limit can be increased by using the `xpack.applications.rules.max_rules_per_ruleset` cluster setting.
 *
 * IMPORTANT: Due to limitations within pinned queries, you can only select documents using `ids` or `docs`, but cannot use both in single rule.
 * It is advised to use one or the other in query rulesets, to avoid errors.
 * Additionally, pinned queries have a maximum limit of 100 pinned hits.
 * If multiple matching rules pin more than 100 documents, only the first 100 documents are pinned in the order they are specified in the ruleset.
 */
export const QueryRulesPutRulesetRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset to be created or updated.').meta({ found_in: 'path' }),
  rules: z.union([QueryRulesQueryRule, z.array(QueryRulesQueryRule)]).meta({ found_in: 'body' })
}).meta({ id: 'QueryRulesPutRulesetRequest' })
export type QueryRulesPutRulesetRequest = z.infer<typeof QueryRulesPutRulesetRequest>

export const QueryRulesPutRulesetResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'QueryRulesPutRulesetResponse' })
export type QueryRulesPutRulesetResponse = z.infer<typeof QueryRulesPutRulesetResponse>
