/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const DurationValue = z.any().meta({ id: 'DurationValue' });
export const Id = z.string().meta({ id: 'Id' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
export const IngestGeoIpStatsGeoIpDownloadStatistics = z.object({
    successful_downloads: integer.describe('Total number of successful database downloads.'),
    failed_downloads: integer.describe('Total number of failed database downloads.'),
    total_download_time: DurationValue.describe('Total milliseconds spent downloading databases.'),
    databases_count: integer.describe('Current number of databases available for use.'),
    skipped_updates: integer.describe('Total number of database updates skipped.'),
    expired_databases: integer.describe('Total number of databases not updated after 30 days')
}).meta({ id: 'IngestGeoIpStatsGeoIpDownloadStatistics' });
export const IngestGeoIpStatsGeoIpNodeDatabaseName = z.object({
    name: Name.describe('Name of the database.')
}).meta({ id: 'IngestGeoIpStatsGeoIpNodeDatabaseName' });
/** Downloaded databases for the node. The field key is the node ID. */
export const IngestGeoIpStatsGeoIpNodeDatabases = z.object({
    databases: z.array(IngestGeoIpStatsGeoIpNodeDatabaseName).describe('Downloaded databases for the node.'),
    files_in_temp: z.array(z.string()).describe('Downloaded database files, including related license files. Elasticsearch stores these files in the node’s temporary directory: $ES_TMPDIR/geoip-databases/<node_id>.')
}).meta({ id: 'IngestGeoIpStatsGeoIpNodeDatabases' });
/**
 * Get GeoIP statistics.
 *
 * Get download statistics for GeoIP2 databases that are used with the GeoIP processor.
 */
export const IngestGeoIpStatsRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'IngestGeoIpStatsRequest' });
export const IngestGeoIpStatsResponse = z.object({
    stats: IngestGeoIpStatsGeoIpDownloadStatistics.describe('Download statistics for all GeoIP2 databases.'),
    nodes: z.record(Id, IngestGeoIpStatsGeoIpNodeDatabases).describe('Downloaded GeoIP2 databases for each node.')
}).meta({ id: 'IngestGeoIpStatsResponse' });
//# sourceMappingURL=ingest_geo_ip_stats.js.map