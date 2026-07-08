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
 * Stop rollup jobs.
 *
 * If you try to stop a job that does not exist, an exception occurs.
 * If you try to stop a job that is already stopped, nothing happens.
 *
 * Since only a stopped job can be deleted, it can be useful to block the API until the indexer has fully stopped.
 * This is accomplished with the `wait_for_completion` query parameter, and optionally a timeout. For example:
 *
 * ```
 * POST _rollup/job/sensor/_stop?wait_for_completion=true&timeout=10s
 * ```
 * The parameter blocks the API call from returning until either the job has moved to STOPPED or the specified time has elapsed.
 * If the specified time elapses without the job moving to STOPPED, a timeout exception occurs.
 * @deprecated
 */
export declare const RollupStopJobRequest: z.ZodObject<{
    id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type RollupStopJobRequest = z.infer<typeof RollupStopJobRequest>;
export declare const RollupStopJobResponse: z.ZodObject<{
    stopped: z.ZodBoolean;
}, z.core.$strip>;
export type RollupStopJobResponse = z.infer<typeof RollupStopJobResponse>;
//# sourceMappingURL=rollup_stop_job.d.ts.map