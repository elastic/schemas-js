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
export const Id = z.string().meta({ id: 'Id' });
export const Metadata = z.record(z.string(), z.any()).meta({ id: 'Metadata' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Username = z.string().meta({ id: 'Username' });
export const SecurityCredentialManagedBy = z.enum(['cloud', 'elasticsearch']).meta({ id: 'SecurityCredentialManagedBy' });
export const SecurityRealmInfo = z.object({
    name: Name,
    type: z.string()
}).meta({ id: 'SecurityRealmInfo' });
export const SecurityAuthenticateAuthenticateApiKey = z.object({
    id: Id,
    name: Name.optional(),
    managed_by: SecurityCredentialManagedBy,
    internal: z.boolean().optional()
}).meta({ id: 'SecurityAuthenticateAuthenticateApiKey' });
/**
 * Authenticate a user.
 *
 * Authenticates a user and returns information about the authenticated user.
 * Include the user information in a [basic auth header](https://en.wikipedia.org/wiki/Basic_access_authentication).
 * A successful call returns a JSON structure that shows user information such as their username, the roles that are assigned to the user, any assigned metadata, and information about the realms that authenticated and authorized the user.
 * If the user cannot be authenticated, this API returns a 401 status code.
 */
export const SecurityAuthenticateRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'SecurityAuthenticateRequest' });
export const SecurityAuthenticateToken = z.object({
    name: Name.optional(),
    type: z.string().optional(),
    managed_by: SecurityCredentialManagedBy.optional()
}).meta({ id: 'SecurityAuthenticateToken' });
export const SecurityAuthenticateResponse = z.object({
    api_key: SecurityAuthenticateAuthenticateApiKey.optional(),
    authentication_realm: SecurityRealmInfo,
    email: z.union([z.string(), z.null()]).optional(),
    full_name: z.union([Name, z.null()]).optional(),
    lookup_realm: SecurityRealmInfo,
    metadata: Metadata,
    roles: z.array(z.string()),
    username: Username,
    enabled: z.boolean(),
    authentication_type: z.string(),
    token: SecurityAuthenticateToken.optional()
}).meta({ id: 'SecurityAuthenticateResponse' });
//# sourceMappingURL=security_authenticate.js.map