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
export declare const RelationName: z.ZodString;
export type RelationName = z.infer<typeof RelationName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
export declare const SecurityUserProfileUser: z.ZodObject<{
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    realm_name: z.ZodString;
    realm_domain: z.ZodOptional<z.ZodString>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
}, z.core.$strip>;
export type SecurityUserProfileUser = z.infer<typeof SecurityUserProfileUser>;
export declare const SecurityUserProfile: z.ZodObject<{
    uid: z.ZodString;
    user: z.ZodObject<{
        email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        realm_name: z.ZodString;
        realm_domain: z.ZodOptional<z.ZodString>;
        roles: z.ZodArray<z.ZodString>;
        username: z.ZodString;
    }, z.core.$strip>;
    data: z.ZodRecord<z.ZodString, z.ZodAny>;
    labels: z.ZodRecord<z.ZodString, z.ZodAny>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SecurityUserProfile = z.infer<typeof SecurityUserProfile>;
export declare const SecuritySuggestUserProfilesHint: z.ZodObject<{
    uids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>>;
}, z.core.$strip>;
export type SecuritySuggestUserProfilesHint = z.infer<typeof SecuritySuggestUserProfilesHint>;
/**
 * Suggest a user profile.
 *
 * Get suggestions for user profiles that match specified search criteria.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 */
export declare const SecuritySuggestUserProfilesRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    hint: z.ZodOptional<z.ZodObject<{
        uids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecuritySuggestUserProfilesRequest = z.infer<typeof SecuritySuggestUserProfilesRequest>;
export declare const SecuritySuggestUserProfilesTotalUserProfiles: z.ZodObject<{
    value: z.ZodNumber;
    relation: z.ZodString;
}, z.core.$strip>;
export type SecuritySuggestUserProfilesTotalUserProfiles = z.infer<typeof SecuritySuggestUserProfilesTotalUserProfiles>;
export declare const SecuritySuggestUserProfilesResponse: z.ZodObject<{
    total: z.ZodObject<{
        value: z.ZodNumber;
        relation: z.ZodString;
    }, z.core.$strip>;
    took: z.ZodNumber;
    profiles: z.ZodArray<z.ZodObject<{
        uid: z.ZodString;
        user: z.ZodObject<{
            email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            realm_name: z.ZodString;
            realm_domain: z.ZodOptional<z.ZodString>;
            roles: z.ZodArray<z.ZodString>;
            username: z.ZodString;
        }, z.core.$strip>;
        data: z.ZodRecord<z.ZodString, z.ZodAny>;
        labels: z.ZodRecord<z.ZodString, z.ZodAny>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecuritySuggestUserProfilesResponse = z.infer<typeof SecuritySuggestUserProfilesResponse>;
//# sourceMappingURL=security_suggest_user_profiles.d.ts.map