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
 * Check in a connector sync job.
 *
 * Check in a connector sync job and set the `last_seen` field to the current time before updating it in the internal index.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export declare const ConnectorSyncJobCheckInRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobCheckInRequest = z.infer<typeof ConnectorSyncJobCheckInRequest>;
export declare const ConnectorSyncJobCheckInResponse: z.ZodObject<{}, z.core.$strip>;
export type ConnectorSyncJobCheckInResponse = z.infer<typeof ConnectorSyncJobCheckInResponse>;
//# sourceMappingURL=connector_sync_job_check_in.d.ts.map