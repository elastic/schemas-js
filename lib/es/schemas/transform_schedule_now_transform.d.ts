import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Schedule a transform to start now.
 *
 * Instantly run a transform to process data.
 * If you run this API, the transform will process the new data instantly,
 * without waiting for the configured frequency interval. After the API is called,
 * the transform will be processed again at `now + frequency` unless the API
 * is called again in the meantime.
 */
export declare const TransformScheduleNowTransformRequest: z.ZodObject<{
    transform_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    defer: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type TransformScheduleNowTransformRequest = z.infer<typeof TransformScheduleNowTransformRequest>;
export declare const TransformScheduleNowTransformResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type TransformScheduleNowTransformResponse = z.infer<typeof TransformScheduleNowTransformResponse>;
//# sourceMappingURL=transform_schedule_now_transform.d.ts.map