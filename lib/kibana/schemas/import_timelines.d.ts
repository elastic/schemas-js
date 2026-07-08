import { z } from 'zod';
export declare const Security_Timeline_API_ImportTimelineResult: z.ZodObject<{
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodOptional<z.ZodString>;
            status_code: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    success: z.ZodOptional<z.ZodBoolean>;
    success_count: z.ZodOptional<z.ZodNumber>;
    timelines_installed: z.ZodOptional<z.ZodNumber>;
    timelines_updated: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Timeline_API_ImportTimelineResult = z.infer<typeof Security_Timeline_API_ImportTimelineResult>;
export declare const ImportTimelinesRequest: z.ZodObject<{
    file: z.ZodUnknown;
    isImmutable: z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>;
}, z.core.$strip>;
export type ImportTimelinesRequest = z.infer<typeof ImportTimelinesRequest>;
//# sourceMappingURL=import_timelines.d.ts.map