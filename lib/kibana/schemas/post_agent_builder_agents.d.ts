import { z } from 'zod';
export declare const PostAgentBuilderAgentsRequest: z.ZodObject<{
    avatar_color: z.ZodOptional<z.ZodString>;
    avatar_symbol: z.ZodOptional<z.ZodString>;
    configuration: z.ZodObject<{
        connector_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        enable_elastic_capabilities: z.ZodOptional<z.ZodBoolean>;
        instructions: z.ZodOptional<z.ZodString>;
        plugin_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        skill_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tools: z.ZodArray<z.ZodObject<{
            tool_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        workflow_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    description: z.ZodString;
    id: z.ZodString;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    name: z.ZodString;
    visibility: z.ZodOptional<z.ZodEnum<{
        shared: "shared";
        public: "public";
        private: "private";
    }>>;
}, z.core.$strip>;
export type PostAgentBuilderAgentsRequest = z.infer<typeof PostAgentBuilderAgentsRequest>;
//# sourceMappingURL=post_agent_builder_agents.d.ts.map