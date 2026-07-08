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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const EnrichStatsCacheStats: z.ZodObject<{
    node_id: z.ZodString;
    count: z.ZodNumber;
    hits: z.ZodNumber;
    hits_time_in_millis: z.ZodAny;
    misses: z.ZodNumber;
    misses_time_in_millis: z.ZodAny;
    evictions: z.ZodNumber;
    size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type EnrichStatsCacheStats = z.infer<typeof EnrichStatsCacheStats>;
export declare const EnrichStatsCoordinatorStats: z.ZodObject<{
    executed_searches_total: z.ZodNumber;
    node_id: z.ZodString;
    queue_size: z.ZodNumber;
    remote_requests_current: z.ZodNumber;
    remote_requests_total: z.ZodNumber;
}, z.core.$strip>;
export type EnrichStatsCoordinatorStats = z.infer<typeof EnrichStatsCoordinatorStats>;
export declare const TasksTaskInfo: z.ZodObject<{
    action: z.ZodString;
    cancelled: z.ZodOptional<z.ZodBoolean>;
    cancellable: z.ZodBoolean;
    description: z.ZodOptional<z.ZodString>;
    headers: z.ZodRecord<z.ZodString, z.ZodString>;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodOptional<z.ZodAny>;
    type: z.ZodString;
    parent_task_id: z.ZodOptional<z.ZodString>;
    original_task_id: z.ZodOptional<z.ZodString>;
    original_start_time_in_millis: z.ZodOptional<z.ZodAny>;
    original_start_time: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TasksTaskInfo = z.infer<typeof TasksTaskInfo>;
export declare const EnrichStatsExecutingPolicy: z.ZodObject<{
    name: z.ZodString;
    task: z.ZodObject<{
        action: z.ZodString;
        cancelled: z.ZodOptional<z.ZodBoolean>;
        cancellable: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodOptional<z.ZodAny>;
        type: z.ZodString;
        parent_task_id: z.ZodOptional<z.ZodString>;
        original_task_id: z.ZodOptional<z.ZodString>;
        original_start_time_in_millis: z.ZodOptional<z.ZodAny>;
        original_start_time: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type EnrichStatsExecutingPolicy = z.infer<typeof EnrichStatsExecutingPolicy>;
/**
 * Get enrich stats.
 *
 * Returns enrich coordinator statistics and information about enrich policies that are currently executing.
 */
export declare const EnrichStatsRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type EnrichStatsRequest = z.infer<typeof EnrichStatsRequest>;
export declare const EnrichStatsResponse: z.ZodObject<{
    coordinator_stats: z.ZodArray<z.ZodObject<{
        executed_searches_total: z.ZodNumber;
        node_id: z.ZodString;
        queue_size: z.ZodNumber;
        remote_requests_current: z.ZodNumber;
        remote_requests_total: z.ZodNumber;
    }, z.core.$strip>>;
    executing_policies: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        task: z.ZodObject<{
            action: z.ZodString;
            cancelled: z.ZodOptional<z.ZodBoolean>;
            cancellable: z.ZodBoolean;
            description: z.ZodOptional<z.ZodString>;
            headers: z.ZodRecord<z.ZodString, z.ZodString>;
            id: z.ZodNumber;
            node: z.ZodString;
            running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            running_time_in_nanos: z.ZodAny;
            start_time_in_millis: z.ZodAny;
            status: z.ZodOptional<z.ZodAny>;
            type: z.ZodString;
            parent_task_id: z.ZodOptional<z.ZodString>;
            original_task_id: z.ZodOptional<z.ZodString>;
            original_start_time_in_millis: z.ZodOptional<z.ZodAny>;
            original_start_time: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    cache_stats: z.ZodOptional<z.ZodArray<z.ZodObject<{
        node_id: z.ZodString;
        count: z.ZodNumber;
        hits: z.ZodNumber;
        hits_time_in_millis: z.ZodAny;
        misses: z.ZodNumber;
        misses_time_in_millis: z.ZodAny;
        evictions: z.ZodNumber;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EnrichStatsResponse = z.infer<typeof EnrichStatsResponse>;
//# sourceMappingURL=enrich_stats.d.ts.map