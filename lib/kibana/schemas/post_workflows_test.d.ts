import { z } from 'zod';
export declare const PostWorkflowsTestRequest: z.ZodObject<{
    inputs: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    workflowId: z.ZodOptional<z.ZodString>;
    workflowYaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PostWorkflowsTestRequest = z.infer<typeof PostWorkflowsTestRequest>;
//# sourceMappingURL=post_workflows_test.d.ts.map