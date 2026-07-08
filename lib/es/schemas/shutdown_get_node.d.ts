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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ShutdownGetNodeShutdownType: z.ZodEnum<{
    remove: "remove";
    restart: "restart";
}>;
export type ShutdownGetNodeShutdownType = z.infer<typeof ShutdownGetNodeShutdownType>;
export declare const ShutdownGetNodeShutdownStatus: z.ZodEnum<{
    in_progress: "in_progress";
    complete: "complete";
    not_started: "not_started";
    stalled: "stalled";
}>;
export type ShutdownGetNodeShutdownStatus = z.infer<typeof ShutdownGetNodeShutdownStatus>;
export declare const ShutdownGetNodeShardMigrationStatus: z.ZodObject<{
    status: z.ZodEnum<{
        in_progress: "in_progress";
        complete: "complete";
        not_started: "not_started";
        stalled: "stalled";
    }>;
}, z.core.$strip>;
export type ShutdownGetNodeShardMigrationStatus = z.infer<typeof ShutdownGetNodeShardMigrationStatus>;
export declare const ShutdownGetNodePersistentTaskStatus: z.ZodObject<{
    status: z.ZodEnum<{
        in_progress: "in_progress";
        complete: "complete";
        not_started: "not_started";
        stalled: "stalled";
    }>;
}, z.core.$strip>;
export type ShutdownGetNodePersistentTaskStatus = z.infer<typeof ShutdownGetNodePersistentTaskStatus>;
export declare const ShutdownGetNodePluginsStatus: z.ZodObject<{
    status: z.ZodEnum<{
        in_progress: "in_progress";
        complete: "complete";
        not_started: "not_started";
        stalled: "stalled";
    }>;
}, z.core.$strip>;
export type ShutdownGetNodePluginsStatus = z.infer<typeof ShutdownGetNodePluginsStatus>;
export declare const ShutdownGetNodeNodeShutdownStatus: z.ZodObject<{
    node_id: z.ZodString;
    type: z.ZodEnum<{
        remove: "remove";
        restart: "restart";
    }>;
    reason: z.ZodString;
    shutdown_startedmillis: z.ZodAny;
    status: z.ZodEnum<{
        in_progress: "in_progress";
        complete: "complete";
        not_started: "not_started";
        stalled: "stalled";
    }>;
    shard_migration: z.ZodObject<{
        status: z.ZodEnum<{
            in_progress: "in_progress";
            complete: "complete";
            not_started: "not_started";
            stalled: "stalled";
        }>;
    }, z.core.$strip>;
    persistent_tasks: z.ZodObject<{
        status: z.ZodEnum<{
            in_progress: "in_progress";
            complete: "complete";
            not_started: "not_started";
            stalled: "stalled";
        }>;
    }, z.core.$strip>;
    plugins: z.ZodObject<{
        status: z.ZodEnum<{
            in_progress: "in_progress";
            complete: "complete";
            not_started: "not_started";
            stalled: "stalled";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ShutdownGetNodeNodeShutdownStatus = z.infer<typeof ShutdownGetNodeNodeShutdownStatus>;
/**
 * Get the shutdown status.
 *
 * Get information about nodes that are ready to be shut down, have shut down preparations still in progress, or have stalled.
 * The API returns status information for each part of the shut down process.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 */
export declare const ShutdownGetNodeRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ShutdownGetNodeRequest = z.infer<typeof ShutdownGetNodeRequest>;
export declare const ShutdownGetNodeResponse: z.ZodObject<{
    nodes: z.ZodArray<z.ZodObject<{
        node_id: z.ZodString;
        type: z.ZodEnum<{
            remove: "remove";
            restart: "restart";
        }>;
        reason: z.ZodString;
        shutdown_startedmillis: z.ZodAny;
        status: z.ZodEnum<{
            in_progress: "in_progress";
            complete: "complete";
            not_started: "not_started";
            stalled: "stalled";
        }>;
        shard_migration: z.ZodObject<{
            status: z.ZodEnum<{
                in_progress: "in_progress";
                complete: "complete";
                not_started: "not_started";
                stalled: "stalled";
            }>;
        }, z.core.$strip>;
        persistent_tasks: z.ZodObject<{
            status: z.ZodEnum<{
                in_progress: "in_progress";
                complete: "complete";
                not_started: "not_started";
                stalled: "stalled";
            }>;
        }, z.core.$strip>;
        plugins: z.ZodObject<{
            status: z.ZodEnum<{
                in_progress: "in_progress";
                complete: "complete";
                not_started: "not_started";
                stalled: "stalled";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ShutdownGetNodeResponse = z.infer<typeof ShutdownGetNodeResponse>;
//# sourceMappingURL=shutdown_get_node.d.ts.map