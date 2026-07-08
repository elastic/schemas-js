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
export const VersionNumber = long.meta({ id: 'VersionNumber' });
export const IngestWeb = z.object({}).meta({ id: 'IngestWeb' });
export const IngestLocal = z.object({
    type: z.string()
}).meta({ id: 'IngestLocal' });
export const IngestMaxmind = z.object({
    account_id: Id
}).meta({ id: 'IngestMaxmind' });
export const IngestIpinfo = z.object({}).meta({ id: 'IngestIpinfo' });
const IngestDatabaseConfigurationFullCommonProps = z.object({
    name: Name.describe('The provider-assigned name of the IP geolocation database to download.')
});
const IngestDatabaseConfigurationFullExclusiveProps = z.union([z.object({ web: IngestWeb }), z.object({ local: IngestLocal }), z.object({ maxmind: IngestMaxmind }), z.object({ ipinfo: IngestIpinfo })]);
export const IngestDatabaseConfigurationFull = IngestDatabaseConfigurationFullCommonProps.and(IngestDatabaseConfigurationFullExclusiveProps).meta({ id: 'IngestDatabaseConfigurationFull' });
export const IngestGetIpLocationDatabaseDatabaseConfigurationMetadata = z.object({
    id: Id,
    version: VersionNumber,
    modified_date_millis: EpochTime.optional(),
    modified_date: EpochTime.optional(),
    database: IngestDatabaseConfigurationFull
}).meta({ id: 'IngestGetIpLocationDatabaseDatabaseConfigurationMetadata' });
/** Get IP geolocation database configurations. */
export const IngestGetIpLocationDatabaseRequest = z.object({
    ...RequestBase.shape,
    id: Ids.describe('Comma-separated list of database configuration IDs to retrieve. Wildcard (`*`) expressions are supported. To get all database configurations, omit this parameter or use `*`.').optional().meta({ found_in: 'path' })
}).meta({ id: 'IngestGetIpLocationDatabaseRequest' });
export const IngestGetIpLocationDatabaseResponse = z.object({
    databases: z.array(IngestGetIpLocationDatabaseDatabaseConfigurationMetadata)
}).meta({ id: 'IngestGetIpLocationDatabaseResponse' });
//# sourceMappingURL=ingest_get_ip_location_database.js.map