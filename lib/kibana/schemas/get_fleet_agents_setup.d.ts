import { z } from 'zod';
export declare const GetFleetAgentsSetupResponse: z.ZodObject<{
    is_action_secrets_storage_enabled: z.ZodOptional<z.ZodBoolean>;
    is_secrets_storage_enabled: z.ZodOptional<z.ZodBoolean>;
    is_space_awareness_enabled: z.ZodOptional<z.ZodBoolean>;
    is_ssl_secrets_storage_enabled: z.ZodOptional<z.ZodBoolean>;
    isReady: z.ZodBoolean;
    missing_optional_features: z.ZodArray<z.ZodEnum<{
        encrypted_saved_object_encryption_key_required: "encrypted_saved_object_encryption_key_required";
    }>>;
    missing_requirements: z.ZodArray<z.ZodEnum<{
        security_required: "security_required";
        tls_required: "tls_required";
        api_keys: "api_keys";
        fleet_admin_user: "fleet_admin_user";
        fleet_server: "fleet_server";
    }>>;
    package_verification_key_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFleetAgentsSetupResponse = z.infer<typeof GetFleetAgentsSetupResponse>;
//# sourceMappingURL=get_fleet_agents_setup.d.ts.map