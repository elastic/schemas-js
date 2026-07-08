import { z } from 'zod';
export declare const Security_Detections_API_RuleSignatureId: z.ZodString;
export type Security_Detections_API_RuleSignatureId = z.infer<typeof Security_Detections_API_RuleSignatureId>;
export declare const ExportRulesRequest: z.ZodNullable<z.ZodObject<{
    objects: z.ZodArray<z.ZodObject<{
        rule_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type ExportRulesRequest = z.infer<typeof ExportRulesRequest>;
//# sourceMappingURL=export_rules.d.ts.map