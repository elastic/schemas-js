import { z } from 'zod';
export declare const PostFleetAgentsBulkUnenrollRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    force: z.ZodOptional<z.ZodBoolean>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
    revoke: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PostFleetAgentsBulkUnenrollRequest = z.infer<typeof PostFleetAgentsBulkUnenrollRequest>;
export declare const PostFleetAgentsBulkUnenrollResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkUnenrollResponse = z.infer<typeof PostFleetAgentsBulkUnenrollResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_unenroll.d.ts.map