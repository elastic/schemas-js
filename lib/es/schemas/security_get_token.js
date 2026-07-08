/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const Metadata = z.record(z.string(), z.any()).meta({ id: 'Metadata' });
export const Name = z.string().meta({ id: 'Name' });
export const Password = z.string().meta({ id: 'Password' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Username = z.string().meta({ id: 'Username' });
export const long = z.number().meta({ id: 'long' });
export const SecurityUserProfileId = z.string().meta({ id: 'SecurityUserProfileId' });
export const SecurityUser = z.object({
    email: z.union([z.string(), z.null()]).optional(),
    full_name: z.union([Name, z.null()]).optional(),
    metadata: Metadata,
    roles: z.array(z.string()),
    username: Username,
    enabled: z.boolean(),
    profile_uid: SecurityUserProfileId.optional()
}).meta({ id: 'SecurityUser' });
export const SecurityGetTokenAccessTokenGrantType = z.enum(['password', 'client_credentials', '_kerberos', 'refresh_token']).meta({ id: 'SecurityGetTokenAccessTokenGrantType' });
export const SecurityGetTokenUserRealm = z.object({
    name: Name,
    type: z.string()
}).meta({ id: 'SecurityGetTokenUserRealm' });
export const SecurityGetTokenAuthenticationProvider = z.object({
    type: z.string(),
    name: Name
}).meta({ id: 'SecurityGetTokenAuthenticationProvider' });
export const SecurityGetTokenAuthenticatedUser = z.object({
    ...SecurityUser.shape,
    authentication_realm: SecurityGetTokenUserRealm,
    lookup_realm: SecurityGetTokenUserRealm,
    authentication_provider: SecurityGetTokenAuthenticationProvider.optional(),
    authentication_type: z.string()
}).meta({ id: 'SecurityGetTokenAuthenticatedUser' });
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
export const SecurityGetTokenRequest = z.object({
    ...RequestBase.shape,
    grant_type: SecurityGetTokenAccessTokenGrantType.describe('The type of grant. Supported grant types are: `password`, `_kerberos`, `client_credentials`, and `refresh_token`.').optional().meta({ found_in: 'body' }),
    scope: z.string().describe('The scope of the token. Currently tokens are only issued for a scope of FULL regardless of the value sent with the request.').optional().meta({ found_in: 'body' }),
    password: Password.describe('The user\'s password. If you specify the `password` grant type, this parameter is required. This parameter is not valid with any other supported grant type.').optional().meta({ found_in: 'body' }),
    kerberos_ticket: z.string().describe('The base64 encoded kerberos ticket. If you specify the `_kerberos` grant type, this parameter is required. This parameter is not valid with any other supported grant type.').optional().meta({ found_in: 'body' }),
    refresh_token: z.string().describe('The string that was returned when you created the token, which enables you to extend its life. If you specify the `refresh_token` grant type, this parameter is required. This parameter is not valid with any other supported grant type.').optional().meta({ found_in: 'body' }),
    username: Username.describe('The username that identifies the user. If you specify the `password` grant type, this parameter is required. This parameter is not valid with any other supported grant type.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityGetTokenRequest' });
export const SecurityGetTokenResponse = z.object({
    access_token: z.string(),
    expires_in: long,
    scope: z.string().optional(),
    type: z.string(),
    refresh_token: z.string().optional(),
    kerberos_authentication_response_token: z.string().optional(),
    authentication: SecurityGetTokenAuthenticatedUser
}).meta({ id: 'SecurityGetTokenResponse' });
//# sourceMappingURL=security_get_token.js.map