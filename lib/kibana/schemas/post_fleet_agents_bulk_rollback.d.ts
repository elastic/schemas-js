import { z } from 'zod';
export declare const PostFleetAgentsBulkRollbackRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PostFleetAgentsBulkRollbackRequest = z.infer<typeof PostFleetAgentsBulkRollbackRequest>;
export declare const PostFleetAgentsBulkRollbackResponse: z.ZodObject<{
    actionIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PostFleetAgentsBulkRollbackResponse = z.infer<typeof PostFleetAgentsBulkRollbackResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_rollback.d.ts.map