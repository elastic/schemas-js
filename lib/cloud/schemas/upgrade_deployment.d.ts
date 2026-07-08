import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const UpgradeDeploymentRequest: z.ZodObject<{
    target_version: z.ZodString;
}, z.core.$strip>;
export type UpgradeDeploymentRequest = z.infer<typeof UpgradeDeploymentRequest>;
//# sourceMappingURL=upgrade_deployment.d.ts.map