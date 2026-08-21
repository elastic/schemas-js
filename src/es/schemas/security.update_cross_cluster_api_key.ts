/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata } from './_types.js'
import { SecurityAccess } from './security.js'

/**
 * Update a cross-cluster API key.
 *
 * Update the attributes of an existing cross-cluster API key, which is used for API key based remote cluster access.
 *
 * To use this API, you must have at least the `manage_security` cluster privilege.
 * Users can only update API keys that they created.
 * To update another user's API key, use the `run_as` feature to submit a request on behalf of another user.
 *
 * IMPORTANT: It's not possible to use an API key as the authentication credential for this API.
 * To update an API key, the owner user's credentials are required.
 *
 * It's not possible to update expired API keys, or API keys that have been invalidated by the invalidate API key API.
 *
 * This API supports updates to an API key's access scope, metadata, and expiration.
 * The owner user's information, such as the `username` and `realm`, is also updated automatically on every call.
 *
 * NOTE: This API cannot update REST API keys, which should be updated by either the update API key or bulk update API keys API.
 *
 * To learn more about how to use this API, refer to the [Update cross cluter API key API examples page](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/update-cc-api-key-examples).
 */
export const SecurityUpdateCrossClusterApiKeyRequest = z.object({
  id: z.lazy(() => Id).describe('The ID of the cross-cluster API key to update.').meta({ found_in: 'path' }),
  access: SecurityAccess.describe('The access to be granted to this API key. The access is composed of permissions for cross cluster search and cross cluster replication. At least one of them must be specified. When specified, the new access assignment fully replaces the previously assigned access.').meta({ found_in: 'body' }),
  expiration: z.lazy(() => Duration).describe('The expiration time for the API key. By default, API keys never expire. This property can be omitted to leave the value unchanged.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage. When specified, this information fully replaces metadata previously associated with the API key.').optional().meta({ found_in: 'body' }),
  certificate_identity: z.string().describe('The certificate identity to associate with this API key. This field is used to restrict the API key to connections authenticated by a specific TLS certificate. The value should match the certificate\'s distinguished name (DN) pattern. When specified, this fully replaces any previously assigned certificate identity. To clear an existing certificate identity, explicitly set this field to `null`. When omitted, the existing certificate identity remains unchanged.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityUpdateCrossClusterApiKeyRequest' })
export type SecurityUpdateCrossClusterApiKeyRequest = z.infer<typeof SecurityUpdateCrossClusterApiKeyRequest>

export const SecurityUpdateCrossClusterApiKeyResponse = z.object({
  updated: z.boolean().describe('If `true`, the API key was updated. If `false`, the API key didn’t change because no change was detected.')
}).meta({ id: 'SecurityUpdateCrossClusterApiKeyResponse' })
export type SecurityUpdateCrossClusterApiKeyResponse = z.infer<typeof SecurityUpdateCrossClusterApiKeyResponse>
