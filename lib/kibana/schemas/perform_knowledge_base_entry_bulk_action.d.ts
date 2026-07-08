import { z } from 'zod';
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionSummary: z.ZodObject<{
    failed: z.ZodNumber;
    skipped: z.ZodNumber;
    succeeded: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionSummary = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionSummary>;
export declare const Security_AI_Assistant_API_InputSchema: z.ZodArray<z.ZodObject<{
    description: z.ZodString;
    fieldName: z.ZodString;
    fieldType: z.ZodString;
}, z.core.$strip>>;
export type Security_AI_Assistant_API_InputSchema = z.infer<typeof Security_AI_Assistant_API_InputSchema>;
export declare const Security_AI_Assistant_API_IndexEntryRequiredFields: z.ZodObject<{
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_IndexEntryRequiredFields = z.infer<typeof Security_AI_Assistant_API_IndexEntryRequiredFields>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_User: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_User = z.infer<typeof Security_AI_Assistant_API_User>;
export declare const Security_AI_Assistant_API_Vector: z.ZodObject<{
    modelId: z.ZodString;
    tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_Vector = z.infer<typeof Security_AI_Assistant_API_Vector>;
export declare const Security_AI_Assistant_API_KnowledgeBaseResource: z.ZodEnum<{
    user: "user";
    security_labs: "security_labs";
    defend_insights: "defend_insights";
}>;
export type Security_AI_Assistant_API_KnowledgeBaseResource = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseResource>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipReason: z.ZodEnum<{
    KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
}>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipReason = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipReason>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryDetailsInError: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryDetailsInError = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryDetailsInError>;
export declare const Security_AI_Assistant_API_IndexEntryOptionalFields: z.ZodObject<{
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_IndexEntryOptionalFields = z.infer<typeof Security_AI_Assistant_API_IndexEntryOptionalFields>;
export declare const Security_AI_Assistant_API_ResponseFields: z.ZodObject<{
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    id: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_ResponseFields = z.infer<typeof Security_AI_Assistant_API_ResponseFields>;
export declare const Security_AI_Assistant_API_DocumentEntryOptionalFields: z.ZodObject<{
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_DocumentEntryOptionalFields = z.infer<typeof Security_AI_Assistant_API_DocumentEntryOptionalFields>;
export declare const Security_AI_Assistant_API_DocumentEntryRequiredFields: z.ZodObject<{
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_DocumentEntryRequiredFields = z.infer<typeof Security_AI_Assistant_API_DocumentEntryRequiredFields>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipResult: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    skip_reason: z.ZodEnum<{
        KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipResult = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryBulkActionSkipResult>;
export declare const Security_AI_Assistant_API_NormalizedKnowledgeBaseEntryError: z.ZodObject<{
    err_code: z.ZodOptional<z.ZodString>;
    knowledgeBaseEntries: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    message: z.ZodString;
    statusCode: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_NormalizedKnowledgeBaseEntryError = z.infer<typeof Security_AI_Assistant_API_NormalizedKnowledgeBaseEntryError>;
export declare const Security_AI_Assistant_API_IndexEntryResponseFields: z.ZodObject<{
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_IndexEntryResponseFields = z.infer<typeof Security_AI_Assistant_API_IndexEntryResponseFields>;
export declare const Security_AI_Assistant_API_IndexEntryCreateFields: z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_IndexEntryCreateFields = z.infer<typeof Security_AI_Assistant_API_IndexEntryCreateFields>;
export declare const Security_AI_Assistant_API_DocumentEntryResponseFields: z.ZodObject<{
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_DocumentEntryResponseFields = z.infer<typeof Security_AI_Assistant_API_DocumentEntryResponseFields>;
export declare const Security_AI_Assistant_API_DocumentEntryCreateFields: z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_DocumentEntryCreateFields = z.infer<typeof Security_AI_Assistant_API_DocumentEntryCreateFields>;
export declare const Security_AI_Assistant_API_IndexEntry: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    global: z.ZodBoolean;
    name: z.ZodString;
    namespace: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    id: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export type Security_AI_Assistant_API_IndexEntry = z.infer<typeof Security_AI_Assistant_API_IndexEntry>;
export declare const Security_AI_Assistant_API_IndexEntryUpdateFields: z.ZodIntersection<z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export type Security_AI_Assistant_API_IndexEntryUpdateFields = z.infer<typeof Security_AI_Assistant_API_IndexEntryUpdateFields>;
export declare const Security_AI_Assistant_API_DocumentEntry: z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    global: z.ZodBoolean;
    name: z.ZodString;
    namespace: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    id: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_AI_Assistant_API_DocumentEntry = z.infer<typeof Security_AI_Assistant_API_DocumentEntry>;
export declare const Security_AI_Assistant_API_DocumentEntryUpdateFields: z.ZodIntersection<z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_AI_Assistant_API_DocumentEntryUpdateFields = z.infer<typeof Security_AI_Assistant_API_DocumentEntryUpdateFields>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryCreateProps: z.ZodUnion<readonly [z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>]>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryCreateProps = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryCreateProps>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryResponse: z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    global: z.ZodBoolean;
    name: z.ZodString;
    namespace: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    id: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    global: z.ZodBoolean;
    name: z.ZodString;
    namespace: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    createdAt: z.ZodString;
    createdBy: z.ZodString;
    id: z.ZodString;
    updatedAt: z.ZodString;
    updatedBy: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>]>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryResponse = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryResponse>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryUpdateProps: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    kbResource: z.ZodEnum<{
        user: "user";
        security_labs: "security_labs";
        defend_insights: "defend_insights";
    }>;
    source: z.ZodString;
    text: z.ZodString;
    type: z.ZodEnum<{
        document: "document";
    }>;
    required: z.ZodOptional<z.ZodBoolean>;
    vector: z.ZodOptional<z.ZodObject<{
        modelId: z.ZodString;
        tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>, z.ZodObject<{
    global: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    description: z.ZodString;
    field: z.ZodString;
    index: z.ZodString;
    queryDescription: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
    }>;
    inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        fieldName: z.ZodString;
        fieldType: z.ZodString;
    }, z.core.$strip>>>;
    outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>]>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryUpdateProps = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryUpdateProps>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResults: z.ZodObject<{
    created: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        global: z.ZodBoolean;
        name: z.ZodString;
        namespace: z.ZodString;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        id: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    }, z.core.$strip>>, z.ZodObject<{
        kbResource: z.ZodEnum<{
            user: "user";
            security_labs: "security_labs";
            defend_insights: "defend_insights";
        }>;
        source: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<{
            document: "document";
        }>;
        required: z.ZodOptional<z.ZodBoolean>;
        vector: z.ZodOptional<z.ZodObject<{
            modelId: z.ZodString;
            tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        global: z.ZodBoolean;
        name: z.ZodString;
        namespace: z.ZodString;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        id: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    }, z.core.$strip>>, z.ZodObject<{
        description: z.ZodString;
        field: z.ZodString;
        index: z.ZodString;
        queryDescription: z.ZodString;
        type: z.ZodEnum<{
            index: "index";
        }>;
        inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            fieldName: z.ZodString;
            fieldType: z.ZodString;
        }, z.core.$strip>>>;
        outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>]>>;
    deleted: z.ZodArray<z.ZodString>;
    skipped: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        skip_reason: z.ZodEnum<{
            KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
        }>;
    }, z.core.$strip>>;
    updated: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        global: z.ZodBoolean;
        name: z.ZodString;
        namespace: z.ZodString;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        id: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    }, z.core.$strip>>, z.ZodObject<{
        kbResource: z.ZodEnum<{
            user: "user";
            security_labs: "security_labs";
            defend_insights: "defend_insights";
        }>;
        source: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<{
            document: "document";
        }>;
        required: z.ZodOptional<z.ZodBoolean>;
        vector: z.ZodOptional<z.ZodObject<{
            modelId: z.ZodString;
            tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        global: z.ZodBoolean;
        name: z.ZodString;
        namespace: z.ZodString;
        users: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        createdAt: z.ZodString;
        createdBy: z.ZodString;
        id: z.ZodString;
        updatedAt: z.ZodString;
        updatedBy: z.ZodString;
    }, z.core.$strip>>, z.ZodObject<{
        description: z.ZodString;
        field: z.ZodString;
        index: z.ZodString;
        queryDescription: z.ZodString;
        type: z.ZodEnum<{
            index: "index";
        }>;
        inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            fieldName: z.ZodString;
            fieldType: z.ZodString;
        }, z.core.$strip>>>;
        outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>]>>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResults = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResults>;
export declare const Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResponse: z.ZodObject<{
    attributes: z.ZodObject<{
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            err_code: z.ZodOptional<z.ZodString>;
            knowledgeBaseEntries: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            message: z.ZodString;
            statusCode: z.ZodNumber;
        }, z.core.$strip>>>;
        results: z.ZodObject<{
            created: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
                global: z.ZodBoolean;
                name: z.ZodString;
                namespace: z.ZodString;
                users: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                createdAt: z.ZodString;
                createdBy: z.ZodString;
                id: z.ZodString;
                updatedAt: z.ZodString;
                updatedBy: z.ZodString;
            }, z.core.$strip>>, z.ZodObject<{
                kbResource: z.ZodEnum<{
                    user: "user";
                    security_labs: "security_labs";
                    defend_insights: "defend_insights";
                }>;
                source: z.ZodString;
                text: z.ZodString;
                type: z.ZodEnum<{
                    document: "document";
                }>;
                required: z.ZodOptional<z.ZodBoolean>;
                vector: z.ZodOptional<z.ZodObject<{
                    modelId: z.ZodString;
                    tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
                global: z.ZodBoolean;
                name: z.ZodString;
                namespace: z.ZodString;
                users: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                createdAt: z.ZodString;
                createdBy: z.ZodString;
                id: z.ZodString;
                updatedAt: z.ZodString;
                updatedBy: z.ZodString;
            }, z.core.$strip>>, z.ZodObject<{
                description: z.ZodString;
                field: z.ZodString;
                index: z.ZodString;
                queryDescription: z.ZodString;
                type: z.ZodEnum<{
                    index: "index";
                }>;
                inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    description: z.ZodString;
                    fieldName: z.ZodString;
                    fieldType: z.ZodString;
                }, z.core.$strip>>>;
                outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>]>>;
            deleted: z.ZodArray<z.ZodString>;
            skipped: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodEnum<{
                    KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED: "KNOWLEDGE_BASE_ENTRY_NOT_MODIFIED";
                }>;
            }, z.core.$strip>>;
            updated: z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
                global: z.ZodBoolean;
                name: z.ZodString;
                namespace: z.ZodString;
                users: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                createdAt: z.ZodString;
                createdBy: z.ZodString;
                id: z.ZodString;
                updatedAt: z.ZodString;
                updatedBy: z.ZodString;
            }, z.core.$strip>>, z.ZodObject<{
                kbResource: z.ZodEnum<{
                    user: "user";
                    security_labs: "security_labs";
                    defend_insights: "defend_insights";
                }>;
                source: z.ZodString;
                text: z.ZodString;
                type: z.ZodEnum<{
                    document: "document";
                }>;
                required: z.ZodOptional<z.ZodBoolean>;
                vector: z.ZodOptional<z.ZodObject<{
                    modelId: z.ZodString;
                    tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>, z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
                global: z.ZodBoolean;
                name: z.ZodString;
                namespace: z.ZodString;
                users: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                createdAt: z.ZodString;
                createdBy: z.ZodString;
                id: z.ZodString;
                updatedAt: z.ZodString;
                updatedBy: z.ZodString;
            }, z.core.$strip>>, z.ZodObject<{
                description: z.ZodString;
                field: z.ZodString;
                index: z.ZodString;
                queryDescription: z.ZodString;
                type: z.ZodEnum<{
                    index: "index";
                }>;
                inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    description: z.ZodString;
                    fieldName: z.ZodString;
                    fieldType: z.ZodString;
                }, z.core.$strip>>>;
                outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>]>>;
        }, z.core.$strip>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    knowledgeBaseEntriesCount: z.ZodOptional<z.ZodNumber>;
    message: z.ZodOptional<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResponse = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseEntryBulkCrudActionResponse>;
export declare const PerformKnowledgeBaseEntryBulkActionRequest: z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        kbResource: z.ZodEnum<{
            user: "user";
            security_labs: "security_labs";
            defend_insights: "defend_insights";
        }>;
        source: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<{
            document: "document";
        }>;
        required: z.ZodOptional<z.ZodBoolean>;
        vector: z.ZodOptional<z.ZodObject<{
            modelId: z.ZodString;
            tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        description: z.ZodString;
        field: z.ZodString;
        index: z.ZodString;
        queryDescription: z.ZodString;
        type: z.ZodEnum<{
            index: "index";
        }>;
        inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            fieldName: z.ZodString;
            fieldType: z.ZodString;
        }, z.core.$strip>>>;
        outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>]>>>;
    delete: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        query: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    update: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>, z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        kbResource: z.ZodEnum<{
            user: "user";
            security_labs: "security_labs";
            defend_insights: "defend_insights";
        }>;
        source: z.ZodString;
        text: z.ZodString;
        type: z.ZodEnum<{
            document: "document";
        }>;
        required: z.ZodOptional<z.ZodBoolean>;
        vector: z.ZodOptional<z.ZodObject<{
            modelId: z.ZodString;
            tokens: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>, z.ZodIntersection<z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>, z.ZodObject<{
        global: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        users: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        description: z.ZodString;
        field: z.ZodString;
        index: z.ZodString;
        queryDescription: z.ZodString;
        type: z.ZodEnum<{
            index: "index";
        }>;
        inputSchema: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            fieldName: z.ZodString;
            fieldType: z.ZodString;
        }, z.core.$strip>>>;
        outputFields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>]>>>;
}, z.core.$strip>;
export type PerformKnowledgeBaseEntryBulkActionRequest = z.infer<typeof PerformKnowledgeBaseEntryBulkActionRequest>;
//# sourceMappingURL=perform_knowledge_base_entry_bulk_action.d.ts.map