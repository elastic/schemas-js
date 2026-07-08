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
export declare const InferenceTaskTypeJinaAi: z.ZodEnum<{
    embedding: "embedding";
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceTaskTypeJinaAi = z.infer<typeof InferenceTaskTypeJinaAi>;
export declare const InferenceInferenceEndpointInfoJinaAi: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        embedding: "embedding";
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
export type InferenceInferenceEndpointInfoJinaAi = z.infer<typeof InferenceInferenceEndpointInfoJinaAi>;
export declare const InferenceJinaAIElementType: z.ZodEnum<{
    float: "float";
    bit: "bit";
    binary: "binary";
}>;
export type InferenceJinaAIElementType = z.infer<typeof InferenceJinaAIElementType>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceJinaAISimilarityType: z.ZodEnum<{
    cosine: "cosine";
    dot_product: "dot_product";
    l2_norm: "l2_norm";
}>;
export type InferenceJinaAISimilarityType = z.infer<typeof InferenceJinaAISimilarityType>;
export declare const InferenceJinaAIServiceSettings: z.ZodObject<{
    api_key: z.ZodString;
    model_id: z.ZodString;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    similarity: z.ZodOptional<z.ZodEnum<{
        cosine: "cosine";
        dot_product: "dot_product";
        l2_norm: "l2_norm";
    }>>;
    dimensions: z.ZodOptional<z.ZodNumber>;
    embedding_type: z.ZodOptional<z.ZodEnum<{
        float: "float";
        bit: "bit";
        binary: "binary";
    }>>;
    multimodal_model: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InferenceJinaAIServiceSettings = z.infer<typeof InferenceJinaAIServiceSettings>;
export declare const InferenceJinaAIServiceType: z.ZodEnum<{
    jinaai: "jinaai";
}>;
export type InferenceJinaAIServiceType = z.infer<typeof InferenceJinaAIServiceType>;
export declare const InferenceJinaAITextEmbeddingTask: z.ZodEnum<{
    search: "search";
    ingest: "ingest";
    classification: "classification";
    clustering: "clustering";
}>;
export type InferenceJinaAITextEmbeddingTask = z.infer<typeof InferenceJinaAITextEmbeddingTask>;
export declare const InferenceJinaAITaskSettings: z.ZodObject<{
    return_documents: z.ZodOptional<z.ZodBoolean>;
    input_type: z.ZodOptional<z.ZodEnum<{
        search: "search";
        ingest: "ingest";
        classification: "classification";
        clustering: "clustering";
    }>>;
    late_chunking: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceJinaAITaskSettings = z.infer<typeof InferenceJinaAITaskSettings>;
export declare const InferenceJinaAITaskType: z.ZodEnum<{
    embedding: "embedding";
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceJinaAITaskType = z.infer<typeof InferenceJinaAITaskType>;
/**
 * Create an JinaAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `jinaai` service.
 *
 * To review the available `rerank` models, refer to <https://jina.ai/reranker>.
 * To review the available `embedding` and `text_embedding` models, refer to <https://jina.ai/embeddings/>.
 */
export declare const InferencePutJinaaiRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        embedding: "embedding";
        rerank: "rerank";
        text_embedding: "text_embedding";
    }>;
    jinaai_inference_id: z.ZodString;
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
        jinaai: "jinaai";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodString;
        model_id: z.ZodString;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        similarity: z.ZodOptional<z.ZodEnum<{
            cosine: "cosine";
            dot_product: "dot_product";
            l2_norm: "l2_norm";
        }>>;
        dimensions: z.ZodOptional<z.ZodNumber>;
        embedding_type: z.ZodOptional<z.ZodEnum<{
            float: "float";
            bit: "bit";
            binary: "binary";
        }>>;
        multimodal_model: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        return_documents: z.ZodOptional<z.ZodBoolean>;
        input_type: z.ZodOptional<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            classification: "classification";
            clustering: "clustering";
        }>>;
        late_chunking: z.ZodOptional<z.ZodBoolean>;
        top_n: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutJinaaiRequest = z.infer<typeof InferencePutJinaaiRequest>;
export declare const InferencePutJinaaiResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        embedding: "embedding";
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
export type InferencePutJinaaiResponse = z.infer<typeof InferencePutJinaaiResponse>;
//# sourceMappingURL=inference_put_jinaai.d.ts.map