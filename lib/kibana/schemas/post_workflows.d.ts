import { z } from 'zod';
export declare const PostWorkflowsRequest: z.ZodObject<{
    workflows: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        yaml: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PostWorkflowsRequest = z.infer<typeof PostWorkflowsRequest>;
//# sourceMappingURL=post_workflows.d.ts.map