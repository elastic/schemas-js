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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Predict future behavior of a time series.
 *
 * Forecasts are not supported for jobs that perform population analysis; an
 * error occurs if you try to create a forecast for a job that has an
 * `over_field_name` in its configuration. Forcasts predict future behavior
 * based on historical data.
 */
export declare const MlForecastRequest: z.ZodObject<{
    job_id: z.ZodString;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    expires_in: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_model_memory: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlForecastRequest = z.infer<typeof MlForecastRequest>;
export declare const MlForecastResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    forecast_id: z.ZodString;
}, z.core.$strip>;
export type MlForecastResponse = z.infer<typeof MlForecastResponse>;
//# sourceMappingURL=ml_forecast.d.ts.map