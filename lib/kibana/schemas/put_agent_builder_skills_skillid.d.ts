import { z } from 'zod';
export declare const PutAgentBuilderSkillsSkillidRequest: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    referenced_content: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        name: z.ZodString;
        relativePath: z.ZodString;
    }, z.core.$strip>>>;
    tool_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PutAgentBuilderSkillsSkillidRequest = z.infer<typeof PutAgentBuilderSkillsSkillidRequest>;
//# sourceMappingURL=put_agent_builder_skills_skillid.d.ts.map