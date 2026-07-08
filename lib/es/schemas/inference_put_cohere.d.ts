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
export declare const InferenceCohereEmbeddingType: z.ZodEnum<{
    float: "float";
    byte: "byte";
    bit: "bit";
    binary: "binary";
    int8: "int8";
}>;
export type InferenceCohereEmbeddingType = z.infer<typeof InferenceCohereEmbeddingType>;
export declare const InferenceCohereInputType: z.ZodEnum<{
    search: "search";
    ingest: "ingest";
    classification: "classification";
    clustering: "clustering";
}>;
export type InferenceCohereInputType = z.infer<typeof InferenceCohereInputType>;
/** This setting helps to minimize the number of rate limit errors returned from the service. */
export declare const InferenceRateLimitSetting: z.ZodObject<{
    requests_per_minute: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>;
export declare const InferenceCohereSimilarityType: z.ZodEnum<{
    cosine: "cosine";
    dot_product: "dot_product";
    l2_norm: "l2_norm";
}>;
export type InferenceCohereSimilarityType = z.infer<typeof InferenceCohereSimilarityType>;
export declare const InferenceCohereServiceSettings: z.ZodObject<{
    api_key: z.ZodString;
    embedding_type: z.ZodOptional<z.ZodEnum<{
        float: "float";
        byte: "byte";
        bit: "bit";
        binary: "binary";
        int8: "int8";
    }>>;
    model_id: z.ZodString;
    rate_limit: z.ZodOptional<z.ZodObject<{
        requests_per_minute: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    similarity: z.ZodOptional<z.ZodEnum<{
        cosine: "cosine";
        dot_product: "dot_product";
        l2_norm: "l2_norm";
    }>>;
}, z.core.$strip>;
export type InferenceCohereServiceSettings = z.infer<typeof InferenceCohereServiceSettings>;
export declare const InferenceCohereServiceType: z.ZodEnum<{
    cohere: "cohere";
}>;
export type InferenceCohereServiceType = z.infer<typeof InferenceCohereServiceType>;
export declare const InferenceCohereTruncateType: z.ZodEnum<{
    END: "END";
    NONE: "NONE";
    START: "START";
}>;
export type InferenceCohereTruncateType = z.infer<typeof InferenceCohereTruncateType>;
export declare const InferenceCohereTaskSettings: z.ZodObject<{
    input_type: z.ZodEnum<{
        search: "search";
        ingest: "ingest";
        classification: "classification";
        clustering: "clustering";
    }>;
    return_documents: z.ZodOptional<z.ZodBoolean>;
    top_n: z.ZodOptional<z.ZodNumber>;
    truncate: z.ZodOptional<z.ZodEnum<{
        END: "END";
        NONE: "NONE";
        START: "START";
    }>>;
}, z.core.$strip>;
export type InferenceCohereTaskSettings = z.infer<typeof InferenceCohereTaskSettings>;
export declare const InferenceCohereTaskType: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceCohereTaskType = z.infer<typeof InferenceCohereTaskType>;
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
export declare const InferenceTaskTypeCohere: z.ZodEnum<{
    completion: "completion";
    rerank: "rerank";
    text_embedding: "text_embedding";
}>;
export type InferenceTaskTypeCohere = z.infer<typeof InferenceTaskTypeCohere>;
export declare const InferenceInferenceEndpointInfoCohere: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferenceInferenceEndpointInfoCohere = z.infer<typeof InferenceInferenceEndpointInfoCohere>;
/**
 * Create a Cohere inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `cohere` service.
 */
export declare const InferencePutCohereRequest: z.ZodObject<{
    task_type: z.ZodEnum<{
        completion: "completion";
        rerank: "rerank";
        text_embedding: "text_embedding";
    }>;
    cohere_inference_id: z.ZodString;
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
        cohere: "cohere";
    }>;
    service_settings: z.ZodObject<{
        api_key: z.ZodString;
        embedding_type: z.ZodOptional<z.ZodEnum<{
            float: "float";
            byte: "byte";
            bit: "bit";
            binary: "binary";
            int8: "int8";
        }>>;
        model_id: z.ZodString;
        rate_limit: z.ZodOptional<z.ZodObject<{
            requests_per_minute: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        similarity: z.ZodOptional<z.ZodEnum<{
            cosine: "cosine";
            dot_product: "dot_product";
            l2_norm: "l2_norm";
        }>>;
    }, z.core.$strip>;
    task_settings: z.ZodOptional<z.ZodObject<{
        input_type: z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            classification: "classification";
            clustering: "clustering";
        }>;
        return_documents: z.ZodOptional<z.ZodBoolean>;
        top_n: z.ZodOptional<z.ZodNumber>;
        truncate: z.ZodOptional<z.ZodEnum<{
            END: "END";
            NONE: "NONE";
            START: "START";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type InferencePutCohereRequest = z.infer<typeof InferencePutCohereRequest>;
export declare const InferencePutCohereResponse: z.ZodObject<{
    inference_id: z.ZodString;
    task_type: z.ZodEnum<{
        completion: "completion";
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
export type InferencePutCohereResponse = z.infer<typeof InferencePutCohereResponse>;
//# sourceMappingURL=inference_put_cohere.d.ts.map