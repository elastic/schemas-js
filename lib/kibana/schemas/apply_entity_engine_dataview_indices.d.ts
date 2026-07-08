import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EngineDataviewUpdateResult: z.ZodObject<{
    changes: z.ZodOptional<z.ZodObject<{
        indexPatterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    type: z.ZodString;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_EngineDataviewUpdateResult = z.infer<typeof Security_Entity_Analytics_API_EngineDataviewUpdateResult>;
export declare const ApplyEntityEngineDataviewIndicesResponse200: z.ZodObject<{
    result: z.ZodOptional<z.ZodArray<z.ZodObject<{
        changes: z.ZodOptional<z.ZodObject<{
            indexPatterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        type: z.ZodString;
    }, z.core.$strip>>>;
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ApplyEntityEngineDataviewIndicesResponse200 = z.infer<typeof ApplyEntityEngineDataviewIndicesResponse200>;
export declare const ApplyEntityEngineDataviewIndicesResponse207: z.ZodObject<{
    errors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    result: z.ZodOptional<z.ZodArray<z.ZodObject<{
        changes: z.ZodOptional<z.ZodObject<{
            indexPatterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        type: z.ZodString;
    }, z.core.$strip>>>;
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ApplyEntityEngineDataviewIndicesResponse207 = z.infer<typeof ApplyEntityEngineDataviewIndicesResponse207>;
//# sourceMappingURL=apply_entity_engine_dataview_indices.d.ts.map