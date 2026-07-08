import { z } from 'zod';
export declare const GetFleetProxiesResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        certificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        certificate_authorities: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        certificate_key: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodString;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        proxy_headers: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodBoolean, z.ZodNumber]>>>>;
        url: z.ZodString;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetProxiesResponse = z.infer<typeof GetFleetProxiesResponse>;
//# sourceMappingURL=get_fleet_proxies.d.ts.map