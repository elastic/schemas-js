import { z } from 'zod';
export declare const Kibana_HTTP_APIs_connector_type_response: z.ZodObject<{
    allow_multiple_system_actions: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
    enabled_in_config: z.ZodBoolean;
    enabled_in_license: z.ZodBoolean;
    id: z.ZodString;
    is_deprecated: z.ZodBoolean;
    is_experimental: z.ZodOptional<z.ZodBoolean>;
    is_system_action_type: z.ZodBoolean;
    minimum_license_required: z.ZodEnum<{
        standard: "standard";
        basic: "basic";
        trial: "trial";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>;
    name: z.ZodString;
    source: z.ZodEnum<{
        yml: "yml";
        spec: "spec";
        stack: "stack";
    }>;
    sub_feature: z.ZodOptional<z.ZodEnum<{
        endpointSecurity: "endpointSecurity";
    }>>;
    supported_feature_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_connector_type_response = z.infer<typeof Kibana_HTTP_APIs_connector_type_response>;
export declare const GetActionsConnectorTypesResponse: z.ZodArray<z.ZodObject<{
    allow_multiple_system_actions: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    enabled: z.ZodBoolean;
    enabled_in_config: z.ZodBoolean;
    enabled_in_license: z.ZodBoolean;
    id: z.ZodString;
    is_deprecated: z.ZodBoolean;
    is_experimental: z.ZodOptional<z.ZodBoolean>;
    is_system_action_type: z.ZodBoolean;
    minimum_license_required: z.ZodEnum<{
        standard: "standard";
        basic: "basic";
        trial: "trial";
        gold: "gold";
        platinum: "platinum";
        enterprise: "enterprise";
    }>;
    name: z.ZodString;
    source: z.ZodEnum<{
        yml: "yml";
        spec: "spec";
        stack: "stack";
    }>;
    sub_feature: z.ZodOptional<z.ZodEnum<{
        endpointSecurity: "endpointSecurity";
    }>>;
    supported_feature_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>>;
export type GetActionsConnectorTypesResponse = z.infer<typeof GetActionsConnectorTypesResponse>;
//# sourceMappingURL=get_actions_connector_types.d.ts.map