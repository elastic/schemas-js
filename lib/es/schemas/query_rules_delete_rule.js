/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Delete a query rule.
 *
 * Delete a query rule within a query ruleset.
 * This is a destructive action that is only recoverable by re-adding the same rule with the create or update query rule API.
 */
export const QueryRulesDeleteRuleRequest = z.object({
    ...RequestBase.shape,
    ruleset_id: Id.describe('The unique identifier of the query ruleset containing the rule to delete').meta({ found_in: 'path' }),
    rule_id: Id.describe('The unique identifier of the query rule within the specified ruleset to delete').meta({ found_in: 'path' })
}).meta({ id: 'QueryRulesDeleteRuleRequest' });
export const QueryRulesDeleteRuleResponse = AcknowledgedResponseBase.meta({ id: 'QueryRulesDeleteRuleResponse' });
//# sourceMappingURL=query_rules_delete_rule.js.map