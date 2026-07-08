import { z } from 'zod';
export declare const ReadExceptionListSummaryResponse: z.ZodObject<{
    linux: z.ZodOptional<z.ZodNumber>;
    macos: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodNumber>;
    windows: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ReadExceptionListSummaryResponse = z.infer<typeof ReadExceptionListSummaryResponse>;
//# sourceMappingURL=read_exception_list_summary.d.ts.map