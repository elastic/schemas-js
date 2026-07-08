import { z } from 'zod';
export declare const Kibana_HTTP_APIs_enrollment_api_key: z.ZodObject<{
    active: z.ZodBoolean;
    api_key: z.ZodString;
    api_key_id: z.ZodString;
    created_at: z.ZodString;
    hidden: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    policy_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_enrollment_api_key = z.infer<typeof Kibana_HTTP_APIs_enrollment_api_key>;
export declare const Kibana_HTTP_APIs_new_enrollment_api_key: z.ZodObject<{
    expiration: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    policy_id: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_enrollment_api_key = z.infer<typeof Kibana_HTTP_APIs_new_enrollment_api_key>;
export declare const Kibana_HTTP_APIs_enrollment_api_key_response: z.ZodObject<{
    action: z.ZodEnum<{
        created: "created";
    }>;
    item: z.ZodObject<{
        active: z.ZodBoolean;
        api_key: z.ZodString;
        api_key_id: z.ZodString;
        created_at: z.ZodString;
        hidden: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        policy_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_enrollment_api_key_response = z.infer<typeof Kibana_HTTP_APIs_enrollment_api_key_response>;
//# sourceMappingURL=post_fleet_enrollment_api_keys.d.ts.map