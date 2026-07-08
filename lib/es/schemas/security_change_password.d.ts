import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
 * Change passwords.
 *
 * Change the passwords of users in the native realm and built-in users.
 */
export declare const SecurityChangePasswordRequest: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
    password: z.ZodOptional<z.ZodString>;
    password_hash: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityChangePasswordRequest = z.infer<typeof SecurityChangePasswordRequest>;
export declare const SecurityChangePasswordResponse: z.ZodObject<{}, z.core.$strip>;
export type SecurityChangePasswordResponse = z.infer<typeof SecurityChangePasswordResponse>;
//# sourceMappingURL=security_change_password.d.ts.map