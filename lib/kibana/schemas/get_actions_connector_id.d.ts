import { z } from 'zod';
export declare const Kibana_HTTP_APIs_connector_response: z.ZodObject<{
    auth_mode: z.ZodOptional<z.ZodEnum<{
        shared: "shared";
        "per-user": "per-user";
    }>>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    connector_type_id: z.ZodString;
    id: z.ZodString;
    is_connector_type_deprecated: z.ZodBoolean;
    is_deprecated: z.ZodBoolean;
    is_missing_secrets: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodBoolean;
    is_system_action: z.ZodBoolean;
    name: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_connector_response = z.infer<typeof Kibana_HTTP_APIs_connector_response>;
//# sourceMappingURL=get_actions_connector_id.d.ts.map