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
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const IngestWeb: z.ZodObject<{}, z.core.$strip>;
export type IngestWeb = z.infer<typeof IngestWeb>;
export declare const IngestLocal: z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>;
export type IngestLocal = z.infer<typeof IngestLocal>;
export declare const IngestMaxmind: z.ZodObject<{
    account_id: z.ZodString;
}, z.core.$strip>;
export type IngestMaxmind = z.infer<typeof IngestMaxmind>;
export declare const IngestIpinfo: z.ZodObject<{}, z.core.$strip>;
export type IngestIpinfo = z.infer<typeof IngestIpinfo>;
export declare const IngestDatabaseConfigurationFull: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    web: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    local: z.ZodObject<{
        type: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    maxmind: z.ZodObject<{
        account_id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    ipinfo: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>]>>;
export type IngestDatabaseConfigurationFull = z.infer<typeof IngestDatabaseConfigurationFull>;
export declare const IngestGetIpLocationDatabaseDatabaseConfigurationMetadata: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodNumber;
    modified_date_millis: z.ZodOptional<z.ZodAny>;
    modified_date: z.ZodOptional<z.ZodAny>;
    database: z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        web: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        local: z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        maxmind: z.ZodObject<{
            account_id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        ipinfo: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type IngestGetIpLocationDatabaseDatabaseConfigurationMetadata = z.infer<typeof IngestGetIpLocationDatabaseDatabaseConfigurationMetadata>;
/** Get IP geolocation database configurations. */
export declare const IngestGetIpLocationDatabaseRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type IngestGetIpLocationDatabaseRequest = z.infer<typeof IngestGetIpLocationDatabaseRequest>;
export declare const IngestGetIpLocationDatabaseResponse: z.ZodObject<{
    databases: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodNumber;
        modified_date_millis: z.ZodOptional<z.ZodAny>;
        modified_date: z.ZodOptional<z.ZodAny>;
        database: z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
            web: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            local: z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            maxmind: z.ZodObject<{
                account_id: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            ipinfo: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IngestGetIpLocationDatabaseResponse = z.infer<typeof IngestGetIpLocationDatabaseResponse>;
//# sourceMappingURL=ingest_get_ip_location_database.d.ts.map