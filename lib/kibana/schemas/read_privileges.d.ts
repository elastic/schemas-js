import { z } from 'zod';
export declare const ReadPrivilegesResponse: z.ZodObject<{
    has_encryption_key: z.ZodBoolean;
    is_authenticated: z.ZodBoolean;
}, z.core.$strip>;
export type ReadPrivilegesResponse = z.infer<typeof ReadPrivilegesResponse>;
//# sourceMappingURL=read_privileges.d.ts.map