import { z } from 'zod';
export declare const PostWorkflowsStepTestRequest: z.ZodObject<{
    contextOverride: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    executionContext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    stepId: z.ZodString;
    workflowId: z.ZodOptional<z.ZodString>;
    workflowYaml: z.ZodString;
}, z.core.$strip>;
export type PostWorkflowsStepTestRequest = z.infer<typeof PostWorkflowsStepTestRequest>;
//# sourceMappingURL=post_workflows_step_test.d.ts.map