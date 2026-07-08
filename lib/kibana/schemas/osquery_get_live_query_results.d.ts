import { z } from 'zod';
export declare const Security_Osquery_API_GetLiveQueryResultsResponse: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        edges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _id: z.ZodOptional<z.ZodString>;
            _source: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Osquery_API_GetLiveQueryResultsResponse = z.infer<typeof Security_Osquery_API_GetLiveQueryResultsResponse>;
//# sourceMappingURL=osquery_get_live_query_results.d.ts.map