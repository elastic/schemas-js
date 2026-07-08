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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SlmSnapshotPolicyStats: z.ZodObject<{
    policy: z.ZodString;
    snapshots_taken: z.ZodNumber;
    snapshots_failed: z.ZodNumber;
    snapshots_deleted: z.ZodNumber;
    snapshot_deletion_failures: z.ZodNumber;
}, z.core.$strip>;
export type SlmSnapshotPolicyStats = z.infer<typeof SlmSnapshotPolicyStats>;
/**
 * Get snapshot lifecycle management statistics.
 *
 * Get global and policy-level statistics about actions taken by snapshot lifecycle management.
 */
export declare const SlmGetStatsRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SlmGetStatsRequest = z.infer<typeof SlmGetStatsRequest>;
export declare const SlmGetStatsResponse: z.ZodObject<{
    retention_deletion_time: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    retention_deletion_time_millis: z.ZodAny;
    retention_failed: z.ZodNumber;
    retention_runs: z.ZodNumber;
    retention_timed_out: z.ZodNumber;
    total_snapshots_deleted: z.ZodNumber;
    total_snapshot_deletion_failures: z.ZodNumber;
    total_snapshots_failed: z.ZodNumber;
    total_snapshots_taken: z.ZodNumber;
    policy_stats: z.ZodArray<z.ZodObject<{
        policy: z.ZodString;
        snapshots_taken: z.ZodNumber;
        snapshots_failed: z.ZodNumber;
        snapshots_deleted: z.ZodNumber;
        snapshot_deletion_failures: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SlmGetStatsResponse = z.infer<typeof SlmGetStatsResponse>;
//# sourceMappingURL=slm_get_stats.d.ts.map