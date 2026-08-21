/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata, Name, Refresh, long } from './_types.js'
import { SecurityRoleDescriptor } from './security.js'

/**
 * Create an API key.
 *
 * Create an API key for access without requiring basic authentication.
 *
 * IMPORTANT: If the credential that is used to authenticate this request is an API key, the derived API key cannot have any privileges.
 * If you specify privileges, the API returns an error.
 *
 * A successful request returns a JSON structure that contains the API key, its unique id, and its name.
 * If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * NOTE: By default, API keys never expire. You can specify expiration information when you create the API keys.
 *
 * The API keys are created by the Elasticsearch API key service, which is automatically enabled.
 * To configure or turn off the API key service, refer to API key service setting documentation.
 */
export const SecurityCreateApiKeyRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  expiration: z.lazy(() => Duration).describe('The expiration time for the API key. By default, API keys never expire.').optional().meta({ found_in: 'body' }),
  name: z.lazy(() => Name).describe('A name for the API key.').optional().meta({ found_in: 'body' }),
  role_descriptors: z.record(z.string(), SecurityRoleDescriptor).describe('An array of role descriptors for this API key. When it is not specified or it is an empty array, the API key will have a point in time snapshot of permissions of the authenticated user. If you supply role descriptors, the resultant permissions are an intersection of API keys permissions and the authenticated user\'s permissions thereby limiting the access scope for API keys. The structure of role descriptor is the same as the request for the create role API. For more details, refer to the create or update roles API. NOTE: Due to the way in which this permission intersection is calculated, it is not possible to create an API key that is a child of another API key, unless the derived key is created without any privileges. In this case, you must explicitly specify a role descriptor with no privileges. The derived API key can be used for authentication; it will not have authority to call Elasticsearch APIs.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityCreateApiKeyRequest' })
export type SecurityCreateApiKeyRequest = z.infer<typeof SecurityCreateApiKeyRequest>

export const SecurityCreateApiKeyResponse = z.object({
  api_key: z.string().describe('Generated API key.'),
  expiration: z.lazy(() => long).describe('Expiration in milliseconds for the API key.').optional(),
  id: z.lazy(() => Id).describe('Unique ID for this API key.'),
  name: z.lazy(() => Name).describe('Specifies the name for this API key.'),
  encoded: z.string().describe('API key credentials which is the base64-encoding of the UTF-8 representation of `id` and `api_key` joined by a colon (`:`).')
}).meta({ id: 'SecurityCreateApiKeyResponse' })
export type SecurityCreateApiKeyResponse = z.infer<typeof SecurityCreateApiKeyResponse>
