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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Password: z.ZodString;
export type Password = z.infer<typeof Password>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SecurityUserProfileId: z.ZodString;
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>;
export declare const SecurityUser: z.ZodObject<{
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
    enabled: z.ZodBoolean;
    profile_uid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityUser = z.infer<typeof SecurityUser>;
export declare const SecurityGetTokenAccessTokenGrantType: z.ZodEnum<{
    password: "password";
    client_credentials: "client_credentials";
    _kerberos: "_kerberos";
    refresh_token: "refresh_token";
}>;
export type SecurityGetTokenAccessTokenGrantType = z.infer<typeof SecurityGetTokenAccessTokenGrantType>;
export declare const SecurityGetTokenUserRealm: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type SecurityGetTokenUserRealm = z.infer<typeof SecurityGetTokenUserRealm>;
export declare const SecurityGetTokenAuthenticationProvider: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type SecurityGetTokenAuthenticationProvider = z.infer<typeof SecurityGetTokenAuthenticationProvider>;
export declare const SecurityGetTokenAuthenticatedUser: z.ZodObject<{
    authentication_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>;
    lookup_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>;
    authentication_provider: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    authentication_type: z.ZodString;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
    enabled: z.ZodBoolean;
    profile_uid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityGetTokenAuthenticatedUser = z.infer<typeof SecurityGetTokenAuthenticatedUser>;
/**
 * Get a token.
 *
 * Create a bearer token for access without requiring basic authentication.
 * The tokens are created by the Elasticsearch Token Service, which is automatically enabled when you configure TLS on the HTTP interface.
 * Alternatively, you can explicitly enable the `xpack.security.authc.token.enabled` setting.
 * When you are running in production mode, a bootstrap check prevents you from enabling the token service unless you also enable TLS on the HTTP interface.
 *
 * The get token API takes the same parameters as a typical OAuth 2.0 token API except for the use of a JSON request body.
 *
 * A successful get token API call returns a JSON structure that contains the access token, the amount of time (seconds) that the token expires in, the type, and the scope if available.
 *
 * The tokens returned by the get token API have a finite period of time for which they are valid and after that time period, they can no longer be used.
 * That time period is defined by the `xpack.security.authc.token.timeout` setting.
 * If you want to invalidate a token immediately, you can do so by using the invalidate token API.
 */
export declare const SecurityGetTokenRequest: z.ZodObject<{
    grant_type: z.ZodOptional<z.ZodEnum<{
        password: "password";
        client_credentials: "client_credentials";
        _kerberos: "_kerberos";
        refresh_token: "refresh_token";
    }>>;
    scope: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    kerberos_ticket: z.ZodOptional<z.ZodString>;
    refresh_token: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityGetTokenRequest = z.infer<typeof SecurityGetTokenRequest>;
export declare const SecurityGetTokenResponse: z.ZodObject<{
    access_token: z.ZodString;
    expires_in: z.ZodNumber;
    scope: z.ZodOptional<z.ZodString>;
    type: z.ZodString;
    refresh_token: z.ZodOptional<z.ZodString>;
    kerberos_authentication_response_token: z.ZodOptional<z.ZodString>;
    authentication: z.ZodObject<{
        authentication_realm: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>;
        lookup_realm: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>;
        authentication_provider: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        authentication_type: z.ZodString;
        email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
        roles: z.ZodArray<z.ZodString>;
        username: z.ZodString;
        enabled: z.ZodBoolean;
        profile_uid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SecurityGetTokenResponse = z.infer<typeof SecurityGetTokenResponse>;
//# sourceMappingURL=security_get_token.d.ts.map