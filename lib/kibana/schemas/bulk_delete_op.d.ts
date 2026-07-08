import { z } from 'zod';
export declare const SLOs_bulk_delete_response: z.ZodObject<{
    taskId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SLOs_bulk_delete_response = z.infer<typeof SLOs_bulk_delete_response>;
export declare const SLOs_bulk_delete_request: z.ZodObject<{
    list: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type SLOs_bulk_delete_request = z.infer<typeof SLOs_bulk_delete_request>;
//# sourceMappingURL=bulk_delete_op.d.ts.map