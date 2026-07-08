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
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
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
export declare const InferenceTaskTypeVoyageAI: z.ZodEnum<{
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceTaskTypeVoyageAI = z.infer<typeof InferenceTaskTypeVoyageAI>;
export declare const InferenceInferenceEndpointInfoVoyageAI: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        rerank: "rerank";
        text_embedding: "text_embedding";
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
export type InferenceInferenceEndpointInfoVoyageAI = z.infer<typeof InferenceInferenceEndpointInfoVoyageAI>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceVoyageAIServiceSettings: z.ZodObject<{
    dimensions: z.ZodOptional<z.ZodNumber>;
    model_id: z.ZodString;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    embedding_type: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceVoyageAIServiceSettings = z.infer<typeof InferenceVoyageAIServiceSettings>;
export declare const InferenceVoyageAIServiceType: z.ZodEnum<{
    voyageai: "voyageai";
}>;
export type InferenceVoyageAIServiceType = z.infer<typeof InferenceVoyageAIServiceType>;
export declare const InferenceVoyageAITaskSettings: z.ZodObject<{
    input_type: z.ZodOptional<z.ZodString>;
    return_documents: z.ZodOptional<z.ZodBoolean>;
    top_k: z.ZodOptional<z.ZodNumber>;
    truncation: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InferenceVoyageAITaskSettings = z.infer<typeof InferenceVoyageAITaskSettings>;
export declare const InferenceVoyageAITaskType: z.ZodEnum<{
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceVoyageAITaskType = z.infer<typeof InferenceVoyageAITaskType>;
/**
 * Create a VoyageAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `voyageai` service.
 *
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 */
export declare const InferencePutVoyageaiRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        rerank: "rerank";
        text_embedding: "text_embedding";
    }>;
    voyageai_inference_id: z.ZodString;
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
        voyageai: "voyageai";
    }>;
    service_settings: z.ZodObject<{
        dimensions: z.ZodOptional<z.ZodNumber>;
        model_id: z.ZodString;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        embedding_type: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        input_type: z.ZodOptional<z.ZodString>;
        return_documents: z.ZodOptional<z.ZodBoolean>;
        top_k: z.ZodOptional<z.ZodNumber>;
        truncation: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutVoyageaiRequest = z.infer<typeof InferencePutVoyageaiRequest>;
export declare const InferencePutVoyageaiResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        rerank: "rerank";
        text_embedding: "text_embedding";
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
export type InferencePutVoyageaiResponse = z.infer<typeof InferencePutVoyageaiResponse>;
//# sourceMappingURL=inference_put_voyageai.d.ts.map