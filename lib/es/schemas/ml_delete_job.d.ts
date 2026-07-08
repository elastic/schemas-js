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
 * Delete an anomaly detection job.
 *
 * All job configuration, model state and results are deleted.
 * It is not currently possible to delete multiple jobs using wildcards or a
 * comma separated list. If you delete a job that has a datafeed, the request
 * first tries to delete the datafeed. This behavior is equivalent to calling
 * the delete datafeed API with the same timeout and force parameters as the
 * delete job request.
 */
export declare const MlDeleteJobRequest: z.ZodObject<{
    job_id: z.ZodString;
    force: z.ZodOptional<z.ZodBoolean>;
    delete_user_annotations: z.ZodOptional<z.ZodBoolean>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlDeleteJobRequest = z.infer<typeof MlDeleteJobRequest>;
export declare const MlDeleteJobResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteJobResponse = z.infer<typeof MlDeleteJobResponse>;
//# sourceMappingURL=ml_delete_job.d.ts.map