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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ClusterAllocationExplainAllocationExplainDecision: z.ZodEnum<{
    NO: "NO";
    YES: "YES";
    THROTTLE: "THROTTLE";
    ALWAYS: "ALWAYS";
}>;
export type ClusterAllocationExplainAllocationExplainDecision = z.infer<typeof ClusterAllocationExplainAllocationExplainDecision>;
export declare const ClusterAllocationExplainAllocationDecision: z.ZodObject<{
    decider: z.ZodString;
    decision: z.ZodEnum<{
        NO: "NO";
        YES: "YES";
        THROTTLE: "THROTTLE";
        ALWAYS: "ALWAYS";
    }>;
    explanation: z.ZodString;
}, z.core.$strip>;
export type ClusterAllocationExplainAllocationDecision = z.infer<typeof ClusterAllocationExplainAllocationDecision>;
export declare const ClusterAllocationExplainAllocationStore: z.ZodObject<{
    allocation_id: z.ZodString;
    found: z.ZodBoolean;
    in_sync: z.ZodBoolean;
    matching_size_in_bytes: z.ZodNumber;
    matching_sync_id: z.ZodBoolean;
    store_exception: z.ZodString;
}, z.core.$strip>;
export type ClusterAllocationExplainAllocationStore = z.infer<typeof ClusterAllocationExplainAllocationStore>;
export declare const ClusterAllocationExplainDiskUsage: z.ZodObject<{
    path: z.ZodString;
    total_bytes: z.ZodNumber;
    used_bytes: z.ZodNumber;
    free_bytes: z.ZodNumber;
    free_disk_percent: z.ZodNumber;
    used_disk_percent: z.ZodNumber;
}, z.core.$strip>;
export type ClusterAllocationExplainDiskUsage = z.infer<typeof ClusterAllocationExplainDiskUsage>;
export declare const ClusterAllocationExplainNodeDiskUsage: z.ZodObject<{
    node_name: z.ZodString;
    least_available: z.ZodObject<{
        path: z.ZodString;
        total_bytes: z.ZodNumber;
        used_bytes: z.ZodNumber;
        free_bytes: z.ZodNumber;
        free_disk_percent: z.ZodNumber;
        used_disk_percent: z.ZodNumber;
    }, z.core.$strip>;
    most_available: z.ZodObject<{
        path: z.ZodString;
        total_bytes: z.ZodNumber;
        used_bytes: z.ZodNumber;
        free_bytes: z.ZodNumber;
        free_disk_percent: z.ZodNumber;
        used_disk_percent: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterAllocationExplainNodeDiskUsage = z.infer<typeof ClusterAllocationExplainNodeDiskUsage>;
export declare const ClusterAllocationExplainReservedSize: z.ZodObject<{
    node_id: z.ZodString;
    path: z.ZodString;
    total: z.ZodNumber;
    shards: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ClusterAllocationExplainReservedSize = z.infer<typeof ClusterAllocationExplainReservedSize>;
export declare const ClusterAllocationExplainClusterInfo: z.ZodObject<{
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        node_name: z.ZodString;
        least_available: z.ZodObject<{
            path: z.ZodString;
            total_bytes: z.ZodNumber;
            used_bytes: z.ZodNumber;
            free_bytes: z.ZodNumber;
            free_disk_percent: z.ZodNumber;
            used_disk_percent: z.ZodNumber;
        }, z.core.$strip>;
        most_available: z.ZodObject<{
            path: z.ZodString;
            total_bytes: z.ZodNumber;
            used_bytes: z.ZodNumber;
            free_bytes: z.ZodNumber;
            free_disk_percent: z.ZodNumber;
            used_disk_percent: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    shard_sizes: z.ZodRecord<z.ZodString, z.ZodNumber>;
    shard_data_set_sizes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    shard_paths: z.ZodRecord<z.ZodString, z.ZodString>;
    reserved_sizes: z.ZodArray<z.ZodObject<{
        node_id: z.ZodString;
        path: z.ZodString;
        total: z.ZodNumber;
        shards: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterAllocationExplainClusterInfo = z.infer<typeof ClusterAllocationExplainClusterInfo>;
export declare const ClusterAllocationExplainCurrentNode: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    roles: z.ZodArray<z.ZodEnum<{
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
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    transport_address: z.ZodString;
    weight_ranking: z.ZodNumber;
}, z.core.$strip>;
export type ClusterAllocationExplainCurrentNode = z.infer<typeof ClusterAllocationExplainCurrentNode>;
export declare const ClusterAllocationExplainDecision: z.ZodEnum<{
    no: "no";
    throttled: "throttled";
    yes: "yes";
    worse_balance: "worse_balance";
    awaiting_info: "awaiting_info";
    allocation_delayed: "allocation_delayed";
    no_valid_shard_copy: "no_valid_shard_copy";
    no_attempt: "no_attempt";
}>;
export type ClusterAllocationExplainDecision = z.infer<typeof ClusterAllocationExplainDecision>;
export declare const ClusterAllocationExplainNodeAllocationExplanation: z.ZodObject<{
    deciders: z.ZodOptional<z.ZodArray<z.ZodObject<{
        decider: z.ZodString;
        decision: z.ZodEnum<{
            NO: "NO";
            YES: "YES";
            THROTTLE: "THROTTLE";
            ALWAYS: "ALWAYS";
        }>;
        explanation: z.ZodString;
    }, z.core.$strip>>>;
    node_attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    node_decision: z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>;
    node_id: z.ZodString;
    node_name: z.ZodString;
    roles: z.ZodArray<z.ZodEnum<{
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
    store: z.ZodOptional<z.ZodObject<{
        allocation_id: z.ZodString;
        found: z.ZodBoolean;
        in_sync: z.ZodBoolean;
        matching_size_in_bytes: z.ZodNumber;
        matching_sync_id: z.ZodBoolean;
        store_exception: z.ZodString;
    }, z.core.$strip>>;
    transport_address: z.ZodString;
    weight_ranking: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterAllocationExplainNodeAllocationExplanation = z.infer<typeof ClusterAllocationExplainNodeAllocationExplanation>;
/**
 * Explain the shard allocations.
 *
 * Get explanations for shard allocations in the cluster.
 * This API accepts the current_node, index, primary and shard parameters in the request body or in query parameters, but not in both at the same time.
 * For unassigned shards, it provides an explanation for why the shard is unassigned.
 * For assigned shards, it provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node.
 * This API can be very useful when attempting to diagnose why a shard is unassigned or why a shard continues to remain on its current node when you might expect otherwise.
 * Refer to the linked documentation for examples of how to troubleshoot allocation issues using this API.
 */
export declare const ClusterAllocationExplainRequest: z.ZodObject<{
    include_disk_info: z.ZodOptional<z.ZodBoolean>;
    include_yes_decisions: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    index: z.ZodOptional<z.ZodString>;
    shard: z.ZodOptional<z.ZodNumber>;
    primary: z.ZodOptional<z.ZodBoolean>;
    current_node: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterAllocationExplainRequest = z.infer<typeof ClusterAllocationExplainRequest>;
export declare const ClusterAllocationExplainUnassignedInformationReason: z.ZodEnum<{
    INDEX_CREATED: "INDEX_CREATED";
    CLUSTER_RECOVERED: "CLUSTER_RECOVERED";
    INDEX_REOPENED: "INDEX_REOPENED";
    DANGLING_INDEX_IMPORTED: "DANGLING_INDEX_IMPORTED";
    NEW_INDEX_RESTORED: "NEW_INDEX_RESTORED";
    EXISTING_INDEX_RESTORED: "EXISTING_INDEX_RESTORED";
    REPLICA_ADDED: "REPLICA_ADDED";
    ALLOCATION_FAILED: "ALLOCATION_FAILED";
    NODE_LEFT: "NODE_LEFT";
    REROUTE_CANCELLED: "REROUTE_CANCELLED";
    REINITIALIZED: "REINITIALIZED";
    REALLOCATED_REPLICA: "REALLOCATED_REPLICA";
    PRIMARY_FAILED: "PRIMARY_FAILED";
    FORCED_EMPTY_PRIMARY: "FORCED_EMPTY_PRIMARY";
    MANUAL_ALLOCATION: "MANUAL_ALLOCATION";
}>;
export type ClusterAllocationExplainUnassignedInformationReason = z.infer<typeof ClusterAllocationExplainUnassignedInformationReason>;
export declare const ClusterAllocationExplainUnassignedInformation: z.ZodObject<{
    at: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    last_allocation_status: z.ZodOptional<z.ZodString>;
    reason: z.ZodEnum<{
        INDEX_CREATED: "INDEX_CREATED";
        CLUSTER_RECOVERED: "CLUSTER_RECOVERED";
        INDEX_REOPENED: "INDEX_REOPENED";
        DANGLING_INDEX_IMPORTED: "DANGLING_INDEX_IMPORTED";
        NEW_INDEX_RESTORED: "NEW_INDEX_RESTORED";
        EXISTING_INDEX_RESTORED: "EXISTING_INDEX_RESTORED";
        REPLICA_ADDED: "REPLICA_ADDED";
        ALLOCATION_FAILED: "ALLOCATION_FAILED";
        NODE_LEFT: "NODE_LEFT";
        REROUTE_CANCELLED: "REROUTE_CANCELLED";
        REINITIALIZED: "REINITIALIZED";
        REALLOCATED_REPLICA: "REALLOCATED_REPLICA";
        PRIMARY_FAILED: "PRIMARY_FAILED";
        FORCED_EMPTY_PRIMARY: "FORCED_EMPTY_PRIMARY";
        MANUAL_ALLOCATION: "MANUAL_ALLOCATION";
    }>;
    details: z.ZodOptional<z.ZodString>;
    failed_allocation_attempts: z.ZodOptional<z.ZodNumber>;
    delayed: z.ZodOptional<z.ZodBoolean>;
    allocation_status: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterAllocationExplainUnassignedInformation = z.infer<typeof ClusterAllocationExplainUnassignedInformation>;
export declare const ClusterAllocationExplainResponse: z.ZodObject<{
    allocate_explanation: z.ZodOptional<z.ZodString>;
    allocation_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    allocation_delay_in_millis: z.ZodOptional<z.ZodAny>;
    can_allocate: z.ZodOptional<z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>>;
    can_move_to_other_node: z.ZodOptional<z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>>;
    can_rebalance_cluster: z.ZodOptional<z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>>;
    can_rebalance_cluster_decisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        decider: z.ZodString;
        decision: z.ZodEnum<{
            NO: "NO";
            YES: "YES";
            THROTTLE: "THROTTLE";
            ALWAYS: "ALWAYS";
        }>;
        explanation: z.ZodString;
    }, z.core.$strip>>>;
    can_rebalance_to_other_node: z.ZodOptional<z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>>;
    can_remain_decisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        decider: z.ZodString;
        decision: z.ZodEnum<{
            NO: "NO";
            YES: "YES";
            THROTTLE: "THROTTLE";
            ALWAYS: "ALWAYS";
        }>;
        explanation: z.ZodString;
    }, z.core.$strip>>>;
    can_remain_on_current_node: z.ZodOptional<z.ZodEnum<{
        no: "no";
        throttled: "throttled";
        yes: "yes";
        worse_balance: "worse_balance";
        awaiting_info: "awaiting_info";
        allocation_delayed: "allocation_delayed";
        no_valid_shard_copy: "no_valid_shard_copy";
        no_attempt: "no_attempt";
    }>>;
    cluster_info: z.ZodOptional<z.ZodObject<{
        nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
            node_name: z.ZodString;
            least_available: z.ZodObject<{
                path: z.ZodString;
                total_bytes: z.ZodNumber;
                used_bytes: z.ZodNumber;
                free_bytes: z.ZodNumber;
                free_disk_percent: z.ZodNumber;
                used_disk_percent: z.ZodNumber;
            }, z.core.$strip>;
            most_available: z.ZodObject<{
                path: z.ZodString;
                total_bytes: z.ZodNumber;
                used_bytes: z.ZodNumber;
                free_bytes: z.ZodNumber;
                free_disk_percent: z.ZodNumber;
                used_disk_percent: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        shard_sizes: z.ZodRecord<z.ZodString, z.ZodNumber>;
        shard_data_set_sizes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        shard_paths: z.ZodRecord<z.ZodString, z.ZodString>;
        reserved_sizes: z.ZodArray<z.ZodObject<{
            node_id: z.ZodString;
            path: z.ZodString;
            total: z.ZodNumber;
            shards: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    configured_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    configured_delay_in_millis: z.ZodOptional<z.ZodAny>;
    current_node: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        roles: z.ZodArray<z.ZodEnum<{
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
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        transport_address: z.ZodString;
        weight_ranking: z.ZodNumber;
    }, z.core.$strip>>;
    current_state: z.ZodString;
    index: z.ZodString;
    move_explanation: z.ZodOptional<z.ZodString>;
    node_allocation_decisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        deciders: z.ZodOptional<z.ZodArray<z.ZodObject<{
            decider: z.ZodString;
            decision: z.ZodEnum<{
                NO: "NO";
                YES: "YES";
                THROTTLE: "THROTTLE";
                ALWAYS: "ALWAYS";
            }>;
            explanation: z.ZodString;
        }, z.core.$strip>>>;
        node_attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        node_decision: z.ZodEnum<{
            no: "no";
            throttled: "throttled";
            yes: "yes";
            worse_balance: "worse_balance";
            awaiting_info: "awaiting_info";
            allocation_delayed: "allocation_delayed";
            no_valid_shard_copy: "no_valid_shard_copy";
            no_attempt: "no_attempt";
        }>;
        node_id: z.ZodString;
        node_name: z.ZodString;
        roles: z.ZodArray<z.ZodEnum<{
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
        store: z.ZodOptional<z.ZodObject<{
            allocation_id: z.ZodString;
            found: z.ZodBoolean;
            in_sync: z.ZodBoolean;
            matching_size_in_bytes: z.ZodNumber;
            matching_sync_id: z.ZodBoolean;
            store_exception: z.ZodString;
        }, z.core.$strip>>;
        transport_address: z.ZodString;
        weight_ranking: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    primary: z.ZodBoolean;
    rebalance_explanation: z.ZodOptional<z.ZodString>;
    remaining_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    remaining_delay_in_millis: z.ZodOptional<z.ZodAny>;
    shard: z.ZodNumber;
    unassigned_info: z.ZodOptional<z.ZodObject<{
        at: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        last_allocation_status: z.ZodOptional<z.ZodString>;
        reason: z.ZodEnum<{
            INDEX_CREATED: "INDEX_CREATED";
            CLUSTER_RECOVERED: "CLUSTER_RECOVERED";
            INDEX_REOPENED: "INDEX_REOPENED";
            DANGLING_INDEX_IMPORTED: "DANGLING_INDEX_IMPORTED";
            NEW_INDEX_RESTORED: "NEW_INDEX_RESTORED";
            EXISTING_INDEX_RESTORED: "EXISTING_INDEX_RESTORED";
            REPLICA_ADDED: "REPLICA_ADDED";
            ALLOCATION_FAILED: "ALLOCATION_FAILED";
            NODE_LEFT: "NODE_LEFT";
            REROUTE_CANCELLED: "REROUTE_CANCELLED";
            REINITIALIZED: "REINITIALIZED";
            REALLOCATED_REPLICA: "REALLOCATED_REPLICA";
            PRIMARY_FAILED: "PRIMARY_FAILED";
            FORCED_EMPTY_PRIMARY: "FORCED_EMPTY_PRIMARY";
            MANUAL_ALLOCATION: "MANUAL_ALLOCATION";
        }>;
        details: z.ZodOptional<z.ZodString>;
        failed_allocation_attempts: z.ZodOptional<z.ZodNumber>;
        delayed: z.ZodOptional<z.ZodBoolean>;
        allocation_status: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    note: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterAllocationExplainResponse = z.infer<typeof ClusterAllocationExplainResponse>;
//# sourceMappingURL=cluster_allocation_explain.d.ts.map