import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Set the connector sync job stats.
 *
 * Stats include: `deleted_document_count`, `indexed_document_count`, `indexed_document_volume`, and `total_document_count`.
 * You can also update `last_seen`.
 * This API is mainly used by the connector service for updating sync job information.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export declare const ConnectorSyncJobUpdateStatsRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
    deleted_document_count: z.ZodNumber;
    indexed_document_count: z.ZodNumber;
    indexed_document_volume: z.ZodNumber;
    last_seen: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    total_document_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ConnectorSyncJobUpdateStatsRequest = z.infer<typeof ConnectorSyncJobUpdateStatsRequest>;
export declare const ConnectorSyncJobUpdateStatsResponse: z.ZodObject<{}, z.core.$strip>;
export type ConnectorSyncJobUpdateStatsResponse = z.infer<typeof ConnectorSyncJobUpdateStatsResponse>;
//# sourceMappingURL=connector_sync_job_update_stats.d.ts.map