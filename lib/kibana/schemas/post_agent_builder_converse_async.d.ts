import { z } from 'zod';
export declare const PostAgentBuilderConverseAsyncRequest: z.ZodObject<{
    _execution_mode: z.ZodOptional<z.ZodEnum<{
        local: "local";
        task_manager: "task_manager";
    }>>;
    action: z.ZodOptional<z.ZodEnum<{
        regenerate: "regenerate";
    }>>;
    agent_id: z.ZodOptional<z.ZodString>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        description: z.ZodOptional<z.ZodString>;
        group_id: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        type: z.ZodString;
    }, z.core.$strip>>>;
    browser_api_tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        schema: z.ZodNullable<z.ZodUnknown>;
    }, z.core.$strip>>>;
    capabilities: z.ZodOptional<z.ZodObject<{
        visualizations: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    configuration_overrides: z.ZodOptional<z.ZodObject<{
        instructions: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
            tool_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    connector_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversation_id: z.ZodOptional<z.ZodString>;
    execution_id: z.ZodOptional<z.ZodString>;
    inference_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    input: z.ZodOptional<z.ZodString>;
    prompts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        allow: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        authorized: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        answers: z.ZodArray<z.ZodObject<{
            choice: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            custom: z.ZodOptional<z.ZodString>;
            skipped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
export type PostAgentBuilderConverseAsyncRequest = z.infer<typeof PostAgentBuilderConverseAsyncRequest>;
//# sourceMappingURL=post_agent_builder_converse_async.d.ts.map