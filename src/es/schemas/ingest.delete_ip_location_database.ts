/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Ids } from './_types.js'

/** Delete IP geolocation database configurations. */
export const IngestDeleteIpLocationDatabaseRequest = z.object({
  id: z.lazy(() => Ids).describe('A comma-separated list of IP location database configurations.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. A value of `-1` indicates that the request should never time out.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. A value of `-1` indicates that the request should never time out.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IngestDeleteIpLocationDatabaseRequest' })
export type IngestDeleteIpLocationDatabaseRequest = z.infer<typeof IngestDeleteIpLocationDatabaseRequest>

export const IngestDeleteIpLocationDatabaseResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IngestDeleteIpLocationDatabaseResponse' })
export type IngestDeleteIpLocationDatabaseResponse = z.infer<typeof IngestDeleteIpLocationDatabaseResponse>
