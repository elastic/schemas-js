import { z } from 'zod';
export declare const GetFleetProxiesItemidResponse: z.ZodObject<{
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
export type GetFleetProxiesItemidResponse = z.infer<typeof GetFleetProxiesItemidResponse>;
//# sourceMappingURL=get_fleet_proxies_itemid.d.ts.map