import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const IngestMaxmind: z.ZodObject<{
    account_id: z.ZodString;
}, z.core.$strip>;
export type IngestMaxmind = z.infer<typeof IngestMaxmind>;
export declare const IngestIpinfo: z.ZodObject<{}, z.core.$strip>;
export type IngestIpinfo = z.infer<typeof IngestIpinfo>;
/**
 * The configuration necessary to identify which IP geolocation provider to use to download a database, as well as any provider-specific configuration necessary for such downloading.
 * At present, the only supported providers are `maxmind` and `ipinfo`, and the `maxmind` provider requires that an `account_id` (string) is configured.
 * A provider (either `maxmind` or `ipinfo`) must be specified. The web and local providers can be returned as read only configurations.
 */
export declare const IngestDatabaseConfiguration: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    maxmind: z.ZodObject<{
        account_id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    ipinfo: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>]>>;
export type IngestDatabaseConfiguration = z.infer<typeof IngestDatabaseConfiguration>;
export declare const IngestGetGeoipDatabaseDatabaseConfigurationMetadata: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodNumber;
    modified_date_millis: z.ZodAny;
    database: z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        maxmind: z.ZodObject<{
            account_id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        ipinfo: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type IngestGetGeoipDatabaseDatabaseConfigurationMetadata = z.infer<typeof IngestGetGeoipDatabaseDatabaseConfigurationMetadata>;
/**
 * Get GeoIP database configurations.
 *
 * Get information about one or more IP geolocation database configurations.
 */
export declare const IngestGetGeoipDatabaseRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type IngestGetGeoipDatabaseRequest = z.infer<typeof IngestGetGeoipDatabaseRequest>;
export declare const IngestGetGeoipDatabaseResponse: z.ZodObject<{
    databases: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodNumber;
        modified_date_millis: z.ZodAny;
        database: z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
            maxmind: z.ZodObject<{
                account_id: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            ipinfo: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IngestGetGeoipDatabaseResponse = z.infer<typeof IngestGetGeoipDatabaseResponse>;
//# sourceMappingURL=ingest_get_geoip_database.d.ts.map