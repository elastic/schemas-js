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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Stop snapshot lifecycle management.
 *
 * Stop all snapshot lifecycle management (SLM) operations and the SLM plugin.
 * This API is useful when you are performing maintenance on a cluster and need to prevent SLM from performing any actions on your data streams or indices.
 * Stopping SLM does not stop any snapshots that are in progress.
 * You can manually trigger snapshots with the run snapshot lifecycle policy API even if SLM is stopped.
 *
 * The API returns a response as soon as the request is acknowledged, but the plugin might continue to run until in-progress operations complete and it can be safely stopped.
 * Use the get snapshot lifecycle management status API to see if SLM is running.
 */
export declare const SlmStopRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SlmStopRequest = z.infer<typeof SlmStopRequest>;
export declare const SlmStopResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SlmStopResponse = z.infer<typeof SlmStopResponse>;
//# sourceMappingURL=slm_stop.d.ts.map