import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
/**
 * Throttle an update by query operation.
 *
 * Change the number of requests per second for a particular update by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export declare const UpdateByQueryRethrottleRequest: z.ZodObject<{
    task_id: z.ZodString;
    requests_per_second: z.ZodNumber;
}, z.core.$strip>;
export type UpdateByQueryRethrottleRequest = z.infer<typeof UpdateByQueryRethrottleRequest>;
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const NodeRole: z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>;
export type NodeRole = z.infer<typeof NodeRole>;
export declare const NodeRoles: z.ZodArray<z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>>;
export type NodeRoles = z.infer<typeof NodeRoles>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const SpecUtilsBaseNode: z.ZodObject<{
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    host: z.ZodString;
    ip: z.ZodString;
    name: z.ZodString;
    roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        master: "master";
        ingest: "ingest";
        ml: "ml";
        transform: "transform";
        data: "data";
        client: "client";
        data_hot: "data_hot";
        data_content: "data_content";
        data_warm: "data_warm";
        data_cold: "data_cold";
        data_frozen: "data_frozen";
        remote_cluster_client: "remote_cluster_client";
        voting_only: "voting_only";
        coordinating_only: "coordinating_only";
    }>>>;
    transport_address: z.ZodString;
}, z.core.$strip>;
export type SpecUtilsBaseNode = z.infer<typeof SpecUtilsBaseNode>;
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
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
export declare const UpdateByQueryRethrottleUpdateByQueryRethrottleNode: z.ZodObject<{
    tasks: z.ZodRecord<z.ZodString, z.ZodObject<{
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
    }, z.core.$strip>>;
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    host: z.ZodString;
    ip: z.ZodString;
    name: z.ZodString;
    roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        master: "master";
        ingest: "ingest";
        ml: "ml";
        transform: "transform";
        data: "data";
        client: "client";
        data_hot: "data_hot";
        data_content: "data_content";
        data_warm: "data_warm";
        data_cold: "data_cold";
        data_frozen: "data_frozen";
        remote_cluster_client: "remote_cluster_client";
        voting_only: "voting_only";
        coordinating_only: "coordinating_only";
    }>>>;
    transport_address: z.ZodString;
}, z.core.$strip>;
export type UpdateByQueryRethrottleUpdateByQueryRethrottleNode = z.infer<typeof UpdateByQueryRethrottleUpdateByQueryRethrottleNode>;
export declare const UpdateByQueryRethrottleResponse: z.ZodObject<{
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        tasks: z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strip>>;
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        host: z.ZodString;
        ip: z.ZodString;
        name: z.ZodString;
        roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data: "data";
            client: "client";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
            voting_only: "voting_only";
            coordinating_only: "coordinating_only";
        }>>>;
        transport_address: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdateByQueryRethrottleResponse = z.infer<typeof UpdateByQueryRethrottleResponse>;
//# sourceMappingURL=update_by_query_rethrottle.d.ts.map