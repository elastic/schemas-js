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
/**
 * Ping the cluster.
 *
 * Get information about whether the cluster is running.
 */
export declare const PingRequest: z.ZodObject<{}, z.core.$strip>;
export type PingRequest = z.infer<typeof PingRequest>;
export declare const PingResponse: z.ZodBoolean;
export type PingResponse = z.infer<typeof PingResponse>;
//# sourceMappingURL=ping.d.ts.map