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
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TimeZone: z.ZodString;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const RollupGetRollupIndexCapsRollupJobSummaryField: z.ZodObject<{
    agg: z.ZodString;
    time_zone: z.ZodOptional<z.ZodString>;
    calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type RollupGetRollupIndexCapsRollupJobSummaryField = z.infer<typeof RollupGetRollupIndexCapsRollupJobSummaryField>;
export declare const RollupGetRollupIndexCapsRollupJobSummary: z.ZodObject<{
    fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
        agg: z.ZodString;
        time_zone: z.ZodOptional<z.ZodString>;
        calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>>;
    index_pattern: z.ZodString;
    job_id: z.ZodString;
    rollup_index: z.ZodString;
}, z.core.$strip>;
export type RollupGetRollupIndexCapsRollupJobSummary = z.infer<typeof RollupGetRollupIndexCapsRollupJobSummary>;
export declare const RollupGetRollupIndexCapsIndexCapabilities: z.ZodObject<{
    rollup_jobs: z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            agg: z.ZodString;
            time_zone: z.ZodOptional<z.ZodString>;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>>;
        index_pattern: z.ZodString;
        job_id: z.ZodString;
        rollup_index: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RollupGetRollupIndexCapsIndexCapabilities = z.infer<typeof RollupGetRollupIndexCapsIndexCapabilities>;
/**
 * Get the rollup index capabilities.
 *
 * Get the rollup capabilities of all jobs inside of a rollup index.
 * A single rollup index may store the data for multiple rollup jobs and may have a variety of capabilities depending on those jobs. This API enables you to determine:
 *
 * * What jobs are stored in an index (or indices specified via a pattern)?
 * * What target indices were rolled up, what fields were used in those rollups, and what aggregations can be performed on each job?
 * @deprecated
 */
export declare const RollupGetRollupIndexCapsRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type RollupGetRollupIndexCapsRequest = z.infer<typeof RollupGetRollupIndexCapsRequest>;
export declare const RollupGetRollupIndexCapsResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    rollup_jobs: z.ZodArray<z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            agg: z.ZodString;
            time_zone: z.ZodOptional<z.ZodString>;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>>;
        index_pattern: z.ZodString;
        job_id: z.ZodString;
        rollup_index: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type RollupGetRollupIndexCapsResponse = z.infer<typeof RollupGetRollupIndexCapsResponse>;
//# sourceMappingURL=rollup_get_rollup_index_caps.d.ts.map