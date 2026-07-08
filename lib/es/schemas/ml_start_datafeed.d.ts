import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
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
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Start datafeeds.
 *
 * A datafeed must be started in order to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 *
 * Before you can start a datafeed, the anomaly detection job must be open. Otherwise, an error occurs.
 *
 * If you restart a stopped datafeed, it continues processing input data from the next millisecond after it was stopped.
 * If new data was indexed for that exact millisecond between stopping and starting, it will be ignored.
 *
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the last user to create or
 * update it had at the time of creation or update and runs the query using those same roles. If you provided secondary
 * authorization headers when you created or updated the datafeed, those credentials are used instead.
 */
export declare const MlStartDatafeedRequest: z.ZodObject<{
    datafeed_id: z.ZodString;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlStartDatafeedRequest = z.infer<typeof MlStartDatafeedRequest>;
export declare const MlStartDatafeedResponse: z.ZodObject<{
    node: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    started: z.ZodBoolean;
}, z.core.$strip>;
export type MlStartDatafeedResponse = z.infer<typeof MlStartDatafeedResponse>;
//# sourceMappingURL=ml_start_datafeed.d.ts.map