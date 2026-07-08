import { z } from 'zod';
export declare const Security_AI_Assistant_API_BulkCrudActionSummary: z.ZodObject<{
    failed: z.ZodNumber;
    skipped: z.ZodNumber;
    succeeded: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_BulkCrudActionSummary = z.infer<typeof Security_AI_Assistant_API_BulkCrudActionSummary>;
export declare const Security_AI_Assistant_API_NonEmptyTimestamp: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyTimestamp = z.infer<typeof Security_AI_Assistant_API_NonEmptyTimestamp>;
export declare const Security_AI_Assistant_API_NonEmptyString: z.ZodString;
export type Security_AI_Assistant_API_NonEmptyString = z.infer<typeof Security_AI_Assistant_API_NonEmptyString>;
export declare const Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipReason: z.ZodEnum<{
    ANONYMIZATION_FIELD_NOT_MODIFIED: "ANONYMIZATION_FIELD_NOT_MODIFIED";
}>;
export type Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipReason = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipReason>;
export declare const Security_AI_Assistant_API_AnonymizationFieldDetailsInError: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldDetailsInError = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldDetailsInError>;
export declare const Security_AI_Assistant_API_AnonymizationFieldUpdateProps: z.ZodObject<{
    allowed: z.ZodOptional<z.ZodBoolean>;
    anonymized: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldUpdateProps = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldUpdateProps>;
export declare const Security_AI_Assistant_API_AnonymizationFieldCreateProps: z.ZodObject<{
    allowed: z.ZodOptional<z.ZodBoolean>;
    anonymized: z.ZodOptional<z.ZodBoolean>;
    field: z.ZodString;
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldCreateProps = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldCreateProps>;
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
export declare const Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipResult: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    skip_reason: z.ZodEnum<{
        ANONYMIZATION_FIELD_NOT_MODIFIED: "ANONYMIZATION_FIELD_NOT_MODIFIED";
    }>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipResult = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldsBulkActionSkipResult>;
export declare const Security_AI_Assistant_API_NormalizedAnonymizationFieldError: z.ZodObject<{
    anonymization_fields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    err_code: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    status_code: z.ZodNumber;
}, z.core.$strip>;
export type Security_AI_Assistant_API_NormalizedAnonymizationFieldError = z.infer<typeof Security_AI_Assistant_API_NormalizedAnonymizationFieldError>;
export declare const Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResults: z.ZodObject<{
    created: z.ZodArray<z.ZodObject<{
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
    deleted: z.ZodArray<z.ZodString>;
    skipped: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        skip_reason: z.ZodEnum<{
            ANONYMIZATION_FIELD_NOT_MODIFIED: "ANONYMIZATION_FIELD_NOT_MODIFIED";
        }>;
    }, z.core.$strip>>;
    updated: z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResults = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResults>;
export declare const Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResponse: z.ZodObject<{
    anonymization_fields_count: z.ZodOptional<z.ZodNumber>;
    attributes: z.ZodObject<{
        errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            anonymization_fields: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            err_code: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            status_code: z.ZodNumber;
        }, z.core.$strip>>>;
        results: z.ZodObject<{
            created: z.ZodArray<z.ZodObject<{
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
            deleted: z.ZodArray<z.ZodString>;
            skipped: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                skip_reason: z.ZodEnum<{
                    ANONYMIZATION_FIELD_NOT_MODIFIED: "ANONYMIZATION_FIELD_NOT_MODIFIED";
                }>;
            }, z.core.$strip>>;
            updated: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>;
        summary: z.ZodObject<{
            failed: z.ZodNumber;
            skipped: z.ZodNumber;
            succeeded: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    message: z.ZodOptional<z.ZodString>;
    status_code: z.ZodOptional<z.ZodNumber>;
    success: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResponse = z.infer<typeof Security_AI_Assistant_API_AnonymizationFieldsBulkCrudActionResponse>;
export declare const PerformAnonymizationFieldsBulkActionRequest: z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodString;
    }, z.core.$strip>>>;
    delete: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        query: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    update: z.ZodOptional<z.ZodArray<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodBoolean>;
        anonymized: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type PerformAnonymizationFieldsBulkActionRequest = z.infer<typeof PerformAnonymizationFieldsBulkActionRequest>;
//# sourceMappingURL=perform_anonymization_fields_bulk_action.d.ts.map