import { z } from 'zod';
export declare const ConfigureRiskEngineSavedObjectRequest: z.ZodObject<{
    enable_reset_to_zero: z.ZodOptional<z.ZodBoolean>;
    exclude_alert_statuses: z.ZodOptional<z.ZodArray<z.ZodString>>;
    exclude_alert_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        entity_types: z.ZodArray<z.ZodEnum<{
            host: "host";
            service: "service";
            user: "user";
        }>>;
        filter: z.ZodString;
    }, z.core.$strip>>>;
    page_size: z.ZodOptional<z.ZodNumber>;
    range: z.ZodOptional<z.ZodObject<{
        end: z.ZodOptional<z.ZodString>;
        start: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConfigureRiskEngineSavedObjectRequest = z.infer<typeof ConfigureRiskEngineSavedObjectRequest>;
export declare const ConfigureRiskEngineSavedObjectResponse: z.ZodObject<{
    risk_engine_saved_object_configured: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ConfigureRiskEngineSavedObjectResponse = z.infer<typeof ConfigureRiskEngineSavedObjectResponse>;
//# sourceMappingURL=configure_risk_engine_saved_object.d.ts.map