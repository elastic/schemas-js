import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SecurityDeletePrivilegesFoundStatus: z.ZodObject<{
    found: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityDeletePrivilegesFoundStatus = z.infer<typeof SecurityDeletePrivilegesFoundStatus>;
/**
 * Delete application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 */
export declare const SecurityDeletePrivilegesRequest: z.ZodObject<{
    application: z.ZodString;
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDeletePrivilegesRequest = z.infer<typeof SecurityDeletePrivilegesRequest>;
export declare const SecurityDeletePrivilegesResponse: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodObject<{
    found: z.ZodBoolean;
}, z.core.$strip>>>;
export type SecurityDeletePrivilegesResponse = z.infer<typeof SecurityDeletePrivilegesResponse>;
//# sourceMappingURL=security_delete_privileges.d.ts.map