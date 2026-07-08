import { z } from 'zod';
export declare const PostSavedObjectsImportResponse: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{}, z.core.$loose>>;
    success: z.ZodBoolean;
    successCount: z.ZodNumber;
    successResults: z.ZodArray<z.ZodObject<{}, z.core.$loose>>;
}, z.core.$strip>;
export type PostSavedObjectsImportResponse = z.infer<typeof PostSavedObjectsImportResponse>;
//# sourceMappingURL=post_saved_objects_import.d.ts.map