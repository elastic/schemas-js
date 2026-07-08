import { z } from 'zod';
export declare const PutSecurityEntityStoreStartRequest: z.ZodObject<{
    entityTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
}, z.core.$strip>;
export type PutSecurityEntityStoreStartRequest = z.infer<typeof PutSecurityEntityStoreStartRequest>;
//# sourceMappingURL=put_security_entity_store_start.d.ts.map