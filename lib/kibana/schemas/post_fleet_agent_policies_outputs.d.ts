import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_list_agent_policy_outputs_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        agentPolicyId: z.ZodOptional<z.ZodString>;
        data: z.ZodObject<{
            integrations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                integrationPolicyName: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                pkgName: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            output: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
        monitoring: z.ZodObject<{
            output: z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_list_agent_policy_outputs_response = z.infer<typeof Kibana_HTTP_APIs_get_list_agent_policy_outputs_response>;
export declare const Kibana_HTTP_APIs_get_list_agent_policy_outputs_request: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_list_agent_policy_outputs_request = z.infer<typeof Kibana_HTTP_APIs_get_list_agent_policy_outputs_request>;
//# sourceMappingURL=post_fleet_agent_policies_outputs.d.ts.map