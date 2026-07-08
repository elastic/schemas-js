import { z } from 'zod';
export declare const Security_Osquery_API_ECSMappingItem: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type Security_Osquery_API_ECSMappingItem = z.infer<typeof Security_Osquery_API_ECSMappingItem>;
export declare const Security_Osquery_API_ECSMapping: z.ZodRecord<z.ZodString, z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>;
export type Security_Osquery_API_ECSMapping = z.infer<typeof Security_Osquery_API_ECSMapping>;
export declare const Security_Osquery_API_FindLiveQueryDetailsResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        '@timestamp': z.ZodOptional<z.ZodString>;
        action_id: z.ZodOptional<z.ZodString>;
        agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
        expiration: z.ZodOptional<z.ZodString>;
        pack_id: z.ZodOptional<z.ZodString>;
        pack_name: z.ZodOptional<z.ZodString>;
        prebuilt_pack: z.ZodOptional<z.ZodBoolean>;
        queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            action_id: z.ZodOptional<z.ZodString>;
            agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
            docs: z.ZodOptional<z.ZodNumber>;
            ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                field: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>>;
            failed: z.ZodOptional<z.ZodNumber>;
            id: z.ZodOptional<z.ZodString>;
            pending: z.ZodOptional<z.ZodNumber>;
            query: z.ZodOptional<z.ZodString>;
            responded: z.ZodOptional<z.ZodNumber>;
            saved_query_id: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                completed: "completed";
                running: "running";
            }>>;
            successful: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodEnum<{
            completed: "completed";
            running: "running";
        }>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        user_id: z.ZodOptional<z.ZodString>;
        user_profile_uid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Osquery_API_FindLiveQueryDetailsResponse = z.infer<typeof Security_Osquery_API_FindLiveQueryDetailsResponse>;
//# sourceMappingURL=osquery_get_live_query_details.d.ts.map