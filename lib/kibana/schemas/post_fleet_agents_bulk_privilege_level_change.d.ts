import { z } from 'zod';
export declare const PostFleetAgentsBulkPrivilegeLevelChangeRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    user_info: z.ZodOptional<z.ZodObject<{
        groupname: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PostFleetAgentsBulkPrivilegeLevelChangeRequest = z.infer<typeof PostFleetAgentsBulkPrivilegeLevelChangeRequest>;
export declare const PostFleetAgentsBulkPrivilegeLevelChangeResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkPrivilegeLevelChangeResponse = z.infer<typeof PostFleetAgentsBulkPrivilegeLevelChangeResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_privilege_level_change.d.ts.map