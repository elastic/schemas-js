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
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Namespace: z.ZodString;
export type Namespace = z.infer<typeof Namespace>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** Contains statistics about the number of nodes selected by the request. */
export declare const NodeStatistics: z.ZodObject<{
    failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    total: z.ZodNumber;
    successful: z.ZodNumber;
    failed: z.ZodNumber;
}, z.core.$strip>;
export type NodeStatistics = z.infer<typeof NodeStatistics>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SecurityGetServiceCredentialsNodesCredentialsFileToken: z.ZodObject<{
    nodes: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SecurityGetServiceCredentialsNodesCredentialsFileToken = z.infer<typeof SecurityGetServiceCredentialsNodesCredentialsFileToken>;
export declare const SecurityGetServiceCredentialsNodesCredentials: z.ZodObject<{
    _nodes: z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>;
    file_tokens: z.ZodRecord<z.ZodString, z.ZodObject<{
        nodes: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityGetServiceCredentialsNodesCredentials = z.infer<typeof SecurityGetServiceCredentialsNodesCredentials>;
/**
 * Get service account credentials.
 *
 * To use this API, you must have at least the `read_security` cluster privilege (or a greater privilege such as `manage_service_account` or `manage_security`).
 *
 * The response includes service account tokens that were created with the create service account tokens API as well as file-backed tokens from all nodes of the cluster.
 *
 * NOTE: For tokens backed by the `service_tokens` file, the API collects them from all nodes of the cluster.
 * Tokens with the same name from different nodes are assumed to be the same token and are only counted once towards the total number of service tokens.
 */
export declare const SecurityGetServiceCredentialsRequest: z.ZodObject<{
    namespace: z.ZodString;
    service: z.ZodString;
}, z.core.$strip>;
export type SecurityGetServiceCredentialsRequest = z.infer<typeof SecurityGetServiceCredentialsRequest>;
export declare const SecurityGetServiceCredentialsResponse: z.ZodObject<{
    service_account: z.ZodString;
    count: z.ZodNumber;
    tokens: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodAny>>;
    nodes_credentials: z.ZodObject<{
        _nodes: z.ZodObject<{
            failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>>>;
            total: z.ZodNumber;
            successful: z.ZodNumber;
            failed: z.ZodNumber;
        }, z.core.$strip>;
        file_tokens: z.ZodRecord<z.ZodString, z.ZodObject<{
            nodes: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityGetServiceCredentialsResponse = z.infer<typeof SecurityGetServiceCredentialsResponse>;
//# sourceMappingURL=security_get_service_credentials.d.ts.map