import { z } from 'zod';
export declare const Kibana_HTTP_APIs_delete_agent_policy_response: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_delete_agent_policy_response = z.infer<typeof Kibana_HTTP_APIs_delete_agent_policy_response>;
export declare const Kibana_HTTP_APIs_delete_agent_policy_request: z.ZodObject<{
    agentPolicyId: z.ZodString;
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_delete_agent_policy_request = z.infer<typeof Kibana_HTTP_APIs_delete_agent_policy_request>;
//# sourceMappingURL=post_fleet_agent_policies_delete.d.ts.map