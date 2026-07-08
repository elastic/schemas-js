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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Clear cluster voting config exclusions.
 *
 * Remove master-eligible nodes from the voting configuration exclusion list.
 */
export declare const ClusterDeleteVotingConfigExclusionsRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_removal: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ClusterDeleteVotingConfigExclusionsRequest = z.infer<typeof ClusterDeleteVotingConfigExclusionsRequest>;
export declare const ClusterDeleteVotingConfigExclusionsResponse: z.ZodBoolean;
export type ClusterDeleteVotingConfigExclusionsResponse = z.infer<typeof ClusterDeleteVotingConfigExclusionsResponse>;
//# sourceMappingURL=cluster_delete_voting_config_exclusions.d.ts.map