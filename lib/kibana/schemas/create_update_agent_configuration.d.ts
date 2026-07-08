import { z } from 'zod';
export declare const APM_UI_settings_object: z.ZodRecord<z.ZodString, z.ZodString>;
export type APM_UI_settings_object = z.infer<typeof APM_UI_settings_object>;
export declare const APM_UI_service_object: z.ZodObject<{
    environment: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type APM_UI_service_object = z.infer<typeof APM_UI_service_object>;
export declare const APM_UI_agent_configuration_intake_object: z.ZodObject<{
    agent_name: z.ZodOptional<z.ZodString>;
    service: z.ZodObject<{
        environment: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type APM_UI_agent_configuration_intake_object = z.infer<typeof APM_UI_agent_configuration_intake_object>;
export declare const CreateUpdateAgentConfigurationResponse: z.ZodObject<{}, z.core.$strip>;
export type CreateUpdateAgentConfigurationResponse = z.infer<typeof CreateUpdateAgentConfigurationResponse>;
//# sourceMappingURL=create_update_agent_configuration.d.ts.map