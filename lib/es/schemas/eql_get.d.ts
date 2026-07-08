import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const SearchTotalHitsRelation: z.ZodEnum<{
    gte: "gte";
    eq: "eq";
}>;
export type SearchTotalHitsRelation = z.infer<typeof SearchTotalHitsRelation>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SearchTotalHits: z.ZodObject<{
    relation: z.ZodEnum<{
        gte: "gte";
        eq: "eq";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type SearchTotalHits = z.infer<typeof SearchTotalHits>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
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
export declare const EqlHitsEvent: z.ZodObject<{
    _index: z.ZodString;
    _id: z.ZodString;
    _source: z.ZodAny;
    missing: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
}, z.core.$strip>;
export type EqlHitsEvent = z.infer<typeof EqlHitsEvent>;
export declare const EqlHitsSequence: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        _index: z.ZodString;
        _id: z.ZodString;
        _source: z.ZodAny;
        missing: z.ZodOptional<z.ZodBoolean>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
    }, z.core.$strip>>;
    join_keys: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export type EqlHitsSequence = z.infer<typeof EqlHitsSequence>;
export declare const EqlEqlHits: z.ZodObject<{
    total: z.ZodOptional<z.ZodObject<{
        relation: z.ZodEnum<{
            gte: "gte";
            eq: "eq";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>>;
    events: z.ZodOptional<z.ZodArray<z.ZodObject<{
        _index: z.ZodString;
        _id: z.ZodString;
        _source: z.ZodAny;
        missing: z.ZodOptional<z.ZodBoolean>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
    }, z.core.$strip>>>;
    sequences: z.ZodOptional<z.ZodArray<z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodString;
            _source: z.ZodAny;
            missing: z.ZodOptional<z.ZodBoolean>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
        }, z.core.$strip>>;
        join_keys: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EqlEqlHits = z.infer<typeof EqlEqlHits>;
export declare const EqlEqlSearchResponseBase: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    is_partial: z.ZodOptional<z.ZodBoolean>;
    is_running: z.ZodOptional<z.ZodBoolean>;
    took: z.ZodOptional<z.ZodAny>;
    timed_out: z.ZodOptional<z.ZodBoolean>;
    hits: z.ZodObject<{
        total: z.ZodOptional<z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodString;
            _source: z.ZodAny;
            missing: z.ZodOptional<z.ZodBoolean>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
        }, z.core.$strip>>>;
        sequences: z.ZodOptional<z.ZodArray<z.ZodObject<{
            events: z.ZodArray<z.ZodObject<{
                _index: z.ZodString;
                _id: z.ZodString;
                _source: z.ZodAny;
                missing: z.ZodOptional<z.ZodBoolean>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            }, z.core.$strip>>;
            join_keys: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    shard_failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>;
export type EqlEqlSearchResponseBase = z.infer<typeof EqlEqlSearchResponseBase>;
/**
 * Get async EQL search results.
 *
 * Get the current status and available results for an async EQL search or a stored synchronous EQL search.
 */
export declare const EqlGetRequest: z.ZodObject<{
    id: z.ZodString;
    keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type EqlGetRequest = z.infer<typeof EqlGetRequest>;
export declare const EqlGetResponse: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    is_partial: z.ZodOptional<z.ZodBoolean>;
    is_running: z.ZodOptional<z.ZodBoolean>;
    took: z.ZodOptional<z.ZodAny>;
    timed_out: z.ZodOptional<z.ZodBoolean>;
    hits: z.ZodObject<{
        total: z.ZodOptional<z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        events: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodString;
            _source: z.ZodAny;
            missing: z.ZodOptional<z.ZodBoolean>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
        }, z.core.$strip>>>;
        sequences: z.ZodOptional<z.ZodArray<z.ZodObject<{
            events: z.ZodArray<z.ZodObject<{
                _index: z.ZodString;
                _id: z.ZodString;
                _source: z.ZodAny;
                missing: z.ZodOptional<z.ZodBoolean>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            }, z.core.$strip>>;
            join_keys: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    shard_failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>;
export type EqlGetResponse = z.infer<typeof EqlGetResponse>;
//# sourceMappingURL=eql_get.d.ts.map