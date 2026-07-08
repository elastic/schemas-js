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
export declare const DataStreamName: z.ZodString;
export type DataStreamName = z.infer<typeof DataStreamName>;
export declare const DataStreamNames: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type DataStreamNames = z.infer<typeof DataStreamNames>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const ExpandWildcard: z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>;
export type ExpandWildcard = z.infer<typeof ExpandWildcard>;
export declare const ExpandWildcards: z.ZodUnion<readonly [z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>, z.ZodArray<z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>>]>;
export type ExpandWildcards = z.infer<typeof ExpandWildcards>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** The failure store lifecycle configures the data stream lifecycle configuration for failure indices. */
export declare const IndicesFailureStoreLifecycle: z.ZodObject<{
    data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IndicesFailureStoreLifecycle = z.infer<typeof IndicesFailureStoreLifecycle>;
/** Data stream failure store contains the configuration of the failure store for a given data stream. */
export declare const IndicesDataStreamFailureStore: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    lifecycle: z.ZodOptional<z.ZodObject<{
        data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesDataStreamFailureStore = z.infer<typeof IndicesDataStreamFailureStore>;
/**
 * Update data stream options.
 *
 * Update the data stream options of the specified data streams.
 */
export declare const IndicesPutDataStreamOptionsRequest: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    expand_wildcards: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>, z.ZodArray<z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    failure_store: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        lifecycle: z.ZodOptional<z.ZodObject<{
            data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesPutDataStreamOptionsRequest = z.infer<typeof IndicesPutDataStreamOptionsRequest>;
export declare const IndicesPutDataStreamOptionsResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesPutDataStreamOptionsResponse = z.infer<typeof IndicesPutDataStreamOptionsResponse>;
//# sourceMappingURL=indices_put_data_stream_options.d.ts.map