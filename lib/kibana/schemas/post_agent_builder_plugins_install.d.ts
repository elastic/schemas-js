import { z } from 'zod';
export declare const PostAgentBuilderPluginsInstallRequest: z.ZodObject<{
    plugin_name: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
}, z.core.$strip>;
export type PostAgentBuilderPluginsInstallRequest = z.infer<typeof PostAgentBuilderPluginsInstallRequest>;
//# sourceMappingURL=post_agent_builder_plugins_install.d.ts.map