import { z } from 'zod';
export declare const Security_Entity_Analytics_API_WatchlistObject: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    entityCount: z.ZodOptional<z.ZodNumber>;
    entitySourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    id: z.ZodOptional<z.ZodString>;
    managed: z.ZodBoolean;
    name: z.ZodString;
    riskModifier: z.ZodNumber;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Security_Entity_Analytics_API_WatchlistObject = z.infer<typeof Security_Entity_Analytics_API_WatchlistObject>;
export declare const ListWatchlistsResponse: z.ZodArray<z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    entityCount: z.ZodOptional<z.ZodNumber>;
    entitySourceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    id: z.ZodOptional<z.ZodString>;
    managed: z.ZodBoolean;
    name: z.ZodString;
    riskModifier: z.ZodNumber;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
export type ListWatchlistsResponse = z.infer<typeof ListWatchlistsResponse>;
//# sourceMappingURL=list_watchlists.d.ts.map