import { z } from 'zod';
export declare const PostFleetSetupResponse: z.ZodObject<{
    isInitialized: z.ZodBoolean;
    nonFatalErrors: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PostFleetSetupResponse = z.infer<typeof PostFleetSetupResponse>;
//# sourceMappingURL=post_fleet_setup.d.ts.map