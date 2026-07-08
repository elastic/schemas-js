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
export declare const Namespace: z.ZodString;
export type Namespace = z.infer<typeof Namespace>;
export declare const Refresh: z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
    true: "true";
    false: "false";
    wait_for: "wait_for";
}>]>;
export type Refresh = z.infer<typeof Refresh>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Service: z.ZodString;
export type Service = z.infer<typeof Service>;
/**
 * Delete service account tokens.
 *
 * Delete service account tokens for a service in a specified namespace.
 *
 * IMPORTANT: On Serverless, non-operator users can delete tokens for only `elastic/fleet-server` and `elastic/fleet-server-remote`.
 * Deleting tokens for any other service account requires operator privileges.
 */
export declare const SecurityDeleteServiceTokenRequest: z.ZodObject<{
    namespace: z.ZodString;
    service: z.ZodString;
    name: z.ZodString;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityDeleteServiceTokenRequest = z.infer<typeof SecurityDeleteServiceTokenRequest>;
export declare const SecurityDeleteServiceTokenResponse: z.ZodObject<{
    found: z.ZodBoolean;
}, z.core.$strip>;
export type SecurityDeleteServiceTokenResponse = z.infer<typeof SecurityDeleteServiceTokenResponse>;
//# sourceMappingURL=security_delete_service_token.d.ts.map