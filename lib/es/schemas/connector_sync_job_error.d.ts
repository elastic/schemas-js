import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Set a connector sync job error.
 *
 * Set the `error` field for a connector sync job and set its `status` to `error`.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export declare const ConnectorSyncJobErrorRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobErrorRequest = z.infer<typeof ConnectorSyncJobErrorRequest>;
export declare const ConnectorSyncJobErrorResponse: z.ZodObject<{}, z.core.$strip>;
export type ConnectorSyncJobErrorResponse = z.infer<typeof ConnectorSyncJobErrorResponse>;
//# sourceMappingURL=connector_sync_job_error.d.ts.map