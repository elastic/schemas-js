import { z } from 'zod';
export declare const GetAllDataViewsDefaultResponse: z.ZodObject<{
    data_view: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        title: z.ZodOptional<z.ZodString>;
        typeMeta: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type GetAllDataViewsDefaultResponse = z.infer<typeof GetAllDataViewsDefaultResponse>;
//# sourceMappingURL=get_all_data_views_default.d.ts.map