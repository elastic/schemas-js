import { z } from 'zod';
export declare const APM_UI_annotation_search_response: z.ZodObject<{
    annotations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<{
            version: "version";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type APM_UI_annotation_search_response = z.infer<typeof APM_UI_annotation_search_response>;
//# sourceMappingURL=get_annotation.d.ts.map