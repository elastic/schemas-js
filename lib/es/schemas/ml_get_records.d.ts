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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlAnomalyExplanation: z.ZodObject<{
    anomaly_characteristics_impact: z.ZodOptional<z.ZodNumber>;
    anomaly_length: z.ZodOptional<z.ZodNumber>;
    anomaly_type: z.ZodOptional<z.ZodString>;
    high_variance_penalty: z.ZodOptional<z.ZodBoolean>;
    incomplete_bucket_penalty: z.ZodOptional<z.ZodBoolean>;
    lower_confidence_bound: z.ZodOptional<z.ZodNumber>;
    multi_bucket_impact: z.ZodOptional<z.ZodNumber>;
    single_bucket_impact: z.ZodOptional<z.ZodNumber>;
    typical_value: z.ZodOptional<z.ZodNumber>;
    upper_confidence_bound: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlAnomalyExplanation = z.infer<typeof MlAnomalyExplanation>;
export declare const MlGeoResults: z.ZodObject<{
    actual_point: z.ZodOptional<z.ZodString>;
    typical_point: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlGeoResults = z.infer<typeof MlGeoResults>;
export declare const MlInfluence: z.ZodObject<{
    influencer_field_name: z.ZodString;
    influencer_field_values: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type MlInfluence = z.infer<typeof MlInfluence>;
export declare const MlAnomalyCause: z.ZodObject<{
    actual: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    by_field_name: z.ZodOptional<z.ZodString>;
    by_field_value: z.ZodOptional<z.ZodString>;
    correlated_by_field_value: z.ZodOptional<z.ZodString>;
    field_name: z.ZodOptional<z.ZodString>;
    function: z.ZodOptional<z.ZodString>;
    function_description: z.ZodOptional<z.ZodString>;
    geo_results: z.ZodOptional<z.ZodObject<{
        actual_point: z.ZodOptional<z.ZodString>;
        typical_point: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    influencers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        influencer_field_name: z.ZodString;
        influencer_field_values: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    over_field_name: z.ZodOptional<z.ZodString>;
    over_field_value: z.ZodOptional<z.ZodString>;
    partition_field_name: z.ZodOptional<z.ZodString>;
    partition_field_value: z.ZodOptional<z.ZodString>;
    probability: z.ZodNumber;
    typical: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type MlAnomalyCause = z.infer<typeof MlAnomalyCause>;
export declare const MlAnomaly: z.ZodObject<{
    actual: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    anomaly_score_explanation: z.ZodOptional<z.ZodObject<{
        anomaly_characteristics_impact: z.ZodOptional<z.ZodNumber>;
        anomaly_length: z.ZodOptional<z.ZodNumber>;
        anomaly_type: z.ZodOptional<z.ZodString>;
        high_variance_penalty: z.ZodOptional<z.ZodBoolean>;
        incomplete_bucket_penalty: z.ZodOptional<z.ZodBoolean>;
        lower_confidence_bound: z.ZodOptional<z.ZodNumber>;
        multi_bucket_impact: z.ZodOptional<z.ZodNumber>;
        single_bucket_impact: z.ZodOptional<z.ZodNumber>;
        typical_value: z.ZodOptional<z.ZodNumber>;
        upper_confidence_bound: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    bucket_span: z.ZodAny;
    by_field_name: z.ZodOptional<z.ZodString>;
    by_field_value: z.ZodOptional<z.ZodString>;
    causes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        actual: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        by_field_name: z.ZodOptional<z.ZodString>;
        by_field_value: z.ZodOptional<z.ZodString>;
        correlated_by_field_value: z.ZodOptional<z.ZodString>;
        field_name: z.ZodOptional<z.ZodString>;
        function: z.ZodOptional<z.ZodString>;
        function_description: z.ZodOptional<z.ZodString>;
        geo_results: z.ZodOptional<z.ZodObject<{
            actual_point: z.ZodOptional<z.ZodString>;
            typical_point: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        influencers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            influencer_field_name: z.ZodString;
            influencer_field_values: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        over_field_name: z.ZodOptional<z.ZodString>;
        over_field_value: z.ZodOptional<z.ZodString>;
        partition_field_name: z.ZodOptional<z.ZodString>;
        partition_field_value: z.ZodOptional<z.ZodString>;
        probability: z.ZodNumber;
        typical: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>>;
    detector_index: z.ZodNumber;
    field_name: z.ZodOptional<z.ZodString>;
    function: z.ZodOptional<z.ZodString>;
    function_description: z.ZodOptional<z.ZodString>;
    geo_results: z.ZodOptional<z.ZodObject<{
        actual_point: z.ZodOptional<z.ZodString>;
        typical_point: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    influencers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        influencer_field_name: z.ZodString;
        influencer_field_values: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    initial_record_score: z.ZodNumber;
    is_interim: z.ZodBoolean;
    job_id: z.ZodString;
    over_field_name: z.ZodOptional<z.ZodString>;
    over_field_value: z.ZodOptional<z.ZodString>;
    partition_field_name: z.ZodOptional<z.ZodString>;
    partition_field_value: z.ZodOptional<z.ZodString>;
    probability: z.ZodNumber;
    record_score: z.ZodNumber;
    result_type: z.ZodString;
    timestamp: z.ZodAny;
    typical: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type MlAnomaly = z.infer<typeof MlAnomaly>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
/**
 * Get anomaly records for an anomaly detection job.
 *
 * Records contain the detailed analytical results. They describe the anomalous
 * activity that has been identified in the input data based on the detector
 * configuration.
 * There can be many anomaly records depending on the characteristics and size
 * of the input data. In practice, there are often too many to be able to
 * manually process them. The machine learning features therefore perform a
 * sophisticated aggregation of the anomaly records into buckets.
 * The number of record results depends on the number of anomalies found in each
 * bucket, which relates to the number of time series being modeled and the
 * number of detectors.
 */
export declare const MlGetRecordsRequest: z.ZodObject<{
    job_id: z.ZodString;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    desc: z.ZodOptional<z.ZodBoolean>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    exclude_interim: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    record_score: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlGetRecordsRequest = z.infer<typeof MlGetRecordsRequest>;
export declare const MlGetRecordsResponse: z.ZodObject<{
    count: z.ZodNumber;
    records: z.ZodArray<z.ZodObject<{
        actual: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        anomaly_score_explanation: z.ZodOptional<z.ZodObject<{
            anomaly_characteristics_impact: z.ZodOptional<z.ZodNumber>;
            anomaly_length: z.ZodOptional<z.ZodNumber>;
            anomaly_type: z.ZodOptional<z.ZodString>;
            high_variance_penalty: z.ZodOptional<z.ZodBoolean>;
            incomplete_bucket_penalty: z.ZodOptional<z.ZodBoolean>;
            lower_confidence_bound: z.ZodOptional<z.ZodNumber>;
            multi_bucket_impact: z.ZodOptional<z.ZodNumber>;
            single_bucket_impact: z.ZodOptional<z.ZodNumber>;
            typical_value: z.ZodOptional<z.ZodNumber>;
            upper_confidence_bound: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        bucket_span: z.ZodAny;
        by_field_name: z.ZodOptional<z.ZodString>;
        by_field_value: z.ZodOptional<z.ZodString>;
        causes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            actual: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            by_field_name: z.ZodOptional<z.ZodString>;
            by_field_value: z.ZodOptional<z.ZodString>;
            correlated_by_field_value: z.ZodOptional<z.ZodString>;
            field_name: z.ZodOptional<z.ZodString>;
            function: z.ZodOptional<z.ZodString>;
            function_description: z.ZodOptional<z.ZodString>;
            geo_results: z.ZodOptional<z.ZodObject<{
                actual_point: z.ZodOptional<z.ZodString>;
                typical_point: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            influencers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                influencer_field_name: z.ZodString;
                influencer_field_values: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
            over_field_name: z.ZodOptional<z.ZodString>;
            over_field_value: z.ZodOptional<z.ZodString>;
            partition_field_name: z.ZodOptional<z.ZodString>;
            partition_field_value: z.ZodOptional<z.ZodString>;
            probability: z.ZodNumber;
            typical: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>>>;
        detector_index: z.ZodNumber;
        field_name: z.ZodOptional<z.ZodString>;
        function: z.ZodOptional<z.ZodString>;
        function_description: z.ZodOptional<z.ZodString>;
        geo_results: z.ZodOptional<z.ZodObject<{
            actual_point: z.ZodOptional<z.ZodString>;
            typical_point: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        influencers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            influencer_field_name: z.ZodString;
            influencer_field_values: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        initial_record_score: z.ZodNumber;
        is_interim: z.ZodBoolean;
        job_id: z.ZodString;
        over_field_name: z.ZodOptional<z.ZodString>;
        over_field_value: z.ZodOptional<z.ZodString>;
        partition_field_name: z.ZodOptional<z.ZodString>;
        partition_field_value: z.ZodOptional<z.ZodString>;
        probability: z.ZodNumber;
        record_score: z.ZodNumber;
        result_type: z.ZodString;
        timestamp: z.ZodAny;
        typical: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetRecordsResponse = z.infer<typeof MlGetRecordsResponse>;
//# sourceMappingURL=ml_get_records.d.ts.map