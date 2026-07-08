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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a connector sync job.
 *
 * Remove a connector sync job and its associated data.
 * This is a destructive action that is not recoverable.
 */
export declare const ConnectorSyncJobDeleteRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobDeleteRequest = z.infer<typeof ConnectorSyncJobDeleteRequest>;
export declare const ConnectorSyncJobDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type ConnectorSyncJobDeleteResponse = z.infer<typeof ConnectorSyncJobDeleteResponse>;
//# sourceMappingURL=connector_sync_job_delete.d.ts.map