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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const NodeName: z.ZodString;
export type NodeName = z.infer<typeof NodeName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ClusterRerouteCommandCancelAction: z.ZodObject<{
    index: z.ZodString;
    shard: z.ZodNumber;
    node: z.ZodString;
    allow_primary: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ClusterRerouteCommandCancelAction = z.infer<typeof ClusterRerouteCommandCancelAction>;
export declare const ClusterRerouteCommandMoveAction: z.ZodObject<{
    index: z.ZodString;
    shard: z.ZodNumber;
    from_node: z.ZodString;
    to_node: z.ZodString;
}, z.core.$strip>;
export type ClusterRerouteCommandMoveAction = z.infer<typeof ClusterRerouteCommandMoveAction>;
export declare const ClusterRerouteCommandAllocateReplicaAction: z.ZodObject<{
    index: z.ZodString;
    shard: z.ZodNumber;
    node: z.ZodString;
}, z.core.$strip>;
export type ClusterRerouteCommandAllocateReplicaAction = z.infer<typeof ClusterRerouteCommandAllocateReplicaAction>;
export declare const ClusterRerouteCommandAllocatePrimaryAction: z.ZodObject<{
    index: z.ZodString;
    shard: z.ZodNumber;
    node: z.ZodString;
    accept_data_loss: z.ZodBoolean;
}, z.core.$strip>;
export type ClusterRerouteCommandAllocatePrimaryAction = z.infer<typeof ClusterRerouteCommandAllocatePrimaryAction>;
export declare const ClusterRerouteCommand: z.ZodObject<{
    cancel: z.ZodOptional<z.ZodObject<{
        index: z.ZodString;
        shard: z.ZodNumber;
        node: z.ZodString;
        allow_primary: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    move: z.ZodOptional<z.ZodObject<{
        index: z.ZodString;
        shard: z.ZodNumber;
        from_node: z.ZodString;
        to_node: z.ZodString;
    }, z.core.$strip>>;
    allocate_replica: z.ZodOptional<z.ZodObject<{
        index: z.ZodString;
        shard: z.ZodNumber;
        node: z.ZodString;
    }, z.core.$strip>>;
    allocate_stale_primary: z.ZodOptional<z.ZodObject<{
        index: z.ZodString;
        shard: z.ZodNumber;
        node: z.ZodString;
        accept_data_loss: z.ZodBoolean;
    }, z.core.$strip>>;
    allocate_empty_primary: z.ZodOptional<z.ZodObject<{
        index: z.ZodString;
        shard: z.ZodNumber;
        node: z.ZodString;
        accept_data_loss: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterRerouteCommand = z.infer<typeof ClusterRerouteCommand>;
/**
 * Reroute the cluster.
 *
 * Manually change the allocation of individual shards in the cluster.
 * For example, a shard can be moved from one node to another explicitly, an allocation can be canceled, and an unassigned shard can be explicitly allocated to a specific node.
 *
 * It is important to note that after processing any reroute commands Elasticsearch will perform rebalancing as normal (respecting the values of settings such as `cluster.routing.rebalance.enable`) in order to remain in a balanced state.
 * For example, if the requested allocation includes moving a shard from node1 to node2 then this may cause a shard to be moved from node2 back to node1 to even things out.
 *
 * The cluster can be set to disable allocations using the `cluster.routing.allocation.enable` setting.
 * If allocations are disabled then the only allocations that will be performed are explicit ones given using the reroute command, and consequent allocations due to rebalancing.
 *
 * The cluster will attempt to allocate a shard a maximum of `index.allocation.max_retries` times in a row (defaults to `5`), before giving up and leaving the shard unallocated.
 * This scenario can be caused by structural problems such as having an analyzer which refers to a stopwords file which doesn’t exist on all nodes.
 *
 * Once the problem has been corrected, allocation can be manually retried by calling the reroute API with the `?retry_failed` URI query parameter, which will attempt a single retry round for these shards.
 */
export declare const ClusterRerouteRequest: z.ZodObject<{
    dry_run: z.ZodOptional<z.ZodBoolean>;
    explain: z.ZodOptional<z.ZodBoolean>;
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    retry_failed: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    commands: z.ZodOptional<z.ZodArray<z.ZodObject<{
        cancel: z.ZodOptional<z.ZodObject<{
            index: z.ZodString;
            shard: z.ZodNumber;
            node: z.ZodString;
            allow_primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        move: z.ZodOptional<z.ZodObject<{
            index: z.ZodString;
            shard: z.ZodNumber;
            from_node: z.ZodString;
            to_node: z.ZodString;
        }, z.core.$strip>>;
        allocate_replica: z.ZodOptional<z.ZodObject<{
            index: z.ZodString;
            shard: z.ZodNumber;
            node: z.ZodString;
        }, z.core.$strip>>;
        allocate_stale_primary: z.ZodOptional<z.ZodObject<{
            index: z.ZodString;
            shard: z.ZodNumber;
            node: z.ZodString;
            accept_data_loss: z.ZodBoolean;
        }, z.core.$strip>>;
        allocate_empty_primary: z.ZodOptional<z.ZodObject<{
            index: z.ZodString;
            shard: z.ZodNumber;
            node: z.ZodString;
            accept_data_loss: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ClusterRerouteRequest = z.infer<typeof ClusterRerouteRequest>;
export declare const ClusterRerouteRerouteDecision: z.ZodObject<{
    decider: z.ZodString;
    decision: z.ZodString;
    explanation: z.ZodString;
}, z.core.$strip>;
export type ClusterRerouteRerouteDecision = z.infer<typeof ClusterRerouteRerouteDecision>;
export declare const ClusterRerouteRerouteParameters: z.ZodObject<{
    allow_primary: z.ZodBoolean;
    index: z.ZodString;
    node: z.ZodString;
    shard: z.ZodNumber;
    from_node: z.ZodOptional<z.ZodString>;
    to_node: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterRerouteRerouteParameters = z.infer<typeof ClusterRerouteRerouteParameters>;
export declare const ClusterRerouteRerouteExplanation: z.ZodObject<{
    command: z.ZodString;
    decisions: z.ZodArray<z.ZodObject<{
        decider: z.ZodString;
        decision: z.ZodString;
        explanation: z.ZodString;
    }, z.core.$strip>>;
    parameters: z.ZodObject<{
        allow_primary: z.ZodBoolean;
        index: z.ZodString;
        node: z.ZodString;
        shard: z.ZodNumber;
        from_node: z.ZodOptional<z.ZodString>;
        to_node: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterRerouteRerouteExplanation = z.infer<typeof ClusterRerouteRerouteExplanation>;
export declare const ClusterRerouteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    explanations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        command: z.ZodString;
        decisions: z.ZodArray<z.ZodObject<{
            decider: z.ZodString;
            decision: z.ZodString;
            explanation: z.ZodString;
        }, z.core.$strip>>;
        parameters: z.ZodObject<{
            allow_primary: z.ZodBoolean;
            index: z.ZodString;
            node: z.ZodString;
            shard: z.ZodNumber;
            from_node: z.ZodOptional<z.ZodString>;
            to_node: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    state: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type ClusterRerouteResponse = z.infer<typeof ClusterRerouteResponse>;
//# sourceMappingURL=cluster_reroute.d.ts.map