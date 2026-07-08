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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const SecurityGrantType: z.ZodEnum<{
    password: "password";
    access_token: "access_token";
}>;
export type SecurityGrantType = z.infer<typeof SecurityGrantType>;
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
export declare const SecurityUserProfileHitMetadata: z.ZodObject<{
    _primary_term: z.ZodNumber;
    _seq_no: z.ZodNumber;
}, z.core.$strip>;
export type SecurityUserProfileHitMetadata = z.infer<typeof SecurityUserProfileHitMetadata>;
export declare const SecurityUserProfileWithMetadata: z.ZodObject<{
    last_synchronized: z.ZodNumber;
    _doc: z.ZodObject<{
        _primary_term: z.ZodNumber;
        _seq_no: z.ZodNumber;
    }, z.core.$strip>;
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
export type SecurityUserProfileWithMetadata = z.infer<typeof SecurityUserProfileWithMetadata>;
/**
 * Activate a user profile.
 *
 * Create or update a user profile on behalf of another user.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * The calling application must have either an `access_token` or a combination of `username` and `password` for the user that the profile document is intended for.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * This API creates or updates a profile document for end users with information that is extracted from the user's authentication object including `username`, `full_name,` `roles`, and the authentication realm.
 * For example, in the JWT `access_token` case, the profile user's `username` is extracted from the JWT token claim pointed to by the `claims.principal` setting of the JWT realm that authenticated the token.
 *
 * When updating a profile document, the API enables the document if it was disabled.
 * Any updates do not change existing content for either the `labels` or `data` fields.
 */
export declare const SecurityActivateUserProfileRequest: z.ZodObject<{
    access_token: z.ZodOptional<z.ZodString>;
    grant_type: z.ZodEnum<{
        password: "password";
        access_token: "access_token";
    }>;
    password: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityActivateUserProfileRequest = z.infer<typeof SecurityActivateUserProfileRequest>;
export declare const SecurityActivateUserProfileResponse: z.ZodObject<{
    last_synchronized: z.ZodNumber;
    _doc: z.ZodObject<{
        _primary_term: z.ZodNumber;
        _seq_no: z.ZodNumber;
    }, z.core.$strip>;
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
export type SecurityActivateUserProfileResponse = z.infer<typeof SecurityActivateUserProfileResponse>;
//# sourceMappingURL=security_activate_user_profile.d.ts.map