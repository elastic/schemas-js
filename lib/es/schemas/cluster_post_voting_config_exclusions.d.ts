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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Update voting configuration exclusions.
 *
 * Update the cluster voting config exclusions by node IDs or node names.
 * By default, if there are more than three master-eligible nodes in the cluster and you remove fewer than half of the master-eligible nodes in the cluster at once, the voting configuration automatically shrinks.
 * If you want to shrink the voting configuration to contain fewer than three nodes or to remove half or more of the master-eligible nodes in the cluster at once, use this API to remove departing nodes from the voting configuration manually.
 * The API adds an entry for each specified node to the cluster’s voting configuration exclusions list.
 * It then waits until the cluster has reconfigured its voting configuration to exclude the specified nodes.
 *
 * Clusters should have no voting configuration exclusions in normal operation.
 * Once the excluded nodes have stopped, clear the voting configuration exclusions with `DELETE /_cluster/voting_config_exclusions`.
 * This API waits for the nodes to be fully removed from the cluster before it returns.
 * If your cluster has voting configuration exclusions for nodes that you no longer intend to remove, use `DELETE /_cluster/voting_config_exclusions?wait_for_removal=false` to clear the voting configuration exclusions without waiting for the nodes to leave the cluster.
 *
 * A response to `POST /_cluster/voting_config_exclusions` with an HTTP status code of 200 OK guarantees that the node has been removed from the voting configuration and will not be reinstated until the voting configuration exclusions are cleared by calling `DELETE /_cluster/voting_config_exclusions`.
 * If the call to `POST /_cluster/voting_config_exclusions` fails or returns a response with an HTTP status code other than 200 OK then the node may not have been removed from the voting configuration.
 * In that case, you may safely retry the call.
 *
 * NOTE: Voting exclusions are required only when you remove at least half of the master-eligible nodes from a cluster in a short time period.
 * They are not required when removing master-ineligible nodes or when removing fewer than half of the master-eligible nodes.
 */
export declare const ClusterPostVotingConfigExclusionsRequest: z.ZodObject<{
    node_names: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    node_ids: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ClusterPostVotingConfigExclusionsRequest = z.infer<typeof ClusterPostVotingConfigExclusionsRequest>;
export declare const ClusterPostVotingConfigExclusionsResponse: z.ZodBoolean;
export type ClusterPostVotingConfigExclusionsResponse = z.infer<typeof ClusterPostVotingConfigExclusionsResponse>;
//# sourceMappingURL=cluster_post_voting_config_exclusions.d.ts.map