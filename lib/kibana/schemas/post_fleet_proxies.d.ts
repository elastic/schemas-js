import { z } from 'zod';
export declare const PostFleetProxiesRequest: z.ZodObject<{
    certificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    certificate_authorities: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    certificate_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodOptional<z.ZodString>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
    url: z.ZodString;
}, z.core.$strip>;
export type PostFleetProxiesRequest = z.infer<typeof PostFleetProxiesRequest>;
export declare const PostFleetProxiesResponse: z.ZodObject<{
    item: z.ZodObject<{
        certificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        certificate_authorities: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        certificate_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodString;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
        url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PostFleetProxiesResponse = z.infer<typeof PostFleetProxiesResponse>;
//# sourceMappingURL=post_fleet_proxies.d.ts.map