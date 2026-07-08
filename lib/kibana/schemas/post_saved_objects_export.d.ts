import { z } from 'zod';
export declare const PostSavedObjectsExportRequest: z.ZodObject<{
    excludeExportDetails: z.ZodOptional<z.ZodBoolean>;
    hasReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>]>>;
    includeReferencesDeep: z.ZodOptional<z.ZodBoolean>;
    objects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    search: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type PostSavedObjectsExportRequest = z.infer<typeof PostSavedObjectsExportRequest>;
//# sourceMappingURL=post_saved_objects_export.d.ts.map