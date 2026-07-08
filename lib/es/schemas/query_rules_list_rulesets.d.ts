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
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const QueryRulesListRulesetsQueryRulesetListItem: z.ZodObject<{
    ruleset_id: z.ZodString;
    rule_total_count: z.ZodNumber;
    rule_criteria_types_counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    rule_type_counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type QueryRulesListRulesetsQueryRulesetListItem = z.infer<typeof QueryRulesListRulesetsQueryRulesetListItem>;
/**
 * Get all query rulesets.
 *
 * Get summarized information about the query rulesets.
 */
export declare const QueryRulesListRulesetsRequest: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryRulesListRulesetsRequest = z.infer<typeof QueryRulesListRulesetsRequest>;
export declare const QueryRulesListRulesetsResponse: z.ZodObject<{
    count: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        ruleset_id: z.ZodString;
        rule_total_count: z.ZodNumber;
        rule_criteria_types_counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
        rule_type_counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type QueryRulesListRulesetsResponse = z.infer<typeof QueryRulesListRulesetsResponse>;
//# sourceMappingURL=query_rules_list_rulesets.d.ts.map