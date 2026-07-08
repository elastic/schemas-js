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
export declare const StreamsStreamType: z.ZodEnum<{
    logs: "logs";
    "logs.otel": "logs.otel";
    "logs.ecs": "logs.ecs";
}>;
export type StreamsStreamType = z.infer<typeof StreamsStreamType>;
/**
 * Disable a named stream.
 *
 * Turn off the named stream feature for this cluster.
 */
export declare const StreamsLogsDisableRequest: z.ZodObject<{
    name: z.ZodEnum<{
        logs: "logs";
        "logs.otel": "logs.otel";
        "logs.ecs": "logs.ecs";
    }>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type StreamsLogsDisableRequest = z.infer<typeof StreamsLogsDisableRequest>;
export declare const StreamsLogsDisableResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type StreamsLogsDisableResponse = z.infer<typeof StreamsLogsDisableResponse>;
//# sourceMappingURL=streams_logs_disable.d.ts.map