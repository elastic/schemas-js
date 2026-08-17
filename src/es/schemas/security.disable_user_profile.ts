/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Refresh } from './_types.js'
import { SecurityUserProfileId } from './security.js'

/**
 * Disable a user profile.
 *
 * Disable user profiles so that they are not visible in user profile searches.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * When you activate a user profile, its automatically enabled and visible in user profile searches. You can use the disable user profile API to disable a user profile so it’s not visible in these searches.
 * To re-enable a disabled user profile, use the enable user profile API .
 */
export const SecurityDisableUserProfileRequest = z.object({
  uid: z.lazy(() => SecurityUserProfileId).describe('Unique identifier for the user profile.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If \'true\', Elasticsearch refreshes the affected shards to make this operation visible to search. If \'wait_for\', it waits for a refresh to make this operation visible to search. If \'false\', it does nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDisableUserProfileRequest' })
export type SecurityDisableUserProfileRequest = z.infer<typeof SecurityDisableUserProfileRequest>

export const SecurityDisableUserProfileResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SecurityDisableUserProfileResponse' })
export type SecurityDisableUserProfileResponse = z.infer<typeof SecurityDisableUserProfileResponse>
