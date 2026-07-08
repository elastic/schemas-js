import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TimeZone: z.ZodString;
export type TimeZone = z.infer<typeof TimeZone>;
/**
 * Get the rollup job capabilities.
 *
 * Get the capabilities of any rollup jobs that have been configured for a specific index or index pattern.
 *
 * This API is useful because a rollup job is often configured to rollup only a subset of fields from the source index.
 * Furthermore, only certain aggregations can be configured for various fields, leading to a limited subset of functionality depending on that configuration.
 * This API enables you to inspect an index and determine:
 *
 * 1. Does this index have associated rollup data somewhere in the cluster?
 * 2. If yes to the first question, what fields were rolled up, what aggregations can be performed, and where does the data live?
 * @deprecated
 */
export declare const RollupGetRollupCapsRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RollupGetRollupCapsRequest = z.infer<typeof RollupGetRollupCapsRequest>;
export declare const RollupGetRollupCapsRollupFieldSummary: z.ZodObject<{
    agg: z.ZodString;
    calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RollupGetRollupCapsRollupFieldSummary = z.infer<typeof RollupGetRollupCapsRollupFieldSummary>;
export declare const RollupGetRollupCapsRollupCapabilitySummary: z.ZodObject<{
    fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        agg: z.ZodString;
        calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_zone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    index_pattern: z.ZodString;
    job_id: z.ZodString;
    rollup_index: z.ZodString;
}, z.core.$strip>;
export type RollupGetRollupCapsRollupCapabilitySummary = z.infer<typeof RollupGetRollupCapsRollupCapabilitySummary>;
export declare const RollupGetRollupCapsRollupCapabilities: z.ZodObject<{
    rollup_jobs: z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            agg: z.ZodString;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        index_pattern: z.ZodString;
        job_id: z.ZodString;
        rollup_index: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RollupGetRollupCapsRollupCapabilities = z.infer<typeof RollupGetRollupCapsRollupCapabilities>;
export declare const RollupGetRollupCapsResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    rollup_jobs: z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            agg: z.ZodString;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        index_pattern: z.ZodString;
        job_id: z.ZodString;
        rollup_index: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type RollupGetRollupCapsResponse = z.infer<typeof RollupGetRollupCapsResponse>;
//# sourceMappingURL=rollup_get_rollup_caps.d.ts.map