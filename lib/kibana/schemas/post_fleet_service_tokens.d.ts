import { z } from 'zod';
export declare const PostFleetServiceTokensRequest: z.ZodNullable<z.ZodObject<{
    remote: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>>;
export type PostFleetServiceTokensRequest = z.infer<typeof PostFleetServiceTokensRequest>;
export declare const PostFleetServiceTokensResponse: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type PostFleetServiceTokensResponse = z.infer<typeof PostFleetServiceTokensResponse>;
//# sourceMappingURL=post_fleet_service_tokens.d.ts.map