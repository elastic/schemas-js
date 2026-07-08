import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SecurityDelegatePkiAuthenticationRealm: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    domain: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityDelegatePkiAuthenticationRealm = z.infer<typeof SecurityDelegatePkiAuthenticationRealm>;
export declare const SecurityDelegatePkiAuthentication: z.ZodObject<{
    username: z.ZodString;
    roles: z.ZodArray<z.ZodString>;
    full_name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    email: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    token: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    enabled: z.ZodBoolean;
    authentication_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        domain: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    lookup_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
        domain: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    authentication_type: z.ZodString;
    api_key: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type SecurityDelegatePkiAuthentication = z.infer<typeof SecurityDelegatePkiAuthentication>;
/**
 * Delegate PKI authentication.
 *
 * This API implements the exchange of an X509Certificate chain for an Elasticsearch access token.
 * The certificate chain is validated, according to RFC 5280, by sequentially considering the trust configuration of every installed PKI realm that has `delegation.enabled` set to `true`.
 * A successfully trusted client certificate is also subject to the validation of the subject distinguished name according to thw `username_pattern` of the respective realm.
 *
 * This API is called by smart and trusted proxies, such as Kibana, which terminate the user's TLS session but still want to authenticate the user by using a PKI realm—-as if the user connected directly to Elasticsearch.
 *
 * IMPORTANT: The association between the subject public key in the target certificate and the corresponding private key is not validated.
 * This is part of the TLS authentication process and it is delegated to the proxy that calls this API.
 * The proxy is trusted to have performed the TLS authentication and this API translates that authentication into an Elasticsearch access token.
 */
export declare const SecurityDelegatePkiRequest: z.ZodObject<{
    x509_certificate_chain: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SecurityDelegatePkiRequest = z.infer<typeof SecurityDelegatePkiRequest>;
export declare const SecurityDelegatePkiResponse: z.ZodObject<{
    access_token: z.ZodString;
    expires_in: z.ZodNumber;
    type: z.ZodString;
    authentication: z.ZodOptional<z.ZodObject<{
        username: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
        full_name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        email: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        token: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        enabled: z.ZodBoolean;
        authentication_realm: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            domain: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        lookup_realm: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
            domain: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        authentication_type: z.ZodString;
        api_key: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityDelegatePkiResponse = z.infer<typeof SecurityDelegatePkiResponse>;
//# sourceMappingURL=security_delegate_pki.d.ts.map