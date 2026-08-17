/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { SecuritySecuritySettings } from './security.js'

/**
 * Get security index settings.
 *
 * Get the user-configurable settings for the security internal index (`.security` and associated indices).
 * Only a subset of the index settings — those that are user-configurable—will be shown.
 * This includes:
 *
 * * `index.auto_expand_replicas`
 * * `index.number_of_replicas`
 */
export const SecurityGetSettingsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetSettingsRequest' })
export type SecurityGetSettingsRequest = z.infer<typeof SecurityGetSettingsRequest>

export const SecurityGetSettingsResponse = z.object({
  security: SecuritySecuritySettings.describe('Settings for the index used for most security configuration, including native realm users and roles configured with the API.'),
  'security-profile': SecuritySecuritySettings.describe('Settings for the index used to store profile information.'),
  'security-tokens': SecuritySecuritySettings.describe('Settings for the index used to store tokens.')
}).meta({ id: 'SecurityGetSettingsResponse' })
export type SecurityGetSettingsResponse = z.infer<typeof SecurityGetSettingsResponse>
