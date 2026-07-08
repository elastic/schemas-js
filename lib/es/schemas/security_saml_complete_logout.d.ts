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
/**
 * Logout of SAML completely.
 *
 * Verifies the logout response sent from the SAML IdP.
 *
 * NOTE: This API is intended for use by custom web applications other than Kibana.
 * If you are using Kibana, refer to the documentation for configuring SAML single-sign-on on the Elastic Stack.
 *
 * The SAML IdP may send a logout response back to the SP after handling the SP-initiated SAML Single Logout.
 * This API verifies the response by ensuring the content is relevant and validating its signature.
 * An empty response is returned if the verification process is successful.
 * The response can be sent by the IdP with either the HTTP-Redirect or the HTTP-Post binding.
 * The caller of this API must prepare the request accordingly so that this API can handle either of them.
 */
export declare const SecuritySamlCompleteLogoutRequest: z.ZodObject<{
    realm: z.ZodString;
    ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    query_string: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecuritySamlCompleteLogoutRequest = z.infer<typeof SecuritySamlCompleteLogoutRequest>;
export declare const SecuritySamlCompleteLogoutResponse: z.ZodBoolean;
export type SecuritySamlCompleteLogoutResponse = z.infer<typeof SecuritySamlCompleteLogoutResponse>;
//# sourceMappingURL=security_saml_complete_logout.d.ts.map