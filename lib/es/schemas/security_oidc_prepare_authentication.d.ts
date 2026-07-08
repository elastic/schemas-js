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
 * Prepare OpenID connect authentication.
 *
 * Create an oAuth 2.0 authentication request as a URL string based on the configuration of the OpenID Connect authentication realm in Elasticsearch.
 *
 * The response of this API is a URL pointing to the Authorization Endpoint of the configured OpenID Connect Provider, which can be used to redirect the browser of the user in order to continue the authentication process.
 *
 * Elasticsearch exposes all the necessary OpenID Connect related functionality with the OpenID Connect APIs.
 * These APIs are used internally by Kibana in order to provide OpenID Connect based authentication, but can also be used by other, custom web applications or other clients.
 */
export declare const SecurityOidcPrepareAuthenticationRequest: z.ZodObject<{
    iss: z.ZodOptional<z.ZodString>;
    login_hint: z.ZodOptional<z.ZodString>;
    nonce: z.ZodOptional<z.ZodString>;
    realm: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityOidcPrepareAuthenticationRequest = z.infer<typeof SecurityOidcPrepareAuthenticationRequest>;
export declare const SecurityOidcPrepareAuthenticationResponse: z.ZodObject<{
    nonce: z.ZodString;
    realm: z.ZodString;
    redirect: z.ZodString;
    state: z.ZodString;
}, z.core.$strip>;
export type SecurityOidcPrepareAuthenticationResponse = z.infer<typeof SecurityOidcPrepareAuthenticationResponse>;
//# sourceMappingURL=security_oidc_prepare_authentication.d.ts.map