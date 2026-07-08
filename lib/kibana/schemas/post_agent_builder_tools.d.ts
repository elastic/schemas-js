import { z } from 'zod';
export declare const PostAgentBuilderToolsRequest: z.ZodObject<{
    configuration: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    description: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type: z.ZodEnum<{
        esql: "esql";
        index_search: "index_search";
        workflow: "workflow";
        mcp: "mcp";
    }>;
}, z.core.$strip>;
export type PostAgentBuilderToolsRequest = z.infer<typeof PostAgentBuilderToolsRequest>;
//# sourceMappingURL=post_agent_builder_tools.d.ts.map