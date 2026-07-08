import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const StreamResult: z.ZodCustom<ArrayBuffer, ArrayBuffer>;
export type StreamResult = z.infer<typeof StreamResult>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/** The base reasoning detail that includes common fields across different types of reasoning details. */
export declare const InferenceBaseReasoningDetail: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceBaseReasoningDetail = z.infer<typeof InferenceBaseReasoningDetail>;
/** The completion tool function definition. */
export declare const InferenceCompletionToolFunction: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    parameters: z.ZodOptional<z.ZodAny>;
    strict: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InferenceCompletionToolFunction = z.infer<typeof InferenceCompletionToolFunction>;
/** A list of tools that the model can call. */
export declare const InferenceCompletionTool: z.ZodObject<{
    type: z.ZodString;
    function: z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        parameters: z.ZodOptional<z.ZodAny>;
        strict: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferenceCompletionTool = z.infer<typeof InferenceCompletionTool>;
/** The tool choice function. */
export declare const InferenceCompletionToolChoiceFunction: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type InferenceCompletionToolChoiceFunction = z.infer<typeof InferenceCompletionToolChoiceFunction>;
/** Controls which tool is called by the model. */
export declare const InferenceCompletionToolChoice: z.ZodObject<{
    type: z.ZodString;
    function: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferenceCompletionToolChoice = z.infer<typeof InferenceCompletionToolChoice>;
export declare const InferenceCompletionToolType: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    type: z.ZodString;
    function: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type InferenceCompletionToolType = z.infer<typeof InferenceCompletionToolType>;
export declare const InferenceContentType: z.ZodEnum<{
    text: "text";
    file: "file";
    image_url: "image_url";
}>;
export type InferenceContentType = z.infer<typeof InferenceContentType>;
export declare const InferenceImageUrlDetail: z.ZodEnum<{
    high: "high";
    low: "low";
    auto: "auto";
}>;
export type InferenceImageUrlDetail = z.infer<typeof InferenceImageUrlDetail>;
export declare const InferenceImageUrl: z.ZodObject<{
    url: z.ZodString;
    detail: z.ZodOptional<z.ZodEnum<{
        high: "high";
        low: "low";
        auto: "auto";
    }>>;
}, z.core.$strip>;
export type InferenceImageUrl = z.infer<typeof InferenceImageUrl>;
export declare const InferenceFileContent: z.ZodObject<{
    file_data: z.ZodString;
    filename: z.ZodString;
}, z.core.$strip>;
export type InferenceFileContent = z.infer<typeof InferenceFileContent>;
/** An object style representation of a single portion of a conversation. */
export declare const InferenceContentObject: z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        file: "file";
        image_url: "image_url";
    }>;
    text: z.ZodString;
    image_url: z.ZodObject<{
        url: z.ZodString;
        detail: z.ZodOptional<z.ZodEnum<{
            high: "high";
            low: "low";
            auto: "auto";
        }>>;
    }, z.core.$strip>;
    file: z.ZodObject<{
        file_data: z.ZodString;
        filename: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferenceContentObject = z.infer<typeof InferenceContentObject>;
/** The reasoning detail with encrypted reasoning data that may be redacted or protected. */
export declare const InferenceEncryptedReasoningDetail: z.ZodObject<{
    type: z.ZodLiteral<"reasoning.encrypted">;
    data: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceEncryptedReasoningDetail = z.infer<typeof InferenceEncryptedReasoningDetail>;
export declare const InferenceMessageContent: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        file: "file";
        image_url: "image_url";
    }>;
    text: z.ZodString;
    image_url: z.ZodObject<{
        url: z.ZodString;
        detail: z.ZodOptional<z.ZodEnum<{
            high: "high";
            low: "low";
            auto: "auto";
        }>>;
    }, z.core.$strip>;
    file: z.ZodObject<{
        file_data: z.ZodString;
        filename: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>>]>;
export type InferenceMessageContent = z.infer<typeof InferenceMessageContent>;
/** The function that the model called. */
export declare const InferenceToolCallFunction: z.ZodObject<{
    arguments: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type InferenceToolCallFunction = z.infer<typeof InferenceToolCallFunction>;
/** A tool call generated by the model. */
export declare const InferenceToolCall: z.ZodObject<{
    id: z.ZodString;
    function: z.ZodObject<{
        arguments: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type InferenceToolCall = z.infer<typeof InferenceToolCall>;
/** The reasoning summary detail includes a high-level summary of the model's reasoning process. */
export declare const InferenceSummaryReasoningDetail: z.ZodObject<{
    type: z.ZodLiteral<"reasoning.summary">;
    summary: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceSummaryReasoningDetail = z.infer<typeof InferenceSummaryReasoningDetail>;
/** The reasoning text detail includes plaintext reasoning with optional signature verification. */
export declare const InferenceTextReasoningDetail: z.ZodObject<{
    type: z.ZodLiteral<"reasoning.text">;
    signature: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceTextReasoningDetail = z.infer<typeof InferenceTextReasoningDetail>;
/**
 * Type representing the different types of reasoning details that can be included in the response from the model.
 * Currently supported only for `elastic` provider.
 */
export declare const InferenceReasoningDetail: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"reasoning.encrypted">;
    data: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reasoning.summary">;
    summary: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reasoning.text">;
    signature: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export type InferenceReasoningDetail = z.infer<typeof InferenceReasoningDetail>;
/** An object representing part of the conversation. */
export declare const InferenceMessage: z.ZodObject<{
    content: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            file: "file";
            image_url: "image_url";
        }>;
        text: z.ZodString;
        image_url: z.ZodObject<{
            url: z.ZodString;
            detail: z.ZodOptional<z.ZodEnum<{
                high: "high";
                low: "low";
                auto: "auto";
            }>>;
        }, z.core.$strip>;
        file: z.ZodObject<{
            file_data: z.ZodString;
            filename: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>]>>;
    role: z.ZodString;
    tool_call_id: z.ZodOptional<z.ZodString>;
    tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        function: z.ZodObject<{
            arguments: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>;
        type: z.ZodString;
    }, z.core.$strip>>>;
    reasoning: z.ZodOptional<z.ZodString>;
    reasoning_details: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"reasoning.encrypted">;
        data: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning.summary">;
        summary: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reasoning.text">;
        signature: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        index: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
export type InferenceMessage = z.infer<typeof InferenceMessage>;
export declare const InferenceReasoningEffort: z.ZodEnum<{
    none: "none";
    high: "high";
    low: "low";
    xhigh: "xhigh";
    medium: "medium";
    minimal: "minimal";
}>;
export type InferenceReasoningEffort = z.infer<typeof InferenceReasoningEffort>;
export declare const InferenceReasoningSummary: z.ZodEnum<{
    detailed: "detailed";
    auto: "auto";
    concise: "concise";
}>;
export type InferenceReasoningSummary = z.infer<typeof InferenceReasoningSummary>;
/**
 * The reasoning configuration to use for the completion request.
 * Currently supported only for `elastic` provider.
 */
export declare const InferenceReasoning: z.ZodObject<{
    effort: z.ZodOptional<z.ZodEnum<{
        none: "none";
        high: "high";
        low: "low";
        xhigh: "xhigh";
        medium: "medium";
        minimal: "minimal";
    }>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    exclude: z.ZodOptional<z.ZodBoolean>;
    summary: z.ZodOptional<z.ZodEnum<{
        detailed: "detailed";
        auto: "auto";
        concise: "concise";
    }>>;
}, z.core.$strip>;
export type InferenceReasoning = z.infer<typeof InferenceReasoning>;
export declare const InferenceRequestChatCompletion: z.ZodObject<{
    messages: z.ZodArray<z.ZodObject<{
        content: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                file: "file";
                image_url: "image_url";
            }>;
            text: z.ZodString;
            image_url: z.ZodObject<{
                url: z.ZodString;
                detail: z.ZodOptional<z.ZodEnum<{
                    high: "high";
                    low: "low";
                    auto: "auto";
                }>>;
            }, z.core.$strip>;
            file: z.ZodObject<{
                file_data: z.ZodString;
                filename: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>]>>;
        role: z.ZodString;
        tool_call_id: z.ZodOptional<z.ZodString>;
        tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            function: z.ZodObject<{
                arguments: z.ZodString;
                name: z.ZodString;
            }, z.core.$strip>;
            type: z.ZodString;
        }, z.core.$strip>>>;
        reasoning: z.ZodOptional<z.ZodString>;
        reasoning_details: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"reasoning.encrypted">;
            data: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"reasoning.summary">;
            summary: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"reasoning.text">;
            signature: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            index: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>]>>>;
    }, z.core.$strip>>;
    model: z.ZodOptional<z.ZodString>;
    max_completion_tokens: z.ZodOptional<z.ZodNumber>;
    reasoning: z.ZodOptional<z.ZodObject<{
        effort: z.ZodOptional<z.ZodEnum<{
            none: "none";
            high: "high";
            low: "low";
            xhigh: "xhigh";
            medium: "medium";
            minimal: "minimal";
        }>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        exclude: z.ZodOptional<z.ZodBoolean>;
        summary: z.ZodOptional<z.ZodEnum<{
            detailed: "detailed";
            auto: "auto";
            concise: "concise";
        }>>;
    }, z.core.$strip>>;
    stop: z.ZodOptional<z.ZodArray<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    tool_choice: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        type: z.ZodString;
        function: z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        function: z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            parameters: z.ZodOptional<z.ZodAny>;
            strict: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    top_p: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRequestChatCompletion = z.infer<typeof InferenceRequestChatCompletion>;
/**
 * Perform chat completion inference on the service.
 *
 * The chat completion inference API enables real-time responses for chat completion tasks by delivering answers incrementally, reducing response times during computation.
 * It only works with the `chat_completion` task type.
 *
 * NOTE: The `chat_completion` task type is only available within the _stream API and only supports streaming.
 * The Chat completion inference API and the Stream inference API differ in their response structure and capabilities.
 * The Chat completion inference API provides more comprehensive customization options through more fields and function calling support.
 * To determine whether a given inference service supports this task type, please see the page for that service.
 */
export declare const InferenceChatCompletionUnifiedRequest: z.ZodObject<{
    inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    chat_completion_request: z.ZodObject<{
        messages: z.ZodArray<z.ZodObject<{
            content: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    file: "file";
                    image_url: "image_url";
                }>;
                text: z.ZodString;
                image_url: z.ZodObject<{
                    url: z.ZodString;
                    detail: z.ZodOptional<z.ZodEnum<{
                        high: "high";
                        low: "low";
                        auto: "auto";
                    }>>;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    file_data: z.ZodString;
                    filename: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>]>>;
            role: z.ZodString;
            tool_call_id: z.ZodOptional<z.ZodString>;
            tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                function: z.ZodObject<{
                    arguments: z.ZodString;
                    name: z.ZodString;
                }, z.core.$strip>;
                type: z.ZodString;
            }, z.core.$strip>>>;
            reasoning: z.ZodOptional<z.ZodString>;
            reasoning_details: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"reasoning.encrypted">;
                data: z.ZodString;
                format: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"reasoning.summary">;
                summary: z.ZodString;
                format: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"reasoning.text">;
                signature: z.ZodOptional<z.ZodString>;
                text: z.ZodOptional<z.ZodString>;
                format: z.ZodOptional<z.ZodString>;
                id: z.ZodOptional<z.ZodString>;
                index: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>]>>>;
        }, z.core.$strip>>;
        model: z.ZodOptional<z.ZodString>;
        max_completion_tokens: z.ZodOptional<z.ZodNumber>;
        reasoning: z.ZodOptional<z.ZodObject<{
            effort: z.ZodOptional<z.ZodEnum<{
                none: "none";
                high: "high";
                low: "low";
                xhigh: "xhigh";
                medium: "medium";
                minimal: "minimal";
            }>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            exclude: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodEnum<{
                detailed: "detailed";
                auto: "auto";
                concise: "concise";
            }>>;
        }, z.core.$strip>>;
        stop: z.ZodOptional<z.ZodArray<z.ZodString>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        tool_choice: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
            function: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>]>>;
        tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            function: z.ZodObject<{
                description: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                parameters: z.ZodOptional<z.ZodAny>;
                strict: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
        top_p: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferenceChatCompletionUnifiedRequest = z.infer<typeof InferenceChatCompletionUnifiedRequest>;
export declare const InferenceChatCompletionUnifiedResponse: z.ZodCustom<ArrayBuffer, ArrayBuffer>;
export type InferenceChatCompletionUnifiedResponse = z.infer<typeof InferenceChatCompletionUnifiedResponse>;
//# sourceMappingURL=inference_chat_completion_unified.d.ts.map