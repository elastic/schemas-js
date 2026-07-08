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
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Username: z.ZodString;
export type Username = z.infer<typeof Username>;
export declare const SecurityCredentialManagedBy: z.ZodEnum<{
    elasticsearch: "elasticsearch";
    cloud: "cloud";
}>;
export type SecurityCredentialManagedBy = z.infer<typeof SecurityCredentialManagedBy>;
export declare const SecurityRealmInfo: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type SecurityRealmInfo = z.infer<typeof SecurityRealmInfo>;
export declare const SecurityAuthenticateAuthenticateApiKey: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    managed_by: z.ZodEnum<{
        elasticsearch: "elasticsearch";
        cloud: "cloud";
    }>;
    internal: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SecurityAuthenticateAuthenticateApiKey = z.infer<typeof SecurityAuthenticateAuthenticateApiKey>;
/**
 * Authenticate a user.
 *
 * Authenticates a user and returns information about the authenticated user.
 * Include the user information in a [basic auth header](https://en.wikipedia.org/wiki/Basic_access_authentication).
 * A successful call returns a JSON structure that shows user information such as their username, the roles that are assigned to the user, any assigned metadata, and information about the realms that authenticated and authorized the user.
 * If the user cannot be authenticated, this API returns a 401 status code.
 */
export declare const SecurityAuthenticateRequest: z.ZodObject<{}, z.core.$strip>;
export type SecurityAuthenticateRequest = z.infer<typeof SecurityAuthenticateRequest>;
export declare const SecurityAuthenticateToken: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    managed_by: z.ZodOptional<z.ZodEnum<{
        elasticsearch: "elasticsearch";
        cloud: "cloud";
    }>>;
}, z.core.$strip>;
export type SecurityAuthenticateToken = z.infer<typeof SecurityAuthenticateToken>;
export declare const SecurityAuthenticateResponse: z.ZodObject<{
    api_key: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        managed_by: z.ZodEnum<{
            elasticsearch: "elasticsearch";
            cloud: "cloud";
        }>;
        internal: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    authentication_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>;
    email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    full_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    lookup_realm: z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    roles: z.ZodArray<z.ZodString>;
    username: z.ZodString;
    enabled: z.ZodBoolean;
    authentication_type: z.ZodString;
    token: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        managed_by: z.ZodOptional<z.ZodEnum<{
            elasticsearch: "elasticsearch";
            cloud: "cloud";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityAuthenticateResponse = z.infer<typeof SecurityAuthenticateResponse>;
//# sourceMappingURL=security_authenticate.d.ts.map