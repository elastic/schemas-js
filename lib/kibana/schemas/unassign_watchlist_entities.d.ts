import { z } from 'zod';
export declare const Security_Entity_Analytics_API_WatchlistEntityUnassignResponseItem: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    euid: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        failure: "failure";
        not_found: "not_found";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_WatchlistEntityUnassignResponseItem = z.infer<typeof Security_Entity_Analytics_API_WatchlistEntityUnassignResponseItem>;
export declare const UnassignWatchlistEntitiesRequest: z.ZodObject<{
    euids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UnassignWatchlistEntitiesRequest = z.infer<typeof UnassignWatchlistEntitiesRequest>;
export declare const UnassignWatchlistEntitiesResponse: z.ZodObject<{
    failed: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodString>;
        euid: z.ZodString;
        status: z.ZodEnum<{
            success: "success";
            failure: "failure";
            not_found: "not_found";
        }>;
    }, z.core.$strip>>;
    not_found: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type UnassignWatchlistEntitiesResponse = z.infer<typeof UnassignWatchlistEntitiesResponse>;
//# sourceMappingURL=unassign_watchlist_entities.d.ts.map