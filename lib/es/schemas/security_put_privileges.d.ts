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
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SecurityCreatedStatus: z.ZodObject<{
    created: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityCreatedStatus = z.infer<typeof SecurityCreatedStatus>;
export declare const SecurityPutPrivilegesActions: z.ZodObject<{
    actions: z.ZodArray<z.ZodString>;
    application: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SecurityPutPrivilegesActions = z.infer<typeof SecurityPutPrivilegesActions>;
/**
 * Create or update application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 *
 * Application names are formed from a prefix, with an optional suffix that conform to the following rules:
 *
 * * The prefix must begin with a lowercase ASCII letter.
 * * The prefix must contain only ASCII letters or digits.
 * * The prefix must be at least 3 characters long.
 * * If the suffix exists, it must begin with either a dash `-` or `_`.
 * * The suffix cannot contain any of the following characters: `\`, `/`, `*`, `?`, `"`, `<`, `>`, `|`, `,`, `*`.
 * * No part of the name can contain whitespace.
 *
 * Privilege names must begin with a lowercase ASCII letter and must contain only ASCII letters and digits along with the characters `_`, `-`, and `.`.
 *
 * Action names can contain any number of printable ASCII characters and must contain at least one of the following characters: `/`, `*`, `:`.
 */
export declare const SecurityPutPrivilegesRequest: z.ZodObject<{
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
    privileges: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        application: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SecurityPutPrivilegesRequest = z.infer<typeof SecurityPutPrivilegesRequest>;
export declare const SecurityPutPrivilegesResponse: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodObject<{
    created: z.ZodBoolean;
}, z.core.$strip>>>;
export type SecurityPutPrivilegesResponse = z.infer<typeof SecurityPutPrivilegesResponse>;
//# sourceMappingURL=security_put_privileges.d.ts.map