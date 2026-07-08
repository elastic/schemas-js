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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get the status of streams.
 *
 * Get the current status for all types of streams.
 */
export declare const StreamsStatusRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type StreamsStatusRequest = z.infer<typeof StreamsStatusRequest>;
export declare const StreamsStatusStreamStatus: z.ZodObject<{
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type StreamsStatusStreamStatus = z.infer<typeof StreamsStatusStreamStatus>;
export declare const StreamsStatusResponse: z.ZodObject<{
    logs: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    'logs.otel': z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    'logs.ecs': z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type StreamsStatusResponse = z.infer<typeof StreamsStatusResponse>;
//# sourceMappingURL=streams_status.d.ts.map