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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Close anomaly detection jobs.
 *
 * A job can be opened and closed multiple times throughout its lifecycle. A closed job cannot receive data or perform analysis operations, but you can still explore and navigate results.
 * When you close a job, it runs housekeeping tasks such as pruning the model history, flushing buffers, calculating final results and persisting the model snapshots. Depending upon the size of the job, it could take several minutes to close and the equivalent time to re-open. After it is closed, the job has a minimal overhead on the cluster except for maintaining its meta data. Therefore it is a best practice to close jobs that are no longer required to process data.
 * If you close an anomaly detection job whose datafeed is running, the request first tries to stop the datafeed. This behavior is equivalent to calling stop datafeed API with the same timeout and force parameters as the close job request.
 * When a datafeed that has a specified end date stops, it automatically closes its associated job.
 */
export declare const MlCloseJobRequest: z.ZodObject<{
    job_id: z.ZodString;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    force: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlCloseJobRequest = z.infer<typeof MlCloseJobRequest>;
export declare const MlCloseJobResponse: z.ZodObject<{
    closed: z.ZodBoolean;
}, z.core.$strip>;
export type MlCloseJobResponse = z.infer<typeof MlCloseJobResponse>;
//# sourceMappingURL=ml_close_job.d.ts.map