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
 * Disable users.
 *
 * Disable users in the native realm.
 * By default, when you create users, they are enabled.
 * You can use this API to revoke a user's access to Elasticsearch.
 */
export declare const SecurityDisableUserRequest: z.ZodObject<{
    username: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDisableUserRequest = z.infer<typeof SecurityDisableUserRequest>;
export declare const SecurityDisableUserResponse: z.ZodObject<{}, z.core.$strip>;
export type SecurityDisableUserResponse = z.infer<typeof SecurityDisableUserResponse>;
//# sourceMappingURL=security_disable_user.d.ts.map