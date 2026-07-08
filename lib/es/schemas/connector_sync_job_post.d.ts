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
export declare const ConnectorSyncJobTriggerMethod: z.ZodEnum<{
    on_demand: "on_demand";
    scheduled: "scheduled";
}>;
export type ConnectorSyncJobTriggerMethod = z.infer<typeof ConnectorSyncJobTriggerMethod>;
export declare const ConnectorSyncJobType: z.ZodEnum<{
    full: "full";
    incremental: "incremental";
    access_control: "access_control";
}>;
export type ConnectorSyncJobType = z.infer<typeof ConnectorSyncJobType>;
/**
 * Create a connector sync job.
 *
 * Create a connector sync job document in the internal index and initialize its counters and timestamps with default values.
 */
export declare const ConnectorSyncJobPostRequest: z.ZodObject<{
    id: z.ZodString;
    job_type: z.ZodOptional<z.ZodEnum<{
        full: "full";
        incremental: "incremental";
        access_control: "access_control";
    }>>;
    trigger_method: z.ZodOptional<z.ZodEnum<{
        on_demand: "on_demand";
        scheduled: "scheduled";
    }>>;
}, z.core.$strip>;
export type ConnectorSyncJobPostRequest = z.infer<typeof ConnectorSyncJobPostRequest>;
export declare const ConnectorSyncJobPostResponse: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type ConnectorSyncJobPostResponse = z.infer<typeof ConnectorSyncJobPostResponse>;
//# sourceMappingURL=connector_sync_job_post.d.ts.map