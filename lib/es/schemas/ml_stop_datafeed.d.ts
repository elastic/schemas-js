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
 * Stop datafeeds.
 *
 * A datafeed that is stopped ceases to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 */
export declare const MlStopDatafeedRequest: z.ZodObject<{
    datafeed_id: z.ZodString;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    force: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    close_job: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlStopDatafeedRequest = z.infer<typeof MlStopDatafeedRequest>;
export declare const MlStopDatafeedResponse: z.ZodObject<{
    stopped: z.ZodBoolean;
}, z.core.$strip>;
export type MlStopDatafeedResponse = z.infer<typeof MlStopDatafeedResponse>;
//# sourceMappingURL=ml_stop_datafeed.d.ts.map