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
export declare const GetFleetEnrollmentApiKeysResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        active: z.ZodBoolean;
        api_key: z.ZodString;
        api_key_id: z.ZodString;
        created_at: z.ZodString;
        hidden: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        policy_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    list: z.ZodArray<z.ZodObject<{
        active: z.ZodBoolean;
        api_key: z.ZodString;
        api_key_id: z.ZodString;
        created_at: z.ZodString;
        hidden: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        policy_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetEnrollmentApiKeysResponse = z.infer<typeof GetFleetEnrollmentApiKeysResponse>;
//# sourceMappingURL=get_fleet_enrollment_api_keys.d.ts.map