import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
 * Data stream options contain the configuration of data stream level features for a given data stream, for example,
 * the failure store configuration.
 */
export declare const IndicesDataStreamOptions: z.ZodObject<{
    failure_store: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        lifecycle: z.ZodOptional<z.ZodObject<{
            data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesDataStreamOptions = z.infer<typeof IndicesDataStreamOptions>;
export declare const IndicesGetDataStreamOptionsDataStreamWithOptions: z.ZodObject<{
    name: z.ZodString;
    options: z.ZodOptional<z.ZodObject<{
        failure_store: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            lifecycle: z.ZodOptional<z.ZodObject<{
                data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesGetDataStreamOptionsDataStreamWithOptions = z.infer<typeof IndicesGetDataStreamOptionsDataStreamWithOptions>;
/**
 * Get data stream options.
 *
 * Get the data stream options configuration of one or more data streams.
 */
export declare const IndicesGetDataStreamOptionsRequest: z.ZodObject<{
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
}, z.core.$strip>;
export type IndicesGetDataStreamOptionsRequest = z.infer<typeof IndicesGetDataStreamOptionsRequest>;
export declare const IndicesGetDataStreamOptionsResponse: z.ZodObject<{
    data_streams: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        options: z.ZodOptional<z.ZodObject<{
            failure_store: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                lifecycle: z.ZodOptional<z.ZodObject<{
                    data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesGetDataStreamOptionsResponse = z.infer<typeof IndicesGetDataStreamOptionsResponse>;
//# sourceMappingURL=indices_get_data_stream_options.d.ts.map