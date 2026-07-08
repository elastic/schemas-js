import { z } from 'zod';
export declare const ReplyWarning: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReplyWarning = z.infer<typeof ReplyWarning>;
export declare const DeploymentResourceCommandResponse: z.ZodObject<{
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentResourceCommandResponse = z.infer<typeof DeploymentResourceCommandResponse>;
//# sourceMappingURL=stop_deployment_resource_maintenance_mode.d.ts.map