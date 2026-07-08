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
 * Invalidate SAML.
 *
 * Submit a SAML LogoutRequest message to Elasticsearch for consumption.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The logout request comes from the SAML IdP during an IdP initiated Single Logout.
 * The custom web application can use this API to have Elasticsearch process the `LogoutRequest`.
 * After successful validation of the request, Elasticsearch invalidates the access token and refresh token that corresponds to that specific SAML principal and provides a URL that contains a SAML LogoutResponse message.
 * Thus the user can be redirected back to their IdP.
 */
export declare const SecuritySamlInvalidateRequest: z.ZodObject<{
    acs: z.ZodOptional<z.ZodString>;
    query_string: z.ZodString;
    realm: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlInvalidateRequest = z.infer<typeof SecuritySamlInvalidateRequest>;
export declare const SecuritySamlInvalidateResponse: z.ZodObject<{
    invalidated: z.ZodNumber;
    realm: z.ZodString;
    redirect: z.ZodString;
}, z.core.$strip>;
export type SecuritySamlInvalidateResponse = z.infer<typeof SecuritySamlInvalidateResponse>;
//# sourceMappingURL=security_saml_invalidate.d.ts.map