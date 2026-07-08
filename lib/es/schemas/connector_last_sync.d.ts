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
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ConnectorSyncStatus: z.ZodEnum<{
    completed: "completed";
    error: "error";
    canceling: "canceling";
    canceled: "canceled";
    in_progress: "in_progress";
    pending: "pending";
    suspended: "suspended";
}>;
export type ConnectorSyncStatus = z.infer<typeof ConnectorSyncStatus>;
/**
 * Update the connector last sync stats.
 *
 * Update the fields related to the last sync of a connector.
 * This action is used for analytics and monitoring.
 */
export declare const ConnectorLastSyncRequest: z.ZodObject<{
    connector_id: z.ZodString;
    last_access_control_sync_error: z.ZodOptional<z.ZodString>;
    last_access_control_sync_scheduled_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last_access_control_sync_status: z.ZodOptional<z.ZodEnum<{
        completed: "completed";
        error: "error";
        canceling: "canceling";
        canceled: "canceled";
        in_progress: "in_progress";
        pending: "pending";
        suspended: "suspended";
    }>>;
    last_deleted_document_count: z.ZodOptional<z.ZodNumber>;
    last_incremental_sync_scheduled_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last_indexed_document_count: z.ZodOptional<z.ZodNumber>;
    last_seen: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last_sync_error: z.ZodOptional<z.ZodString>;
    last_sync_scheduled_at: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last_sync_status: z.ZodOptional<z.ZodEnum<{
        completed: "completed";
        error: "error";
        canceling: "canceling";
        canceled: "canceled";
        in_progress: "in_progress";
        pending: "pending";
        suspended: "suspended";
    }>>;
    last_synced: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    sync_cursor: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type ConnectorLastSyncRequest = z.infer<typeof ConnectorLastSyncRequest>;
export declare const ConnectorLastSyncResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorLastSyncResponse = z.infer<typeof ConnectorLastSyncResponse>;
//# sourceMappingURL=connector_last_sync.d.ts.map