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
 * Delete role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files.
 * The delete role mappings API cannot remove role mappings that are defined in role mapping files.
 */
export declare const SecurityDeleteRoleMappingRequest: z.ZodObject<{
    name: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDeleteRoleMappingRequest = z.infer<typeof SecurityDeleteRoleMappingRequest>;
export declare const SecurityDeleteRoleMappingResponse: z.ZodObject<{
    found: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityDeleteRoleMappingResponse = z.infer<typeof SecurityDeleteRoleMappingResponse>;
//# sourceMappingURL=security_delete_role_mapping.d.ts.map