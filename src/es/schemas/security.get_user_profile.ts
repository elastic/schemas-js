/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ErrorCause, long } from './_types.js'
import { SecurityUserProfileId, SecurityUserProfileWithMetadata } from './security.js'

export const SecurityGetUserProfileGetUserProfileErrors = z.object({
  count: z.lazy(() => long),
  details: z.record(z.lazy(() => SecurityUserProfileId), z.lazy(() => ErrorCause))
}).meta({ id: 'SecurityGetUserProfileGetUserProfileErrors' })
export type SecurityGetUserProfileGetUserProfileErrors = z.infer<typeof SecurityGetUserProfileGetUserProfileErrors>

/**
 * Get a user profile.
 *
 * Get a user's profile using the unique profile ID.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 */
export const SecurityGetUserProfileRequest = z.object({
  uid: z.union([z.lazy(() => SecurityUserProfileId), z.array(z.lazy(() => SecurityUserProfileId))]).describe('A unique identifier for the user profile.').meta({ found_in: 'path' }),
  data: z.union([z.string(), z.array(z.string())]).describe('A comma-separated list of filters for the `data` field of the profile document. To return all content use `data=*`. To return a subset of content use `data=<key>` to retrieve content nested under the specified `<key>`. By default returns no `data` content.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetUserProfileRequest' })
export type SecurityGetUserProfileRequest = z.infer<typeof SecurityGetUserProfileRequest>

export const SecurityGetUserProfileResponse = z.object({
  profiles: z.array(SecurityUserProfileWithMetadata).describe('A successful call returns the JSON representation of the user profile and its internal versioning numbers. The API returns an empty object if no profile document is found for the provided `uid`. The content of the data field is not returned by default to avoid deserializing a potential large payload.'),
  errors: SecurityGetUserProfileGetUserProfileErrors.optional()
}).meta({ id: 'SecurityGetUserProfileResponse' })
export type SecurityGetUserProfileResponse = z.infer<typeof SecurityGetUserProfileResponse>
