import { z } from 'zod';
export declare const PostWorkflowsWorkflowIdRunRequest: z.ZodObject<{
    inputs: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
}, z.core.$strip>;
export type PostWorkflowsWorkflowIdRunRequest = z.infer<typeof PostWorkflowsWorkflowIdRunRequest>;
//# sourceMappingURL=post_workflows_workflow_id_run.d.ts.map