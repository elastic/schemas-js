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
export declare const Password: z.ZodString;
export type Password = z.infer<typeof Password>;
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
/**
 * Create or update users.
 *
 * Add and update users in the native realm.
 * A password is required for adding a new user but is optional when updating an existing user.
 * To change a user's password without updating any other fields, use the change password API.
 */
export declare const SecurityPutUserRequest: z.ZodObject<{
    username: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    password: z.ZodOptional<z.ZodString>;
    password_hash: z.ZodOptional<z.ZodString>;
    roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SecurityPutUserRequest = z.infer<typeof SecurityPutUserRequest>;
export declare const SecurityPutUserResponse: z.ZodObject<{
    created: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityPutUserResponse = z.infer<typeof SecurityPutUserResponse>;
//# sourceMappingURL=security_put_user.d.ts.map