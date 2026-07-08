import { z } from 'zod';
export declare const KeystoreSecret: z.ZodObject<{
    value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    as_file: z.ZodOptional<z.ZodBoolean>;
    is_allowlisted: z.ZodOptional<z.ZodBoolean>;
    is_reloadable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type KeystoreSecret = z.infer<typeof KeystoreSecret>;
export declare const KeystoreContents: z.ZodObject<{
    secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
        value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        as_file: z.ZodOptional<z.ZodBoolean>;
        is_allowlisted: z.ZodOptional<z.ZodBoolean>;
        is_reloadable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KeystoreContents = z.infer<typeof KeystoreContents>;
//# sourceMappingURL=get_deployment_es_resource_keystore.d.ts.map