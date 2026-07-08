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
 * Enable a named stream.
 *
 * Turn on the named stream feature for this cluster.
 *
 * NOTE: To protect existing data, this feature can be turned on only if the cluster does not have
 * existing indices or data streams that match the pattern `<name>|<name>.*` for the enabled stream
 * type name. If those indices or data streams exist, a `409 - Conflict` response and error is
 * returned.
 */
export declare const StreamsLogsEnableRequest: z.ZodObject<{
    name: z.ZodEnum<{
        logs: "logs";
        "logs.otel": "logs.otel";
        "logs.ecs": "logs.ecs";
    }>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type StreamsLogsEnableRequest = z.infer<typeof StreamsLogsEnableRequest>;
export declare const StreamsLogsEnableResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type StreamsLogsEnableResponse = z.infer<typeof StreamsLogsEnableResponse>;
//# sourceMappingURL=streams_logs_enable.d.ts.map