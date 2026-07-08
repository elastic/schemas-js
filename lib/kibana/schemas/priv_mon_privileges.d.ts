import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EntityAnalyticsPrivileges: z.ZodObject<{
    has_all_required: z.ZodBoolean;
    has_read_permissions: z.ZodOptional<z.ZodBoolean>;
    has_write_permissions: z.ZodOptional<z.ZodBoolean>;
    privileges: z.ZodObject<{
        elasticsearch: z.ZodObject<{
            cluster: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            index: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodBoolean>>>;
        }, z.core.$strip>;
        kibana: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_EntityAnalyticsPrivileges = z.infer<typeof Security_Entity_Analytics_API_EntityAnalyticsPrivileges>;
//# sourceMappingURL=priv_mon_privileges.d.ts.map