import { z } from 'zod';
export declare const APM_UI_service_environment_object: z.ZodObject<{
    alreadyConfigured: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type APM_UI_service_environment_object = z.infer<typeof APM_UI_service_environment_object>;
export declare const APM_UI_service_environments_response: z.ZodObject<{
    environments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        alreadyConfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type APM_UI_service_environments_response = z.infer<typeof APM_UI_service_environments_response>;
//# sourceMappingURL=get_environments_for_service.d.ts.map