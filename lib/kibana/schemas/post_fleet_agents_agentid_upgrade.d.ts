import { z } from 'zod';
export declare const PostFleetAgentsAgentidUpgradeRequest: z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
    skipRateLimitCheck: z.ZodOptional<z.ZodBoolean>;
    source_uri: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsAgentidUpgradeRequest = z.infer<typeof PostFleetAgentsAgentidUpgradeRequest>;
export declare const PostFleetAgentsAgentidUpgradeResponse: z.ZodObject<{}, z.core.$strip>;
export type PostFleetAgentsAgentidUpgradeResponse = z.infer<typeof PostFleetAgentsAgentidUpgradeResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_upgrade.d.ts.map