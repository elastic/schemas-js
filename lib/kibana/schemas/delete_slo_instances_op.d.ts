import { z } from 'zod';
export declare const SLOs_delete_slo_instances_request: z.ZodObject<{
    list: z.ZodArray<z.ZodObject<{
        instanceId: z.ZodString;
        sloId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SLOs_delete_slo_instances_request = z.infer<typeof SLOs_delete_slo_instances_request>;
//# sourceMappingURL=delete_slo_instances_op.d.ts.map