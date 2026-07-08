import { z } from 'zod';
export declare const APM_UI_create_annotation_response: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    _source: z.ZodOptional<z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodString>;
        annotation: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        event: z.ZodOptional<z.ZodObject<{
            created: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        message: z.ZodOptional<z.ZodString>;
        service: z.ZodOptional<z.ZodObject<{
            environment: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type APM_UI_create_annotation_response = z.infer<typeof APM_UI_create_annotation_response>;
export declare const APM_UI_create_annotation_object: z.ZodObject<{
    '@timestamp': z.ZodString;
    message: z.ZodOptional<z.ZodString>;
    service: z.ZodObject<{
        environment: z.ZodOptional<z.ZodString>;
        version: z.ZodString;
    }, z.core.$strip>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type APM_UI_create_annotation_object = z.infer<typeof APM_UI_create_annotation_object>;
//# sourceMappingURL=create_annotation.d.ts.map