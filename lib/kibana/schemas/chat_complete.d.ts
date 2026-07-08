import { z } from 'zod';
export declare const Security_AI_Assistant_API_ChatMessageRole: z.ZodEnum<{
    user: "user";
    system: "system";
    assistant: "assistant";
}>;
export type Security_AI_Assistant_API_ChatMessageRole = z.infer<typeof Security_AI_Assistant_API_ChatMessageRole>;
export declare const Security_AI_Assistant_API_MessageData: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_AI_Assistant_API_MessageData = z.infer<typeof Security_AI_Assistant_API_MessageData>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_ChatMessage: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    fields_to_anonymize: z.ZodOptional<z.ZodArray<z.ZodString>>;
    role: z.ZodEnum<{
        user: "user";
        system: "system";
        assistant: "assistant";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ChatMessage = z.infer<typeof Security_AI_Assistant_API_ChatMessage>;
export declare const Security_AI_Assistant_API_ChatCompleteProps: z.ZodObject<{
    connectorId: z.ZodString;
    conversationId: z.ZodOptional<z.ZodString>;
    isStream: z.ZodOptional<z.ZodBoolean>;
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    langSmithProject: z.ZodOptional<z.ZodString>;
    messages: z.ZodArray<z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        fields_to_anonymize: z.ZodOptional<z.ZodArray<z.ZodString>>;
        role: z.ZodEnum<{
            user: "user";
            system: "system";
            assistant: "assistant";
        }>;
    }, z.core.$strip>>;
    model: z.ZodOptional<z.ZodString>;
    persist: z.ZodBoolean;
    promptId: z.ZodOptional<z.ZodString>;
    responseLanguage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ChatCompleteProps = z.infer<typeof Security_AI_Assistant_API_ChatCompleteProps>;
//# sourceMappingURL=chat_complete.d.ts.map