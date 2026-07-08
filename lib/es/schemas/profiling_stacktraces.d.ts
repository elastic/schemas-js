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
/** Extracts raw stacktrace information from Universal Profiling. */
export declare const ProfilingStacktracesRequest: z.ZodObject<{
    conditions: z.ZodAny;
}, z.core.$strip>;
export type ProfilingStacktracesRequest = z.infer<typeof ProfilingStacktracesRequest>;
export declare const ProfilingStacktracesResponse: z.ZodAny;
export type ProfilingStacktracesResponse = z.infer<typeof ProfilingStacktracesResponse>;
//# sourceMappingURL=profiling_stacktraces.d.ts.map