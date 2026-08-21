/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Ids } from './_types.js'

/**
 * Delete GeoIP database configurations.
 *
 * Delete one or more IP geolocation database configurations.
 */
export const IngestDeleteGeoipDatabaseRequest = z.object({
  id: z.lazy(() => Ids).describe('A comma-separated list of geoip database configurations to delete').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IngestDeleteGeoipDatabaseRequest' })
export type IngestDeleteGeoipDatabaseRequest = z.infer<typeof IngestDeleteGeoipDatabaseRequest>

export const IngestDeleteGeoipDatabaseResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IngestDeleteGeoipDatabaseResponse' })
export type IngestDeleteGeoipDatabaseResponse = z.infer<typeof IngestDeleteGeoipDatabaseResponse>
