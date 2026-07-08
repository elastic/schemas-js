import { z } from 'zod';
export declare const Security_Entity_Analytics_API_WatchlistEntityAssignResponseItem: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    euid: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        failure: "failure";
        not_found: "not_found";
    }>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_WatchlistEntityAssignResponseItem = z.infer<typeof Security_Entity_Analytics_API_WatchlistEntityAssignResponseItem>;
export declare const AssignWatchlistEntitiesRequest: z.ZodObject<{
    euids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AssignWatchlistEntitiesRequest = z.infer<typeof AssignWatchlistEntitiesRequest>;
export declare const AssignWatchlistEntitiesResponse: z.ZodObject<{
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
export type AssignWatchlistEntitiesResponse = z.infer<typeof AssignWatchlistEntitiesResponse>;
//# sourceMappingURL=assign_watchlist_entities.d.ts.map