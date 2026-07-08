import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** Extracts a list of topN functions from Universal Profiling. */
export declare const ProfilingTopnFunctionsRequest: z.ZodObject<{
    conditions: z.ZodAny;
}, z.core.$strip>;
export type ProfilingTopnFunctionsRequest = z.infer<typeof ProfilingTopnFunctionsRequest>;
export declare const ProfilingTopnFunctionsResponse: z.ZodAny;
export type ProfilingTopnFunctionsResponse = z.infer<typeof ProfilingTopnFunctionsResponse>;
//# sourceMappingURL=profiling_topn_functions.d.ts.map