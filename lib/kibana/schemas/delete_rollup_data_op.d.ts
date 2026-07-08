import { z } from 'zod';
export declare const SLOs_bulk_purge_rollup_response: z.ZodObject<{
    taskId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SLOs_bulk_purge_rollup_response = z.infer<typeof SLOs_bulk_purge_rollup_response>;
export declare const SLOs_bulk_purge_rollup_request: z.ZodObject<{
    list: z.ZodArray<z.ZodString>;
    purgePolicy: z.ZodUnion<readonly [z.ZodObject<{
        age: z.ZodOptional<z.ZodString>;
        purgeType: z.ZodOptional<z.ZodEnum<{
            "fixed-age": "fixed-age";
        }>>;
    }, z.core.$strip>, z.ZodObject<{
        purgeType: z.ZodOptional<z.ZodEnum<{
            "fixed-time": "fixed-time";
        }>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>;
}, z.core.$strip>;
export type SLOs_bulk_purge_rollup_request = z.infer<typeof SLOs_bulk_purge_rollup_request>;
//# sourceMappingURL=delete_rollup_data_op.d.ts.map