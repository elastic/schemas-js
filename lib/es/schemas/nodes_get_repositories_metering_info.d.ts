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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
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
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const NodesNodesResponseBase: z.ZodObject<{
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesNodesResponseBase = z.infer<typeof NodesNodesResponseBase>;
export declare const NodesRepositoryLocation: z.ZodObject<{
    base_path: z.ZodString;
    container: z.ZodOptional<z.ZodString>;
    bucket: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesRepositoryLocation = z.infer<typeof NodesRepositoryLocation>;
export declare const NodesRequestCounts: z.ZodObject<{
    GetBlobProperties: z.ZodOptional<z.ZodNumber>;
    GetBlob: z.ZodOptional<z.ZodNumber>;
    ListBlobs: z.ZodOptional<z.ZodNumber>;
    PutBlob: z.ZodOptional<z.ZodNumber>;
    PutBlock: z.ZodOptional<z.ZodNumber>;
    PutBlockList: z.ZodOptional<z.ZodNumber>;
    GetObject: z.ZodOptional<z.ZodNumber>;
    ListObjects: z.ZodOptional<z.ZodNumber>;
    InsertObject: z.ZodOptional<z.ZodNumber>;
    PutObject: z.ZodOptional<z.ZodNumber>;
    PutMultipartObject: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesRequestCounts = z.infer<typeof NodesRequestCounts>;
export declare const NodesRepositoryMeteringInformation: z.ZodObject<{
    repository_name: z.ZodString;
    repository_type: z.ZodString;
    repository_location: z.ZodObject<{
        base_path: z.ZodString;
        container: z.ZodOptional<z.ZodString>;
        bucket: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    repository_ephemeral_id: z.ZodString;
    repository_started_at: z.ZodAny;
    repository_stopped_at: z.ZodOptional<z.ZodAny>;
    archived: z.ZodBoolean;
    cluster_version: z.ZodOptional<z.ZodNumber>;
    request_counts: z.ZodObject<{
        GetBlobProperties: z.ZodOptional<z.ZodNumber>;
        GetBlob: z.ZodOptional<z.ZodNumber>;
        ListBlobs: z.ZodOptional<z.ZodNumber>;
        PutBlob: z.ZodOptional<z.ZodNumber>;
        PutBlock: z.ZodOptional<z.ZodNumber>;
        PutBlockList: z.ZodOptional<z.ZodNumber>;
        GetObject: z.ZodOptional<z.ZodNumber>;
        ListObjects: z.ZodOptional<z.ZodNumber>;
        InsertObject: z.ZodOptional<z.ZodNumber>;
        PutObject: z.ZodOptional<z.ZodNumber>;
        PutMultipartObject: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type NodesRepositoryMeteringInformation = z.infer<typeof NodesRepositoryMeteringInformation>;
/**
 * Get cluster repositories metering.
 *
 * Get repositories metering information for a cluster.
 * This API exposes monotonically non-decreasing counters and it is expected that clients would durably store the information needed to compute aggregations over a period of time.
 * Additionally, the information exposed by this API is volatile, meaning that it will not be present after node restarts.
 */
export declare const NodesGetRepositoriesMeteringInfoRequest: z.ZodObject<{
    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type NodesGetRepositoriesMeteringInfoRequest = z.infer<typeof NodesGetRepositoriesMeteringInfoRequest>;
export declare const NodesGetRepositoriesMeteringInfoResponseBase: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        repository_name: z.ZodString;
        repository_type: z.ZodString;
        repository_location: z.ZodObject<{
            base_path: z.ZodString;
            container: z.ZodOptional<z.ZodString>;
            bucket: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        repository_ephemeral_id: z.ZodString;
        repository_started_at: z.ZodAny;
        repository_stopped_at: z.ZodOptional<z.ZodAny>;
        archived: z.ZodBoolean;
        cluster_version: z.ZodOptional<z.ZodNumber>;
        request_counts: z.ZodObject<{
            GetBlobProperties: z.ZodOptional<z.ZodNumber>;
            GetBlob: z.ZodOptional<z.ZodNumber>;
            ListBlobs: z.ZodOptional<z.ZodNumber>;
            PutBlob: z.ZodOptional<z.ZodNumber>;
            PutBlock: z.ZodOptional<z.ZodNumber>;
            PutBlockList: z.ZodOptional<z.ZodNumber>;
            GetObject: z.ZodOptional<z.ZodNumber>;
            ListObjects: z.ZodOptional<z.ZodNumber>;
            InsertObject: z.ZodOptional<z.ZodNumber>;
            PutObject: z.ZodOptional<z.ZodNumber>;
            PutMultipartObject: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesGetRepositoriesMeteringInfoResponseBase = z.infer<typeof NodesGetRepositoriesMeteringInfoResponseBase>;
export declare const NodesGetRepositoriesMeteringInfoResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        repository_name: z.ZodString;
        repository_type: z.ZodString;
        repository_location: z.ZodObject<{
            base_path: z.ZodString;
            container: z.ZodOptional<z.ZodString>;
            bucket: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        repository_ephemeral_id: z.ZodString;
        repository_started_at: z.ZodAny;
        repository_stopped_at: z.ZodOptional<z.ZodAny>;
        archived: z.ZodBoolean;
        cluster_version: z.ZodOptional<z.ZodNumber>;
        request_counts: z.ZodObject<{
            GetBlobProperties: z.ZodOptional<z.ZodNumber>;
            GetBlob: z.ZodOptional<z.ZodNumber>;
            ListBlobs: z.ZodOptional<z.ZodNumber>;
            PutBlob: z.ZodOptional<z.ZodNumber>;
            PutBlock: z.ZodOptional<z.ZodNumber>;
            PutBlockList: z.ZodOptional<z.ZodNumber>;
            GetObject: z.ZodOptional<z.ZodNumber>;
            ListObjects: z.ZodOptional<z.ZodNumber>;
            InsertObject: z.ZodOptional<z.ZodNumber>;
            PutObject: z.ZodOptional<z.ZodNumber>;
            PutMultipartObject: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesGetRepositoriesMeteringInfoResponse = z.infer<typeof NodesGetRepositoriesMeteringInfoResponse>;
//# sourceMappingURL=nodes_get_repositories_metering_info.d.ts.map