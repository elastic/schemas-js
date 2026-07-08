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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const HttpHeaders: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
export type HttpHeaders = z.infer<typeof HttpHeaders>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TimeZone: z.ZodString;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const RollupDateHistogramGrouping: z.ZodObject<{
    delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    field: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RollupDateHistogramGrouping = z.infer<typeof RollupDateHistogramGrouping>;
export declare const RollupMetric: z.ZodEnum<{
    max: "max";
    min: "min";
    sum: "sum";
    avg: "avg";
    value_count: "value_count";
}>;
export type RollupMetric = z.infer<typeof RollupMetric>;
export declare const RollupFieldMetric: z.ZodObject<{
    field: z.ZodString;
    metrics: z.ZodArray<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
        value_count: "value_count";
    }>>;
}, z.core.$strip>;
export type RollupFieldMetric = z.infer<typeof RollupFieldMetric>;
export declare const RollupHistogramGrouping: z.ZodObject<{
    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    interval: z.ZodNumber;
}, z.core.$strip>;
export type RollupHistogramGrouping = z.infer<typeof RollupHistogramGrouping>;
export declare const RollupTermsGrouping: z.ZodObject<{
    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type RollupTermsGrouping = z.infer<typeof RollupTermsGrouping>;
export declare const RollupGroupings: z.ZodObject<{
    date_histogram: z.ZodOptional<z.ZodObject<{
        delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_zone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    histogram: z.ZodOptional<z.ZodObject<{
        fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        interval: z.ZodNumber;
    }, z.core.$strip>>;
    terms: z.ZodOptional<z.ZodObject<{
        fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RollupGroupings = z.infer<typeof RollupGroupings>;
/**
 * Create a rollup job.
 *
 * WARNING: From 8.15.0, calling this API in a cluster with no rollup usage will fail with a message about the deprecation and planned removal of rollup features. A cluster needs to contain either a rollup job or a rollup index in order for this API to be allowed to run.
 *
 * The rollup job configuration contains all the details about how the job should run, when it indexes documents, and what future queries will be able to run against the rollup index.
 *
 * There are three main sections to the job configuration: the logistical details about the job (for example, the cron schedule), the fields that are used for grouping, and what metrics to collect for each group.
 *
 * Jobs are created in a `STOPPED` state. You can start them with the start rollup jobs API.
 * @deprecated
 */
export declare const RollupPutJobRequest: z.ZodObject<{
    id: z.ZodString;
    cron: z.ZodString;
    groups: z.ZodObject<{
        date_histogram: z.ZodOptional<z.ZodObject<{
            delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        histogram: z.ZodOptional<z.ZodObject<{
            fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            interval: z.ZodNumber;
        }, z.core.$strip>>;
        terms: z.ZodOptional<z.ZodObject<{
            fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    index_pattern: z.ZodString;
    metrics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        metrics: z.ZodArray<z.ZodEnum<{
            max: "max";
            min: "min";
            sum: "sum";
            avg: "avg";
            value_count: "value_count";
        }>>;
    }, z.core.$strip>>>;
    page_size: z.ZodNumber;
    rollup_index: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>>;
}, z.core.$strip>;
export type RollupPutJobRequest = z.infer<typeof RollupPutJobRequest>;
export declare const RollupPutJobResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type RollupPutJobResponse = z.infer<typeof RollupPutJobResponse>;
//# sourceMappingURL=rollup_put_job.d.ts.map