import { z } from 'zod';
export declare const GetRuntimeFieldDefaultResponse: z.ZodObject<{
    data_view: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{}, z.core.$strip>>>;
}, z.core.$strip>;
export type GetRuntimeFieldDefaultResponse = z.infer<typeof GetRuntimeFieldDefaultResponse>;
//# sourceMappingURL=get_runtime_field_default.d.ts.map