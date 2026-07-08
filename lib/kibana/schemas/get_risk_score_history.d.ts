import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EntityRiskLevels: z.ZodEnum<{
    Unknown: "Unknown";
    Low: "Low";
    Moderate: "Moderate";
    High: "High";
    Critical: "Critical";
}>;
export type Security_Entity_Analytics_API_EntityRiskLevels = z.infer<typeof Security_Entity_Analytics_API_EntityRiskLevels>;
export declare const Security_Entity_Analytics_API_IdentifierType: z.ZodEnum<{
    host: "host";
    generic: "generic";
    service: "service";
    user: "user";
}>;
export type Security_Entity_Analytics_API_IdentifierType = z.infer<typeof Security_Entity_Analytics_API_IdentifierType>;
export declare const Security_Entity_Analytics_API_RiskScoreHistoryEntry: z.ZodObject<{
    '@timestamp': z.ZodString;
    calculated_level: z.ZodEnum<{
        Unknown: "Unknown";
        Low: "Low";
        Moderate: "Moderate";
        High: "High";
        Critical: "Critical";
    }>;
    calculated_score: z.ZodOptional<z.ZodNumber>;
    calculated_score_norm: z.ZodNumber;
    category_1_count: z.ZodOptional<z.ZodNumber>;
    category_1_score: z.ZodOptional<z.ZodNumber>;
    score_type: z.ZodOptional<z.ZodEnum<{
        base: "base";
        propagated: "propagated";
        resolution: "resolution";
    }>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_RiskScoreHistoryEntry = z.infer<typeof Security_Entity_Analytics_API_RiskScoreHistoryEntry>;
export declare const Security_Entity_Analytics_API_RiskScoreHistoryResponse: z.ZodObject<{
    entity_id: z.ZodString;
    entity_type: z.ZodEnum<{
        host: "host";
        generic: "generic";
        service: "service";
        user: "user";
    }>;
    entries: z.ZodArray<z.ZodObject<{
        '@timestamp': z.ZodString;
        calculated_level: z.ZodEnum<{
            Unknown: "Unknown";
            Low: "Low";
            Moderate: "Moderate";
            High: "High";
            Critical: "Critical";
        }>;
        calculated_score: z.ZodOptional<z.ZodNumber>;
        calculated_score_norm: z.ZodNumber;
        category_1_count: z.ZodOptional<z.ZodNumber>;
        category_1_score: z.ZodOptional<z.ZodNumber>;
        score_type: z.ZodOptional<z.ZodEnum<{
            base: "base";
            propagated: "propagated";
            resolution: "resolution";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_RiskScoreHistoryResponse = z.infer<typeof Security_Entity_Analytics_API_RiskScoreHistoryResponse>;
//# sourceMappingURL=get_risk_score_history.d.ts.map