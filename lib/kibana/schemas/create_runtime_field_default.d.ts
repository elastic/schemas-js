import { z } from 'zod';
export declare const CreateRuntimeFieldDefaultRequest: z.ZodObject<{
    name: z.ZodString;
    runtimeField: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type CreateRuntimeFieldDefaultRequest = z.infer<typeof CreateRuntimeFieldDefaultRequest>;
export declare const CreateRuntimeFieldDefaultResponse: z.ZodObject<{}, z.core.$strip>;
export type CreateRuntimeFieldDefaultResponse = z.infer<typeof CreateRuntimeFieldDefaultResponse>;
//# sourceMappingURL=create_runtime_field_default.d.ts.map