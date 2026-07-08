import { z } from 'zod';
export declare const Security_Timeline_API_TimelineType: z.ZodEnum<{
    default: "default";
    template: "template";
}>;
export type Security_Timeline_API_TimelineType = z.infer<typeof Security_Timeline_API_TimelineType>;
export declare const Security_Timeline_API_FavoriteTimelineResult: z.ZodObject<{
    favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_FavoriteTimelineResult = z.infer<typeof Security_Timeline_API_FavoriteTimelineResult>;
export declare const Security_Timeline_API_FavoriteTimelineResponse: z.ZodObject<{
    favorite: z.ZodOptional<z.ZodArray<z.ZodObject<{
        favoriteDate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    savedObjectId: z.ZodString;
    templateTimelineId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    templateTimelineVersion: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timelineType: z.ZodOptional<z.ZodEnum<{
        default: "default";
        template: "template";
    }>>;
    version: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_FavoriteTimelineResponse = z.infer<typeof Security_Timeline_API_FavoriteTimelineResponse>;
export declare const PersistFavoriteRouteRequest: z.ZodObject<{
    templateTimelineId: z.ZodNullable<z.ZodString>;
    templateTimelineVersion: z.ZodNullable<z.ZodNumber>;
    timelineId: z.ZodNullable<z.ZodString>;
    timelineType: z.ZodEnum<{
        default: "default";
        template: "template";
    }>;
}, z.core.$strip>;
export type PersistFavoriteRouteRequest = z.infer<typeof PersistFavoriteRouteRequest>;
//# sourceMappingURL=persist_favorite_route.d.ts.map