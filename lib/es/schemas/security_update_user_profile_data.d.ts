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
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
/**
 * Update user profile data.
 *
 * Update specific data for the user profile that is associated with a unique ID.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_user_profile` cluster privilege.
 * * The `update_profile_data` global privilege for the namespaces that are referenced in the request.
 *
 * This API updates the `labels` and `data` fields of an existing user profile document with JSON objects.
 * New keys and their values are added to the profile document and conflicting keys are replaced by data that's included in the request.
 *
 * For both labels and data, content is namespaced by the top-level fields.
 * The `update_profile_data` global privilege grants privileges for updating only the allowed namespaces.
 */
export declare const SecurityUpdateUserProfileDataRequest: z.ZodObject<{
    uid: z.ZodString;
    if_seq_no: z.ZodOptional<z.ZodNumber>;
    if_primary_term: z.ZodOptional<z.ZodNumber>;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
    labels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SecurityUpdateUserProfileDataRequest = z.infer<typeof SecurityUpdateUserProfileDataRequest>;
export declare const SecurityUpdateUserProfileDataResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityUpdateUserProfileDataResponse = z.infer<typeof SecurityUpdateUserProfileDataResponse>;
//# sourceMappingURL=security_update_user_profile_data.d.ts.map