import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const QueryRulesTestQueryRulesetMatchedRule: z.ZodObject<{
    ruleset_id: z.ZodString;
    rule_id: z.ZodString;
}, z.core.$strip>;
export type QueryRulesTestQueryRulesetMatchedRule = z.infer<typeof QueryRulesTestQueryRulesetMatchedRule>;
/**
 * Test a query ruleset.
 *
 * Evaluate match criteria against a query ruleset to identify the rules that would match that criteria.
 */
export declare const QueryRulesTestRequest: z.ZodObject<{
    ruleset_id: z.ZodString;
    match_criteria: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export type QueryRulesTestRequest = z.infer<typeof QueryRulesTestRequest>;
export declare const QueryRulesTestResponse: z.ZodObject<{
    total_matched_rules: z.ZodNumber;
    matched_rules: z.ZodArray<z.ZodObject<{
        ruleset_id: z.ZodString;
        rule_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type QueryRulesTestResponse = z.infer<typeof QueryRulesTestResponse>;
//# sourceMappingURL=query_rules_test.d.ts.map