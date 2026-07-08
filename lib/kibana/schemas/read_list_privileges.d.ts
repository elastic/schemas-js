import { z } from 'zod';
export declare const Security_Lists_API_ListPrivileges: z.ZodObject<{
    application: z.ZodRecord<z.ZodString, z.ZodBoolean>;
    cluster: z.ZodRecord<z.ZodString, z.ZodBoolean>;
    has_all_requested: z.ZodBoolean;
    index: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    username: z.ZodString;
}, z.core.$strip>;
export type Security_Lists_API_ListPrivileges = z.infer<typeof Security_Lists_API_ListPrivileges>;
export declare const Security_Lists_API_ListItemPrivileges: z.ZodObject<{
    application: z.ZodRecord<z.ZodString, z.ZodBoolean>;
    cluster: z.ZodRecord<z.ZodString, z.ZodBoolean>;
    has_all_requested: z.ZodBoolean;
    index: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    username: z.ZodString;
}, z.core.$strip>;
export type Security_Lists_API_ListItemPrivileges = z.infer<typeof Security_Lists_API_ListItemPrivileges>;
export declare const ReadListPrivilegesResponse: z.ZodObject<{
    is_authenticated: z.ZodBoolean;
    listItems: z.ZodObject<{
        application: z.ZodRecord<z.ZodString, z.ZodBoolean>;
        cluster: z.ZodRecord<z.ZodString, z.ZodBoolean>;
        has_all_requested: z.ZodBoolean;
        index: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        username: z.ZodString;
    }, z.core.$strip>;
    lists: z.ZodObject<{
        application: z.ZodRecord<z.ZodString, z.ZodBoolean>;
        cluster: z.ZodRecord<z.ZodString, z.ZodBoolean>;
        has_all_requested: z.ZodBoolean;
        index: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        username: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ReadListPrivilegesResponse = z.infer<typeof ReadListPrivilegesResponse>;
//# sourceMappingURL=read_list_privileges.d.ts.map