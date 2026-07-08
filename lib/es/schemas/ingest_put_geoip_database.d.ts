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
/**
 * Create or update a GeoIP database configuration.
 *
 * Refer to the create or update IP geolocation database configuration API.
 */
export declare const IngestPutGeoipDatabaseRequest: z.ZodObject<{
    id: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    name: z.ZodString;
    maxmind: z.ZodObject<{
        account_id: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IngestPutGeoipDatabaseRequest = z.infer<typeof IngestPutGeoipDatabaseRequest>;
export declare const IngestPutGeoipDatabaseResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IngestPutGeoipDatabaseResponse = z.infer<typeof IngestPutGeoipDatabaseResponse>;
//# sourceMappingURL=ingest_put_geoip_database.d.ts.map