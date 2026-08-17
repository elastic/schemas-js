/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a query rule.
 *
 * Delete a query rule within a query ruleset.
 * This is a destructive action that is only recoverable by re-adding the same rule with the create or update query rule API.
 */
export const QueryRulesDeleteRuleRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset containing the rule to delete').meta({ found_in: 'path' }),
  rule_id: z.lazy(() => Id).describe('The unique identifier of the query rule within the specified ruleset to delete').meta({ found_in: 'path' })
}).meta({ id: 'QueryRulesDeleteRuleRequest' })
export type QueryRulesDeleteRuleRequest = z.infer<typeof QueryRulesDeleteRuleRequest>

export const QueryRulesDeleteRuleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'QueryRulesDeleteRuleResponse' })
export type QueryRulesDeleteRuleResponse = z.infer<typeof QueryRulesDeleteRuleResponse>
