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
 * Start rollup jobs.
 *
 * If you try to start a job that does not exist, an exception occurs.
 * If you try to start a job that is already started, nothing happens.
 * @deprecated
 */
export declare const RollupStartJobRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type RollupStartJobRequest = z.infer<typeof RollupStartJobRequest>;
export declare const RollupStartJobResponse: z.ZodObject<{
    started: z.ZodBoolean;
}, z.core.$strip>;
export type RollupStartJobResponse = z.infer<typeof RollupStartJobResponse>;
//# sourceMappingURL=rollup_start_job.d.ts.map