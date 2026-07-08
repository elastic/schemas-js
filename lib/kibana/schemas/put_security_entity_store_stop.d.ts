import { z } from 'zod';
export declare const PutSecurityEntityStoreStopRequest: z.ZodObject<{
    entityTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
}, z.core.$strip>;
export type PutSecurityEntityStoreStopRequest = z.infer<typeof PutSecurityEntityStoreStopRequest>;
//# sourceMappingURL=put_security_entity_store_stop.d.ts.map