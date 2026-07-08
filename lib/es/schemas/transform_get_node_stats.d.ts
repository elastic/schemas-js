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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/**
 * Get node stats.
 *
 * Get per-node information about transform usage.
 */
export declare const TransformGetNodeStatsRequest: z.ZodObject<{}, z.core.$strip>;
export type TransformGetNodeStatsRequest = z.infer<typeof TransformGetNodeStatsRequest>;
export declare const TransformGetNodeStatsTransformSchedulerStats: z.ZodObject<{
    registered_transform_count: z.ZodNumber;
    peek_transform: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TransformGetNodeStatsTransformSchedulerStats = z.infer<typeof TransformGetNodeStatsTransformSchedulerStats>;
export declare const TransformGetNodeStatsTransformNodeStats: z.ZodObject<{
    scheduler: z.ZodObject<{
        registered_transform_count: z.ZodNumber;
        peek_transform: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TransformGetNodeStatsTransformNodeStats = z.infer<typeof TransformGetNodeStatsTransformNodeStats>;
export declare const TransformGetNodeStatsTransformNodeFullStats: z.ZodObject<{
    total: z.ZodObject<{
        scheduler: z.ZodObject<{
            registered_transform_count: z.ZodNumber;
            peek_transform: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$catchall<z.ZodAny>>;
export type TransformGetNodeStatsTransformNodeFullStats = z.infer<typeof TransformGetNodeStatsTransformNodeFullStats>;
export declare const TransformGetNodeStatsResponse: z.ZodObject<{
    total: z.ZodObject<{
        scheduler: z.ZodObject<{
            registered_transform_count: z.ZodNumber;
            peek_transform: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$catchall<z.ZodAny>>;
export type TransformGetNodeStatsResponse = z.infer<typeof TransformGetNodeStatsResponse>;
//# sourceMappingURL=transform_get_node_stats.d.ts.map