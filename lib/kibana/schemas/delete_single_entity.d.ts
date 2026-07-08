import { z } from 'zod';
export declare const DeleteSingleEntityRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type DeleteSingleEntityRequest = z.infer<typeof DeleteSingleEntityRequest>;
export declare const DeleteSingleEntityResponse: z.ZodObject<{
    deleted: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type DeleteSingleEntityResponse = z.infer<typeof DeleteSingleEntityResponse>;
//# sourceMappingURL=delete_single_entity.d.ts.map