import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const TaskFailure: z.ZodObject<{
    task_id: z.ZodNumber;
    node_id: z.ZodString;
    status: z.ZodString;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
}, z.core.$strip>;
export type TaskFailure = z.infer<typeof TaskFailure>;
/**
 * Delete a rollup job.
 *
 * A job must be stopped before it can be deleted.
 * If you attempt to delete a started job, an error occurs.
 * Similarly, if you attempt to delete a nonexistent job, an exception occurs.
 *
 * IMPORTANT: When you delete a job, you remove only the process that is actively monitoring and rolling up data.
 * The API does not delete any previously rolled up data.
 * This is by design; a user may wish to roll up a static data set.
 * Because the data set is static, after it has been fully rolled up there is no need to keep the indexing rollup job around (as there will be no new data).
 * Thus the job can be deleted, leaving behind the rolled up data for analysis.
 * If you wish to also remove the rollup data and the rollup index contains the data for only a single job, you can delete the whole rollup index.
 * If the rollup index stores data from several jobs, you must issue a delete-by-query that targets the rollup job's identifier in the rollup index. For example:
 *
 * ```
 * POST my_rollup_index/_delete_by_query
 * {
 *   "query": {
 *     "term": {
 *       "_rollup.id": "the_rollup_job_id"
 *     }
 *   }
 * }
 * ```
 * @deprecated
 */
export declare const RollupDeleteJobRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type RollupDeleteJobRequest = z.infer<typeof RollupDeleteJobRequest>;
export declare const RollupDeleteJobResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    task_failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        task_id: z.ZodNumber;
        node_id: z.ZodString;
        status: z.ZodString;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type RollupDeleteJobResponse = z.infer<typeof RollupDeleteJobResponse>;
//# sourceMappingURL=rollup_delete_job.d.ts.map