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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const QueryDslPinnedDoc: z.ZodObject<{
    _id: z.ZodString;
    _index: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslPinnedDoc = z.infer<typeof QueryDslPinnedDoc>;
export declare const QueryRulesQueryRuleType: z.ZodEnum<{
    exclude: "exclude";
    pinned: "pinned";
}>;
export type QueryRulesQueryRuleType = z.infer<typeof QueryRulesQueryRuleType>;
export declare const QueryRulesQueryRuleCriteriaType: z.ZodEnum<{
    always: "always";
    exact: "exact";
    contains: "contains";
    gt: "gt";
    gte: "gte";
    lt: "lt";
    lte: "lte";
    global: "global";
    fuzzy: "fuzzy";
    prefix: "prefix";
    suffix: "suffix";
}>;
export type QueryRulesQueryRuleCriteriaType = z.infer<typeof QueryRulesQueryRuleCriteriaType>;
export declare const QueryRulesQueryRuleCriteria: z.ZodObject<{
    type: z.ZodEnum<{
        always: "always";
        exact: "exact";
        contains: "contains";
        gt: "gt";
        gte: "gte";
        lt: "lt";
        lte: "lte";
        global: "global";
        fuzzy: "fuzzy";
        prefix: "prefix";
        suffix: "suffix";
    }>;
    metadata: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export type QueryRulesQueryRuleCriteria = z.infer<typeof QueryRulesQueryRuleCriteria>;
export declare const QueryRulesQueryRuleActions: z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        _id: z.ZodString;
        _index: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type QueryRulesQueryRuleActions = z.infer<typeof QueryRulesQueryRuleActions>;
export declare const QueryRulesQueryRule: z.ZodObject<{
    rule_id: z.ZodString;
    type: z.ZodEnum<{
        exclude: "exclude";
        pinned: "pinned";
    }>;
    criteria: z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            always: "always";
            exact: "exact";
            contains: "contains";
            gt: "gt";
            gte: "gte";
            lt: "lt";
            lte: "lte";
            global: "global";
            fuzzy: "fuzzy";
            prefix: "prefix";
            suffix: "suffix";
        }>;
        metadata: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            always: "always";
            exact: "exact";
            contains: "contains";
            gt: "gt";
            gte: "gte";
            lt: "lt";
            lte: "lte";
            global: "global";
            fuzzy: "fuzzy";
            prefix: "prefix";
            suffix: "suffix";
        }>;
        metadata: z.ZodOptional<z.ZodString>;
        values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    }, z.core.$strip>>]>;
    actions: z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _id: z.ZodString;
            _index: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    priority: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryRulesQueryRule = z.infer<typeof QueryRulesQueryRule>;
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
export declare const QueryRulesPutRulesetRequest: z.ZodObject<{
    ruleset_id: z.ZodString;
    rules: z.ZodUnion<readonly [z.ZodObject<{
        rule_id: z.ZodString;
        type: z.ZodEnum<{
            exclude: "exclude";
            pinned: "pinned";
        }>;
        criteria: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                always: "always";
                exact: "exact";
                contains: "contains";
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
                global: "global";
                fuzzy: "fuzzy";
                prefix: "prefix";
                suffix: "suffix";
            }>;
            metadata: z.ZodOptional<z.ZodString>;
            values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                always: "always";
                exact: "exact";
                contains: "contains";
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
                global: "global";
                fuzzy: "fuzzy";
                prefix: "prefix";
                suffix: "suffix";
            }>;
            metadata: z.ZodOptional<z.ZodString>;
            values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>>]>;
        actions: z.ZodObject<{
            ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
            docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                _id: z.ZodString;
                _index: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        rule_id: z.ZodString;
        type: z.ZodEnum<{
            exclude: "exclude";
            pinned: "pinned";
        }>;
        criteria: z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                always: "always";
                exact: "exact";
                contains: "contains";
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
                global: "global";
                fuzzy: "fuzzy";
                prefix: "prefix";
                suffix: "suffix";
            }>;
            metadata: z.ZodOptional<z.ZodString>;
            values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                always: "always";
                exact: "exact";
                contains: "contains";
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
                global: "global";
                fuzzy: "fuzzy";
                prefix: "prefix";
                suffix: "suffix";
            }>;
            metadata: z.ZodOptional<z.ZodString>;
            values: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>>]>;
        actions: z.ZodObject<{
            ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
            docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                _id: z.ZodString;
                _index: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        priority: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>]>;
}, z.core.$strip>;
export type QueryRulesPutRulesetRequest = z.infer<typeof QueryRulesPutRulesetRequest>;
export declare const QueryRulesPutRulesetResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type QueryRulesPutRulesetResponse = z.infer<typeof QueryRulesPutRulesetResponse>;
//# sourceMappingURL=query_rules_put_ruleset.d.ts.map