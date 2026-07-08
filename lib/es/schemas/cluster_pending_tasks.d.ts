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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ClusterPendingTasksPendingTask: z.ZodObject<{
    executing: z.ZodBoolean;
    insert_order: z.ZodNumber;
    priority: z.ZodString;
    source: z.ZodString;
    time_in_queue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_queue_millis: z.ZodAny;
}, z.core.$strip>;
export type ClusterPendingTasksPendingTask = z.infer<typeof ClusterPendingTasksPendingTask>;
/**
 * Get the pending cluster tasks.
 *
 * Get information about cluster-level changes (such as create index, update mapping, allocate or fail shard) that have not yet taken effect.
 *
 * NOTE: This API returns a list of any pending updates to the cluster state.
 * These are distinct from the tasks reported by the task management API which include periodic tasks and tasks initiated by the user, such as node stats, search queries, or create index requests.
 * However, if a user-initiated task such as a create index command causes a cluster state update, the activity of this task might be reported by both task api and pending cluster tasks API.
 */
export declare const ClusterPendingTasksRequest: z.ZodObject<{
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ClusterPendingTasksRequest = z.infer<typeof ClusterPendingTasksRequest>;
export declare const ClusterPendingTasksResponse: z.ZodObject<{
    tasks: z.ZodArray<z.ZodObject<{
        executing: z.ZodBoolean;
        insert_order: z.ZodNumber;
        priority: z.ZodString;
        source: z.ZodString;
        time_in_queue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_queue_millis: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterPendingTasksResponse = z.infer<typeof ClusterPendingTasksResponse>;
//# sourceMappingURL=cluster_pending_tasks.d.ts.map