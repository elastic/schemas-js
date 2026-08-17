/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationLarge, EpochTime, Id, Metadata, Name, Password, Refresh, Username } from './_types.js'
import { SecurityRoleDescriptor } from './security.js'

export const SecurityGrantApiKeyApiKeyGrantType = z.enum(['access_token', 'password']).meta({ id: 'SecurityGrantApiKeyApiKeyGrantType' })
export type SecurityGrantApiKeyApiKeyGrantType = z.infer<typeof SecurityGrantApiKeyApiKeyGrantType>

export const SecurityGrantApiKeyGrantApiKey = z.object({
  name: z.lazy(() => Name),
  expiration: z.lazy(() => DurationLarge).describe('Expiration time for the API key. By default, API keys never expire.').optional(),
  role_descriptors: z.union([z.record(z.string(), SecurityRoleDescriptor), z.array(z.record(z.string(), SecurityRoleDescriptor))]).describe('The role descriptors for this API key. When it is not specified or is an empty array, the API key has a point in time snapshot of permissions of the specified user or access token. If you supply role descriptors, the resultant permissions are an intersection of API keys permissions and the permissions of the user or access token.').optional(),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the `metadata` object, keys beginning with `_` are reserved for system usage.').optional()
}).meta({ id: 'SecurityGrantApiKeyGrantApiKey' })
export type SecurityGrantApiKeyGrantApiKey = z.infer<typeof SecurityGrantApiKeyGrantApiKey>

/**
 * Grant an API key.
 *
 * Create an API key on behalf of another user.
 * This API is similar to the create API keys API, however it creates the API key for a user that is different than the user that runs the API.
 * The caller must have authentication credentials for the user on whose behalf the API key will be created.
 * It is not possible to use this API to create an API key without that user's credentials.
 * The supported user authentication credential types are:
 *
 * * username and password
 * * Elasticsearch access tokens
 * * JWTs
 *
 * The user, for whom the authentication credentials is provided, can optionally "run as" (impersonate) another user.
 * In this case, the API key will be created on behalf of the impersonated user.
 *
 * This API is intended be used by applications that need to create and manage API keys for end users, but cannot guarantee that those users have permission to create API keys on their own behalf.
 * The API keys are created by the Elasticsearch API key service, which is automatically enabled.
 *
 * A successful grant API key API call returns a JSON structure that contains the API key, its unique id, and its name.
 * If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * By default, API keys never expire. You can specify expiration information when you create the API keys.
 */
export const SecurityGrantApiKeyRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If \'true\', Elasticsearch refreshes the affected shards to make this operation visible to search. If \'wait_for\', it waits for a refresh to make this operation visible to search. If \'false\', nothing is done with refreshes.').optional().meta({ found_in: 'query' }),
  api_key: SecurityGrantApiKeyGrantApiKey.describe('The API key.').meta({ found_in: 'body' }),
  grant_type: SecurityGrantApiKeyApiKeyGrantType.describe('The type of grant. Supported grant types are: `access_token`, `password`.').meta({ found_in: 'body' }),
  access_token: z.string().describe('The user\'s access token. If you specify the `access_token` grant type, this parameter is required. It is not valid with other grant types.').optional().meta({ found_in: 'body' }),
  username: z.lazy(() => Username).describe('The user name that identifies the user. If you specify the `password` grant type, this parameter is required. It is not valid with other grant types.').optional().meta({ found_in: 'body' }),
  password: z.lazy(() => Password).describe('The user\'s password. If you specify the `password` grant type, this parameter is required. It is not valid with other grant types.').optional().meta({ found_in: 'body' }),
  run_as: z.lazy(() => Username).describe('The name of the user to be impersonated.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityGrantApiKeyRequest' })
export type SecurityGrantApiKeyRequest = z.infer<typeof SecurityGrantApiKeyRequest>

export const SecurityGrantApiKeyResponse = z.object({
  api_key: z.string(),
  id: z.lazy(() => Id),
  name: z.lazy(() => Name),
  expiration: z.lazy(() => EpochTime).optional(),
  encoded: z.string()
}).meta({ id: 'SecurityGrantApiKeyResponse' })
export type SecurityGrantApiKeyResponse = z.infer<typeof SecurityGrantApiKeyResponse>
