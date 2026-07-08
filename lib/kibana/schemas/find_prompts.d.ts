import { z } from 'zod';
export declare const Security_AI_Assistant_API_User: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_User = z.infer<typeof Security_AI_Assistant_API_User>;
export declare const Security_AI_Assistant_API_NonEmptyTimestamp: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyTimestamp = z.infer<typeof Security_AI_Assistant_API_NonEmptyTimestamp>;
export declare const Security_AI_Assistant_API_PromptType: z.ZodEnum<{
    system: "system";
    quick: "quick";
}>;
export type Security_AI_Assistant_API_PromptType = z.infer<typeof Security_AI_Assistant_API_PromptType>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_PromptResponse: z.ZodObject<{
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    color: z.ZodOptional<z.ZodString>;
    consumer: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    createdAt: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    promptType: z.ZodEnum<{
        system: "system";
        quick: "quick";
    }>;
    timestamp: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptResponse = z.infer<typeof Security_AI_Assistant_API_PromptResponse>;
export declare const FindPromptsResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        color: z.ZodOptional<z.ZodString>;
        consumer: z.ZodOptional<z.ZodString>;
        content: z.ZodString;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        isDefault: z.ZodOptional<z.ZodBoolean>;
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        promptType: z.ZodEnum<{
            system: "system";
            quick: "quick";
        }>;
        timestamp: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type FindPromptsResponse = z.infer<typeof FindPromptsResponse>;
//# sourceMappingURL=find_prompts.d.ts.map