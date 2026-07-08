import { z } from 'zod';
export declare const Security_Entity_Analytics_API_WatchlistCsvUploadResponseItem: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    matchedEntities: z.ZodNumber;
    status: z.ZodEnum<{
        success: "success";
        failure: "failure";
        unmatched: "unmatched";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_WatchlistCsvUploadResponseItem = z.infer<typeof Security_Entity_Analytics_API_WatchlistCsvUploadResponseItem>;
export declare const UploadWatchlistCsvResponse: z.ZodObject<{
    failed: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodString>;
        matchedEntities: z.ZodNumber;
        status: z.ZodEnum<{
            success: "success";
            failure: "failure";
            unmatched: "unmatched";
        }>;
    }, z.core.$strip>>;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    unmatched: z.ZodNumber;
}, z.core.$strip>;
export type UploadWatchlistCsvResponse = z.infer<typeof UploadWatchlistCsvResponse>;
//# sourceMappingURL=upload_watchlist_csv.d.ts.map