import { z } from 'zod';
export declare const PostFleetAgentsBulkUpgradeRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    force: z.ZodOptional<z.ZodBoolean>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
    rollout_duration_seconds: z.ZodOptional<z.ZodNumber>;
    skipRateLimitCheck: z.ZodOptional<z.ZodBoolean>;
    source_uri: z.ZodOptional<z.ZodString>;
    start_time: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkUpgradeRequest = z.infer<typeof PostFleetAgentsBulkUpgradeRequest>;
export declare const PostFleetAgentsBulkUpgradeResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkUpgradeResponse = z.infer<typeof PostFleetAgentsBulkUpgradeResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_upgrade.d.ts.map