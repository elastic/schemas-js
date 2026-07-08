import { z } from 'zod';
export declare const GetFleetSettingsResponse: z.ZodObject<{
    item: z.ZodObject<{
        action_secret_storage_requirements_met: z.ZodOptional<z.ZodBoolean>;
        delete_unenrolled_agents: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            is_preconfigured: z.ZodBoolean;
        }, z.core.$strip>>;
        download_source_auth_secret_storage_requirements_met: z.ZodOptional<z.ZodBoolean>;
        has_seen_add_data_notice: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodOptional<z.ZodString>;
        ilm_migration_status: z.ZodOptional<z.ZodObject<{
            logs: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"success">, z.ZodLiteral<null>]>>>;
            metrics: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"success">, z.ZodLiteral<null>]>>>;
            synthetics: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodLiteral<"success">, z.ZodLiteral<null>]>>>;
        }, z.core.$strip>>;
        integration_knowledge_enabled: z.ZodOptional<z.ZodBoolean>;
        output_secret_storage_requirements_met: z.ZodOptional<z.ZodBoolean>;
        preconfigured_fields: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            fleet_server_hosts: "fleet_server_hosts";
        }>>>;
        prerelease_integrations_enabled: z.ZodOptional<z.ZodBoolean>;
        secret_storage_requirements_met: z.ZodOptional<z.ZodBoolean>;
        ssl_secret_storage_requirements_met: z.ZodOptional<z.ZodBoolean>;
        use_space_awareness_migration_started_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        use_space_awareness_migration_status: z.ZodOptional<z.ZodEnum<{
            success: "success";
            error: "error";
            pending: "pending";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetSettingsResponse = z.infer<typeof GetFleetSettingsResponse>;
//# sourceMappingURL=get_fleet_settings.d.ts.map