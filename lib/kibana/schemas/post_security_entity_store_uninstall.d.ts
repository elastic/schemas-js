import { z } from 'zod';
export declare const PostSecurityEntityStoreUninstallRequest: z.ZodObject<{
    entityTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>>>;
}, z.core.$strip>;
export type PostSecurityEntityStoreUninstallRequest = z.infer<typeof PostSecurityEntityStoreUninstallRequest>;
//# sourceMappingURL=post_security_entity_store_uninstall.d.ts.map