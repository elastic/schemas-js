import { z } from 'zod';
export declare const PostFleetHealthCheckRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type PostFleetHealthCheckRequest = z.infer<typeof PostFleetHealthCheckRequest>;
export declare const PostFleetHealthCheckResponse: z.ZodObject<{
    host_id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    status: z.ZodString;
}, z.core.$strip>;
export type PostFleetHealthCheckResponse = z.infer<typeof PostFleetHealthCheckResponse>;
//# sourceMappingURL=post_fleet_health_check.d.ts.map