/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata, Name, Refresh, long } from './_types.js'

/**
 * Clone an API key.
 *
 * Create a copy of an existing API key with a new ID.
 * The cloned key inherits the role descriptors of the source key.
 * This is intended for applications (such as Kibana) that need to
 * create API keys on behalf of a user using an existing API key credential,
 * since derived API keys (API keys created by API keys) are not otherwise supported.
 */
export const SecurityCloneApiKeyRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  api_key: z.string().describe('The credentials of the API key to clone. This is the secret value returned when the key was originally created.').meta({ found_in: 'body' }),
  name: z.lazy(() => Name).describe('A name for the cloned API key. If not provided, the name of the source key is used.').optional().meta({ found_in: 'body' }),
  expiration: z.lazy(() => Duration).describe('The expiration time for the cloned API key. By default, API keys never expire. Set to `null` to explicitly create a key with no expiration.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata to associate with the cloned API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityCloneApiKeyRequest' })
export type SecurityCloneApiKeyRequest = z.infer<typeof SecurityCloneApiKeyRequest>

export const SecurityCloneApiKeyResponse = z.object({
  api_key: z.string().describe('The generated API key value for the cloned key.'),
  expiration: z.lazy(() => long).describe('Expiration in milliseconds for the API key.').optional(),
  id: z.lazy(() => Id).describe('The unique ID of the cloned API key.'),
  name: z.lazy(() => Name).describe('The name of the cloned API key.'),
  encoded: z.string().describe('API key credentials which is the base64-encoding of the UTF-8 representation of `id` and `api_key` joined by a colon (`:`).')
}).meta({ id: 'SecurityCloneApiKeyResponse' })
export type SecurityCloneApiKeyResponse = z.infer<typeof SecurityCloneApiKeyResponse>
