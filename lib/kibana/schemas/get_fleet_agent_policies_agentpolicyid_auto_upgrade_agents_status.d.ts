import { z } from 'zod';
export declare const GetFleetAgentPoliciesAgentpolicyidAutoUpgradeAgentsStatusResponse: z.ZodObject<{
    currentVersions: z.ZodArray<z.ZodObject<{
        agents: z.ZodNumber;
        failedUpgradeActionIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        failedUpgradeAgents: z.ZodNumber;
        inProgressUpgradeActionIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        inProgressUpgradeAgents: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strip>>;
    totalAgents: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetAgentPoliciesAgentpolicyidAutoUpgradeAgentsStatusResponse = z.infer<typeof GetFleetAgentPoliciesAgentpolicyidAutoUpgradeAgentsStatusResponse>;
//# sourceMappingURL=get_fleet_agent_policies_agentpolicyid_auto_upgrade_agents_status.d.ts.map