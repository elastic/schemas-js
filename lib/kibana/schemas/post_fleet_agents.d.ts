import { z } from 'zod';
export declare const PostFleetAgentsRequest: z.ZodObject<{
    actionIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PostFleetAgentsRequest = z.infer<typeof PostFleetAgentsRequest>;
export declare const PostFleetAgentsResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PostFleetAgentsResponse = z.infer<typeof PostFleetAgentsResponse>;
//# sourceMappingURL=post_fleet_agents.d.ts.map