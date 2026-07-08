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
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** Contains statistics about the number of nodes selected by the request. */
export declare const NodeStatistics: z.ZodObject<{
    failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    total: z.ZodNumber;
    successful: z.ZodNumber;
    failed: z.ZodNumber;
}, z.core.$strip>;
export type NodeStatistics = z.infer<typeof NodeStatistics>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const WatcherExecutionPhase: z.ZodEnum<{
    input: "input";
    actions: "actions";
    condition: "condition";
    started: "started";
    finished: "finished";
    awaits_execution: "awaits_execution";
    watch_transform: "watch_transform";
    aborted: "aborted";
}>;
export type WatcherExecutionPhase = z.infer<typeof WatcherExecutionPhase>;
export declare const WatcherExecutionThreadPool: z.ZodObject<{
    max_size: z.ZodNumber;
    queue_size: z.ZodNumber;
}, z.core.$strip>;
export type WatcherExecutionThreadPool = z.infer<typeof WatcherExecutionThreadPool>;
export declare const WatcherStatsWatcherMetric: z.ZodEnum<{
    all: "all";
    _all: "_all";
    queued_watches: "queued_watches";
    current_watches: "current_watches";
    pending_watches: "pending_watches";
}>;
export type WatcherStatsWatcherMetric = z.infer<typeof WatcherStatsWatcherMetric>;
/**
 * Get Watcher statistics.
 *
 * This API always returns basic metrics.
 * You retrieve more metrics by using the metric parameter.
 */
export declare const WatcherStatsRequest: z.ZodObject<{
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        all: "all";
        _all: "_all";
        queued_watches: "queued_watches";
        current_watches: "current_watches";
        pending_watches: "pending_watches";
    }>, z.ZodArray<z.ZodEnum<{
        all: "all";
        _all: "_all";
        queued_watches: "queued_watches";
        current_watches: "current_watches";
        pending_watches: "pending_watches";
    }>>]>>;
    emit_stacktraces: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type WatcherStatsRequest = z.infer<typeof WatcherStatsRequest>;
export declare const WatcherStatsWatchRecordQueuedStats: z.ZodObject<{
    execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type WatcherStatsWatchRecordQueuedStats = z.infer<typeof WatcherStatsWatchRecordQueuedStats>;
export declare const WatcherStatsWatchRecordStats: z.ZodObject<{
    execution_phase: z.ZodEnum<{
        input: "input";
        actions: "actions";
        condition: "condition";
        started: "started";
        finished: "finished";
        awaits_execution: "awaits_execution";
        watch_transform: "watch_transform";
        aborted: "aborted";
    }>;
    triggered_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    executed_actions: z.ZodOptional<z.ZodArray<z.ZodString>>;
    watch_id: z.ZodString;
    watch_record_id: z.ZodString;
    execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
}, z.core.$strip>;
export type WatcherStatsWatchRecordStats = z.infer<typeof WatcherStatsWatchRecordStats>;
export declare const WatcherStatsWatcherState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    stopping: "stopping";
    stopped: "stopped";
}>;
export type WatcherStatsWatcherState = z.infer<typeof WatcherStatsWatcherState>;
export declare const WatcherStatsWatcherNodeStats: z.ZodObject<{
    current_watches: z.ZodOptional<z.ZodArray<z.ZodObject<{
        execution_phase: z.ZodEnum<{
            input: "input";
            actions: "actions";
            condition: "condition";
            started: "started";
            finished: "finished";
            awaits_execution: "awaits_execution";
            watch_transform: "watch_transform";
            aborted: "aborted";
        }>;
        triggered_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        executed_actions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        watch_id: z.ZodString;
        watch_record_id: z.ZodString;
        execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>>;
    execution_thread_pool: z.ZodObject<{
        max_size: z.ZodNumber;
        queue_size: z.ZodNumber;
    }, z.core.$strip>;
    queued_watches: z.ZodOptional<z.ZodArray<z.ZodObject<{
        execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    }, z.core.$strip>>>;
    watch_count: z.ZodNumber;
    watcher_state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        stopped: "stopped";
    }>;
    node_id: z.ZodString;
}, z.core.$strip>;
export type WatcherStatsWatcherNodeStats = z.infer<typeof WatcherStatsWatcherNodeStats>;
export declare const WatcherStatsResponse: z.ZodObject<{
    node_stats: z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>;
    cluster_name: z.ZodString;
    manually_stopped: z.ZodBoolean;
    stats: z.ZodArray<z.ZodObject<{
        current_watches: z.ZodOptional<z.ZodArray<z.ZodObject<{
            execution_phase: z.ZodEnum<{
                input: "input";
                actions: "actions";
                condition: "condition";
                started: "started";
                finished: "finished";
                awaits_execution: "awaits_execution";
                watch_transform: "watch_transform";
                aborted: "aborted";
            }>;
            triggered_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            executed_actions: z.ZodOptional<z.ZodArray<z.ZodString>>;
            watch_id: z.ZodString;
            watch_record_id: z.ZodString;
            execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>>>;
        execution_thread_pool: z.ZodObject<{
            max_size: z.ZodNumber;
            queue_size: z.ZodNumber;
        }, z.core.$strip>;
        queued_watches: z.ZodOptional<z.ZodArray<z.ZodObject<{
            execution_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        }, z.core.$strip>>>;
        watch_count: z.ZodNumber;
        watcher_state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            stopped: "stopped";
        }>;
        node_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type WatcherStatsResponse = z.infer<typeof WatcherStatsResponse>;
//# sourceMappingURL=watcher_stats.d.ts.map