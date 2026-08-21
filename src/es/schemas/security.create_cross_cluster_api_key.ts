/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, Id, Metadata, Name } from './_types.js'
import { SecurityAccess } from './security.js'

/**
 * Create a cross-cluster API key.
 *
 * Create an API key of the `cross_cluster` type for the API key based remote cluster access.
 * A `cross_cluster` API key cannot be used to authenticate through the REST interface.
 *
 * IMPORTANT: To authenticate this request you must use a credential that is not an API key. Even if you use an API key that has the required privilege, the API returns an error.
 *
 * Cross-cluster API keys are created by the Elasticsearch API key service, which is automatically enabled.
 *
 * NOTE: Unlike REST API keys, a cross-cluster API key does not capture permissions of the authenticated user. The API key’s effective permission is exactly as specified with the `access` property.
 *
 * A successful request returns a JSON structure that contains the API key, its unique ID, and its name. If applicable, it also returns expiration information for the API key in milliseconds.
 *
 * By default, API keys never expire. You can specify expiration information when you create the API keys.
 *
 * Cross-cluster API keys can only be updated with the update cross-cluster API key API.
 * Attempting to update them with the update REST API key API or the bulk update REST API keys API will result in an error.
 */
export const SecurityCreateCrossClusterApiKeyRequest = z.object({
  access: SecurityAccess.describe('The access to be granted to this API key. The access is composed of permissions for cross-cluster search and cross-cluster replication. At least one of them must be specified. NOTE: No explicit privileges should be specified for either search or replication access. The creation process automatically converts the access specification to a role descriptor which has relevant privileges assigned accordingly.').meta({ found_in: 'body' }),
  expiration: z.lazy(() => Duration).describe('Expiration time for the API key. By default, API keys never expire.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage.').optional().meta({ found_in: 'body' }),
  name: z.lazy(() => Name).describe('Specifies the name for this API key.').meta({ found_in: 'body' }),
  certificate_identity: z.string().describe('The certificate identity to associate with this API key. This field is used to restrict the API key to connections authenticated by a specific TLS certificate. The value should match the certificate\'s distinguished name (DN) pattern.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityCreateCrossClusterApiKeyRequest' })
export type SecurityCreateCrossClusterApiKeyRequest = z.infer<typeof SecurityCreateCrossClusterApiKeyRequest>

export const SecurityCreateCrossClusterApiKeyResponse = z.object({
  api_key: z.string().describe('Generated API key.'),
  expiration: z.lazy(() => DurationValue).describe('Expiration in milliseconds for the API key.').optional(),
  id: z.lazy(() => Id).describe('Unique ID for this API key.'),
  name: z.lazy(() => Name).describe('Specifies the name for this API key.'),
  encoded: z.string().describe('API key credentials which is the base64-encoding of the UTF-8 representation of `id` and `api_key` joined by a colon (`:`).')
}).meta({ id: 'SecurityCreateCrossClusterApiKeyResponse' })
export type SecurityCreateCrossClusterApiKeyResponse = z.infer<typeof SecurityCreateCrossClusterApiKeyResponse>
