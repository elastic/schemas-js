/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Id, Ids, long } from './_types.js'
import { IngestDatabaseConfiguration } from './ingest.js'

export const IngestGetGeoipDatabaseDatabaseConfigurationMetadata = z.object({
  id: z.lazy(() => Id),
  version: z.lazy(() => long),
  modified_date_millis: z.lazy(() => EpochTime),
  database: IngestDatabaseConfiguration
}).meta({ id: 'IngestGetGeoipDatabaseDatabaseConfigurationMetadata' })
export type IngestGetGeoipDatabaseDatabaseConfigurationMetadata = z.infer<typeof IngestGetGeoipDatabaseDatabaseConfigurationMetadata>

/**
 * Get GeoIP database configurations.
 *
 * Get information about one or more IP geolocation database configurations.
 */
export const IngestGetGeoipDatabaseRequest = z.object({
  id: z.lazy(() => Ids).describe('A comma-separated list of database configuration IDs to retrieve. Wildcard (`*`) expressions are supported. To get all database configurations, omit this parameter or use `*`.').optional().meta({ found_in: 'path' })
}).meta({ id: 'IngestGetGeoipDatabaseRequest' })
export type IngestGetGeoipDatabaseRequest = z.infer<typeof IngestGetGeoipDatabaseRequest>

export const IngestGetGeoipDatabaseResponse = z.object({
  databases: z.array(IngestGetGeoipDatabaseDatabaseConfigurationMetadata)
}).meta({ id: 'IngestGetGeoipDatabaseResponse' })
export type IngestGetGeoipDatabaseResponse = z.infer<typeof IngestGetGeoipDatabaseResponse>
