import { z } from 'zod';
export declare const PostAgentBuilderToolsExecuteRequest: z.ZodObject<{
    connector_id: z.ZodOptional<z.ZodString>;
    tool_id: z.ZodString;
    tool_params: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
}, z.core.$strip>;
export type PostAgentBuilderToolsExecuteRequest = z.infer<typeof PostAgentBuilderToolsExecuteRequest>;
//# sourceMappingURL=post_agent_builder_tools_execute.d.ts.map