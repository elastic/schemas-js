import { z } from 'zod';
export declare const APM_UI_settings_object: z.ZodRecord<z.ZodString, z.ZodString>;
export type APM_UI_settings_object = z.infer<typeof APM_UI_settings_object>;
export declare const APM_UI_service_object: z.ZodObject<{
    environment: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type APM_UI_service_object = z.infer<typeof APM_UI_service_object>;
export declare const APM_UI_agent_configuration_object: z.ZodObject<{
    '@timestamp': z.ZodNumber;
    agent_name: z.ZodOptional<z.ZodString>;
    applied_by_agent: z.ZodOptional<z.ZodBoolean>;
    etag: z.ZodString;
    service: z.ZodObject<{
        environment: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type APM_UI_agent_configuration_object = z.infer<typeof APM_UI_agent_configuration_object>;
export declare const APM_UI_search_agent_configuration_object: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    etag: z.ZodOptional<z.ZodString>;
    mark_as_applied_by_agent: z.ZodOptional<z.ZodBoolean>;
    service: z.ZodObject<{
        environment: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type APM_UI_search_agent_configuration_object = z.infer<typeof APM_UI_search_agent_configuration_object>;
export declare const APM_UI_search_agent_configuration_response: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    _score: z.ZodOptional<z.ZodNumber>;
    _source: z.ZodOptional<z.ZodObject<{
        '@timestamp': z.ZodNumber;
        agent_name: z.ZodOptional<z.ZodString>;
        applied_by_agent: z.ZodOptional<z.ZodBoolean>;
        etag: z.ZodString;
        service: z.ZodObject<{
            environment: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        settings: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type APM_UI_search_agent_configuration_response = z.infer<typeof APM_UI_search_agent_configuration_response>;
//# sourceMappingURL=search_single_configuration.d.ts.map