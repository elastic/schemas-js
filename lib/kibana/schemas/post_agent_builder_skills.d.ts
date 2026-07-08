import { z } from 'zod';
export declare const PostAgentBuilderSkillsRequest: z.ZodObject<{
    content: z.ZodString;
    description: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    referenced_content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        name: z.ZodString;
        relativePath: z.ZodString;
    }, z.core.$strip>>>;
    tool_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PostAgentBuilderSkillsRequest = z.infer<typeof PostAgentBuilderSkillsRequest>;
//# sourceMappingURL=post_agent_builder_skills.d.ts.map