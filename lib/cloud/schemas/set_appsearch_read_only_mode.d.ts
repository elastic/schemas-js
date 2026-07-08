import { z } from 'zod';
export declare const ReadOnlyResponse: z.ZodObject<{
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type ReadOnlyResponse = z.infer<typeof ReadOnlyResponse>;
export declare const ReadOnlyRequest: z.ZodObject<{
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type ReadOnlyRequest = z.infer<typeof ReadOnlyRequest>;
//# sourceMappingURL=set_appsearch_read_only_mode.d.ts.map