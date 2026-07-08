import { z } from 'zod';
export declare const Security_AI_Assistant_API_User: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_User = z.infer<typeof Security_AI_Assistant_API_User>;
export declare const Security_AI_Assistant_API_NonEmptyTimestamp: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyTimestamp = z.infer<typeof Security_AI_Assistant_API_NonEmptyTimestamp>;
export declare const Security_AI_Assistant_API_Replacements: z.ZodRecord<z.ZodString, z.ZodString>;
export type Security_AI_Assistant_API_Replacements = z.infer<typeof Security_AI_Assistant_API_Replacements>;
export declare const Security_AI_Assistant_API_TraceData: z.ZodObject<{
    traceId: z.ZodOptional<z.ZodString>;
    transactionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_TraceData = z.infer<typeof Security_AI_Assistant_API_TraceData>;
export declare const Security_AI_Assistant_API_MessageRole: z.ZodEnum<{
    user: "user";
    system: "system";
    assistant: "assistant";
}>;
export type Security_AI_Assistant_API_MessageRole = z.infer<typeof Security_AI_Assistant_API_MessageRole>;
export declare const Security_AI_Assistant_API_Reader: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type Security_AI_Assistant_API_Reader = z.infer<typeof Security_AI_Assistant_API_Reader>;
export declare const Security_AI_Assistant_API_InterruptType: z.ZodEnum<{
    SELECT_OPTION: "SELECT_OPTION";
    INPUT_TEXT: "INPUT_TEXT";
}>;
export type Security_AI_Assistant_API_InterruptType = z.infer<typeof Security_AI_Assistant_API_InterruptType>;
export declare const Security_AI_Assistant_API_SelectOptionInterruptOption: z.ZodObject<{
    buttonColor: z.ZodOptional<z.ZodEnum<{
        text: "text";
        success: "success";
        primary: "primary";
        warning: "warning";
        accent: "accent";
        accentSecondary: "accentSecondary";
        danger: "danger";
        neutral: "neutral";
        risk: "risk";
    }>>;
    label: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_SelectOptionInterruptOption = z.infer<typeof Security_AI_Assistant_API_SelectOptionInterruptOption>;
export declare const Security_AI_Assistant_API_BaseContentReference: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_BaseContentReference = z.infer<typeof Security_AI_Assistant_API_BaseContentReference>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_ConversationCategory: z.ZodEnum<{
    assistant: "assistant";
    insights: "insights";
}>;
export type Security_AI_Assistant_API_ConversationCategory = z.infer<typeof Security_AI_Assistant_API_ConversationCategory>;
export declare const Security_AI_Assistant_API_Provider: z.ZodEnum<{
    OpenAI: "OpenAI";
    "Azure OpenAI": "Azure OpenAI";
    Other: "Other";
}>;
export type Security_AI_Assistant_API_Provider = z.infer<typeof Security_AI_Assistant_API_Provider>;
export declare const Security_AI_Assistant_API_BaseInterruptValue: z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
        INPUT_TEXT: "INPUT_TEXT";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_BaseInterruptValue = z.infer<typeof Security_AI_Assistant_API_BaseInterruptValue>;
export declare const Security_AI_Assistant_API_BaseInterruptResumeValue: z.ZodObject<{
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
        INPUT_TEXT: "INPUT_TEXT";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_BaseInterruptResumeValue = z.infer<typeof Security_AI_Assistant_API_BaseInterruptResumeValue>;
export declare const Security_AI_Assistant_API_HrefContentReference: z.ZodObject<{
    id: z.ZodString;
    href: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        Href: "Href";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_HrefContentReference = z.infer<typeof Security_AI_Assistant_API_HrefContentReference>;
export declare const Security_AI_Assistant_API_EsqlContentReference: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    query: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodEnum<{
        EsqlQuery: "EsqlQuery";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_EsqlContentReference = z.infer<typeof Security_AI_Assistant_API_EsqlContentReference>;
export declare const Security_AI_Assistant_API_ProductDocumentationContentReference: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<{
        ProductDocumentation: "ProductDocumentation";
    }>;
    url: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ProductDocumentationContentReference = z.infer<typeof Security_AI_Assistant_API_ProductDocumentationContentReference>;
export declare const Security_AI_Assistant_API_SecurityAlertsPageContentReference: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<{
        SecurityAlertsPage: "SecurityAlertsPage";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_SecurityAlertsPageContentReference = z.infer<typeof Security_AI_Assistant_API_SecurityAlertsPageContentReference>;
export declare const Security_AI_Assistant_API_SecurityAlertContentReference: z.ZodObject<{
    id: z.ZodString;
    alertId: z.ZodString;
    type: z.ZodEnum<{
        SecurityAlert: "SecurityAlert";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_SecurityAlertContentReference = z.infer<typeof Security_AI_Assistant_API_SecurityAlertContentReference>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryContentReference: z.ZodObject<{
    id: z.ZodString;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
    type: z.ZodEnum<{
        KnowledgeBaseEntry: "KnowledgeBaseEntry";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryContentReference = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryContentReference>;
export declare const Security_AI_Assistant_API_ApiConfig: z.ZodObject<{
    actionTypeId: z.ZodString;
    connectorId: z.ZodString;
    defaultSystemPromptId: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodEnum<{
        OpenAI: "OpenAI";
        "Azure OpenAI": "Azure OpenAI";
        Other: "Other";
    }>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ApiConfig = z.infer<typeof Security_AI_Assistant_API_ApiConfig>;
export declare const Security_AI_Assistant_API_InputTextInterruptValue: z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    placeholder: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INPUT_TEXT: "INPUT_TEXT";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_InputTextInterruptValue = z.infer<typeof Security_AI_Assistant_API_InputTextInterruptValue>;
export declare const Security_AI_Assistant_API_SelectOptionInterruptValue: z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
    description: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        buttonColor: z.ZodOptional<z.ZodEnum<{
            text: "text";
            success: "success";
            primary: "primary";
            warning: "warning";
            accent: "accent";
            accentSecondary: "accentSecondary";
            danger: "danger";
            neutral: "neutral";
            risk: "risk";
        }>>;
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_SelectOptionInterruptValue = z.infer<typeof Security_AI_Assistant_API_SelectOptionInterruptValue>;
export declare const Security_AI_Assistant_API_InputTextInterruptResumeValue: z.ZodObject<{
    type: z.ZodEnum<{
        INPUT_TEXT: "INPUT_TEXT";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_InputTextInterruptResumeValue = z.infer<typeof Security_AI_Assistant_API_InputTextInterruptResumeValue>;
export declare const Security_AI_Assistant_API_SelectOptionInterruptResumeValue: z.ZodObject<{
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
    }>;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_SelectOptionInterruptResumeValue = z.infer<typeof Security_AI_Assistant_API_SelectOptionInterruptResumeValue>;
export declare const Security_AI_Assistant_API_ContentReferences: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodString;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
    type: z.ZodEnum<{
        KnowledgeBaseEntry: "KnowledgeBaseEntry";
    }>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    alertId: z.ZodString;
    type: z.ZodEnum<{
        SecurityAlert: "SecurityAlert";
    }>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<{
        SecurityAlertsPage: "SecurityAlertsPage";
    }>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<{
        ProductDocumentation: "ProductDocumentation";
    }>;
    url: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    query: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodEnum<{
        EsqlQuery: "EsqlQuery";
    }>;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodString;
    href: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        Href: "Href";
    }>;
}, z.core.$strip>]>>;
export type Security_AI_Assistant_API_ContentReferences = z.infer<typeof Security_AI_Assistant_API_ContentReferences>;
export declare const Security_AI_Assistant_API_InterruptValue: z.ZodUnion<readonly [z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
    description: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        buttonColor: z.ZodOptional<z.ZodEnum<{
            text: "text";
            success: "success";
            primary: "primary";
            warning: "warning";
            accent: "accent";
            accentSecondary: "accentSecondary";
            danger: "danger";
            neutral: "neutral";
            risk: "risk";
        }>>;
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
    }>;
}, z.core.$strip>, z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    placeholder: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INPUT_TEXT: "INPUT_TEXT";
    }>;
}, z.core.$strip>]>;
export type Security_AI_Assistant_API_InterruptValue = z.infer<typeof Security_AI_Assistant_API_InterruptValue>;
export declare const Security_AI_Assistant_API_InterruptResumeValue: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodEnum<{
        SELECT_OPTION: "SELECT_OPTION";
    }>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodEnum<{
        INPUT_TEXT: "INPUT_TEXT";
    }>;
    value: z.ZodString;
}, z.core.$strip>]>;
export type Security_AI_Assistant_API_InterruptResumeValue = z.infer<typeof Security_AI_Assistant_API_InterruptResumeValue>;
export declare const Security_AI_Assistant_API_MessageMetadata: z.ZodObject<{
    contentReferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        id: z.ZodString;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
        type: z.ZodEnum<{
            KnowledgeBaseEntry: "KnowledgeBaseEntry";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        alertId: z.ZodString;
        type: z.ZodEnum<{
            SecurityAlert: "SecurityAlert";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<{
            SecurityAlertsPage: "SecurityAlertsPage";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        type: z.ZodEnum<{
            ProductDocumentation: "ProductDocumentation";
        }>;
        url: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        query: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, z.core.$strip>>;
        type: z.ZodEnum<{
            EsqlQuery: "EsqlQuery";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        id: z.ZodString;
        href: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<{
            Href: "Href";
        }>;
    }, z.core.$strip>]>>>;
    interruptResumeValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            SELECT_OPTION: "SELECT_OPTION";
        }>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodEnum<{
            INPUT_TEXT: "INPUT_TEXT";
        }>;
        value: z.ZodString;
    }, z.core.$strip>]>>;
    interruptValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
        description: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            buttonColor: z.ZodOptional<z.ZodEnum<{
                text: "text";
                success: "success";
                primary: "primary";
                warning: "warning";
                accent: "accent";
                accentSecondary: "accentSecondary";
                danger: "danger";
                neutral: "neutral";
                risk: "risk";
            }>>;
            label: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>;
        type: z.ZodEnum<{
            SELECT_OPTION: "SELECT_OPTION";
        }>;
    }, z.core.$strip>, z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        placeholder: z.ZodOptional<z.ZodString>;
        type: z.ZodEnum<{
            INPUT_TEXT: "INPUT_TEXT";
        }>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_MessageMetadata = z.infer<typeof Security_AI_Assistant_API_MessageMetadata>;
export declare const Security_AI_Assistant_API_Message: z.ZodObject<{
    content: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    isError: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodObject<{
        contentReferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            id: z.ZodString;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
            type: z.ZodEnum<{
                KnowledgeBaseEntry: "KnowledgeBaseEntry";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            id: z.ZodString;
            alertId: z.ZodString;
            type: z.ZodEnum<{
                SecurityAlert: "SecurityAlert";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<{
                SecurityAlertsPage: "SecurityAlertsPage";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            type: z.ZodEnum<{
                ProductDocumentation: "ProductDocumentation";
            }>;
            url: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            query: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, z.core.$strip>>;
            type: z.ZodEnum<{
                EsqlQuery: "EsqlQuery";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            id: z.ZodString;
            href: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<{
                Href: "Href";
            }>;
        }, z.core.$strip>]>>>;
        interruptResumeValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                SELECT_OPTION: "SELECT_OPTION";
            }>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodEnum<{
                INPUT_TEXT: "INPUT_TEXT";
            }>;
            value: z.ZodString;
        }, z.core.$strip>]>>;
        interruptValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            expired: z.ZodOptional<z.ZodBoolean>;
            threadId: z.ZodString;
            description: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                buttonColor: z.ZodOptional<z.ZodEnum<{
                    text: "text";
                    success: "success";
                    primary: "primary";
                    warning: "warning";
                    accent: "accent";
                    accentSecondary: "accentSecondary";
                    danger: "danger";
                    neutral: "neutral";
                    risk: "risk";
                }>>;
                label: z.ZodString;
                value: z.ZodString;
            }, z.core.$strip>>;
            type: z.ZodEnum<{
                SELECT_OPTION: "SELECT_OPTION";
            }>;
        }, z.core.$strip>, z.ZodObject<{
            expired: z.ZodOptional<z.ZodBoolean>;
            threadId: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            placeholder: z.ZodOptional<z.ZodString>;
            type: z.ZodEnum<{
                INPUT_TEXT: "INPUT_TEXT";
            }>;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>;
    reader: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    refusal: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<{
        user: "user";
        system: "system";
        assistant: "assistant";
    }>;
    timestamp: z.ZodString;
    traceData: z.ZodOptional<z.ZodObject<{
        traceId: z.ZodOptional<z.ZodString>;
        transactionId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_Message = z.infer<typeof Security_AI_Assistant_API_Message>;
export declare const Security_AI_Assistant_API_ConversationResponse: z.ZodObject<{
    apiConfig: z.ZodOptional<z.ZodObject<{
        actionTypeId: z.ZodString;
        connectorId: z.ZodString;
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<{
            OpenAI: "OpenAI";
            "Azure OpenAI": "Azure OpenAI";
            Other: "Other";
        }>>;
    }, z.core.$strip>>;
    category: z.ZodEnum<{
        assistant: "assistant";
        insights: "insights";
    }>;
    createdAt: z.ZodString;
    createdBy: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
        isError: z.ZodOptional<z.ZodBoolean>;
        metadata: z.ZodOptional<z.ZodObject<{
            contentReferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                id: z.ZodString;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
                type: z.ZodEnum<{
                    KnowledgeBaseEntry: "KnowledgeBaseEntry";
                }>;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodString;
                alertId: z.ZodString;
                type: z.ZodEnum<{
                    SecurityAlert: "SecurityAlert";
                }>;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodString;
                type: z.ZodEnum<{
                    SecurityAlertsPage: "SecurityAlertsPage";
                }>;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodString;
                title: z.ZodString;
                type: z.ZodEnum<{
                    ProductDocumentation: "ProductDocumentation";
                }>;
                url: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                query: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, z.core.$strip>>;
                type: z.ZodEnum<{
                    EsqlQuery: "EsqlQuery";
                }>;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodString;
                href: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                type: z.ZodEnum<{
                    Href: "Href";
                }>;
            }, z.core.$strip>]>>>;
            interruptResumeValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    SELECT_OPTION: "SELECT_OPTION";
                }>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodEnum<{
                    INPUT_TEXT: "INPUT_TEXT";
                }>;
                value: z.ZodString;
            }, z.core.$strip>]>>;
            interruptValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
                description: z.ZodString;
                options: z.ZodArray<z.ZodObject<{
                    buttonColor: z.ZodOptional<z.ZodEnum<{
                        text: "text";
                        success: "success";
                        primary: "primary";
                        warning: "warning";
                        accent: "accent";
                        accentSecondary: "accentSecondary";
                        danger: "danger";
                        neutral: "neutral";
                        risk: "risk";
                    }>>;
                    label: z.ZodString;
                    value: z.ZodString;
                }, z.core.$strip>>;
                type: z.ZodEnum<{
                    SELECT_OPTION: "SELECT_OPTION";
                }>;
            }, z.core.$strip>, z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                placeholder: z.ZodOptional<z.ZodString>;
                type: z.ZodEnum<{
                    INPUT_TEXT: "INPUT_TEXT";
                }>;
            }, z.core.$strip>]>>;
        }, z.core.$strip>>;
        reader: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        refusal: z.ZodOptional<z.ZodString>;
        role: z.ZodEnum<{
            user: "user";
            system: "system";
            assistant: "assistant";
        }>;
        timestamp: z.ZodString;
        traceData: z.ZodOptional<z.ZodObject<{
            traceId: z.ZodOptional<z.ZodString>;
            transactionId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    namespace: z.ZodString;
    replacements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodString>;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ConversationResponse = z.infer<typeof Security_AI_Assistant_API_ConversationResponse>;
export declare const FindConversationsResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        apiConfig: z.ZodOptional<z.ZodObject<{
            actionTypeId: z.ZodString;
            connectorId: z.ZodString;
            defaultSystemPromptId: z.ZodOptional<z.ZodString>;
            model: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodEnum<{
                OpenAI: "OpenAI";
                "Azure OpenAI": "Azure OpenAI";
                Other: "Other";
            }>>;
        }, z.core.$strip>>;
        category: z.ZodEnum<{
            assistant: "assistant";
            insights: "insights";
        }>;
        createdAt: z.ZodString;
        createdBy: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
            id: z.ZodOptional<z.ZodString>;
            isError: z.ZodOptional<z.ZodBoolean>;
            metadata: z.ZodOptional<z.ZodObject<{
                contentReferences: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                    knowledgeBaseEntryId: z.ZodString;
                    knowledgeBaseEntryName: z.ZodString;
                    type: z.ZodEnum<{
                        KnowledgeBaseEntry: "KnowledgeBaseEntry";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    id: z.ZodString;
                    alertId: z.ZodString;
                    type: z.ZodEnum<{
                        SecurityAlert: "SecurityAlert";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodEnum<{
                        SecurityAlertsPage: "SecurityAlertsPage";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    id: z.ZodString;
                    title: z.ZodString;
                    type: z.ZodEnum<{
                        ProductDocumentation: "ProductDocumentation";
                    }>;
                    url: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    id: z.ZodString;
                    label: z.ZodString;
                    query: z.ZodString;
                    timerange: z.ZodOptional<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        EsqlQuery: "EsqlQuery";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    id: z.ZodString;
                    href: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        Href: "Href";
                    }>;
                }, z.core.$strip>]>>>;
                interruptResumeValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    type: z.ZodEnum<{
                        SELECT_OPTION: "SELECT_OPTION";
                    }>;
                    value: z.ZodString;
                }, z.core.$strip>, z.ZodObject<{
                    type: z.ZodEnum<{
                        INPUT_TEXT: "INPUT_TEXT";
                    }>;
                    value: z.ZodString;
                }, z.core.$strip>]>>;
                interruptValue: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                    description: z.ZodString;
                    options: z.ZodArray<z.ZodObject<{
                        buttonColor: z.ZodOptional<z.ZodEnum<{
                            text: "text";
                            success: "success";
                            primary: "primary";
                            warning: "warning";
                            accent: "accent";
                            accentSecondary: "accentSecondary";
                            danger: "danger";
                            neutral: "neutral";
                            risk: "risk";
                        }>>;
                        label: z.ZodString;
                        value: z.ZodString;
                    }, z.core.$strip>>;
                    type: z.ZodEnum<{
                        SELECT_OPTION: "SELECT_OPTION";
                    }>;
                }, z.core.$strip>, z.ZodObject<{
                    expired: z.ZodOptional<z.ZodBoolean>;
                    threadId: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    type: z.ZodEnum<{
                        INPUT_TEXT: "INPUT_TEXT";
                    }>;
                }, z.core.$strip>]>>;
            }, z.core.$strip>>;
            reader: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            refusal: z.ZodOptional<z.ZodString>;
            role: z.ZodEnum<{
                user: "user";
                system: "system";
                assistant: "assistant";
            }>;
            timestamp: z.ZodString;
            traceData: z.ZodOptional<z.ZodObject<{
                traceId: z.ZodOptional<z.ZodString>;
                transactionId: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        namespace: z.ZodString;
        replacements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodString>;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type FindConversationsResponse = z.infer<typeof FindConversationsResponse>;
//# sourceMappingURL=find_conversations.d.ts.map