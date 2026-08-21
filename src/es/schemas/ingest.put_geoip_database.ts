/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id, Name } from './_types.js'

export const IngestMaxmind = z.object({
  account_id: z.lazy(() => Id)
}).meta({ id: 'IngestMaxmind' })
export type IngestMaxmind = z.infer<typeof IngestMaxmind>

/**
 * Create or update a GeoIP database configuration.
 *
 * Refer to the create or update IP geolocation database configuration API.
 */
export const IngestPutGeoipDatabaseRequest = z.object({
  id: z.lazy(() => Id).describe('ID of the database configuration to create or update.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  name: z.lazy(() => Name).describe('The provider-assigned name of the IP geolocation database to download.').meta({ found_in: 'body' }),
  maxmind: IngestMaxmind.describe('The configuration necessary to identify which IP geolocation provider to use to download the database, as well as any provider-specific configuration necessary for such downloading. At present, the only supported provider is maxmind, and the maxmind provider requires that an account_id (string) is configured.').meta({ found_in: 'body' })
}).meta({ id: 'IngestPutGeoipDatabaseRequest' })
export type IngestPutGeoipDatabaseRequest = z.infer<typeof IngestPutGeoipDatabaseRequest>

export const IngestPutGeoipDatabaseResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IngestPutGeoipDatabaseResponse' })
export type IngestPutGeoipDatabaseResponse = z.infer<typeof IngestPutGeoipDatabaseResponse>
