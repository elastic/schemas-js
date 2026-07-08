import { z } from 'zod';
export declare const ReplyWarning: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReplyWarning = z.infer<typeof ReplyWarning>;
export declare const IndexPattern: z.ZodObject<{
    index_pattern: z.ZodString;
    policy_name: z.ZodString;
    node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type IndexPattern = z.infer<typeof IndexPattern>;
export declare const DeploymentResourceCommandResponse: z.ZodObject<{
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentResourceCommandResponse = z.infer<typeof DeploymentResourceCommandResponse>;
export declare const EnableIlmRequest: z.ZodObject<{
    index_patterns: z.ZodArray<z.ZodObject<{
        index_pattern: z.ZodString;
        policy_name: z.ZodString;
        node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EnableIlmRequest = z.infer<typeof EnableIlmRequest>;
//# sourceMappingURL=enable_deployment_resource_ilm.d.ts.map