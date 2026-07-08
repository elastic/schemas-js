import { z } from 'zod';
export declare const Security_Osquery_API_ScheduledExecutionMetadata: z.ZodObject<{
    executionCount: z.ZodOptional<z.ZodNumber>;
    packId: z.ZodOptional<z.ZodString>;
    packName: z.ZodOptional<z.ZodString>;
    queryName: z.ZodOptional<z.ZodString>;
    queryText: z.ZodOptional<z.ZodString>;
    scheduleId: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Osquery_API_ScheduledExecutionMetadata = z.infer<typeof Security_Osquery_API_ScheduledExecutionMetadata>;
export declare const Security_Osquery_API_ScheduledActionResultsAggregations: z.ZodObject<{
    failed: z.ZodOptional<z.ZodNumber>;
    pending: z.ZodOptional<z.ZodNumber>;
    successful: z.ZodOptional<z.ZodNumber>;
    totalResponded: z.ZodOptional<z.ZodNumber>;
    totalRowCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Osquery_API_ScheduledActionResultsAggregations = z.infer<typeof Security_Osquery_API_ScheduledActionResultsAggregations>;
export declare const Security_Osquery_API_GetScheduledActionResultsResponse: z.ZodObject<{
    aggregations: z.ZodOptional<z.ZodObject<{
        failed: z.ZodOptional<z.ZodNumber>;
        pending: z.ZodOptional<z.ZodNumber>;
        successful: z.ZodOptional<z.ZodNumber>;
        totalResponded: z.ZodOptional<z.ZodNumber>;
        totalRowCount: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    currentPage: z.ZodOptional<z.ZodNumber>;
    edges: z.ZodOptional<z.ZodArray<z.ZodObject<{}, z.core.$strip>>>;
    inspect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodObject<{
        executionCount: z.ZodOptional<z.ZodNumber>;
        packId: z.ZodOptional<z.ZodString>;
        packName: z.ZodOptional<z.ZodString>;
        queryName: z.ZodOptional<z.ZodString>;
        queryText: z.ZodOptional<z.ZodString>;
        scheduleId: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodNumber>;
    totalPages: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Security_Osquery_API_GetScheduledActionResultsResponse = z.infer<typeof Security_Osquery_API_GetScheduledActionResultsResponse>;
//# sourceMappingURL=osquery_get_scheduled_action_results.d.ts.map