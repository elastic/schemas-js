import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Force buffered data to be processed.
 *
 * The flush jobs API is only applicable when sending data for analysis using
 * the post data API. Depending on the content of the buffer, then it might
 * additionally calculate new results. Both flush and close operations are
 * similar, however the flush is more efficient if you are expecting to send
 * more data for analysis. When flushing, the job remains open and is available
 * to continue analyzing data. A close operation additionally prunes and
 * persists the model state to disk and the job must be opened again before
 * analyzing further data.
 * @deprecated Forcing any buffered data to be processed is deprecated, in a future major version a datafeed will be required.
 */
export declare const MlFlushJobRequest: z.ZodObject<{
    job_id: z.ZodString;
    advance_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    calc_interim: z.ZodOptional<z.ZodBoolean>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    skip_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlFlushJobRequest = z.infer<typeof MlFlushJobRequest>;
export declare const MlFlushJobResponse: z.ZodObject<{
    flushed: z.ZodBoolean;
    last_finalized_bucket_end: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlFlushJobResponse = z.infer<typeof MlFlushJobResponse>;
//# sourceMappingURL=ml_flush_job.d.ts.map