import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
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
/** Create or update an IP geolocation database configuration. */
export declare const IngestPutIpLocationDatabaseRequest: z.ZodObject<{
    id: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    configuration: z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
        maxmind: z.ZodObject<{
            account_id: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        ipinfo: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type IngestPutIpLocationDatabaseRequest = z.infer<typeof IngestPutIpLocationDatabaseRequest>;
export declare const IngestPutIpLocationDatabaseResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IngestPutIpLocationDatabaseResponse = z.infer<typeof IngestPutIpLocationDatabaseResponse>;
//# sourceMappingURL=ingest_put_ip_location_database.d.ts.map