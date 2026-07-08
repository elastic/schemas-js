import { z } from 'zod';
export declare const PostAgentBuilderConversationsConversationIdAttachmentsRequest: z.ZodObject<{
    data: z.ZodNullable<z.ZodUnknown>;
    description: z.ZodOptional<z.ZodString>;
    hidden: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodOptional<z.ZodString>;
    origin: z.ZodOptional<z.ZodString>;
    type: z.ZodString;
}, z.core.$strip>;
export type PostAgentBuilderConversationsConversationIdAttachmentsRequest = z.infer<typeof PostAgentBuilderConversationsConversationIdAttachmentsRequest>;
//# sourceMappingURL=post_agent_builder_conversations_conversation_id_attachments.d.ts.map