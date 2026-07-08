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
 * Reset an anomaly detection job.
 *
 * All model state and results are deleted. The job is ready to start over as if
 * it had just been created.
 * It is not currently possible to reset multiple jobs using wildcards or a
 * comma separated list.
 */
export declare const MlResetJobRequest: z.ZodObject<{
    job_id: z.ZodString;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
    delete_user_annotations: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlResetJobRequest = z.infer<typeof MlResetJobRequest>;
export declare const MlResetJobResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlResetJobResponse = z.infer<typeof MlResetJobResponse>;
//# sourceMappingURL=ml_reset_job.d.ts.map