import { z } from 'zod';
export declare const PutAgentBuilderToolsToolidRequest: z.ZodObject<{
    configuration: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    description: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PutAgentBuilderToolsToolidRequest = z.infer<typeof PutAgentBuilderToolsToolidRequest>;
//# sourceMappingURL=put_agent_builder_tools_toolid.d.ts.map