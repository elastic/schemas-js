import { z } from 'zod';
export declare const CreateUpdateRuntimeFieldDefaultRequest: z.ZodObject<{
    name: z.ZodString;
    runtimeField: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type CreateUpdateRuntimeFieldDefaultRequest = z.infer<typeof CreateUpdateRuntimeFieldDefaultRequest>;
export declare const CreateUpdateRuntimeFieldDefaultResponse: z.ZodObject<{
    data_view: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{}, z.core.$strip>>>;
}, z.core.$strip>;
export type CreateUpdateRuntimeFieldDefaultResponse = z.infer<typeof CreateUpdateRuntimeFieldDefaultResponse>;
//# sourceMappingURL=create_update_runtime_field_default.d.ts.map