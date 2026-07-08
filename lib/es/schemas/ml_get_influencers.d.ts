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
export declare const MlInfluencer: z.ZodObject<{
    bucket_span: z.ZodAny;
    influencer_score: z.ZodNumber;
    influencer_field_name: z.ZodString;
    influencer_field_value: z.ZodString;
    initial_influencer_score: z.ZodNumber;
    is_interim: z.ZodBoolean;
    job_id: z.ZodString;
    probability: z.ZodNumber;
    result_type: z.ZodString;
    timestamp: z.ZodAny;
    foo: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlInfluencer = z.infer<typeof MlInfluencer>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
/**
 * Get anomaly detection job results for influencers.
 *
 * Influencers are the entities that have contributed to, or are to blame for,
 * the anomalies. Influencer results are available only if an
 * `influencer_field_name` is specified in the job configuration.
 */
export declare const MlGetInfluencersRequest: z.ZodObject<{
    job_id: z.ZodString;
    desc: z.ZodOptional<z.ZodBoolean>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    exclude_interim: z.ZodOptional<z.ZodBoolean>;
    influencer_score: z.ZodOptional<z.ZodNumber>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetInfluencersRequest = z.infer<typeof MlGetInfluencersRequest>;
export declare const MlGetInfluencersResponse: z.ZodObject<{
    count: z.ZodNumber;
    influencers: z.ZodArray<z.ZodObject<{
        bucket_span: z.ZodAny;
        influencer_score: z.ZodNumber;
        influencer_field_name: z.ZodString;
        influencer_field_value: z.ZodString;
        initial_influencer_score: z.ZodNumber;
        is_interim: z.ZodBoolean;
        job_id: z.ZodString;
        probability: z.ZodNumber;
        result_type: z.ZodString;
        timestamp: z.ZodAny;
        foo: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetInfluencersResponse = z.infer<typeof MlGetInfluencersResponse>;
//# sourceMappingURL=ml_get_influencers.d.ts.map