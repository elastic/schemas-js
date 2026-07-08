import { z } from 'zod';
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
//# sourceMappingURL=read_knowledge_base_entry.d.ts.map