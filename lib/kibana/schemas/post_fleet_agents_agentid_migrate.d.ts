import { z } from 'zod';
export declare const PostFleetAgentsAgentidMigrateRequest: z.ZodObject<{
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
        replace_token: z.ZodOptional<z.ZodString>;
        staging: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    uri: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsAgentidMigrateRequest = z.infer<typeof PostFleetAgentsAgentidMigrateRequest>;
export declare const PostFleetAgentsAgentidMigrateResponse: z.ZodObject<{
    actionId: z.ZodString;
}, z.core.$strip>;
export type PostFleetAgentsAgentidMigrateResponse = z.infer<typeof PostFleetAgentsAgentidMigrateResponse>;
//# sourceMappingURL=post_fleet_agents_agentid_migrate.d.ts.map