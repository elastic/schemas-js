import { z } from 'zod';
export declare const UpdateFieldsMetadataDefaultRequest: z.ZodObject<{
    fields: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type UpdateFieldsMetadataDefaultRequest = z.infer<typeof UpdateFieldsMetadataDefaultRequest>;
export declare const UpdateFieldsMetadataDefaultResponse: z.ZodObject<{
    acknowledged: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateFieldsMetadataDefaultResponse = z.infer<typeof UpdateFieldsMetadataDefaultResponse>;
//# sourceMappingURL=update_fields_metadata_default.d.ts.map