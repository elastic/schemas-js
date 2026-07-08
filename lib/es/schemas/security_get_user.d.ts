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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
export declare const SecurityUser: z.ZodObject<{
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
    enabled: z.ZodBoolean;
    profile_uid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityUser = z.infer<typeof SecurityUser>;
/**
 * Get users.
 *
 * Get information about users in the native realm and built-in users.
 */
export declare const SecurityGetUserRequest: z.ZodObject<{
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    with_profile_uid: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SecurityGetUserRequest = z.infer<typeof SecurityGetUserRequest>;
export declare const SecurityGetUserResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
    enabled: z.ZodBoolean;
    profile_uid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type SecurityGetUserResponse = z.infer<typeof SecurityGetUserResponse>;
//# sourceMappingURL=security_get_user.d.ts.map