import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
 * Enable users.
 *
 * Enable users in the native realm.
 * By default, when you create users, they are enabled.
 */
export declare const SecurityEnableUserRequest: z.ZodObject<{
    username: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityEnableUserRequest = z.infer<typeof SecurityEnableUserRequest>;
export declare const SecurityEnableUserResponse: z.ZodObject<{}, z.core.$strip>;
export type SecurityEnableUserResponse = z.infer<typeof SecurityEnableUserResponse>;
//# sourceMappingURL=security_enable_user.d.ts.map