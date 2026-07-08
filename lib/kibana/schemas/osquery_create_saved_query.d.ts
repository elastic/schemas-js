import { z } from 'zod';
export declare const Security_Osquery_API_Snapshot: z.ZodBoolean;
export type Security_Osquery_API_Snapshot = z.infer<typeof Security_Osquery_API_Snapshot>;
export declare const Security_Osquery_API_Removed: z.ZodBoolean;
export type Security_Osquery_API_Removed = z.infer<typeof Security_Osquery_API_Removed>;
export declare const Security_Osquery_API_Query: z.ZodString;
export type Security_Osquery_API_Query = z.infer<typeof Security_Osquery_API_Query>;
export declare const Security_Osquery_API_Platform: z.ZodString;
export type Security_Osquery_API_Platform = z.infer<typeof Security_Osquery_API_Platform>;
export declare const Security_Osquery_API_SavedQueryId: z.ZodString;
export type Security_Osquery_API_SavedQueryId = z.infer<typeof Security_Osquery_API_SavedQueryId>;
export declare const Security_Osquery_API_ECSMappingItem: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type Security_Osquery_API_ECSMappingItem = z.infer<typeof Security_Osquery_API_ECSMappingItem>;
export declare const Security_Osquery_API_SavedQueryDescription: z.ZodString;
export type Security_Osquery_API_SavedQueryDescription = z.infer<typeof Security_Osquery_API_SavedQueryDescription>;
export declare const Security_Osquery_API_Version: z.ZodString;
export type Security_Osquery_API_Version = z.infer<typeof Security_Osquery_API_Version>;
export declare const Security_Osquery_API_Interval: z.ZodString;
export type Security_Osquery_API_Interval = z.infer<typeof Security_Osquery_API_Interval>;
export declare const Security_Osquery_API_ECSMapping: z.ZodRecord<z.ZodString, z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>;
export type Security_Osquery_API_ECSMapping = z.infer<typeof Security_Osquery_API_ECSMapping>;
export declare const Security_Osquery_API_CreateSavedQueryResponse: z.ZodObject<{
    data: z.ZodObject<{
        created_at: z.ZodOptional<z.ZodString>;
        created_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        created_by_profile_uid: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            field: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        platform: z.ZodOptional<z.ZodString>;
        prebuilt: z.ZodOptional<z.ZodBoolean>;
        query: z.ZodOptional<z.ZodString>;
        removed: z.ZodOptional<z.ZodBoolean>;
        saved_object_id: z.ZodString;
        snapshot: z.ZodOptional<z.ZodBoolean>;
        timeout: z.ZodOptional<z.ZodNumber>;
        updated_at: z.ZodOptional<z.ZodString>;
        updated_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated_by_profile_uid: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Osquery_API_CreateSavedQueryResponse = z.infer<typeof Security_Osquery_API_CreateSavedQueryResponse>;
export declare const Security_Osquery_API_CreateSavedQueryRequestBody: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    id: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    removed: z.ZodOptional<z.ZodBoolean>;
    snapshot: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_CreateSavedQueryRequestBody = z.infer<typeof Security_Osquery_API_CreateSavedQueryRequestBody>;
//# sourceMappingURL=osquery_create_saved_query.d.ts.map