import { z } from 'zod';
export declare const PostFleetAgentsBulkUpdateAgentTagsRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    includeInactive: z.ZodOptional<z.ZodBoolean>;
    tagsToAdd: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tagsToRemove: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PostFleetAgentsBulkUpdateAgentTagsRequest = z.infer<typeof PostFleetAgentsBulkUpdateAgentTagsRequest>;
export declare const PostFleetAgentsBulkUpdateAgentTagsResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkUpdateAgentTagsResponse = z.infer<typeof PostFleetAgentsBulkUpdateAgentTagsResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_update_agent_tags.d.ts.map