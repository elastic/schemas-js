/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationValue, Id, Name, integer } from './_types.js'

export const IngestGeoIpStatsGeoIpDownloadStatistics = z.object({
  successful_downloads: z.lazy(() => integer).describe('Total number of successful database downloads.'),
  failed_downloads: z.lazy(() => integer).describe('Total number of failed database downloads.'),
  total_download_time: z.lazy(() => DurationValue).describe('Total milliseconds spent downloading databases.'),
  databases_count: z.lazy(() => integer).describe('Current number of databases available for use.'),
  skipped_updates: z.lazy(() => integer).describe('Total number of database updates skipped.'),
  expired_databases: z.lazy(() => integer).describe('Total number of databases not updated after 30 days')
}).meta({ id: 'IngestGeoIpStatsGeoIpDownloadStatistics' })
export type IngestGeoIpStatsGeoIpDownloadStatistics = z.infer<typeof IngestGeoIpStatsGeoIpDownloadStatistics>

export const IngestGeoIpStatsGeoIpNodeDatabaseName = z.object({
  name: z.lazy(() => Name).describe('Name of the database.')
}).meta({ id: 'IngestGeoIpStatsGeoIpNodeDatabaseName' })
export type IngestGeoIpStatsGeoIpNodeDatabaseName = z.infer<typeof IngestGeoIpStatsGeoIpNodeDatabaseName>

/** Downloaded databases for the node. The field key is the node ID. */
export const IngestGeoIpStatsGeoIpNodeDatabases = z.object({
  databases: z.array(IngestGeoIpStatsGeoIpNodeDatabaseName).describe('Downloaded databases for the node.'),
  files_in_temp: z.array(z.string()).describe('Downloaded database files, including related license files. Elasticsearch stores these files in the node’s temporary directory: $ES_TMPDIR/geoip-databases/<node_id>.')
}).meta({ id: 'IngestGeoIpStatsGeoIpNodeDatabases' })
export type IngestGeoIpStatsGeoIpNodeDatabases = z.infer<typeof IngestGeoIpStatsGeoIpNodeDatabases>

/**
 * Get GeoIP statistics.
 *
 * Get download statistics for GeoIP2 databases that are used with the GeoIP processor.
 */
export const IngestGeoIpStatsRequest = z.object({
}).meta({ id: 'IngestGeoIpStatsRequest' })
export type IngestGeoIpStatsRequest = z.infer<typeof IngestGeoIpStatsRequest>

export const IngestGeoIpStatsResponse = z.object({
  stats: IngestGeoIpStatsGeoIpDownloadStatistics.describe('Download statistics for all GeoIP2 databases.'),
  nodes: z.record(z.lazy(() => Id), IngestGeoIpStatsGeoIpNodeDatabases).describe('Downloaded GeoIP2 databases for each node.')
}).meta({ id: 'IngestGeoIpStatsResponse' })
export type IngestGeoIpStatsResponse = z.infer<typeof IngestGeoIpStatsResponse>
