import { z } from 'zod';
export declare const Security_Osquery_API_ECSMappingItem: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type Security_Osquery_API_ECSMappingItem = z.infer<typeof Security_Osquery_API_ECSMappingItem>;
export declare const Security_Osquery_API_SavedQueryId: z.ZodString;
export type Security_Osquery_API_SavedQueryId = z.infer<typeof Security_Osquery_API_SavedQueryId>;
export declare const Security_Osquery_API_Query: z.ZodString;
export type Security_Osquery_API_Query = z.infer<typeof Security_Osquery_API_Query>;
export declare const Security_Osquery_API_Version: z.ZodString;
export type Security_Osquery_API_Version = z.infer<typeof Security_Osquery_API_Version>;
export declare const Security_Osquery_API_Snapshot: z.ZodBoolean;
export type Security_Osquery_API_Snapshot = z.infer<typeof Security_Osquery_API_Snapshot>;
export declare const Security_Osquery_API_Removed: z.ZodBoolean;
export type Security_Osquery_API_Removed = z.infer<typeof Security_Osquery_API_Removed>;
export declare const Security_Osquery_API_Platform: z.ZodString;
export type Security_Osquery_API_Platform = z.infer<typeof Security_Osquery_API_Platform>;
export declare const Security_Osquery_API_QueryId: z.ZodString;
export type Security_Osquery_API_QueryId = z.infer<typeof Security_Osquery_API_QueryId>;
export declare const Security_Osquery_API_PackId: z.ZodString;
export type Security_Osquery_API_PackId = z.infer<typeof Security_Osquery_API_PackId>;
export declare const Security_Osquery_API_ECSMapping: z.ZodRecord<z.ZodString, z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>;
export type Security_Osquery_API_ECSMapping = z.infer<typeof Security_Osquery_API_ECSMapping>;
export declare const Security_Osquery_API_CreateLiveQueryResponse: z.ZodObject<{
    data: z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodString>;
        action_id: z.ZodString;
        agent_all: z.ZodOptional<z.ZodBoolean>;
        agent_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agent_platforms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agent_policy_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
        expiration: z.ZodOptional<z.ZodString>;
        input_type: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        pack_id: z.ZodOptional<z.ZodString>;
        queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            action_id: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            id: z.ZodOptional<z.ZodString>;
            platform: z.ZodOptional<z.ZodString>;
            query: z.ZodOptional<z.ZodString>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            timeout: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        type: z.ZodOptional<z.ZodString>;
        user_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Osquery_API_CreateLiveQueryResponse = z.infer<typeof Security_Osquery_API_CreateLiveQueryResponse>;
export declare const Security_Osquery_API_ArrayQueriesItem: z.ZodObject<{
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    id: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    removed: z.ZodOptional<z.ZodBoolean>;
    snapshot: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_ArrayQueriesItem = z.infer<typeof Security_Osquery_API_ArrayQueriesItem>;
export declare const Security_Osquery_API_ArrayQueries: z.ZodArray<z.ZodObject<{
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    id: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    removed: z.ZodOptional<z.ZodBoolean>;
    snapshot: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type Security_Osquery_API_ArrayQueries = z.infer<typeof Security_Osquery_API_ArrayQueries>;
export declare const Security_Osquery_API_CreateLiveQueryRequestBody: z.ZodObject<{
    agent_all: z.ZodOptional<z.ZodBoolean>;
    agent_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agent_platforms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agent_policy_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    alert_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    case_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    event_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodObject<{}, z.core.$strip>>>;
    pack_id: z.ZodOptional<z.ZodString>;
    queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            field: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        id: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        query: z.ZodOptional<z.ZodString>;
        removed: z.ZodOptional<z.ZodBoolean>;
        snapshot: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    query: z.ZodOptional<z.ZodString>;
    saved_query_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_CreateLiveQueryRequestBody = z.infer<typeof Security_Osquery_API_CreateLiveQueryRequestBody>;
//# sourceMappingURL=osquery_create_live_query.d.ts.map