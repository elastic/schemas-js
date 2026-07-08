import { z } from 'zod';
export declare const Security_Osquery_API_ScheduleType: z.ZodEnum<{
    interval: "interval";
    rrule: "rrule";
}>;
export type Security_Osquery_API_ScheduleType = z.infer<typeof Security_Osquery_API_ScheduleType>;
export declare const Security_Osquery_API_RRuleScheduleConfig: z.ZodObject<{
    end_date: z.ZodOptional<z.ZodString>;
    rrule: z.ZodString;
    splay: z.ZodOptional<z.ZodString>;
    start_date: z.ZodString;
    timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Osquery_API_RRuleScheduleConfig = z.infer<typeof Security_Osquery_API_RRuleScheduleConfig>;
export declare const Security_Osquery_API_ECSMappingItem: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type Security_Osquery_API_ECSMappingItem = z.infer<typeof Security_Osquery_API_ECSMappingItem>;
export declare const Security_Osquery_API_PolicyIds: z.ZodArray<z.ZodString>;
export type Security_Osquery_API_PolicyIds = z.infer<typeof Security_Osquery_API_PolicyIds>;
export declare const Security_Osquery_API_PackName: z.ZodString;
export type Security_Osquery_API_PackName = z.infer<typeof Security_Osquery_API_PackName>;
export declare const Security_Osquery_API_PackInterval: z.ZodNumber;
export type Security_Osquery_API_PackInterval = z.infer<typeof Security_Osquery_API_PackInterval>;
export declare const Security_Osquery_API_Enabled: z.ZodBoolean;
export type Security_Osquery_API_Enabled = z.infer<typeof Security_Osquery_API_Enabled>;
export declare const Security_Osquery_API_PackDescription: z.ZodString;
export type Security_Osquery_API_PackDescription = z.infer<typeof Security_Osquery_API_PackDescription>;
export declare const Security_Osquery_API_ECSMappingArrayItem: z.ZodObject<{
    key: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Osquery_API_ECSMappingArrayItem = z.infer<typeof Security_Osquery_API_ECSMappingArrayItem>;
export declare const Security_Osquery_API_ECSMappingArray: z.ZodArray<z.ZodObject<{
    key: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type Security_Osquery_API_ECSMappingArray = z.infer<typeof Security_Osquery_API_ECSMappingArray>;
export declare const Security_Osquery_API_CopyPacksResponse: z.ZodObject<{
    data: z.ZodObject<{
        created_at: z.ZodOptional<z.ZodString>;
        created_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        created_by_profile_uid: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        interval: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        policy_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        queries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ecs_mapping: z.ZodOptional<z.ZodArray<z.ZodObject<{
                key: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodObject<{
                    field: z.ZodOptional<z.ZodString>;
                    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            id: z.ZodOptional<z.ZodString>;
            interval: z.ZodOptional<z.ZodNumber>;
            platform: z.ZodOptional<z.ZodString>;
            query: z.ZodOptional<z.ZodString>;
            removed: z.ZodOptional<z.ZodBoolean>;
            rrule_schedule: z.ZodOptional<z.ZodObject<{
                end_date: z.ZodOptional<z.ZodString>;
                rrule: z.ZodString;
                splay: z.ZodOptional<z.ZodString>;
                start_date: z.ZodString;
                timeout: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            schedule_type: z.ZodOptional<z.ZodEnum<{
                interval: "interval";
                rrule: "rrule";
            }>>;
            snapshot: z.ZodOptional<z.ZodBoolean>;
            timeout: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        rrule_schedule: z.ZodOptional<z.ZodObject<{
            end_date: z.ZodOptional<z.ZodString>;
            rrule: z.ZodString;
            splay: z.ZodOptional<z.ZodString>;
            start_date: z.ZodString;
            timeout: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        saved_object_id: z.ZodString;
        schedule_type: z.ZodOptional<z.ZodEnum<{
            interval: "interval";
            rrule: "rrule";
        }>>;
        shards: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        updated_at: z.ZodOptional<z.ZodString>;
        updated_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated_by_profile_uid: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Security_Osquery_API_CopyPacksResponse = z.infer<typeof Security_Osquery_API_CopyPacksResponse>;
//# sourceMappingURL=osquery_copy_packs.d.ts.map