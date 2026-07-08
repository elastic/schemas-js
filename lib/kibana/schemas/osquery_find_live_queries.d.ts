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
export declare const Security_Osquery_API_FindLiveQueryResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        items: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _source: z.ZodOptional<z.ZodObject<{
                '@timestamp': z.ZodOptional<z.ZodString>;
                action_id: z.ZodOptional<z.ZodString>;
                agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
                expiration: z.ZodOptional<z.ZodString>;
                pack_id: z.ZodOptional<z.ZodString>;
                queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    action_id: z.ZodOptional<z.ZodString>;
                    agents: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    ecs_mapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        field: z.ZodOptional<z.ZodString>;
                        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    }, z.core.$strip>>>;
                    id: z.ZodOptional<z.ZodString>;
                    query: z.ZodOptional<z.ZodString>;
                    saved_query_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                result_counts: z.ZodOptional<z.ZodObject<{
                    error_agents: z.ZodOptional<z.ZodNumber>;
                    responded_agents: z.ZodOptional<z.ZodNumber>;
                    successful_agents: z.ZodOptional<z.ZodNumber>;
                    total_rows: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                user_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Osquery_API_FindLiveQueryResponse = z.infer<typeof Security_Osquery_API_FindLiveQueryResponse>;
//# sourceMappingURL=osquery_find_live_queries.d.ts.map