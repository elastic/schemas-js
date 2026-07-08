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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Prepare SAML authentication.
 *
 * Create a SAML authentication request (`<AuthnRequest>`) as a URL string based on the configuration of the respective SAML realm in Elasticsearch.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * This API returns a URL pointing to the SAML Identity Provider.
 * You can use the URL to redirect the browser of the user in order to continue the authentication process.
 * The URL includes a single parameter named `SAMLRequest`, which contains a SAML Authentication request that is deflated and Base64 encoded.
 * If the configuration dictates that SAML authentication requests should be signed, the URL has two extra parameters named `SigAlg` and `Signature`.
 * These parameters contain the algorithm used for the signature and the signature value itself.
 * It also returns a random string that uniquely identifies this SAML Authentication request.
 * The caller of this API needs to store this identifier as it needs to be used in a following step of the authentication process.
 */
export declare const SecuritySamlPrepareAuthenticationRequest: z.ZodObject<{
    acs: z.ZodOptional<z.ZodString>;
    realm: z.ZodOptional<z.ZodString>;
    relay_state: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlPrepareAuthenticationRequest = z.infer<typeof SecuritySamlPrepareAuthenticationRequest>;
export declare const SecuritySamlPrepareAuthenticationResponse: z.ZodObject<{
    id: z.ZodString;
    realm: z.ZodString;
    redirect: z.ZodString;
}, z.core.$strip>;
export type SecuritySamlPrepareAuthenticationResponse = z.infer<typeof SecuritySamlPrepareAuthenticationResponse>;
//# sourceMappingURL=security_saml_prepare_authentication.d.ts.map