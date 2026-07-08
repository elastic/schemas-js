import { z } from 'zod';
export declare const DeploymentUpgradeAssistantStatusResponse: z.ZodObject<{
    ready_for_upgrade: z.ZodBoolean;
    details: z.ZodString;
}, z.core.$strip>;
export type DeploymentUpgradeAssistantStatusResponse = z.infer<typeof DeploymentUpgradeAssistantStatusResponse>;
//# sourceMappingURL=get_deployment_upgrade_assistant_status.d.ts.map