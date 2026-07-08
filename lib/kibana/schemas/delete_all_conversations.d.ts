import { z } from 'zod';
export declare const DeleteAllConversationsRequest: z.ZodObject<{
    excludedIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type DeleteAllConversationsRequest = z.infer<typeof DeleteAllConversationsRequest>;
export declare const DeleteAllConversationsResponse: z.ZodObject<{
    failures: z.ZodOptional<z.ZodArray<z.ZodString>>;
    success: z.ZodOptional<z.ZodBoolean>;
    totalDeleted: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type DeleteAllConversationsResponse = z.infer<typeof DeleteAllConversationsResponse>;
//# sourceMappingURL=delete_all_conversations.d.ts.map