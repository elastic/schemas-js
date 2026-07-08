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
 * Claim a connector sync job.
 *
 * This action updates the job status to `in_progress` and sets the `last_seen` and `started_at` timestamps to the current time.
 * Additionally, it can set the `sync_cursor` property for the sync job.
 *
 * This API is not intended for direct connector management by users.
 * It supports the implementation of services that utilize the connector protocol to communicate with Elasticsearch.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export declare const ConnectorSyncJobClaimRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
    sync_cursor: z.ZodOptional<z.ZodAny>;
    worker_hostname: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobClaimRequest = z.infer<typeof ConnectorSyncJobClaimRequest>;
export declare const ConnectorSyncJobClaimResponse: z.ZodObject<{}, z.core.$strip>;
export type ConnectorSyncJobClaimResponse = z.infer<typeof ConnectorSyncJobClaimResponse>;
//# sourceMappingURL=connector_sync_job_claim.d.ts.map