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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Authenticate OpenID Connect.
 *
 * Exchange an OpenID Connect authentication response message for an Elasticsearch internal access token and refresh token that can be subsequently used for authentication.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 */
export declare const SecurityOidcAuthenticateRequest: z.ZodObject<{
    nonce: z.ZodString;
    realm: z.ZodOptional<z.ZodString>;
    redirect_uri: z.ZodString;
    state: z.ZodString;
}, z.core.$strip>;
export type SecurityOidcAuthenticateRequest = z.infer<typeof SecurityOidcAuthenticateRequest>;
export declare const SecurityOidcAuthenticateResponse: z.ZodObject<{
    access_token: z.ZodString;
    expires_in: z.ZodNumber;
    refresh_token: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type SecurityOidcAuthenticateResponse = z.infer<typeof SecurityOidcAuthenticateResponse>;
//# sourceMappingURL=security_oidc_authenticate.d.ts.map