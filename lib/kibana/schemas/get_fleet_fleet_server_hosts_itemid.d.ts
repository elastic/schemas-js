import { z } from 'zod';
export declare const GetFleetFleetServerHostsItemidResponse: z.ZodObject<{
    item: z.ZodObject<{
        host_urls: z.ZodArray<z.ZodString>;
        id: z.ZodString;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_internal: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        proxy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        secrets: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodOptional<z.ZodObject<{
                agent_key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
                es_key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
                key: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                    id: z.ZodString;
                }, z.core.$strip>, z.ZodString]>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        ssl: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            agent_certificate: z.ZodOptional<z.ZodString>;
            agent_certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            agent_key: z.ZodOptional<z.ZodString>;
            certificate: z.ZodOptional<z.ZodString>;
            certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            client_auth: z.ZodOptional<z.ZodEnum<{
                optional: "optional";
                none: "none";
                required: "required";
            }>>;
            es_certificate: z.ZodOptional<z.ZodString>;
            es_certificate_authorities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            es_key: z.ZodOptional<z.ZodString>;
            key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetFleetServerHostsItemidResponse = z.infer<typeof GetFleetFleetServerHostsItemidResponse>;
//# sourceMappingURL=get_fleet_fleet_server_hosts_itemid.d.ts.map