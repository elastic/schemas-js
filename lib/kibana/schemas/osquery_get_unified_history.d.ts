import { z } from 'zod';
export declare const Security_Osquery_API_UnifiedHistoryRowBase: z.ZodObject<{
    agentCount: z.ZodNumber;
    errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    id: z.ZodString;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodString;
    spaceId: z.ZodOptional<z.ZodString>;
    successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodString;
    totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type Security_Osquery_API_UnifiedHistoryRowBase = z.infer<typeof Security_Osquery_API_UnifiedHistoryRowBase>;
export declare const Security_Osquery_API_ScheduledHistoryRow: z.ZodObject<{
    agentCount: z.ZodNumber;
    errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    id: z.ZodString;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodString;
    spaceId: z.ZodOptional<z.ZodString>;
    successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodString;
    totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    executionCount: z.ZodOptional<z.ZodNumber>;
    plannedTime: z.ZodOptional<z.ZodString>;
    scheduleId: z.ZodOptional<z.ZodString>;
    source: z.ZodEnum<{
        Scheduled: "Scheduled";
    }>;
    sourceType: z.ZodEnum<{
        scheduled: "scheduled";
    }>;
}, z.core.$strip>;
export type Security_Osquery_API_ScheduledHistoryRow = z.infer<typeof Security_Osquery_API_ScheduledHistoryRow>;
export declare const Security_Osquery_API_LiveHistoryRow: z.ZodObject<{
    agentCount: z.ZodNumber;
    errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    id: z.ZodString;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodString;
    spaceId: z.ZodOptional<z.ZodString>;
    successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodString;
    totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    actionId: z.ZodOptional<z.ZodString>;
    agentAll: z.ZodOptional<z.ZodBoolean>;
    agentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agentPlatforms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agentPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ecsMapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    queriesTotal: z.ZodOptional<z.ZodNumber>;
    queriesWithResults: z.ZodOptional<z.ZodNumber>;
    savedQueryId: z.ZodOptional<z.ZodString>;
    source: z.ZodEnum<{
        Live: "Live";
        Rule: "Rule";
    }>;
    sourceType: z.ZodEnum<{
        live: "live";
    }>;
    timeout: z.ZodOptional<z.ZodNumber>;
    userId: z.ZodOptional<z.ZodString>;
    userProfileUid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_LiveHistoryRow = z.infer<typeof Security_Osquery_API_LiveHistoryRow>;
export declare const Security_Osquery_API_UnifiedHistoryRow: z.ZodUnion<readonly [z.ZodObject<{
    agentCount: z.ZodNumber;
    errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    id: z.ZodString;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodString;
    spaceId: z.ZodOptional<z.ZodString>;
    successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodString;
    totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    actionId: z.ZodOptional<z.ZodString>;
    agentAll: z.ZodOptional<z.ZodBoolean>;
    agentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agentPlatforms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    agentPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ecsMapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    queriesTotal: z.ZodOptional<z.ZodNumber>;
    queriesWithResults: z.ZodOptional<z.ZodNumber>;
    savedQueryId: z.ZodOptional<z.ZodString>;
    source: z.ZodEnum<{
        Live: "Live";
        Rule: "Rule";
    }>;
    sourceType: z.ZodEnum<{
        live: "live";
    }>;
    timeout: z.ZodOptional<z.ZodNumber>;
    userId: z.ZodOptional<z.ZodString>;
    userProfileUid: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    agentCount: z.ZodNumber;
    errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    id: z.ZodString;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodString;
    spaceId: z.ZodOptional<z.ZodString>;
    successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodString;
    totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    executionCount: z.ZodOptional<z.ZodNumber>;
    plannedTime: z.ZodOptional<z.ZodString>;
    scheduleId: z.ZodOptional<z.ZodString>;
    source: z.ZodEnum<{
        Scheduled: "Scheduled";
    }>;
    sourceType: z.ZodEnum<{
        scheduled: "scheduled";
    }>;
}, z.core.$strip>]>;
export type Security_Osquery_API_UnifiedHistoryRow = z.infer<typeof Security_Osquery_API_UnifiedHistoryRow>;
export declare const Security_Osquery_API_GetUnifiedHistoryResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        agentCount: z.ZodNumber;
        errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        id: z.ZodString;
        packId: z.ZodOptional<z.ZodString>;
        packName: z.ZodOptional<z.ZodString>;
        queryName: z.ZodOptional<z.ZodString>;
        queryText: z.ZodString;
        spaceId: z.ZodOptional<z.ZodString>;
        successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodString;
        totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        actionId: z.ZodOptional<z.ZodString>;
        agentAll: z.ZodOptional<z.ZodBoolean>;
        agentIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agentPlatforms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        agentPolicyIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        ecsMapping: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        queriesTotal: z.ZodOptional<z.ZodNumber>;
        queriesWithResults: z.ZodOptional<z.ZodNumber>;
        savedQueryId: z.ZodOptional<z.ZodString>;
        source: z.ZodEnum<{
            Live: "Live";
            Rule: "Rule";
        }>;
        sourceType: z.ZodEnum<{
            live: "live";
        }>;
        timeout: z.ZodOptional<z.ZodNumber>;
        userId: z.ZodOptional<z.ZodString>;
        userProfileUid: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        agentCount: z.ZodNumber;
        errorCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        id: z.ZodString;
        packId: z.ZodOptional<z.ZodString>;
        packName: z.ZodOptional<z.ZodString>;
        queryName: z.ZodOptional<z.ZodString>;
        queryText: z.ZodString;
        spaceId: z.ZodOptional<z.ZodString>;
        successCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodString;
        totalRows: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        executionCount: z.ZodOptional<z.ZodNumber>;
        plannedTime: z.ZodOptional<z.ZodString>;
        scheduleId: z.ZodOptional<z.ZodString>;
        source: z.ZodEnum<{
            Scheduled: "Scheduled";
        }>;
        sourceType: z.ZodEnum<{
            scheduled: "scheduled";
        }>;
    }, z.core.$strip>]>>;
    hasMore: z.ZodBoolean;
    nextPage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_GetUnifiedHistoryResponse = z.infer<typeof Security_Osquery_API_GetUnifiedHistoryResponse>;
//# sourceMappingURL=osquery_get_unified_history.d.ts.map