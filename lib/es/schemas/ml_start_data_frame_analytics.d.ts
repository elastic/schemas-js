import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Start a data frame analytics job.
 *
 * A data frame analytics job can be started and stopped multiple times
 * throughout its lifecycle.
 * If the destination index does not exist, it is created automatically the
 * first time you start the data frame analytics job. The
 * `index.number_of_shards` and `index.number_of_replicas` settings for the
 * destination index are copied from the source index. If there are multiple
 * source indices, the destination index copies the highest setting values. The
 * mappings for the destination index are also copied from the source indices.
 * If there are any mapping conflicts, the job fails to start.
 * If the destination index exists, it is used as is. You can therefore set up
 * the destination index in advance with custom settings and mappings.
 */
export declare const MlStartDataFrameAnalyticsRequest: z.ZodObject<{
    id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlStartDataFrameAnalyticsRequest = z.infer<typeof MlStartDataFrameAnalyticsRequest>;
export declare const MlStartDataFrameAnalyticsResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    node: z.ZodString;
}, z.core.$strip>;
export type MlStartDataFrameAnalyticsResponse = z.infer<typeof MlStartDataFrameAnalyticsResponse>;
//# sourceMappingURL=ml_start_data_frame_analytics.d.ts.map