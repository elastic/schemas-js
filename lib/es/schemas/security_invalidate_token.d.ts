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
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Invalidate a token.
 *
 * The access tokens returned by the get token API have a finite period of time for which they are valid.
 * After that time period, they can no longer be used.
 * The time period is defined by the `xpack.security.authc.token.timeout` setting.
 *
 * The refresh tokens returned by the get token API are only valid for 24 hours.
 * They can also be used exactly once.
 * If you want to invalidate one or more access or refresh tokens immediately, use this invalidate token API.
 *
 * NOTE: While all parameters are optional, at least one of them is required.
 * More specifically, either one of `token` or `refresh_token` parameters is required.
 * If none of these two are specified, then `realm_name` and/or `username` need to be specified.
 */
export declare const SecurityInvalidateTokenRequest: z.ZodObject<{
    token: z.ZodOptional<z.ZodString>;
    refresh_token: z.ZodOptional<z.ZodString>;
    realm_name: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityInvalidateTokenRequest = z.infer<typeof SecurityInvalidateTokenRequest>;
export declare const SecurityInvalidateTokenResponse: z.ZodObject<{
    error_count: z.ZodNumber;
    error_details: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    invalidated_tokens: z.ZodNumber;
    previously_invalidated_tokens: z.ZodNumber;
}, z.core.$strip>;
export type SecurityInvalidateTokenResponse = z.infer<typeof SecurityInvalidateTokenResponse>;
//# sourceMappingURL=security_invalidate_token.d.ts.map