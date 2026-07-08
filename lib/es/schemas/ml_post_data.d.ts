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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Send data to an anomaly detection job for analysis.
 *
 * IMPORTANT: For each job, data can be accepted from only a single connection at a time.
 * It is not currently possible to post data to multiple jobs using wildcards or a comma-separated list.
 * @deprecated Posting data directly to anomaly detection jobs is deprecated, in a future major version a datafeed will be required.
 */
export declare const MlPostDataRequest: z.ZodObject<{
    job_id: z.ZodString;
    reset_end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    reset_start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    data: z.ZodArray<z.ZodAny>;
}, z.core.$strip>;
export type MlPostDataRequest = z.infer<typeof MlPostDataRequest>;
export declare const MlPostDataResponse: z.ZodObject<{
    job_id: z.ZodString;
    processed_record_count: z.ZodNumber;
    processed_field_count: z.ZodNumber;
    input_bytes: z.ZodNumber;
    input_field_count: z.ZodNumber;
    invalid_date_count: z.ZodNumber;
    missing_field_count: z.ZodNumber;
    out_of_order_timestamp_count: z.ZodNumber;
    empty_bucket_count: z.ZodNumber;
    sparse_bucket_count: z.ZodNumber;
    bucket_count: z.ZodNumber;
    earliest_record_timestamp: z.ZodOptional<z.ZodAny>;
    latest_record_timestamp: z.ZodOptional<z.ZodAny>;
    last_data_time: z.ZodOptional<z.ZodAny>;
    latest_empty_bucket_timestamp: z.ZodOptional<z.ZodAny>;
    latest_sparse_bucket_timestamp: z.ZodOptional<z.ZodAny>;
    input_record_count: z.ZodNumber;
    log_time: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlPostDataResponse = z.infer<typeof MlPostDataResponse>;
//# sourceMappingURL=ml_post_data.d.ts.map