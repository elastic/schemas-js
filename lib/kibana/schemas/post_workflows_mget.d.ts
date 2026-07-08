import { z } from 'zod';
export declare const PostWorkflowsMgetRequest: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
    source: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PostWorkflowsMgetRequest = z.infer<typeof PostWorkflowsMgetRequest>;
//# sourceMappingURL=post_workflows_mget.d.ts.map