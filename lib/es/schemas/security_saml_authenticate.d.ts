import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Authenticate SAML.
 *
 * Submit a SAML response message to Elasticsearch for consumption.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The SAML message that is submitted can be:
 *
 * * A response to a SAML authentication request that was previously created using the SAML prepare authentication API.
 * * An unsolicited SAML message in the case of an IdP-initiated single sign-on (SSO) flow.
 *
 * In either case, the SAML message needs to be a base64 encoded XML document with a root element of `<Response>`.
 *
 * After successful validation, Elasticsearch responds with an Elasticsearch internal access token and refresh token that can be subsequently used for authentication.
 * This API endpoint essentially exchanges SAML responses that indicate successful authentication in the IdP for Elasticsearch access and refresh tokens, which can be used for authentication against Elasticsearch.
 */
export declare const SecuritySamlAuthenticateRequest: z.ZodObject<{
    content: z.ZodString;
    ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    realm: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlAuthenticateRequest = z.infer<typeof SecuritySamlAuthenticateRequest>;
export declare const SecuritySamlAuthenticateResponse: z.ZodObject<{
    access_token: z.ZodString;
    username: z.ZodString;
    expires_in: z.ZodNumber;
    refresh_token: z.ZodString;
    realm: z.ZodString;
    in_response_to: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlAuthenticateResponse = z.infer<typeof SecuritySamlAuthenticateResponse>;
//# sourceMappingURL=security_saml_authenticate.d.ts.map