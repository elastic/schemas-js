import { z } from 'zod';
export declare const PutWorkflowsManagedWorkflowIdRequest: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PutWorkflowsManagedWorkflowIdRequest = z.infer<typeof PutWorkflowsManagedWorkflowIdRequest>;
//# sourceMappingURL=put_workflows_managed_workflow_id.d.ts.map