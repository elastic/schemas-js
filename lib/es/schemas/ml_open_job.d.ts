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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Open anomaly detection jobs.
 *
 * An anomaly detection job must be opened to be ready to receive and analyze
 * data. It can be opened and closed multiple times throughout its lifecycle.
 * When you open a new job, it starts with an empty model.
 * When you open an existing job, the most recent model state is automatically
 * loaded. The job is ready to resume its analysis from where it left off, once
 * new data is received.
 */
export declare const MlOpenJobRequest: z.ZodObject<{
    job_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlOpenJobRequest = z.infer<typeof MlOpenJobRequest>;
export declare const MlOpenJobResponse: z.ZodObject<{
    opened: z.ZodBoolean;
    node: z.ZodString;
}, z.core.$strip>;
export type MlOpenJobResponse = z.infer<typeof MlOpenJobResponse>;
//# sourceMappingURL=ml_open_job.d.ts.map