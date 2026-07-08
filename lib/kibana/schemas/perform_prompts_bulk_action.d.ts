import { z } from 'zod';
export declare const Security_AI_Assistant_API_BulkCrudActionSummary: z.ZodObject<{
    failed: z.ZodNumber;
    skipped: z.ZodNumber;
    succeeded: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_BulkCrudActionSummary = z.infer<typeof Security_AI_Assistant_API_BulkCrudActionSummary>;
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
export declare const Security_AI_Assistant_API_PromptsBulkActionSkipReason: z.ZodEnum<{
    PROMPT_FIELD_NOT_MODIFIED: "PROMPT_FIELD_NOT_MODIFIED";
}>;
export type Security_AI_Assistant_API_PromptsBulkActionSkipReason = z.infer<typeof Security_AI_Assistant_API_PromptsBulkActionSkipReason>;
export declare const Security_AI_Assistant_API_PromptDetailsInError: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptDetailsInError = z.infer<typeof Security_AI_Assistant_API_PromptDetailsInError>;
export declare const Security_AI_Assistant_API_PromptUpdateProps: z.ZodObject<{
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    color: z.ZodOptional<z.ZodString>;
    consumer: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptUpdateProps = z.infer<typeof Security_AI_Assistant_API_PromptUpdateProps>;
export declare const Security_AI_Assistant_API_PromptCreateProps: z.ZodObject<{
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    color: z.ZodOptional<z.ZodString>;
    consumer: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    promptType: z.ZodEnum<{
        system: "system";
        quick: "quick";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptCreateProps = z.infer<typeof Security_AI_Assistant_API_PromptCreateProps>;
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
export declare const Security_AI_Assistant_API_PromptsBulkActionSkipResult: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    skip_reason: z.ZodEnum<{
        PROMPT_FIELD_NOT_MODIFIED: "PROMPT_FIELD_NOT_MODIFIED";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptsBulkActionSkipResult = z.infer<typeof Security_AI_Assistant_API_PromptsBulkActionSkipResult>;
export declare const Security_AI_Assistant_API_NormalizedPromptError: z.ZodObject<{
    err_code: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    prompts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    status_code: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_NormalizedPromptError = z.infer<typeof Security_AI_Assistant_API_NormalizedPromptError>;
export declare const Security_AI_Assistant_API_PromptsBulkCrudActionResults: z.ZodObject<{
    created: z.ZodArray<z.ZodObject<{
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
    deleted: z.ZodArray<z.ZodString>;
    skipped: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        skip_reason: z.ZodEnum<{
            PROMPT_FIELD_NOT_MODIFIED: "PROMPT_FIELD_NOT_MODIFIED";
        }>;
    }, z.core.$strip>>;
    updated: z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptsBulkCrudActionResults = z.infer<typeof Security_AI_Assistant_API_PromptsBulkCrudActionResults>;
export declare const Security_AI_Assistant_API_PromptsBulkCrudActionResponse: z.ZodObject<{
    attributes: z.ZodObject<{
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            err_code: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            prompts: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            status_code: z.ZodNumber;
        }, z.core.$strip>>>;
        results: z.ZodObject<{
            created: z.ZodArray<z.ZodObject<{
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
            deleted: z.ZodArray<z.ZodString>;
            skipped: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodEnum<{
                    PROMPT_FIELD_NOT_MODIFIED: "PROMPT_FIELD_NOT_MODIFIED";
                }>;
            }, z.core.$strip>>;
            updated: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    message: z.ZodOptional<z.ZodString>;
    prompts_count: z.ZodOptional<z.ZodNumber>;
    status_code: z.ZodOptional<z.ZodNumber>;
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_PromptsBulkCrudActionResponse = z.infer<typeof Security_AI_Assistant_API_PromptsBulkCrudActionResponse>;
export declare const PerformPromptsBulkActionRequest: z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        color: z.ZodOptional<z.ZodString>;
        consumer: z.ZodOptional<z.ZodString>;
        content: z.ZodString;
        isDefault: z.ZodOptional<z.ZodBoolean>;
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        promptType: z.ZodEnum<{
            system: "system";
            quick: "quick";
        }>;
    }, z.core.$strip>>>;
    delete: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        query: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        color: z.ZodOptional<z.ZodString>;
        consumer: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        isDefault: z.ZodOptional<z.ZodBoolean>;
        isNewConversationDefault: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type PerformPromptsBulkActionRequest = z.infer<typeof PerformPromptsBulkActionRequest>;
//# sourceMappingURL=perform_prompts_bulk_action.d.ts.map