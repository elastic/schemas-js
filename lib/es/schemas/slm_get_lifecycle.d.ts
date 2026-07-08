import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const SlmConfiguration: z.ZodObject<{
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include_global_state: z.ZodOptional<z.ZodBoolean>;
    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    partial: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SlmConfiguration = z.infer<typeof SlmConfiguration>;
export declare const SlmInProgress: z.ZodObject<{
    name: z.ZodString;
    start_time_millis: z.ZodAny;
    state: z.ZodString;
    uuid: z.ZodString;
}, z.core.$strip>;
export type SlmInProgress = z.infer<typeof SlmInProgress>;
export declare const SlmInvocation: z.ZodObject<{
    snapshot_name: z.ZodString;
    time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type SlmInvocation = z.infer<typeof SlmInvocation>;
export declare const SlmRetention: z.ZodObject<{
    expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    max_count: z.ZodNumber;
    min_count: z.ZodNumber;
}, z.core.$strip>;
export type SlmRetention = z.infer<typeof SlmRetention>;
export declare const WatcherCronExpression: z.ZodString;
export type WatcherCronExpression = z.infer<typeof WatcherCronExpression>;
export declare const SlmPolicy: z.ZodObject<{
    config: z.ZodOptional<z.ZodObject<{
        ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
        indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include_global_state: z.ZodOptional<z.ZodBoolean>;
        feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        partial: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    name: z.ZodString;
    repository: z.ZodString;
    retention: z.ZodOptional<z.ZodObject<{
        expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        max_count: z.ZodNumber;
        min_count: z.ZodNumber;
    }, z.core.$strip>>;
    schedule: z.ZodString;
}, z.core.$strip>;
export type SlmPolicy = z.infer<typeof SlmPolicy>;
export declare const SlmStatistics: z.ZodObject<{
    retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
    retention_failed: z.ZodOptional<z.ZodNumber>;
    retention_runs: z.ZodOptional<z.ZodNumber>;
    retention_timed_out: z.ZodOptional<z.ZodNumber>;
    policy: z.ZodOptional<z.ZodString>;
    total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
    snapshots_deleted: z.ZodOptional<z.ZodNumber>;
    total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
    snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
    total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
    snapshots_failed: z.ZodOptional<z.ZodNumber>;
    total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
    snapshots_taken: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SlmStatistics = z.infer<typeof SlmStatistics>;
export declare const SlmSnapshotLifecycle: z.ZodObject<{
    in_progress: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        start_time_millis: z.ZodAny;
        state: z.ZodString;
        uuid: z.ZodString;
    }, z.core.$strip>>;
    last_failure: z.ZodOptional<z.ZodObject<{
        snapshot_name: z.ZodString;
        time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
    last_success: z.ZodOptional<z.ZodObject<{
        snapshot_name: z.ZodString;
        time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
    modified_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    modified_date_millis: z.ZodAny;
    next_execution: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    next_execution_millis: z.ZodAny;
    policy: z.ZodObject<{
        config: z.ZodOptional<z.ZodObject<{
            ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include_global_state: z.ZodOptional<z.ZodBoolean>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            partial: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        name: z.ZodString;
        repository: z.ZodString;
        retention: z.ZodOptional<z.ZodObject<{
            expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
            max_count: z.ZodNumber;
            min_count: z.ZodNumber;
        }, z.core.$strip>>;
        schedule: z.ZodString;
    }, z.core.$strip>;
    version: z.ZodNumber;
    stats: z.ZodObject<{
        retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
        retention_failed: z.ZodOptional<z.ZodNumber>;
        retention_runs: z.ZodOptional<z.ZodNumber>;
        retention_timed_out: z.ZodOptional<z.ZodNumber>;
        policy: z.ZodOptional<z.ZodString>;
        total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
        snapshots_failed: z.ZodOptional<z.ZodNumber>;
        total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
        snapshots_taken: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SlmSnapshotLifecycle = z.infer<typeof SlmSnapshotLifecycle>;
/**
 * Get policy information.
 *
 * Get snapshot lifecycle policy definitions and information about the latest snapshot attempts.
 */
export declare const SlmGetLifecycleRequest: z.ZodObject<{
    policy_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SlmGetLifecycleRequest = z.infer<typeof SlmGetLifecycleRequest>;
export declare const SlmGetLifecycleResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    in_progress: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        start_time_millis: z.ZodAny;
        state: z.ZodString;
        uuid: z.ZodString;
    }, z.core.$strip>>;
    last_failure: z.ZodOptional<z.ZodObject<{
        snapshot_name: z.ZodString;
        time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
    last_success: z.ZodOptional<z.ZodObject<{
        snapshot_name: z.ZodString;
        time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>;
    modified_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    modified_date_millis: z.ZodAny;
    next_execution: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    next_execution_millis: z.ZodAny;
    policy: z.ZodObject<{
        config: z.ZodOptional<z.ZodObject<{
            ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include_global_state: z.ZodOptional<z.ZodBoolean>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            partial: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        name: z.ZodString;
        repository: z.ZodString;
        retention: z.ZodOptional<z.ZodObject<{
            expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
            max_count: z.ZodNumber;
            min_count: z.ZodNumber;
        }, z.core.$strip>>;
        schedule: z.ZodString;
    }, z.core.$strip>;
    version: z.ZodNumber;
    stats: z.ZodObject<{
        retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
        retention_failed: z.ZodOptional<z.ZodNumber>;
        retention_runs: z.ZodOptional<z.ZodNumber>;
        retention_timed_out: z.ZodOptional<z.ZodNumber>;
        policy: z.ZodOptional<z.ZodString>;
        total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
        snapshots_failed: z.ZodOptional<z.ZodNumber>;
        total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
        snapshots_taken: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>>;
export type SlmGetLifecycleResponse = z.infer<typeof SlmGetLifecycleResponse>;
//# sourceMappingURL=slm_get_lifecycle.d.ts.map