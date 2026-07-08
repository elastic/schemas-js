import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const DeleteApiKeysRequest: z.ZodObject<{
    keys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DeleteApiKeysRequest = z.infer<typeof DeleteApiKeysRequest>;
//# sourceMappingURL=delete_api_keys.d.ts.map