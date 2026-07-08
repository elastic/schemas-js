import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesSamplingMethod: z.ZodEnum<{
    aggregate: "aggregate";
    last_value: "last_value";
}>;
export type IndicesSamplingMethod = z.infer<typeof IndicesSamplingMethod>;
export declare const IndicesDownsampleConfig: z.ZodObject<{
    fixed_interval: z.ZodString;
    sampling_method: z.ZodOptional<z.ZodEnum<{
        aggregate: "aggregate";
        last_value: "last_value";
    }>>;
}, z.core.$strip>;
export type IndicesDownsampleConfig = z.infer<typeof IndicesDownsampleConfig>;
/**
 * Downsample an index.
 *
 * Downsamples a time series (TSDS) index and reduces its size by keeping the last value or by pre-aggregating metrics:
 *
 * - When running in `aggregate` mode, it pre-calculates and stores statistical summaries (`min`, `max`, `sum`, `value_count` and `avg`)
 * for each metric field grouped by a configured time interval and their dimensions.
 * - When running in `last_value` mode, it keeps the last value for each metric in the configured interval and their dimensions.
 *
 * For example, a TSDS index that contains metrics sampled every 10 seconds can be downsampled to an hourly index.
 * All documents within an hour interval are summarized and stored as a single document in the downsample index.
 *
 * NOTE: Only indices in a time series data stream are supported.
 * Neither field nor document level security can be defined on the source index.
 * The source index must be read-only (`index.blocks.write: true`).
 */
export declare const IndicesDownsampleRequest: z.ZodObject<{
    index: z.ZodString;
    target_index: z.ZodString;
    config: z.ZodObject<{
        fixed_interval: z.ZodString;
        sampling_method: z.ZodOptional<z.ZodEnum<{
            aggregate: "aggregate";
            last_value: "last_value";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesDownsampleRequest = z.infer<typeof IndicesDownsampleRequest>;
export declare const IndicesDownsampleResponse: z.ZodAny;
export type IndicesDownsampleResponse = z.infer<typeof IndicesDownsampleResponse>;
//# sourceMappingURL=indices_downsample.d.ts.map