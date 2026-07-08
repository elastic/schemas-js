import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
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
export declare const ShardFailure: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    _node: z.ZodOptional<z.ZodString>;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    shard: z.ZodOptional<z.ZodNumber>;
    _shard: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ShardFailure = z.infer<typeof ShardFailure>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
export declare const ShardStatistics: z.ZodObject<{
    failed: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
        _node: z.ZodOptional<z.ZodString>;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        shard: z.ZodOptional<z.ZodNumber>;
        _shard: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    skipped: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ShardStatistics = z.infer<typeof ShardStatistics>;
export declare const IndicesReloadSearchAnalyzersReloadDetails: z.ZodObject<{
    index: z.ZodString;
    reloaded_analyzers: z.ZodArray<z.ZodString>;
    reloaded_node_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type IndicesReloadSearchAnalyzersReloadDetails = z.infer<typeof IndicesReloadSearchAnalyzersReloadDetails>;
export declare const IndicesReloadSearchAnalyzersReloadResult: z.ZodObject<{
    reload_details: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        reloaded_analyzers: z.ZodArray<z.ZodString>;
        reloaded_node_ids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    _shards: z.ZodObject<{
        failed: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            shard: z.ZodOptional<z.ZodNumber>;
            _shard: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        skipped: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesReloadSearchAnalyzersReloadResult = z.infer<typeof IndicesReloadSearchAnalyzersReloadResult>;
export declare const SynonymsSynonymString: z.ZodString;
export type SynonymsSynonymString = z.infer<typeof SynonymsSynonymString>;
export declare const SynonymsSynonymsUpdateResult: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
    reload_analyzers_details: z.ZodOptional<z.ZodObject<{
        reload_details: z.ZodArray<z.ZodObject<{
            index: z.ZodString;
            reloaded_analyzers: z.ZodArray<z.ZodString>;
            reloaded_node_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        _shards: z.ZodObject<{
            failed: z.ZodNumber;
            successful: z.ZodNumber;
            total: z.ZodNumber;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodOptional<z.ZodString>;
                _index: z.ZodOptional<z.ZodString>;
                node: z.ZodOptional<z.ZodString>;
                _node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
                shard: z.ZodOptional<z.ZodNumber>;
                _shard: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                primary: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            skipped: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SynonymsSynonymsUpdateResult = z.infer<typeof SynonymsSynonymsUpdateResult>;
/**
 * Create or update a synonym rule.
 *
 * Create or update a synonym rule in a synonym set.
 *
 * If any of the synonym rules included is invalid, the API returns an error.
 *
 * When you update a synonym rule, all analyzers using the synonyms set will be reloaded automatically to reflect the new rule.
 */
export declare const SynonymsPutSynonymRuleRequest: z.ZodObject<{
    set_id: z.ZodString;
    rule_id: z.ZodString;
    synonyms: z.ZodString;
}, z.core.$strip>;
export type SynonymsPutSynonymRuleRequest = z.infer<typeof SynonymsPutSynonymRuleRequest>;
export declare const SynonymsPutSynonymRuleResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
    reload_analyzers_details: z.ZodOptional<z.ZodObject<{
        reload_details: z.ZodArray<z.ZodObject<{
            index: z.ZodString;
            reloaded_analyzers: z.ZodArray<z.ZodString>;
            reloaded_node_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        _shards: z.ZodObject<{
            failed: z.ZodNumber;
            successful: z.ZodNumber;
            total: z.ZodNumber;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodOptional<z.ZodString>;
                _index: z.ZodOptional<z.ZodString>;
                node: z.ZodOptional<z.ZodString>;
                _node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
                shard: z.ZodOptional<z.ZodNumber>;
                _shard: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                primary: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            skipped: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SynonymsPutSynonymRuleResponse = z.infer<typeof SynonymsPutSynonymRuleResponse>;
//# sourceMappingURL=synonyms_put_synonym_rule.d.ts.map