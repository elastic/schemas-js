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
 * Delete forecasts from a job.
 *
 * By default, forecasts are retained for 14 days. You can specify a
 * different retention period with the `expires_in` parameter in the forecast
 * jobs API. The delete forecast API enables you to delete one or more
 * forecasts before they expire.
 */
export declare const MlDeleteForecastRequest: z.ZodObject<{
    job_id: z.ZodString;
    forecast_id: z.ZodOptional<z.ZodString>;
    allow_no_forecasts: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlDeleteForecastRequest = z.infer<typeof MlDeleteForecastRequest>;
export declare const MlDeleteForecastResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteForecastResponse = z.infer<typeof MlDeleteForecastResponse>;
//# sourceMappingURL=ml_delete_forecast.d.ts.map