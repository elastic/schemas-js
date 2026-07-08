import { z } from 'zod';
export declare const GetAlertingRuleIdQueryInspectorResponse: z.ZodObject<{
    queries: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        request: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        response: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetAlertingRuleIdQueryInspectorResponse = z.infer<typeof GetAlertingRuleIdQueryInspectorResponse>;
//# sourceMappingURL=get_alerting_rule_id_query_inspector.d.ts.map