import { z } from 'zod';
export declare const SLOs_bulk_delete_status_response: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    isDone: z.ZodOptional<z.ZodBoolean>;
    results: z.ZodOptional<z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        success: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SLOs_bulk_delete_status_response = z.infer<typeof SLOs_bulk_delete_status_response>;
//# sourceMappingURL=bulk_delete_status_op.d.ts.map