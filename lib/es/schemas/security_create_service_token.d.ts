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
 * Create a service account token.
 *
 * Create a service accounts token for access without requiring basic authentication.
 *
 * NOTE: Service account tokens never expire.
 * You must actively delete them if they are no longer needed.
 *
 * IMPORTANT: On Serverless, non-operator users can create tokens for only `elastic/fleet-server` and `elastic/fleet-server-remote`.
 * Creating tokens for any other service account requires operator privileges.
 */
export declare const SecurityCreateServiceTokenRequest: z.ZodObject<{
    namespace: z.ZodString;
    service: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    refresh: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodEnum<{
        true: "true";
        false: "false";
        wait_for: "wait_for";
    }>]>>;
}, z.core.$strip>;
export type SecurityCreateServiceTokenRequest = z.infer<typeof SecurityCreateServiceTokenRequest>;
export declare const SecurityCreateServiceTokenToken: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type SecurityCreateServiceTokenToken = z.infer<typeof SecurityCreateServiceTokenToken>;
export declare const SecurityCreateServiceTokenResponse: z.ZodObject<{
    created: z.ZodBoolean;
    token: z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityCreateServiceTokenResponse = z.infer<typeof SecurityCreateServiceTokenResponse>;
//# sourceMappingURL=security_create_service_token.d.ts.map