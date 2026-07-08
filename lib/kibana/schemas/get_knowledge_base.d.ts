import { z } from 'zod';
export declare const Security_AI_Assistant_API_KnowledgeBaseReadResponse200: z.ZodObject<{
    defend_insights_exists: z.ZodOptional<z.ZodBoolean>;
    elser_exists: z.ZodOptional<z.ZodBoolean>;
    is_setup_available: z.ZodOptional<z.ZodBoolean>;
    is_setup_in_progress: z.ZodOptional<z.ZodBoolean>;
    product_documentation_status: z.ZodOptional<z.ZodString>;
    security_labs_exists: z.ZodOptional<z.ZodBoolean>;
    user_data_exists: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_KnowledgeBaseReadResponse200 = z.infer<typeof Security_AI_Assistant_API_KnowledgeBaseReadResponse200>;
//# sourceMappingURL=get_knowledge_base.d.ts.map