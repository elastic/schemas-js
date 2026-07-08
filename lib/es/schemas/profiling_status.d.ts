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
export declare const ProfilingStatusProfilingOperationMode: z.ZodEnum<{
    STOPPING: "STOPPING";
    STOPPED: "STOPPED";
    RUNNING: "RUNNING";
}>;
export type ProfilingStatusProfilingOperationMode = z.infer<typeof ProfilingStatusProfilingOperationMode>;
/** Returns basic information about the status of Universal Profiling. */
export declare const ProfilingStatusRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_resources_created: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ProfilingStatusRequest = z.infer<typeof ProfilingStatusRequest>;
export declare const ProfilingStatusResponse: z.ZodObject<{
    operation_mode: z.ZodEnum<{
        STOPPING: "STOPPING";
        STOPPED: "STOPPED";
        RUNNING: "RUNNING";
    }>;
}, z.core.$strip>;
export type ProfilingStatusResponse = z.infer<typeof ProfilingStatusResponse>;
//# sourceMappingURL=profiling_status.d.ts.map