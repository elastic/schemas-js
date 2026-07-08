import { z } from 'zod';
export declare const PutAgentBuilderAgentsIdAclRequest: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        role: z.ZodEnum<{
            user: "user";
            editor: "editor";
            manager: "manager";
        }>;
        type: z.ZodEnum<{
            user: "user";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PutAgentBuilderAgentsIdAclRequest = z.infer<typeof PutAgentBuilderAgentsIdAclRequest>;
//# sourceMappingURL=put_agent_builder_agents_id_acl.d.ts.map