import { z } from 'zod';
export declare const PostFleetAgentsBulkRemoveCollectorsRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PostFleetAgentsBulkRemoveCollectorsRequest = z.infer<typeof PostFleetAgentsBulkRemoveCollectorsRequest>;
export declare const PostFleetAgentsBulkRemoveCollectorsResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkRemoveCollectorsResponse = z.infer<typeof PostFleetAgentsBulkRemoveCollectorsResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_remove_collectors.d.ts.map