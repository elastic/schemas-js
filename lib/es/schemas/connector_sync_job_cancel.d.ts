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
export declare const Result: z.ZodEnum<{
    created: "created";
    deleted: "deleted";
    not_found: "not_found";
    updated: "updated";
    noop: "noop";
}>;
export type Result = z.infer<typeof Result>;
/**
 * Cancel a connector sync job.
 *
 * Cancel a connector sync job, which sets the status to cancelling and updates `cancellation_requested_at` to the current time.
 * The connector service is then responsible for setting the status of connector sync jobs to cancelled.
 */
export declare const ConnectorSyncJobCancelRequest: z.ZodObject<{
    connector_sync_job_id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobCancelRequest = z.infer<typeof ConnectorSyncJobCancelRequest>;
export declare const ConnectorSyncJobCancelResponse: z.ZodObject<{
    result: z.ZodEnum<{
        created: "created";
        deleted: "deleted";
        not_found: "not_found";
        updated: "updated";
        noop: "noop";
    }>;
}, z.core.$strip>;
export type ConnectorSyncJobCancelResponse = z.infer<typeof ConnectorSyncJobCancelResponse>;
//# sourceMappingURL=connector_sync_job_cancel.d.ts.map