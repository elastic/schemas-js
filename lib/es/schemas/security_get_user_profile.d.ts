import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
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
export declare const SecurityGetUserProfileGetUserProfileErrors: z.ZodObject<{
    count: z.ZodNumber;
    details: z.ZodRecord<z.ZodString, z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type SecurityGetUserProfileGetUserProfileErrors = z.infer<typeof SecurityGetUserProfileGetUserProfileErrors>;
/**
 * Get a user profile.
 *
 * Get a user's profile using the unique profile ID.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 */
export declare const SecurityGetUserProfileRequest: z.ZodObject<{
    uid: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SecurityGetUserProfileRequest = z.infer<typeof SecurityGetUserProfileRequest>;
export declare const SecurityGetUserProfileResponse: z.ZodObject<{
    profiles: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    errors: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        details: z.ZodRecord<z.ZodString, z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityGetUserProfileResponse = z.infer<typeof SecurityGetUserProfileResponse>;
//# sourceMappingURL=security_get_user_profile.d.ts.map