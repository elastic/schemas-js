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
export const EpochTime = z.any().meta({ id: 'EpochTime' });
export const Id = z.string().meta({ id: 'Id' });
export const Ids = z.union([Id, z.array(Id)]).meta({ id: 'Ids' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const long = z.number().meta({ id: 'long' });
export const IngestMaxmind = z.object({
    account_id: Id
}).meta({ id: 'IngestMaxmind' });
export const IngestIpinfo = z.object({}).meta({ id: 'IngestIpinfo' });
const IngestDatabaseConfigurationCommonProps = z.object({
    name: Name.describe('The provider-assigned name of the IP geolocation database to download.')
});
const IngestDatabaseConfigurationExclusiveProps = z.union([z.object({ maxmind: IngestMaxmind }), z.object({ ipinfo: IngestIpinfo })]);
/**
 * The configuration necessary to identify which IP geolocation provider to use to download a database, as well as any provider-specific configuration necessary for such downloading.
 * At present, the only supported providers are `maxmind` and `ipinfo`, and the `maxmind` provider requires that an `account_id` (string) is configured.
 * A provider (either `maxmind` or `ipinfo`) must be specified. The web and local providers can be returned as read only configurations.
 */
export const IngestDatabaseConfiguration = IngestDatabaseConfigurationCommonProps.and(IngestDatabaseConfigurationExclusiveProps).meta({ id: 'IngestDatabaseConfiguration' });
export const IngestGetGeoipDatabaseDatabaseConfigurationMetadata = z.object({
    id: Id,
    version: long,
    modified_date_millis: EpochTime,
    database: IngestDatabaseConfiguration
}).meta({ id: 'IngestGetGeoipDatabaseDatabaseConfigurationMetadata' });
/**
 * Get GeoIP database configurations.
 *
 * Get information about one or more IP geolocation database configurations.
 */
export const IngestGetGeoipDatabaseRequest = z.object({
    ...RequestBase.shape,
    id: Ids.describe('A comma-separated list of database configuration IDs to retrieve. Wildcard (`*`) expressions are supported. To get all database configurations, omit this parameter or use `*`.').optional().meta({ found_in: 'path' })
}).meta({ id: 'IngestGetGeoipDatabaseRequest' });
export const IngestGetGeoipDatabaseResponse = z.object({
    databases: z.array(IngestGetGeoipDatabaseDatabaseConfigurationMetadata)
}).meta({ id: 'IngestGetGeoipDatabaseResponse' });
//# sourceMappingURL=ingest_get_geoip_database.js.map