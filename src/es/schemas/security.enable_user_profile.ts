/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Refresh } from './_types.js'
import { SecurityUserProfileId } from './security.js'

/**
 * Enable a user profile.
 *
 * Enable user profiles to make them visible in user profile searches.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions.
 * Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 *
 * When you activate a user profile, it's automatically enabled and visible in user profile searches.
 * If you later disable the user profile, you can use the enable user profile API to make the profile visible in these searches again.
 */
export const SecurityEnableUserProfileRequest = z.object({
  uid: z.lazy(() => SecurityUserProfileId).describe('A unique identifier for the user profile.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If \'true\', Elasticsearch refreshes the affected shards to make this operation visible to search. If \'wait_for\', it waits for a refresh to make this operation visible to search. If \'false\', nothing is done with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityEnableUserProfileRequest' })
export type SecurityEnableUserProfileRequest = z.infer<typeof SecurityEnableUserProfileRequest>

export const SecurityEnableUserProfileResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SecurityEnableUserProfileResponse' })
export type SecurityEnableUserProfileResponse = z.infer<typeof SecurityEnableUserProfileResponse>
