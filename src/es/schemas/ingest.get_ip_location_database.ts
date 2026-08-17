/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Id, Ids, Name, VersionNumber } from './_types.js'
import { IngestMaxmind } from './ingest.put_geoip_database.js'

export const IngestIpinfo = z.object({
}).meta({ id: 'IngestIpinfo' })
export type IngestIpinfo = z.infer<typeof IngestIpinfo>

export const IngestWeb = z.object({
}).meta({ id: 'IngestWeb' })
export type IngestWeb = z.infer<typeof IngestWeb>

export const IngestLocal = z.object({
  type: z.string()
}).meta({ id: 'IngestLocal' })
export type IngestLocal = z.infer<typeof IngestLocal>

const IngestDatabaseConfigurationFullCommonProps = z.object({
  name: z.lazy(() => Name).describe('The provider-assigned name of the IP geolocation database to download.')
})

const IngestDatabaseConfigurationFullExclusiveProps = z.union([z.object({ web: IngestWeb }), z.object({ local: IngestLocal }), z.object({ maxmind: IngestMaxmind }), z.object({ ipinfo: IngestIpinfo })])

export const IngestDatabaseConfigurationFull = IngestDatabaseConfigurationFullCommonProps.and(IngestDatabaseConfigurationFullExclusiveProps).meta({ id: 'IngestDatabaseConfigurationFull' })
export type IngestDatabaseConfigurationFull = z.infer<typeof IngestDatabaseConfigurationFull>

export const IngestGetIpLocationDatabaseDatabaseConfigurationMetadata = z.object({
  id: z.lazy(() => Id),
  version: z.lazy(() => VersionNumber),
  modified_date_millis: z.lazy(() => EpochTime).optional(),
  modified_date: z.lazy(() => EpochTime).optional(),
  database: IngestDatabaseConfigurationFull
}).meta({ id: 'IngestGetIpLocationDatabaseDatabaseConfigurationMetadata' })
export type IngestGetIpLocationDatabaseDatabaseConfigurationMetadata = z.infer<typeof IngestGetIpLocationDatabaseDatabaseConfigurationMetadata>

/** Get IP geolocation database configurations. */
export const IngestGetIpLocationDatabaseRequest = z.object({
  id: z.lazy(() => Ids).describe('Comma-separated list of database configuration IDs to retrieve. Wildcard (`*`) expressions are supported. To get all database configurations, omit this parameter or use `*`.').optional().meta({ found_in: 'path' })
}).meta({ id: 'IngestGetIpLocationDatabaseRequest' })
export type IngestGetIpLocationDatabaseRequest = z.infer<typeof IngestGetIpLocationDatabaseRequest>

export const IngestGetIpLocationDatabaseResponse = z.object({
  databases: z.array(IngestGetIpLocationDatabaseDatabaseConfigurationMetadata)
}).meta({ id: 'IngestGetIpLocationDatabaseResponse' })
export type IngestGetIpLocationDatabaseResponse = z.infer<typeof IngestGetIpLocationDatabaseResponse>
