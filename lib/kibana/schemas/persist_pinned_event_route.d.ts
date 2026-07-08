import { z } from 'zod';
export declare const Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata = z.infer<typeof Security_Timeline_API_PinnedEventCreatedAndUpdatedMetadata>;
export declare const Security_Timeline_API_BarePinnedEvent: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodString;
    timelineId: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_BarePinnedEvent = z.infer<typeof Security_Timeline_API_BarePinnedEvent>;
export declare const Security_Timeline_API_PinnedEvent: z.ZodIntersection<z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodString;
    timelineId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    pinnedEventId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type Security_Timeline_API_PinnedEvent = z.infer<typeof Security_Timeline_API_PinnedEvent>;
export declare const Security_Timeline_API_PersistPinnedEventResponse: z.ZodUnion<readonly [z.ZodIntersection<z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodString;
    timelineId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    pinnedEventId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>, z.ZodObject<{
    unpinned: z.ZodBoolean;
}, z.core.$strip>]>;
export type Security_Timeline_API_PersistPinnedEventResponse = z.infer<typeof Security_Timeline_API_PersistPinnedEventResponse>;
export declare const PersistPinnedEventRouteRequest: z.ZodObject<{
    eventId: z.ZodString;
    pinnedEventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineId: z.ZodString;
}, z.core.$strip>;
export type PersistPinnedEventRouteRequest = z.infer<typeof PersistPinnedEventRouteRequest>;
//# sourceMappingURL=persist_pinned_event_route.d.ts.map