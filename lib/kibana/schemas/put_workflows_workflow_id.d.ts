import { z } from 'zod';
export declare const PutWorkflowsWorkflowIdRequest: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PutWorkflowsWorkflowIdRequest = z.infer<typeof PutWorkflowsWorkflowIdRequest>;
//# sourceMappingURL=put_workflows_workflow_id.d.ts.map