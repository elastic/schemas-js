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
/** Returns basic information about the status of Universal Profiling. */
export declare const ProfilingFlamegraphRequest: z.ZodObject<{
    conditions: z.ZodAny;
}, z.core.$strip>;
export type ProfilingFlamegraphRequest = z.infer<typeof ProfilingFlamegraphRequest>;
export declare const ProfilingFlamegraphResponse: z.ZodAny;
export type ProfilingFlamegraphResponse = z.infer<typeof ProfilingFlamegraphResponse>;
//# sourceMappingURL=profiling_flamegraph.d.ts.map