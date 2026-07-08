import { z } from 'zod';
export declare const APM_UI_delete_agent_configurations_response: z.ZodObject<{
    result: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type APM_UI_delete_agent_configurations_response = z.infer<typeof APM_UI_delete_agent_configurations_response>;
export declare const APM_UI_service_object: z.ZodObject<{
    environment: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type APM_UI_service_object = z.infer<typeof APM_UI_service_object>;
export declare const APM_UI_delete_service_object: z.ZodObject<{
    service: z.ZodObject<{
        environment: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type APM_UI_delete_service_object = z.infer<typeof APM_UI_delete_service_object>;
//# sourceMappingURL=delete_agent_configuration.d.ts.map