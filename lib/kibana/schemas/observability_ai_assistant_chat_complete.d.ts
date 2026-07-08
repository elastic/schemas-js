import { z } from 'zod';
export declare const Observability_AI_Assistant_API_MessageRoleEnum: z.ZodEnum<{
    function: "function";
    elastic: "elastic";
    user: "user";
    system: "system";
    assistant: "assistant";
}>;
export type Observability_AI_Assistant_API_MessageRoleEnum = z.infer<typeof Observability_AI_Assistant_API_MessageRoleEnum>;
export declare const Observability_AI_Assistant_API_FunctionCall: z.ZodObject<{
    arguments: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    trigger: z.ZodEnum<{
        elastic: "elastic";
        user: "user";
        assistant: "assistant";
    }>;
}, z.core.$strip>;
export type Observability_AI_Assistant_API_FunctionCall = z.infer<typeof Observability_AI_Assistant_API_FunctionCall>;
export declare const Observability_AI_Assistant_API_Instruction: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
}, z.core.$strip>]>;
export type Observability_AI_Assistant_API_Instruction = z.infer<typeof Observability_AI_Assistant_API_Instruction>;
export declare const Observability_AI_Assistant_API_Function: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type Observability_AI_Assistant_API_Function = z.infer<typeof Observability_AI_Assistant_API_Function>;
export declare const Observability_AI_Assistant_API_Message: z.ZodObject<{
    '@timestamp': z.ZodString;
    message: z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
        data: z.ZodOptional<z.ZodString>;
        event: z.ZodOptional<z.ZodString>;
        function_call: z.ZodOptional<z.ZodObject<{
            arguments: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            trigger: z.ZodEnum<{
                elastic: "elastic";
                user: "user";
                assistant: "assistant";
            }>;
        }, z.core.$strip>>;
        name: z.ZodOptional<z.ZodString>;
        role: z.ZodEnum<{
            function: "function";
            elastic: "elastic";
            user: "user";
            system: "system";
            assistant: "assistant";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Observability_AI_Assistant_API_Message = z.infer<typeof Observability_AI_Assistant_API_Message>;
export declare const ObservabilityAiAssistantChatCompleteRequest: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        parameters: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
    connectorId: z.ZodString;
    conversationId: z.ZodOptional<z.ZodString>;
    disableFunctions: z.ZodOptional<z.ZodBoolean>;
    instructions: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.core.$strip>]>>>;
    messages: z.ZodArray<z.ZodObject<{
        '@timestamp': z.ZodString;
        message: z.ZodObject<{
            content: z.ZodOptional<z.ZodString>;
            data: z.ZodOptional<z.ZodString>;
            event: z.ZodOptional<z.ZodString>;
            function_call: z.ZodOptional<z.ZodObject<{
                arguments: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                trigger: z.ZodEnum<{
                    elastic: "elastic";
                    user: "user";
                    assistant: "assistant";
                }>;
            }, z.core.$strip>>;
            name: z.ZodOptional<z.ZodString>;
            role: z.ZodEnum<{
                function: "function";
                elastic: "elastic";
                user: "user";
                system: "system";
                assistant: "assistant";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    persist: z.ZodBoolean;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ObservabilityAiAssistantChatCompleteRequest = z.infer<typeof ObservabilityAiAssistantChatCompleteRequest>;
export declare const ObservabilityAiAssistantChatCompleteResponse: z.ZodObject<{}, z.core.$strip>;
export type ObservabilityAiAssistantChatCompleteResponse = z.infer<typeof ObservabilityAiAssistantChatCompleteResponse>;
//# sourceMappingURL=observability_ai_assistant_chat_complete.d.ts.map