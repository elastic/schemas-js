import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a query rule.
 *
 * Delete a query rule within a query ruleset.
 * This is a destructive action that is only recoverable by re-adding the same rule with the create or update query rule API.
 */
export declare const QueryRulesDeleteRuleRequest: z.ZodObject<{
    ruleset_id: z.ZodString;
    rule_id: z.ZodString;
}, z.core.$strip>;
export type QueryRulesDeleteRuleRequest = z.infer<typeof QueryRulesDeleteRuleRequest>;
export declare const QueryRulesDeleteRuleResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type QueryRulesDeleteRuleResponse = z.infer<typeof QueryRulesDeleteRuleResponse>;
//# sourceMappingURL=query_rules_delete_rule.d.ts.map