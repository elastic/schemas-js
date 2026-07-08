import { z } from 'zod';
export declare const PutAgentBuilderAgentsIdRequest: z.ZodObject<{
    avatar_color: z.ZodOptional<z.ZodString>;
    avatar_symbol: z.ZodOptional<z.ZodString>;
    configuration: z.ZodOptional<z.ZodObject<{
        connector_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        enable_elastic_capabilities: z.ZodOptional<z.ZodBoolean>;
        instructions: z.ZodOptional<z.ZodString>;
        plugin_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        skill_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tool_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        workflow_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    description: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    name: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodEnum<{
        shared: "shared";
        public: "public";
        private: "private";
    }>>;
}, z.core.$strip>;
export type PutAgentBuilderAgentsIdRequest = z.infer<typeof PutAgentBuilderAgentsIdRequest>;
//# sourceMappingURL=put_agent_builder_agents_id.d.ts.map