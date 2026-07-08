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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
/**
 * Close a point in time.
 *
 * A point in time must be opened explicitly before being used in search requests.
 * The `keep_alive` parameter tells Elasticsearch how long it should persist.
 * A point in time is automatically closed when the `keep_alive` period has elapsed.
 * However, keeping points in time has a cost; close them as soon as they are no longer required for search requests.
 */
export declare const ClosePointInTimeRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type ClosePointInTimeRequest = z.infer<typeof ClosePointInTimeRequest>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ClosePointInTimeResponse: z.ZodObject<{
    succeeded: z.ZodBoolean;
    num_freed: z.ZodNumber;
}, z.core.$strip>;
export type ClosePointInTimeResponse = z.infer<typeof ClosePointInTimeResponse>;
//# sourceMappingURL=close_point_in_time.d.ts.map