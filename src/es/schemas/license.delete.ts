/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Delete the license.
 *
 * When the license expires, your subscription level reverts to Basic.
 *
 * If the operator privileges feature is enabled, only operator users can use this API.
 */
export const LicenseDeleteRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'LicenseDeleteRequest' })
export type LicenseDeleteRequest = z.infer<typeof LicenseDeleteRequest>

export const LicenseDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'LicenseDeleteResponse' })
export type LicenseDeleteResponse = z.infer<typeof LicenseDeleteResponse>
