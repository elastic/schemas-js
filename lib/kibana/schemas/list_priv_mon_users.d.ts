import { z } from 'zod';
export declare const Security_Entity_Analytics_API_MonitoringLabel: z.ZodObject<{
    field: z.ZodString;
    source: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_MonitoringLabel = z.infer<typeof Security_Entity_Analytics_API_MonitoringLabel>;
export declare const Security_Entity_Analytics_API_MonitoredUserUpdateDoc: z.ZodObject<{
    entity_analytics_monitoring: z.ZodOptional<z.ZodObject<{
        labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            source: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodObject<{
        source_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        source_integrations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            csv: "csv";
            api: "api";
            index_sync: "index_sync";
        }>>>;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        is_privileged: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_MonitoredUserUpdateDoc = z.infer<typeof Security_Entity_Analytics_API_MonitoredUserUpdateDoc>;
export declare const Security_Entity_Analytics_API_MonitoredUserDoc: z.ZodObject<{
    entity_analytics_monitoring: z.ZodOptional<z.ZodObject<{
        labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            source: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodObject<{
        source_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        source_integrations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            csv: "csv";
            api: "api";
            index_sync: "index_sync";
        }>>>;
    }, z.core.$strip>>;
    '@timestamp': z.ZodOptional<z.ZodString>;
    event: z.ZodOptional<z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodString>;
        ingested: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        entity: z.ZodOptional<z.ZodObject<{
            attributes: z.ZodOptional<z.ZodObject<{
                Privileged: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        is_privileged: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_MonitoredUserDoc = z.infer<typeof Security_Entity_Analytics_API_MonitoredUserDoc>;
export declare const ListPrivMonUsersResponse: z.ZodArray<z.ZodObject<{
    entity_analytics_monitoring: z.ZodOptional<z.ZodObject<{
        labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            source: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    id: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodObject<{
        source_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        source_integrations: z.ZodOptional<z.ZodArray<z.ZodString>>;
        sources: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            csv: "csv";
            api: "api";
            index_sync: "index_sync";
        }>>>;
    }, z.core.$strip>>;
    '@timestamp': z.ZodOptional<z.ZodString>;
    event: z.ZodOptional<z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodString>;
        ingested: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user: z.ZodOptional<z.ZodObject<{
        entity: z.ZodOptional<z.ZodObject<{
            attributes: z.ZodOptional<z.ZodObject<{
                Privileged: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        is_privileged: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type ListPrivMonUsersResponse = z.infer<typeof ListPrivMonUsersResponse>;
//# sourceMappingURL=list_priv_mon_users.d.ts.map