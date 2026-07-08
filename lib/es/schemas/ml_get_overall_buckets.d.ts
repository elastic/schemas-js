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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlOverallBucketJob: z.ZodObject<{
    job_id: z.ZodString;
    max_anomaly_score: z.ZodNumber;
}, z.core.$strip>;
export type MlOverallBucketJob = z.infer<typeof MlOverallBucketJob>;
export declare const MlOverallBucket: z.ZodObject<{
    bucket_span: z.ZodAny;
    is_interim: z.ZodBoolean;
    jobs: z.ZodArray<z.ZodObject<{
        job_id: z.ZodString;
        max_anomaly_score: z.ZodNumber;
    }, z.core.$strip>>;
    overall_score: z.ZodNumber;
    result_type: z.ZodString;
    timestamp: z.ZodAny;
    timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlOverallBucket = z.infer<typeof MlOverallBucket>;
/**
 * Get overall bucket results.
 *
 * Retrievs overall bucket results that summarize the bucket results of
 * multiple anomaly detection jobs.
 *
 * The `overall_score` is calculated by combining the scores of all the
 * buckets within the overall bucket span. First, the maximum
 * `anomaly_score` per anomaly detection job in the overall bucket is
 * calculated. Then the `top_n` of those scores are averaged to result in
 * the `overall_score`. This means that you can fine-tune the
 * `overall_score` so that it is more or less sensitive to the number of
 * jobs that detect an anomaly at the same time. For example, if you set
 * `top_n` to `1`, the `overall_score` is the maximum bucket score in the
 * overall bucket. Alternatively, if you set `top_n` to the number of jobs,
 * the `overall_score` is high only when all jobs detect anomalies in that
 * overall bucket. If you set the `bucket_span` parameter (to a value
 * greater than its default), the `overall_score` is the maximum
 * `overall_score` of the overall buckets that have a span equal to the
 * jobs' largest bucket span.
 */
export declare const MlGetOverallBucketsRequest: z.ZodObject<{
    job_id: z.ZodString;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    bucket_span: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    exclude_interim: z.ZodOptional<z.ZodBoolean>;
    overall_score: z.ZodOptional<z.ZodNumber>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    top_n: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlGetOverallBucketsRequest = z.infer<typeof MlGetOverallBucketsRequest>;
export declare const MlGetOverallBucketsResponse: z.ZodObject<{
    count: z.ZodNumber;
    overall_buckets: z.ZodArray<z.ZodObject<{
        bucket_span: z.ZodAny;
        is_interim: z.ZodBoolean;
        jobs: z.ZodArray<z.ZodObject<{
            job_id: z.ZodString;
            max_anomaly_score: z.ZodNumber;
        }, z.core.$strip>>;
        overall_score: z.ZodNumber;
        result_type: z.ZodString;
        timestamp: z.ZodAny;
        timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetOverallBucketsResponse = z.infer<typeof MlGetOverallBucketsResponse>;
//# sourceMappingURL=ml_get_overall_buckets.d.ts.map