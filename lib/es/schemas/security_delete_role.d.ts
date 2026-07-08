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
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete roles.
 *
 * Delete roles in the native realm.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The delete roles API cannot remove roles that are defined in roles files.
 */
export declare const SecurityDeleteRoleRequest: z.ZodObject<{
    name: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDeleteRoleRequest = z.infer<typeof SecurityDeleteRoleRequest>;
export declare const SecurityDeleteRoleResponse: z.ZodObject<{
    found: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityDeleteRoleResponse = z.infer<typeof SecurityDeleteRoleResponse>;
//# sourceMappingURL=security_delete_role.d.ts.map