import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_agent_policy_outputs_response: z.ZodObject<{
    item: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_agent_policy_outputs_response = z.infer<typeof Kibana_HTTP_APIs_get_agent_policy_outputs_response>;
//# sourceMappingURL=get_fleet_agent_policies_agentpolicyid_outputs.d.ts.map