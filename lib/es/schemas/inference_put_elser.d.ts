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
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const InferenceAdaptiveAllocations: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceAdaptiveAllocations = z.infer<typeof InferenceAdaptiveAllocations>;
export declare const InferenceElserServiceSettings: z.ZodObject<{
    adaptive_allocations: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    num_allocations: z.ZodNumber;
    num_threads: z.ZodNumber;
}, z.core.$strip>;
export type InferenceElserServiceSettings = z.infer<typeof InferenceElserServiceSettings>;
export declare const InferenceElserServiceType: z.ZodEnum<{
    elser: "elser";
}>;
export type InferenceElserServiceType = z.infer<typeof InferenceElserServiceType>;
export declare const InferenceElserTaskType: z.ZodEnum<{
    sparse_embedding: "sparse_embedding";
}>;
export type InferenceElserTaskType = z.infer<typeof InferenceElserTaskType>;
/** Chunking configuration object */
export declare const InferenceInferenceChunkingSettings: z.ZodObject<{
    max_chunk_size: z.ZodOptional<z.ZodNumber>;
    overlap: z.ZodOptional<z.ZodNumber>;
    sentence_overlap: z.ZodOptional<z.ZodNumber>;
    separator_group: z.ZodOptional<z.ZodString>;
    separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    strategy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InferenceInferenceChunkingSettings = z.infer<typeof InferenceInferenceChunkingSettings>;
export declare const InferenceServiceSettings: z.ZodAny;
export type InferenceServiceSettings = z.infer<typeof InferenceServiceSettings>;
export declare const InferenceTaskSettings: z.ZodAny;
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>;
/** Configuration options when storing the inference endpoint */
export declare const InferenceInferenceEndpoint: z.ZodObject<{
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodString;
    service_settings: z.ZodAny;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceInferenceEndpoint = z.infer<typeof InferenceInferenceEndpoint>;
export declare const InferenceTaskTypeELSER: z.ZodEnum<{
    sparse_embedding: "sparse_embedding";
}>;
export type InferenceTaskTypeELSER = z.infer<typeof InferenceTaskTypeELSER>;
export declare const InferenceInferenceEndpointInfoELSER: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        sparse_embedding: "sparse_embedding";
    }>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodString;
    service_settings: z.ZodAny;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferenceInferenceEndpointInfoELSER = z.infer<typeof InferenceInferenceEndpointInfoELSER>;
/**
 * Create an ELSER inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `elser` service.
 * You can also deploy ELSER by using the Elasticsearch inference integration.
 *
 * > info
 * > Your Elasticsearch deployment contains a preconfigured ELSER inference endpoint, you only need to create the enpoint using the API if you want to customize the settings.
 *
 * The API request will automatically download and deploy the ELSER model if it isn't already downloaded.
 *
 * > info
 * > You might see a 502 bad gateway error in the response when using the Kibana Console. This error usually just reflects a timeout, while the model downloads in the background. You can check the download progress in the Machine Learning UI. If using the Python client, you can set the timeout parameter to a higher value.
 *
 * After creating the endpoint, wait for the model deployment to complete before using it.
 * To verify the deployment status, use the get trained model statistics API.
 * Look for `"state": "fully_allocated"` in the response and ensure that the `"allocation_count"` matches the `"target_allocation_count"`.
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 * @deprecated The elser service is deprecated and will be removed in a future release. Use the Elasticsearch inference integration instead, with model_id included in the service_settings.
 */
export declare const InferencePutElserRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        sparse_embedding: "sparse_embedding";
    }>;
    elser_inference_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodEnum<{
        elser: "elser";
    }>;
    service_settings: z.ZodObject<{
        adaptive_allocations: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
            min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        num_allocations: z.ZodNumber;
        num_threads: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InferencePutElserRequest = z.infer<typeof InferencePutElserRequest>;
export declare const InferencePutElserResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        sparse_embedding: "sparse_embedding";
    }>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodOptional<z.ZodNumber>;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    service: z.ZodString;
    service_settings: z.ZodAny;
    task_settings: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type InferencePutElserResponse = z.infer<typeof InferencePutElserResponse>;
//# sourceMappingURL=inference_put_elser.d.ts.map