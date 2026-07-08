import { z } from 'zod';
export declare const DeleteNoteRequest: z.ZodUnion<readonly [z.ZodNullable<z.ZodObject<{
    noteId: z.ZodString;
}, z.core.$strip>>, z.ZodNullable<z.ZodObject<{
    noteIds: z.ZodNullable<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>]>;
export type DeleteNoteRequest = z.infer<typeof DeleteNoteRequest>;
//# sourceMappingURL=delete_note.d.ts.map