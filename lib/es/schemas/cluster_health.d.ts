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
export declare const HealthStatus: z.ZodEnum<{
    unknown: "unknown";
    green: "green";
    GREEN: "GREEN";
    yellow: "yellow";
    YELLOW: "YELLOW";
    red: "red";
    RED: "RED";
    unavailable: "unavailable";
}>;
export type HealthStatus = z.infer<typeof HealthStatus>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Level: z.ZodEnum<{
    indices: "indices";
    shards: "shards";
    cluster: "cluster";
}>;
export type Level = z.infer<typeof Level>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const WaitForActiveShardOptions: z.ZodEnum<{
    all: "all";
    "index-setting": "index-setting";
}>;
export type WaitForActiveShardOptions = z.infer<typeof WaitForActiveShardOptions>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const WaitForActiveShards: z.ZodUnion<readonly [z.ZodNumber, z.ZodEnum<{
    all: "all";
    "index-setting": "index-setting";
}>]>;
export type WaitForActiveShards = z.infer<typeof WaitForActiveShards>;
export declare const WaitForEvents: z.ZodEnum<{
    normal: "normal";
    immediate: "immediate";
    urgent: "urgent";
    high: "high";
    low: "low";
    languid: "languid";
}>;
export type WaitForEvents = z.infer<typeof WaitForEvents>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const ClusterHealthShardHealthStats: z.ZodObject<{
    active_shards: z.ZodNumber;
    initializing_shards: z.ZodNumber;
    primary_active: z.ZodBoolean;
    relocating_shards: z.ZodNumber;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>;
    unassigned_shards: z.ZodNumber;
    unassigned_primary_shards: z.ZodNumber;
}, z.core.$strip>;
export type ClusterHealthShardHealthStats = z.infer<typeof ClusterHealthShardHealthStats>;
export declare const ClusterHealthIndexHealthStats: z.ZodObject<{
    active_primary_shards: z.ZodNumber;
    active_shards: z.ZodNumber;
    initializing_shards: z.ZodNumber;
    number_of_replicas: z.ZodNumber;
    number_of_shards: z.ZodNumber;
    relocating_shards: z.ZodNumber;
    shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active_shards: z.ZodNumber;
        initializing_shards: z.ZodNumber;
        primary_active: z.ZodBoolean;
        relocating_shards: z.ZodNumber;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>;
        unassigned_shards: z.ZodNumber;
        unassigned_primary_shards: z.ZodNumber;
    }, z.core.$strip>>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>;
    unassigned_shards: z.ZodNumber;
    unassigned_primary_shards: z.ZodNumber;
}, z.core.$strip>;
export type ClusterHealthIndexHealthStats = z.infer<typeof ClusterHealthIndexHealthStats>;
export declare const ClusterHealthHealthResponseBody: z.ZodObject<{
    active_primary_shards: z.ZodNumber;
    active_shards: z.ZodNumber;
    active_shards_percent: z.ZodOptional<z.ZodString>;
    active_shards_percent_as_number: z.ZodNumber;
    cluster_name: z.ZodString;
    delayed_unassigned_shards: z.ZodNumber;
    indices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active_primary_shards: z.ZodNumber;
        active_shards: z.ZodNumber;
        initializing_shards: z.ZodNumber;
        number_of_replicas: z.ZodNumber;
        number_of_shards: z.ZodNumber;
        relocating_shards: z.ZodNumber;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active_shards: z.ZodNumber;
            initializing_shards: z.ZodNumber;
            primary_active: z.ZodBoolean;
            relocating_shards: z.ZodNumber;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                GREEN: "GREEN";
                yellow: "yellow";
                YELLOW: "YELLOW";
                red: "red";
                RED: "RED";
                unavailable: "unavailable";
            }>;
            unassigned_shards: z.ZodNumber;
            unassigned_primary_shards: z.ZodNumber;
        }, z.core.$strip>>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>;
        unassigned_shards: z.ZodNumber;
        unassigned_primary_shards: z.ZodNumber;
    }, z.core.$strip>>>;
    initializing_shards: z.ZodNumber;
    number_of_data_nodes: z.ZodNumber;
    number_of_in_flight_fetch: z.ZodNumber;
    number_of_nodes: z.ZodNumber;
    number_of_pending_tasks: z.ZodNumber;
    relocating_shards: z.ZodNumber;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>;
    task_max_waiting_in_queue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    task_max_waiting_in_queue_millis: z.ZodAny;
    timed_out: z.ZodBoolean;
    unassigned_primary_shards: z.ZodNumber;
    unassigned_shards: z.ZodNumber;
}, z.core.$strip>;
export type ClusterHealthHealthResponseBody = z.infer<typeof ClusterHealthHealthResponseBody>;
export declare const ClusterHealthWaitForNodes: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
export type ClusterHealthWaitForNodes = z.infer<typeof ClusterHealthWaitForNodes>;
/**
 * Get the cluster health status.
 *
 * You can also use the API to get the health status of only specified data streams and indices.
 * For data streams, the API retrieves the health status of the stream’s backing indices.
 *
 * The cluster health status is: green, yellow or red.
 * On the shard level, a red status indicates that the specific shard is not allocated in the cluster. Yellow means that the primary shard is allocated but replicas are not. Green means that all shards are allocated.
 * The index level status is controlled by the worst shard status.
 *
 * One of the main benefits of the API is the ability to wait until the cluster reaches a certain high watermark health level.
 * The cluster status is controlled by the worst index status.
 */
