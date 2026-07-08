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
 * Logout of SAML.
 *
 * Submits a request to invalidate an access token and refresh token.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * This API invalidates the tokens that were generated for a user by the SAML authenticate API.
 * If the SAML realm in Elasticsearch is configured accordingly and the SAML IdP supports this, the Elasticsearch response contains a URL to redirect the user to the IdP that contains a SAML logout request (starting an SP-initiated SAML Single Logout).
 */
export declare const SecuritySamlLogoutRequest: z.ZodObject<{
    token: z.ZodString;
    refresh_token: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlLogoutRequest = z.infer<typeof SecuritySamlLogoutRequest>;
export declare const SecuritySamlLogoutResponse: z.ZodObject<{
    redirect: z.ZodString;
}, z.core.$strip>;
export type SecuritySamlLogoutResponse = z.infer<typeof SecuritySamlLogoutResponse>;
//# sourceMappingURL=security_saml_logout.d.ts.map