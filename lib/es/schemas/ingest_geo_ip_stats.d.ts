import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const IngestGeoIpStatsGeoIpDownloadStatistics: z.ZodObject<{
    successful_downloads: z.ZodNumber;
    failed_downloads: z.ZodNumber;
    total_download_time: z.ZodAny;
    databases_count: z.ZodNumber;
    skipped_updates: z.ZodNumber;
    expired_databases: z.ZodNumber;
}, z.core.$strip>;
export type IngestGeoIpStatsGeoIpDownloadStatistics = z.infer<typeof IngestGeoIpStatsGeoIpDownloadStatistics>;
export declare const IngestGeoIpStatsGeoIpNodeDatabaseName: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type IngestGeoIpStatsGeoIpNodeDatabaseName = z.infer<typeof IngestGeoIpStatsGeoIpNodeDatabaseName>;
/** Downloaded databases for the node. The field key is the node ID. */
export declare const IngestGeoIpStatsGeoIpNodeDatabases: z.ZodObject<{
    databases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>>;
    files_in_temp: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type IngestGeoIpStatsGeoIpNodeDatabases = z.infer<typeof IngestGeoIpStatsGeoIpNodeDatabases>;
/**
 * Get GeoIP statistics.
 *
 * Get download statistics for GeoIP2 databases that are used with the GeoIP processor.
 */
export declare const IngestGeoIpStatsRequest: z.ZodObject<{}, z.core.$strip>;
export type IngestGeoIpStatsRequest = z.infer<typeof IngestGeoIpStatsRequest>;
export declare const IngestGeoIpStatsResponse: z.ZodObject<{
    stats: z.ZodObject<{
        successful_downloads: z.ZodNumber;
        failed_downloads: z.ZodNumber;
        total_download_time: z.ZodAny;
        databases_count: z.ZodNumber;
        skipped_updates: z.ZodNumber;
        expired_databases: z.ZodNumber;
    }, z.core.$strip>;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        databases: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>;
        files_in_temp: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IngestGeoIpStatsResponse = z.infer<typeof IngestGeoIpStatsResponse>;
//# sourceMappingURL=ingest_geo_ip_stats.d.ts.map