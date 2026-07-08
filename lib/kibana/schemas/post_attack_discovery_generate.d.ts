import { z } from 'zod';
export declare const Security_Attack_discovery_API_NonEmptyString: z.ZodString;
export type Security_Attack_discovery_API_NonEmptyString = z.infer<typeof Security_Attack_discovery_API_NonEmptyString>;
export declare const Security_Attack_discovery_API_Replacements: z.ZodRecord<z.ZodString, z.ZodString>;
export type Security_Attack_discovery_API_Replacements = z.infer<typeof Security_Attack_discovery_API_Replacements>;
export declare const Security_Attack_discovery_API_Provider: z.ZodEnum<{
    OpenAI: "OpenAI";
    "Azure OpenAI": "Azure OpenAI";
    Other: "Other";
}>;
export type Security_Attack_discovery_API_Provider = z.infer<typeof Security_Attack_discovery_API_Provider>;
export declare const Security_Attack_discovery_API_NonEmptyTimestamp: z.ZodString;
export type Security_Attack_discovery_API_NonEmptyTimestamp = z.infer<typeof Security_Attack_discovery_API_NonEmptyTimestamp>;
export declare const Security_Attack_discovery_API_ApiConfig: z.ZodObject<{
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
export type Security_Attack_discovery_API_ApiConfig = z.infer<typeof Security_Attack_discovery_API_ApiConfig>;
export declare const Security_Attack_discovery_API_AnonymizationFieldResponse: z.ZodObject<{
    allowed: z.ZodOptional<z.ZodBoolean>;
    anonymized: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodOptional<z.ZodString>;
    field: z.ZodString;
    id: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    updatedBy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AnonymizationFieldResponse = z.infer<typeof Security_Attack_discovery_API_AnonymizationFieldResponse>;
export declare const Security_Attack_discovery_API_AttackDiscoveryGenerationConfig: z.ZodObject<{
    alertsIndexPattern: z.ZodString;
    anonymizationFields: z.ZodArray<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        createdAt: z.ZodOptional<z.ZodString>;
        createdBy: z.ZodOptional<z.ZodString>;
        field: z.ZodString;
        id: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        updatedBy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    apiConfig: z.ZodObject<{
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
    connectorName: z.ZodOptional<z.ZodString>;
    end: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    model: z.ZodOptional<z.ZodString>;
    replacements: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    size: z.ZodNumber;
    start: z.ZodOptional<z.ZodString>;
    subAction: z.ZodEnum<{
        invokeAI: "invokeAI";
        invokeStream: "invokeStream";
    }>;
}, z.core.$strip>;
export type Security_Attack_discovery_API_AttackDiscoveryGenerationConfig = z.infer<typeof Security_Attack_discovery_API_AttackDiscoveryGenerationConfig>;
export declare const PostAttackDiscoveryGenerateResponse: z.ZodObject<{
    execution_uuid: z.ZodString;
}, z.core.$strip>;
export type PostAttackDiscoveryGenerateResponse = z.infer<typeof PostAttackDiscoveryGenerateResponse>;
//# sourceMappingURL=post_attack_discovery_generate.d.ts.map