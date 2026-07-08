import { z } from 'zod';
export declare const PostFleetAgentsBulkReassignRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
    policy_id: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkReassignRequest = z.infer<typeof PostFleetAgentsBulkReassignRequest>;
export declare const PostFleetAgentsBulkReassignResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkReassignResponse = z.infer<typeof PostFleetAgentsBulkReassignResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_reassign.d.ts.map