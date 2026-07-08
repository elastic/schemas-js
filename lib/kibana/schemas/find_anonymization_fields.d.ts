import { z } from 'zod';
export declare const Security_AI_Assistant_API_NonEmptyTimestamp: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyTimestamp = z.infer<typeof Security_AI_Assistant_API_NonEmptyTimestamp>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_AnonymizationFieldResponse: z.ZodObject<{
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
export type Security_AI_Assistant_API_AnonymizationFieldResponse = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldResponse>;
export declare const FindAnonymizationFieldsResponse: z.ZodObject<{
    aggregations: z.ZodOptional<z.ZodObject<{
        field_status: z.ZodOptional<z.ZodObject<{
            buckets: z.ZodOptional<z.ZodObject<{
                allowed: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                anonymized: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                denied: z.ZodOptional<z.ZodObject<{
                    doc_count: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    all: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
    data: z.ZodArray<z.ZodObject<{
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
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type FindAnonymizationFieldsResponse = z.infer<typeof FindAnonymizationFieldsResponse>;
//# sourceMappingURL=find_anonymization_fields.d.ts.map