export declare const ClusterHealthRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
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
    level: z.ZodOptional<z.ZodEnum<{
        indices: "indices";
        shards: "shards";
        cluster: "cluster";
    }>>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_active_shards: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodEnum<{
        all: "all";
        "index-setting": "index-setting";
    }>]>>;
    wait_for_events: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        immediate: "immediate";
        urgent: "urgent";
        high: "high";
        low: "low";
        languid: "languid";
    }>>;
    wait_for_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    wait_for_no_initializing_shards: z.ZodOptional<z.ZodBoolean>;
    wait_for_no_relocating_shards: z.ZodOptional<z.ZodBoolean>;
    wait_for_status: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>>;
}, z.core.$strip>;
export type ClusterHealthRequest = z.infer<typeof ClusterHealthRequest>;
export declare const ClusterHealthResponse: z.ZodObject<{
    active_primary_shards: z.ZodNumber;
    active_shards: z.ZodNumber;
    active_shards_percent: z.ZodOptional<z.ZodString>;
    active_shards_percent_as_number: z.ZodNumber;
    cluster_name: z.ZodString;
    delayed_unassigned_shards: z.ZodNumber;
    indices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active_primary_shards: z.ZodNumber;
        active_shards: z.ZodNumber;
        initializing_shards: z.ZodNumber;
        number_of_replicas: z.ZodNumber;
        number_of_shards: z.ZodNumber;
        relocating_shards: z.ZodNumber;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active_shards: z.ZodNumber;
            initializing_shards: z.ZodNumber;
            primary_active: z.ZodBoolean;
            relocating_shards: z.ZodNumber;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                GREEN: "GREEN";
                yellow: "yellow";
                YELLOW: "YELLOW";
                red: "red";
                RED: "RED";
                unavailable: "unavailable";
            }>;
            unassigned_shards: z.ZodNumber;
            unassigned_primary_shards: z.ZodNumber;
        }, z.core.$strip>>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>;
        unassigned_shards: z.ZodNumber;
        unassigned_primary_shards: z.ZodNumber;
    }, z.core.$strip>>>;
    initializing_shards: z.ZodNumber;
    number_of_data_nodes: z.ZodNumber;
    number_of_in_flight_fetch: z.ZodNumber;
    number_of_nodes: z.ZodNumber;
    number_of_pending_tasks: z.ZodNumber;
    relocating_shards: z.ZodNumber;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>;
    task_max_waiting_in_queue: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    task_max_waiting_in_queue_millis: z.ZodAny;
    timed_out: z.ZodBoolean;
    unassigned_primary_shards: z.ZodNumber;
    unassigned_shards: z.ZodNumber;
}, z.core.$strip>;
export type ClusterHealthResponse = z.infer<typeof ClusterHealthResponse>;
//# sourceMappingURL=cluster_health.d.ts.map