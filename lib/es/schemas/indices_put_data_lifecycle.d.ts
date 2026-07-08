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
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
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
export declare const IndicesDownsamplingRound: z.ZodObject<{
    after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    fixed_interval: z.ZodString;
}, z.core.$strip>;
export type IndicesDownsamplingRound = z.infer<typeof IndicesDownsamplingRound>;
export declare const IndicesSamplingMethod: z.ZodEnum<{
    aggregate: "aggregate";
    last_value: "last_value";
}>;
export type IndicesSamplingMethod = z.infer<typeof IndicesSamplingMethod>;
/**
 * Update data stream lifecycles.
 *
 * Update the data stream lifecycle of the specified data streams.
 */
export declare const IndicesPutDataLifecycleRequest: z.ZodObject<{
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
    data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    downsampling: z.ZodOptional<z.ZodArray<z.ZodObject<{
        after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        fixed_interval: z.ZodString;
    }, z.core.$strip>>>;
    downsampling_method: z.ZodOptional<z.ZodEnum<{
        aggregate: "aggregate";
        last_value: "last_value";
    }>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IndicesPutDataLifecycleRequest = z.infer<typeof IndicesPutDataLifecycleRequest>;
export declare const IndicesPutDataLifecycleResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesPutDataLifecycleResponse = z.infer<typeof IndicesPutDataLifecycleResponse>;
//# sourceMappingURL=indices_put_data_lifecycle.d.ts.map