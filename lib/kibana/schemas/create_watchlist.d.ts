import { z } from 'zod';
export declare const Security_Entity_Analytics_API_EntitySourceType: z.ZodEnum<{
    index: "index";
    store: "store";
    entity_analytics_integration: "entity_analytics_integration";
}>;
export type Security_Entity_Analytics_API_EntitySourceType = z.infer<typeof Security_Entity_Analytics_API_EntitySourceType>;
export declare const Security_Entity_Analytics_API_DateRange: z.ZodObject<{
    end: z.ZodString;
    start: z.ZodString;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_DateRange = z.infer<typeof Security_Entity_Analytics_API_DateRange>;
export declare const Security_Entity_Analytics_API_Matcher: z.ZodObject<{
    fields: z.ZodArray<z.ZodString>;
    values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_Matcher = z.infer<typeof Security_Entity_Analytics_API_Matcher>;
export declare const Security_Entity_Analytics_API_Integrations: z.ZodObject<{
    syncData: z.ZodOptional<z.ZodObject<{
        lastFullSync: z.ZodOptional<z.ZodString>;
        lastUpdateProcessed: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    syncMarkerIndex: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_Integrations = z.infer<typeof Security_Entity_Analytics_API_Integrations>;
export declare const Security_Entity_Analytics_API_Filter: z.ZodObject<{
    kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_Filter = z.infer<typeof Security_Entity_Analytics_API_Filter>;
export declare const Security_Entity_Analytics_API_WatchlistObject: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    entityCount: z.ZodOptional<z.ZodNumber>;
    entitySourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    id: z.ZodOptional<z.ZodString>;
    managed: z.ZodBoolean;
    name: z.ZodString;
    riskModifier: z.ZodNumber;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_WatchlistObject = z.infer<typeof Security_Entity_Analytics_API_WatchlistObject>;
export declare const Security_Entity_Analytics_API_UpdateableMonitoringEntitySourceProperties: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodObject<{
        kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
    }, z.core.$strip>>;
    identifierField: z.ZodOptional<z.ZodString>;
    indexPattern: z.ZodOptional<z.ZodString>;
    integrationName: z.ZodOptional<z.ZodString>;
    integrations: z.ZodOptional<z.ZodObject<{
        syncData: z.ZodOptional<z.ZodObject<{
            lastFullSync: z.ZodOptional<z.ZodString>;
            lastUpdateProcessed: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        syncMarkerIndex: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    matchers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fields: z.ZodArray<z.ZodString>;
        values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
    }, z.core.$strip>>>;
    name: z.ZodOptional<z.ZodString>;
    queryRule: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodObject<{
        end: z.ZodString;
        start: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        index: "index";
        store: "store";
        entity_analytics_integration: "entity_analytics_integration";
    }>>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_UpdateableMonitoringEntitySourceProperties = z.infer<typeof Security_Entity_Analytics_API_UpdateableMonitoringEntitySourceProperties>;
export declare const Security_Entity_Analytics_API_MonitoringEntitySourceProperties: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodObject<{
        kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
    }, z.core.$strip>>;
    identifierField: z.ZodOptional<z.ZodString>;
    indexPattern: z.ZodOptional<z.ZodString>;
    integrationName: z.ZodOptional<z.ZodString>;
    integrations: z.ZodOptional<z.ZodObject<{
        syncData: z.ZodOptional<z.ZodObject<{
            lastFullSync: z.ZodOptional<z.ZodString>;
            lastUpdateProcessed: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        syncMarkerIndex: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    matchers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fields: z.ZodArray<z.ZodString>;
        values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
    }, z.core.$strip>>>;
    name: z.ZodOptional<z.ZodString>;
    queryRule: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodObject<{
        end: z.ZodString;
        start: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        index: "index";
        store: "store";
        entity_analytics_integration: "entity_analytics_integration";
    }>>;
    managed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_MonitoringEntitySourceProperties = z.infer<typeof Security_Entity_Analytics_API_MonitoringEntitySourceProperties>;
export declare const Security_Entity_Analytics_API_MonitoringEntitySource: z.ZodIntersection<z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodObject<{
        kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
    }, z.core.$strip>>;
    identifierField: z.ZodOptional<z.ZodString>;
    indexPattern: z.ZodOptional<z.ZodString>;
    integrationName: z.ZodOptional<z.ZodString>;
    integrations: z.ZodOptional<z.ZodObject<{
        syncData: z.ZodOptional<z.ZodObject<{
            lastFullSync: z.ZodOptional<z.ZodString>;
            lastUpdateProcessed: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        syncMarkerIndex: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    matchers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        fields: z.ZodArray<z.ZodString>;
        values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
    }, z.core.$strip>>>;
    name: z.ZodOptional<z.ZodString>;
    queryRule: z.ZodOptional<z.ZodString>;
    range: z.ZodOptional<z.ZodObject<{
        end: z.ZodString;
        start: z.ZodString;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        index: "index";
        store: "store";
        entity_analytics_integration: "entity_analytics_integration";
    }>>;
    managed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    apiKeyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodString;
}, z.core.$strip>>;
export type Security_Entity_Analytics_API_MonitoringEntitySource = z.infer<typeof Security_Entity_Analytics_API_MonitoringEntitySource>;
export declare const CreateWatchlistRequest: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    entitySources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        filter: z.ZodOptional<z.ZodObject<{
            kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
        }, z.core.$strip>>;
        identifierField: z.ZodOptional<z.ZodString>;
        indexPattern: z.ZodOptional<z.ZodString>;
        integrationName: z.ZodOptional<z.ZodString>;
        matchers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            fields: z.ZodArray<z.ZodString>;
            values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
        }, z.core.$strip>>>;
        name: z.ZodString;
        queryRule: z.ZodOptional<z.ZodString>;
        range: z.ZodOptional<z.ZodObject<{
            end: z.ZodString;
            start: z.ZodString;
        }, z.core.$strip>>;
        type: z.ZodEnum<{
            index: "index";
            store: "store";
            entity_analytics_integration: "entity_analytics_integration";
        }>;
    }, z.core.$strip>>>;
    managed: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    riskModifier: z.ZodNumber;
}, z.core.$strip>;
export type CreateWatchlistRequest = z.infer<typeof CreateWatchlistRequest>;
export declare const CreateWatchlistResponse: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    entityCount: z.ZodOptional<z.ZodNumber>;
    entitySourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    id: z.ZodOptional<z.ZodString>;
    managed: z.ZodBoolean;
    name: z.ZodString;
    riskModifier: z.ZodNumber;
    updatedAt: z.ZodOptional<z.ZodString>;
    entitySources: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        filter: z.ZodOptional<z.ZodObject<{
            kuery: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{}, z.core.$strip>]>>;
        }, z.core.$strip>>;
        identifierField: z.ZodOptional<z.ZodString>;
        indexPattern: z.ZodOptional<z.ZodString>;
        integrationName: z.ZodOptional<z.ZodString>;
        integrations: z.ZodOptional<z.ZodObject<{
            syncData: z.ZodOptional<z.ZodObject<{
                lastFullSync: z.ZodOptional<z.ZodString>;
                lastUpdateProcessed: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            syncMarkerIndex: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        matchers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            fields: z.ZodArray<z.ZodString>;
            values: z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodBoolean>]>;
        }, z.core.$strip>>>;
        name: z.ZodOptional<z.ZodString>;
        queryRule: z.ZodOptional<z.ZodString>;
        range: z.ZodOptional<z.ZodObject<{
            end: z.ZodString;
            start: z.ZodString;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodEnum<{
            index: "index";
            store: "store";
            entity_analytics_integration: "entity_analytics_integration";
        }>>;
        managed: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodObject<{
        apiKeyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export type CreateWatchlistResponse = z.infer<typeof CreateWatchlistResponse>;
//# sourceMappingURL=create_watchlist.d.ts.map