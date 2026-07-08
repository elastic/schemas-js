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
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
/**
 * Delete expired ML data.
 *
 * Delete all job results, model snapshots and forecast data that have exceeded
 * their retention days period. Machine learning state documents that are not
 * associated with any job are also deleted.
 * You can limit the request to a single or set of anomaly detection jobs by
 * using a job identifier, a group name, a comma-separated list of jobs, or a
 * wildcard expression. You can delete expired data for all anomaly detection
 * jobs by using `_all`, by specifying `*` as the `<job_id>`, or by omitting the
 * `<job_id>`.
 */
export declare const MlDeleteExpiredDataRequest: z.ZodObject<{
    job_id: z.ZodOptional<z.ZodString>;
    requests_per_second: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlDeleteExpiredDataRequest = z.infer<typeof MlDeleteExpiredDataRequest>;
export declare const MlDeleteExpiredDataResponse: z.ZodObject<{
    deleted: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteExpiredDataResponse = z.infer<typeof MlDeleteExpiredDataResponse>;
//# sourceMappingURL=ml_delete_expired_data.d.ts.map