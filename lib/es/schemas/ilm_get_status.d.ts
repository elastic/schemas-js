import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const LifecycleOperationMode: z.ZodEnum<{
    STOPPING: "STOPPING";
    STOPPED: "STOPPED";
    RUNNING: "RUNNING";
}>;
export type LifecycleOperationMode = z.infer<typeof LifecycleOperationMode>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get the ILM status.
 *
 * Get the current index lifecycle management status.
 */
export declare const IlmGetStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type IlmGetStatusRequest = z.infer<typeof IlmGetStatusRequest>;
export declare const IlmGetStatusResponse: z.ZodObject<{
    operation_mode: z.ZodEnum<{
        STOPPING: "STOPPING";
        STOPPED: "STOPPED";
        RUNNING: "RUNNING";
    }>;
}, z.core.$strip>;
export type IlmGetStatusResponse = z.infer<typeof IlmGetStatusResponse>;
//# sourceMappingURL=ilm_get_status.d.ts.map