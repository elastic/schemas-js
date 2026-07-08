import { z } from 'zod';
export declare const PostAgentBuilderAgentsAgentIdConsumptionRequest: z.ZodObject<{
    has_warnings: z.ZodOptional<z.ZodBoolean>;
    search: z.ZodOptional<z.ZodString>;
    search_after: z.ZodOptional<z.ZodArray<z.ZodNullable<z.ZodUnknown>>>;
    size: z.ZodOptional<z.ZodNumber>;
    sort_field: z.ZodOptional<z.ZodEnum<{
        updated_at: "updated_at";
        total_tokens: "total_tokens";
        round_count: "round_count";
    }>>;
    sort_order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    usernames: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PostAgentBuilderAgentsAgentIdConsumptionRequest = z.infer<typeof PostAgentBuilderAgentsAgentIdConsumptionRequest>;
//# sourceMappingURL=post_agent_builder_agents_agent_id_consumption.d.ts.map