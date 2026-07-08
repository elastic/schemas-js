import { z } from 'zod';
export declare const Security_Timeline_API_NoteCreatedAndUpdatedMetadata: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type Security_Timeline_API_NoteCreatedAndUpdatedMetadata = z.infer<typeof Security_Timeline_API_NoteCreatedAndUpdatedMetadata>;
export declare const Security_Timeline_API_BareNote: z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineId: z.ZodString;
}, z.core.$strip>;
export type Security_Timeline_API_BareNote = z.infer<typeof Security_Timeline_API_BareNote>;
export declare const Security_Timeline_API_Note: z.ZodIntersection<z.ZodObject<{
    created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timelineId: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    noteId: z.ZodString;
    version: z.ZodString;
}, z.core.$strip>>;
export type Security_Timeline_API_Note = z.infer<typeof Security_Timeline_API_Note>;
export declare const Security_Timeline_API_ResponseNote: z.ZodObject<{
    note: z.ZodIntersection<z.ZodObject<{
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timelineId: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        noteId: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Security_Timeline_API_ResponseNote = z.infer<typeof Security_Timeline_API_ResponseNote>;
export declare const PersistNoteRouteRequest: z.ZodObject<{
    note: z.ZodObject<{
        created: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        createdBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updated: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        updatedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timelineId: z.ZodString;
    }, z.core.$strip>;
    noteId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersistNoteRouteRequest = z.infer<typeof PersistNoteRouteRequest>;
//# sourceMappingURL=persist_note_route.d.ts.map