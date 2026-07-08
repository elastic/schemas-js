import { z } from 'zod';
export declare const Security_Detections_API_WarningSchema: z.ZodObject<{
    actionPath: z.ZodString;
    buttonLabel: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type Security_Detections_API_WarningSchema = z.infer<typeof Security_Detections_API_WarningSchema>;
export declare const Security_Detections_API_RuleSignatureId: z.ZodString;
export type Security_Detections_API_RuleSignatureId = z.infer<typeof Security_Detections_API_RuleSignatureId>;
export declare const Security_Detections_API_ErrorSchema: z.ZodObject<{
    error: z.ZodObject<{
        message: z.ZodString;
        status_code: z.ZodNumber;
    }, z.core.$strip>;
    id: z.ZodOptional<z.ZodString>;
    item_id: z.ZodOptional<z.ZodString>;
    list_id: z.ZodOptional<z.ZodString>;
    rule_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Detections_API_ErrorSchema = z.infer<typeof Security_Detections_API_ErrorSchema>;
export declare const ImportRulesResponse: z.ZodObject<{
    action_connectors_errors: z.ZodArray<z.ZodObject<{
        error: z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
        }, z.core.$strip>;
        id: z.ZodOptional<z.ZodString>;
        item_id: z.ZodOptional<z.ZodString>;
        list_id: z.ZodOptional<z.ZodString>;
        rule_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    action_connectors_success: z.ZodBoolean;
    action_connectors_success_count: z.ZodNumber;
    action_connectors_warnings: z.ZodArray<z.ZodObject<{
        actionPath: z.ZodString;
        buttonLabel: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    errors: z.ZodArray<z.ZodObject<{
        error: z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
        }, z.core.$strip>;
        id: z.ZodOptional<z.ZodString>;
        item_id: z.ZodOptional<z.ZodString>;
        list_id: z.ZodOptional<z.ZodString>;
        rule_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    exceptions_errors: z.ZodArray<z.ZodObject<{
        error: z.ZodObject<{
            message: z.ZodString;
            status_code: z.ZodNumber;
        }, z.core.$strip>;
        id: z.ZodOptional<z.ZodString>;
        item_id: z.ZodOptional<z.ZodString>;
        list_id: z.ZodOptional<z.ZodString>;
        rule_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    exceptions_success: z.ZodBoolean;
    exceptions_success_count: z.ZodNumber;
    rules_count: z.ZodNumber;
    success: z.ZodBoolean;
    success_count: z.ZodNumber;
}, z.core.$strip>;
export type ImportRulesResponse = z.infer<typeof ImportRulesResponse>;
//# sourceMappingURL=import_rules.d.ts.map