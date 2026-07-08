import { z } from 'zod';
export declare const SetDefaultDatailViewDefaultRequest: z.ZodObject<{
    data_view_id: z.ZodNullable<z.ZodString>;
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SetDefaultDatailViewDefaultRequest = z.infer<typeof SetDefaultDatailViewDefaultRequest>;
export declare const SetDefaultDatailViewDefaultResponse: z.ZodObject<{
    acknowledged: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SetDefaultDatailViewDefaultResponse = z.infer<typeof SetDefaultDatailViewDefaultResponse>;
//# sourceMappingURL=set_default_datail_view_default.d.ts.map