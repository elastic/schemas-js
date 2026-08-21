/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { SecuritySecuritySettings } from './security.js'

/**
 * Update security index settings.
 *
 * Update the user-configurable settings for the security internal index (`.security` and associated indices). Only a subset of settings are allowed to be modified. This includes `index.auto_expand_replicas` and `index.number_of_replicas`.
 *
 * NOTE: If `index.auto_expand_replicas` is set, `index.number_of_replicas` will be ignored during updates.
 *
 * If a specific index is not in use on the system and settings are provided for it, the request will be rejected.
 * This API does not yet support configuring the settings for indices before they are in use.
 */
export const SecurityUpdateSettingsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  security: SecuritySecuritySettings.describe('Settings for the index used for most security configuration, including native realm users and roles configured with the API.').optional().meta({ found_in: 'body' }),
  'security-profile': SecuritySecuritySettings.describe('Settings for the index used to store profile information.').optional(),
  'security-tokens': SecuritySecuritySettings.describe('Settings for the index used to store tokens.').optional()
}).meta({ id: 'SecurityUpdateSettingsRequest' })
export type SecurityUpdateSettingsRequest = z.infer<typeof SecurityUpdateSettingsRequest>

export const SecurityUpdateSettingsResponse = z.object({
  acknowledged: z.boolean()
}).meta({ id: 'SecurityUpdateSettingsResponse' })
export type SecurityUpdateSettingsResponse = z.infer<typeof SecurityUpdateSettingsResponse>
