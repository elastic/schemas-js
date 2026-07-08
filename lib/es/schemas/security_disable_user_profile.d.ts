import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
/**
 * Disable a user profile.
 *
 * Disable user profiles so that they are not visible in user profile searches.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * When you activate a user profile, its automatically enabled and visible in user profile searches. You can use the disable user profile API to disable a user profile so it’s not visible in these searches.
 * To re-enable a disabled user profile, use the enable user profile API .
 */
export declare const SecurityDisableUserProfileRequest: z.ZodObject<{
    uid: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDisableUserProfileRequest = z.infer<typeof SecurityDisableUserProfileRequest>;
export declare const SecurityDisableUserProfileResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityDisableUserProfileResponse = z.infer<typeof SecurityDisableUserProfileResponse>;
//# sourceMappingURL=security_disable_user_profile.d.ts.map