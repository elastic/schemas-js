import { z } from 'zod';
export declare const Kibana_HTTP_APIs_connector_response_with_references_count: z.ZodObject<{
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
    referenced_by_count: z.ZodNumber;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_connector_response_with_references_count = z.infer<typeof Kibana_HTTP_APIs_connector_response_with_references_count>;
export declare const GetActionsConnectorsResponse: z.ZodArray<z.ZodObject<{
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
    referenced_by_count: z.ZodNumber;
}, z.core.$strip>>;
export type GetActionsConnectorsResponse = z.infer<typeof GetActionsConnectorsResponse>;
//# sourceMappingURL=get_actions_connectors.d.ts.map