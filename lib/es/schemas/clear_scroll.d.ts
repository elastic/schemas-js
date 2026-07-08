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
export declare const ScrollId: z.ZodString;
export type ScrollId = z.infer<typeof ScrollId>;
export declare const ScrollIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type ScrollIds = z.infer<typeof ScrollIds>;
/**
 * Clear a scrolling search.
 *
 * Clear the search context and results for a scrolling search.
 */
export declare const ClearScrollRequest: z.ZodObject<{
    scroll_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type ClearScrollRequest = z.infer<typeof ClearScrollRequest>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ClearScrollResponse: z.ZodObject<{
    succeeded: z.ZodBoolean;
    num_freed: z.ZodNumber;
}, z.core.$strip>;
export type ClearScrollResponse = z.infer<typeof ClearScrollResponse>;
//# sourceMappingURL=clear_scroll.d.ts.map