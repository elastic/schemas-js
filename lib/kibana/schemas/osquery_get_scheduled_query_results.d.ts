import { z } from 'zod';
export declare const Security_Osquery_API_GetScheduledQueryResultsResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        edges: z.ZodOptional<z.ZodArray<z.ZodObject<{}, z.core.$strip>>>;
        inspect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Osquery_API_GetScheduledQueryResultsResponse = z.infer<typeof Security_Osquery_API_GetScheduledQueryResultsResponse>;
//# sourceMappingURL=osquery_get_scheduled_query_results.d.ts.map