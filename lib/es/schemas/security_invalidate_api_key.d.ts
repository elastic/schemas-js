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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Invalidate API keys.
 *
 * This API invalidates API keys created by the create API key or grant API key APIs.
 * Invalidated API keys fail authentication, but they can still be viewed using the get API key information and query API key information APIs, for at least the configured retention period, until they are automatically deleted.
 *
 * To use this API, you must have at least the `manage_security`, `manage_api_key`, or `manage_own_api_key` cluster privileges.
 * The `manage_security` privilege allows deleting any API key, including both REST and cross cluster API keys.
 * The `manage_api_key` privilege allows deleting any REST API key, but not cross cluster API keys.
 * The `manage_own_api_key` only allows deleting REST API keys that are owned by the user.
 * In addition, with the `manage_own_api_key` privilege, an invalidation request must be issued in one of the three formats:
 *
 * - Set the parameter `owner=true`.
 * - Or, set both `username` and `realm_name` to match the user's identity.
 * - Or, if the request is issued by an API key, that is to say an API key invalidates itself, specify its ID in the `ids` field.
 */
export declare const SecurityInvalidateApiKeyRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    name: z.ZodOptional<z.ZodString>;
    owner: z.ZodOptional<z.ZodBoolean>;
    realm_name: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityInvalidateApiKeyRequest = z.infer<typeof SecurityInvalidateApiKeyRequest>;
export declare const SecurityInvalidateApiKeyResponse: z.ZodObject<{
    error_count: z.ZodNumber;
    error_details: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    invalidated_api_keys: z.ZodArray<z.ZodString>;
    previously_invalidated_api_keys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SecurityInvalidateApiKeyResponse = z.infer<typeof SecurityInvalidateApiKeyResponse>;
//# sourceMappingURL=security_invalidate_api_key.d.ts.map