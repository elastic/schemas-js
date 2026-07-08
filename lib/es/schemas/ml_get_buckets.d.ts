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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
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
export declare const MlBucketInfluencer: z.ZodObject<{
    anomaly_score: z.ZodNumber;
    bucket_span: z.ZodAny;
    influencer_field_name: z.ZodString;
    initial_anomaly_score: z.ZodNumber;
    is_interim: z.ZodBoolean;
    job_id: z.ZodString;
    probability: z.ZodNumber;
    raw_anomaly_score: z.ZodNumber;
    result_type: z.ZodString;
    timestamp: z.ZodAny;
    timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlBucketInfluencer = z.infer<typeof MlBucketInfluencer>;
export declare const MlBucketSummary: z.ZodObject<{
    anomaly_score: z.ZodNumber;
    bucket_influencers: z.ZodArray<z.ZodObject<{
        anomaly_score: z.ZodNumber;
        bucket_span: z.ZodAny;
        influencer_field_name: z.ZodString;
        initial_anomaly_score: z.ZodNumber;
        is_interim: z.ZodBoolean;
        job_id: z.ZodString;
        probability: z.ZodNumber;
        raw_anomaly_score: z.ZodNumber;
        result_type: z.ZodString;
        timestamp: z.ZodAny;
        timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    }, z.core.$strip>>;
    bucket_span: z.ZodAny;
    event_count: z.ZodNumber;
    initial_anomaly_score: z.ZodNumber;
    is_interim: z.ZodBoolean;
    job_id: z.ZodString;
    processing_time_ms: z.ZodAny;
    result_type: z.ZodString;
    timestamp: z.ZodAny;
    timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlBucketSummary = z.infer<typeof MlBucketSummary>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
/**
 * Get anomaly detection job results for buckets.
 *
 * The API presents a chronological view of the records, grouped by bucket.
 */
export declare const MlGetBucketsRequest: z.ZodObject<{
    job_id: z.ZodString;
    timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    anomaly_score: z.ZodOptional<z.ZodNumber>;
    desc: z.ZodOptional<z.ZodBoolean>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    exclude_interim: z.ZodOptional<z.ZodBoolean>;
    expand: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    sort: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlGetBucketsRequest = z.infer<typeof MlGetBucketsRequest>;
export declare const MlGetBucketsResponse: z.ZodObject<{
    buckets: z.ZodArray<z.ZodObject<{
        anomaly_score: z.ZodNumber;
        bucket_influencers: z.ZodArray<z.ZodObject<{
            anomaly_score: z.ZodNumber;
            bucket_span: z.ZodAny;
            influencer_field_name: z.ZodString;
            initial_anomaly_score: z.ZodNumber;
            is_interim: z.ZodBoolean;
            job_id: z.ZodString;
            probability: z.ZodNumber;
            raw_anomaly_score: z.ZodNumber;
            result_type: z.ZodString;
            timestamp: z.ZodAny;
            timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        }, z.core.$strip>>;
        bucket_span: z.ZodAny;
        event_count: z.ZodNumber;
        initial_anomaly_score: z.ZodNumber;
        is_interim: z.ZodBoolean;
        job_id: z.ZodString;
        processing_time_ms: z.ZodAny;
        result_type: z.ZodString;
        timestamp: z.ZodAny;
        timestamp_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    }, z.core.$strip>>;
    count: z.ZodNumber;
}, z.core.$strip>;
export type MlGetBucketsResponse = z.infer<typeof MlGetBucketsResponse>;
//# sourceMappingURL=ml_get_buckets.d.ts.map