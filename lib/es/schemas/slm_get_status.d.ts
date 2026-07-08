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
export declare const LifecycleOperationMode: z.ZodEnum<{
    STOPPING: "STOPPING";
    STOPPED: "STOPPED";
    RUNNING: "RUNNING";
}>;
export type LifecycleOperationMode = z.infer<typeof LifecycleOperationMode>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Get the snapshot lifecycle management status. */
export declare const SlmGetStatusRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SlmGetStatusRequest = z.infer<typeof SlmGetStatusRequest>;
export declare const SlmGetStatusResponse: z.ZodObject<{
    operation_mode: z.ZodEnum<{
        STOPPING: "STOPPING";
        STOPPED: "STOPPED";
        RUNNING: "RUNNING";
    }>;
}, z.core.$strip>;
export type SlmGetStatusResponse = z.infer<typeof SlmGetStatusResponse>;
//# sourceMappingURL=slm_get_status.d.ts.map