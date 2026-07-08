import { z } from 'zod';
export declare const PostFleetAgentsBulkMigrateRequest: z.ZodObject<{
    agents: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>;
    batchSize: z.ZodOptional<z.ZodNumber>;
    enrollment_token: z.ZodString;
    settings: z.ZodOptional<z.ZodObject<{
        ca_sha256: z.ZodOptional<z.ZodString>;
        certificate_authorities: z.ZodOptional<z.ZodString>;
        elastic_agent_cert: z.ZodOptional<z.ZodString>;
        elastic_agent_cert_key: z.ZodOptional<z.ZodString>;
        elastic_agent_cert_key_passphrase: z.ZodOptional<z.ZodString>;
        headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        insecure: z.ZodOptional<z.ZodBoolean>;
        proxy_disabled: z.ZodOptional<z.ZodBoolean>;
        proxy_headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        proxy_url: z.ZodOptional<z.ZodString>;
        staging: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    uri: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkMigrateRequest = z.infer<typeof PostFleetAgentsBulkMigrateRequest>;
export declare const PostFleetAgentsBulkMigrateResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsBulkMigrateResponse = z.infer<typeof PostFleetAgentsBulkMigrateResponse>;
//# sourceMappingURL=post_fleet_agents_bulk_migrate.d.ts.map