import { z } from 'zod';
export declare const PostFleetAgentsSetupResponse: z.ZodObject<{
    isInitialized: z.ZodBoolean;
    nonFatalErrors: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PostFleetAgentsSetupResponse = z.infer<typeof PostFleetAgentsSetupResponse>;
//# sourceMappingURL=post_fleet_agents_setup.d.ts.map