import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `read_security` cluster privilege (or a greater privilege such as `manage_security` or `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 */
export declare const SecurityGetPrivilegesRequest: z.ZodObject<{
    application: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SecurityGetPrivilegesRequest = z.infer<typeof SecurityGetPrivilegesRequest>;
export declare const SecurityPutPrivilegesActions: z.ZodObject<{
    actions: z.ZodArray<z.ZodString>;
    application: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SecurityPutPrivilegesActions = z.infer<typeof SecurityPutPrivilegesActions>;
export declare const SecurityGetPrivilegesResponse: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodObject<{
    actions: z.ZodArray<z.ZodString>;
    application: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>>>;
export type SecurityGetPrivilegesResponse = z.infer<typeof SecurityGetPrivilegesResponse>;
//# sourceMappingURL=security_get_privileges.d.ts.map