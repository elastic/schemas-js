import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const DataStreamName: z.ZodString;
export type DataStreamName = z.infer<typeof DataStreamName>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const IndicesGetDataLifecycleStatsDataStreamStats: z.ZodObject<{
    backing_indices_in_error: z.ZodNumber;
    backing_indices_in_total: z.ZodNumber;
    name: z.ZodString;
}, z.core.$strip>;
export type IndicesGetDataLifecycleStatsDataStreamStats = z.infer<typeof IndicesGetDataLifecycleStatsDataStreamStats>;
/**
 * Get data stream lifecycle stats.
 *
 * Get statistics about the data streams that are managed by a data stream lifecycle.
 */
export declare const IndicesGetDataLifecycleStatsRequest: z.ZodObject<{}, z.core.$strip>;
export type IndicesGetDataLifecycleStatsRequest = z.infer<typeof IndicesGetDataLifecycleStatsRequest>;
export declare const IndicesGetDataLifecycleStatsResponse: z.ZodObject<{
    data_stream_count: z.ZodNumber;
    data_streams: z.ZodArray<z.ZodObject<{
        backing_indices_in_error: z.ZodNumber;
        backing_indices_in_total: z.ZodNumber;
        name: z.ZodString;
    }, z.core.$strip>>;
    last_run_duration_in_millis: z.ZodOptional<z.ZodAny>;
    time_between_starts_in_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type IndicesGetDataLifecycleStatsResponse = z.infer<typeof IndicesGetDataLifecycleStatsResponse>;
//# sourceMappingURL=indices_get_data_lifecycle_stats.d.ts.map