import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Logout of OpenID Connect.
 *
 * Invalidate an access token and a refresh token that were generated as a response to the `/_security/oidc/authenticate` API.
 *
 * If the OpenID Connect authentication realm in Elasticsearch is accordingly configured, the response to this call will contain a URI pointing to the end session endpoint of the OpenID Connect Provider in order to perform single logout.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 */
export declare const SecurityOidcLogoutRequest: z.ZodObject<{
    token: z.ZodString;
    refresh_token: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityOidcLogoutRequest = z.infer<typeof SecurityOidcLogoutRequest>;
export declare const SecurityOidcLogoutResponse: z.ZodObject<{
    redirect: z.ZodString;
}, z.core.$strip>;
export type SecurityOidcLogoutResponse = z.infer<typeof SecurityOidcLogoutResponse>;
//# sourceMappingURL=security_oidc_logout.d.ts.map